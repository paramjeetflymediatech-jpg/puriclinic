'use client';

import React, { useState, useRef, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
  FaEye,
  FaCode,
  FaTable,
  FaQuestionCircle,
  FaLightbulb,
  FaQuoteLeft,
  FaImage,
  FaCheckCircle,
  FaHeading,
  FaListUl,
  FaListOl,
  FaBold,
  FaItalic,
  FaLink,
  FaSpinner,
  FaPalette,
  FaEraser,
  FaPaintBrush
} from 'react-icons/fa';

/**
 * Custom Upload Adapter for CKEditor 5
 * Automatically uploads dropped, pasted, or toolbar-inserted images
 * to the secure Puri Clinic admin upload endpoint (/api/admin/upload/)
 */
class CustomUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          const data = new FormData();
          data.append('file', file);

          fetch('/api/admin/upload/', {
            method: 'POST',
            body: data
          })
            .then((res) => {
              if (!res.ok) {
                throw new Error(`Upload failed with HTTP status ${res.status}`);
              }
              return res.json();
            })
            .then((result) => {
              if (result.success && result.url) {
                resolve({
                  default: result.url
                });
              } else {
                reject(result.error || 'Failed to upload image to server');
              }
            })
            .catch((err) => {
              reject(err.message || 'Network error during image upload');
            });
        })
    );
  }

  abort() {
    // Abort handling if needed
  }
}

function CustomUploadAdapterPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    return new CustomUploadAdapter(loader);
  };
}

/**
 * Custom Highlight / Background Color Plugin for CKEditor 5
 * Adds support for custom background colors on inline text without version mismatch
 */
function CustomHighlightPlugin(editor) {
  // 1. Allow customHighlight attribute on $text
  editor.model.schema.extend('$text', {
    allowAttributes: 'customHighlight'
  });

  // 2. Downcast model attribute -> view <span> with background-color style
  editor.conversion.for('downcast').attributeToElement({
    model: 'customHighlight',
    view: (value, { writer }) => {
      return writer.createAttributeElement(
        'span',
        {
          style: `background-color: ${value}; padding: 0.15em 0.4em; border-radius: 0.25rem;`
        },
        { priority: 7 }
      );
    }
  });

  // 3. Upcast: convert <mark> or <span style="background-color: ..."> to model attribute
  editor.conversion.for('upcast').elementToAttribute({
    view: {
      name: 'span',
      styles: {
        'background-color': /.+/
      }
    },
    model: {
      key: 'customHighlight',
      value: (viewElement) => viewElement.getStyle('background-color')
    }
  });

  editor.conversion.for('upcast').elementToAttribute({
    view: {
      name: 'mark'
    },
    model: {
      key: 'customHighlight',
      value: (viewElement) => viewElement.getStyle('background-color') || '#fef08a'
    }
  });
}

// Preset color options for text highlight
const HIGHLIGHT_COLORS = [
  { name: 'Yellow', color: '#fef08a', textClass: 'text-yellow-900', label: '🟡 Yellow' },
  { name: 'Puri Pink', color: '#fce7f3', textClass: 'text-pink-900', label: '🌸 Pink' },
  { name: 'Mint Green', color: '#dcfce7', textClass: 'text-emerald-900', label: '🌿 Mint' },
  { name: 'Sky Blue', color: '#e0f2fe', textClass: 'text-sky-900', label: '🌊 Sky' },
  { name: 'Lavender', color: '#f3e8ff', textClass: 'text-purple-900', label: '🟣 Purple' },
  { name: 'Warm Amber', color: '#ffedd5', textClass: 'text-amber-900', label: '🍑 Amber' }
];

// Preset colored box containers for full content sections
const BOX_CONTAINERS = [
  {
    name: 'Puri Pink Card',
    bgColor: '#fdf2f8',
    borderColor: '#EA6490',
    title: '🌸 Clinical Highlight',
    badge: 'Pink'
  },
  {
    name: 'Mint Teal Card',
    bgColor: '#f0fdfa',
    borderColor: '#0d9488',
    title: '🌿 Treatment Insights',
    badge: 'Mint'
  },
  {
    name: 'Sky Blue Card',
    bgColor: '#f0f9ff',
    borderColor: '#0284c7',
    title: '💡 Dermatologist Advice',
    badge: 'Blue'
  },
  {
    name: 'Warm Amber Card',
    bgColor: '#fffbeb',
    borderColor: '#d97706',
    title: '⚠️ Important Note & Care',
    badge: 'Amber'
  },
  {
    name: 'Lavender Card',
    bgColor: '#faf5ff',
    borderColor: '#9333ea',
    title: '✨ Post-Treatment Results',
    badge: 'Purple'
  },
  {
    name: 'Neutral Slate Card',
    bgColor: '#f8fafc',
    borderColor: '#64748b',
    title: '📌 Summary & Key Points',
    badge: 'Slate'
  }
];

const Editor = ({ value = '', onChange }) => {
  const [mode, setMode] = useState('visual'); // 'visual' | 'html'
  const [uploadingImage, setUploadingImage] = useState(false);
  const [notification, setNotification] = useState('');
  const [customColor, setCustomColor] = useState('#fef08a');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const editorRef = useRef(null);
  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);

  // Auto-dismiss notification after 3 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const showNotification = (msg) => {
    setNotification(msg);
  };

  // Switch between Visual & HTML Code mode
  const handleModeSwitch = (targetMode) => {
    if (targetMode === mode) return;

    if (targetMode === 'html') {
      // Pull latest HTML from CKEditor if available
      if (editorRef.current) {
        const latestData = editorRef.current.getData();
        if (latestData !== value) {
          onChange(latestData);
        }
      }
      setMode('html');
    } else {
      // Switching back to visual mode
      setMode('visual');
      setTimeout(() => {
        if (editorRef.current && editorRef.current.getData() !== value) {
          editorRef.current.setData(value || '');
        }
      }, 50);
    }
  };

  // Helper to insert snippet in current mode
  const insertSnippet = (visualHtml, rawHtml = null) => {
    const htmlToInsert = rawHtml || visualHtml;

    if (mode === 'html') {
      const textarea = textareaRef.current;
      if (textarea) {
        const start = textarea.selectionStart ?? textarea.value.length;
        const end = textarea.selectionEnd ?? textarea.value.length;
        const currentVal = textarea.value || '';
        const updated =
          currentVal.substring(0, start) +
          '\n' +
          htmlToInsert +
          '\n' +
          currentVal.substring(end);
        onChange(updated);

        setTimeout(() => {
          textarea.focus();
          const newPos = start + htmlToInsert.length + 2;
          textarea.setSelectionRange(newPos, newPos);
        }, 50);
      } else {
        onChange((value || '') + '\n' + htmlToInsert);
      }
      showNotification('Snippet inserted into HTML code!');
    } else {
      // Visual mode - insert via CKEditor model
      const editor = editorRef.current;
      if (editor) {
        try {
          const viewFragment = editor.data.processor.toView(visualHtml);
          const modelFragment = editor.data.toModel(viewFragment);
          editor.model.insertContent(modelFragment);
          onChange(editor.getData());
          showNotification('Snippet inserted into article!');
        } catch (e) {
          // Fallback: append data
          const current = editor.getData();
          const updated = (current ? current + '\n' : '') + visualHtml;
          editor.setData(updated);
          onChange(updated);
          showNotification('Snippet added to content!');
        }
      } else {
        onChange((value || '') + '\n' + visualHtml);
      }
    }
  };

  /**
   * Apply Background Color / Highlight to text
   * Works seamlessly in both Visual Mode (CKEditor 5) and HTML Code Mode
   */
  const applyBackgroundColor = (color) => {
    if (mode === 'html') {
      const textarea = textareaRef.current;
      if (!textarea) return;
      const start = textarea.selectionStart ?? 0;
      const end = textarea.selectionEnd ?? 0;
      const currentVal = textarea.value || '';
      const selected = currentVal.substring(start, end) || 'highlighted text';

      let replacement = '';
      if (color) {
        replacement = `<span style="background-color: ${color}; padding: 0.15em 0.4em; border-radius: 0.25rem;">${selected}</span>`;
      } else {
        // Remove background-color wrapper from the selection
        replacement = selected.replace(
          /<span[^>]*style="[^"]*background-color:[^"]*"[^>]*>(.*?)<\/span>/gi,
          '$1'
        );
      }

      const updated =
        currentVal.substring(0, start) + replacement + currentVal.substring(end);
      onChange(updated);

      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start, start + replacement.length);
      }, 50);
      showNotification(color ? 'Background color applied to HTML text!' : 'Highlight removed');
      return;
    }

    // Visual mode (CKEditor 5)
    const editor = editorRef.current;
    if (!editor) return;

    const model = editor.model;
    const selection = model.document.selection;

    model.change((writer) => {
      if (selection.isCollapsed) {
        if (color) {
          writer.setSelectionAttribute('customHighlight', color);
          showNotification('Background color active for upcoming text!');
        } else {
          writer.removeSelectionAttribute('customHighlight');
          showNotification('Background color disabled for new text');
        }
      } else {
        for (const range of selection.getRanges()) {
          if (color) {
            writer.setAttribute('customHighlight', color, range);
          } else {
            writer.removeAttribute('customHighlight', range);
          }
        }
        showNotification(
          color ? 'Background color applied to selected text!' : 'Background color cleared'
        );
      }
    });

    const updatedData = editor.getData();
    onChange(updatedData);
  };

  /**
   * Insert a full-width colored background box / card for whole sections
   */
  const insertColoredBox = (box) => {
    const boxHtml = `
<div style="background-color: ${box.bgColor}; border-left: 5px solid ${box.borderColor}; padding: 1.5rem; border-radius: 1rem; margin: 2rem 0; box-shadow: 0 4px 15px rgba(0,0,0,0.03);">
  <h4 style="margin: 0 0 0.5rem 0; color: ${box.borderColor}; font-size: 1.15rem; font-weight: 800;">${box.title}</h4>
  <p style="margin: 0; color: #1e293b; font-size: 1rem; line-height: 1.75;">
    Write your highlighted content here... You can describe key clinical takeaways, patient instructions, or medical procedure details.
  </p>
</div>`;

    insertSnippet(boxHtml, boxHtml);
    showNotification(`${box.name} inserted!`);
  };

  // Quick HTML tag wrapper for HTML Code mode
  const insertTagInHtml = (openTag, closeTag = '') => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart ?? 0;
    const end = textarea.selectionEnd ?? 0;
    const currentVal = textarea.value || '';
    const selected = currentVal.substring(start, end) || 'text';
    const insertion = closeTag ? `${openTag}${selected}${closeTag}` : openTag;
    const updated =
      currentVal.substring(0, start) +
      insertion +
      currentVal.substring(end);
    onChange(updated);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + openTag.length,
        start + openTag.length + selected.length
      );
    }, 50);
  };

  // Direct image upload from quick bar
  const handleQuickImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/admin/upload/', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (data.success && data.url) {
        const imgTag = `<figure class="image"><img src="${data.url}" alt="${file.name.replace(/\.[^/.]+$/, '')}" /><figcaption>${file.name.replace(/\.[^/.]+$/, '')} - Puri Skin Clinic</figcaption></figure>`;
        insertSnippet(imgTag, imgTag);
        showNotification('Image uploaded and inserted successfully!');
      } else {
        alert(data.error || 'Upload failed');
      }
    } catch (err) {
      alert('Upload failed: ' + err.message);
    } finally {
      setUploadingImage(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  // Calculate live SEO stats
  const cleanText = (value || '').replace(/<[^>]*>/g, ' ').trim();
  const wordCount = cleanText ? cleanText.split(/\s+/).filter(Boolean).length : 0;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));
  const h2Count = (value?.match(/<h2/gi) || []).length;
  const h3Count = (value?.match(/<h3/gi) || []).length;
  const h4Count = (value?.match(/<h4/gi) || []).length;
  const tableCount = (value?.match(/<table/gi) || []).length;
  const imageCount = (value?.match(/<img/gi) || []).length;
  const highlightCount = (value?.match(/background-color/gi) || []).length;

  return (
    <div className="ck-editor-wrapper bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm transition-all focus-within:border-[#EA6490] focus-within:ring-4 focus-within:ring-[#EA6490]/10">
      {/* ─── ROW 1: TOP HEADER (Mode Switcher & Live SEO Stats) ─── */}
      <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Mode Toggle Tabs */}
        <div className="flex items-center gap-1 bg-white p-1 rounded-2xl border border-slate-200 shadow-sm">
          <button
            type="button"
            onClick={() => handleModeSwitch('visual')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
              mode === 'visual'
                ? 'bg-[#EA6490] text-white shadow-md shadow-[#EA6490]/25'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <FaEye size={12} />
            Visual Editor
          </button>
          <button
            type="button"
            onClick={() => handleModeSwitch('html')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
              mode === 'html'
                ? 'bg-slate-900 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <FaCode size={12} />
            HTML Code
          </button>
        </div>

        {/* SEO Structure & Heading Hierarchy Badges */}
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold">
          <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-sm flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            {wordCount} words ({readingTime}m read)
          </span>

          <span
            className={`px-2.5 py-1 rounded-lg border shadow-sm ${
              h2Count > 0
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : 'bg-amber-50 border-amber-200 text-amber-700'
            }`}
            title="SEO Best Practice: Have at least 2-4 H2 main sections"
          >
            H2: <strong>{h2Count}</strong>
          </span>

          <span
            className={`px-2.5 py-1 rounded-lg border shadow-sm ${
              h3Count > 0
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : 'bg-slate-100 border-slate-200 text-slate-600'
            }`}
            title="Sub-sections under H2"
          >
            H3: <strong>{h3Count}</strong>
          </span>

          {h4Count > 0 && (
            <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 shadow-sm">
              H4: <strong>{h4Count}</strong>
            </span>
          )}

          {highlightCount > 0 && (
            <span className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 shadow-sm flex items-center gap-1">
              <FaPaintBrush size={9} />
              Colors: <strong>{highlightCount}</strong>
            </span>
          )}

          {tableCount > 0 && (
            <span className="px-2.5 py-1 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 shadow-sm">
              📊 {tableCount} Table{tableCount > 1 ? 's' : ''}
            </span>
          )}

          {imageCount > 0 && (
            <span className="px-2.5 py-1 rounded-lg bg-pink-50 border border-pink-200 text-pink-800 shadow-sm">
              🖼️ {imageCount} Img{imageCount > 1 ? 's' : ''}
            </span>
          )}
        </div>
      </div>

      {/* ─── ROW 2: BACKGROUND COLOR & HIGHLIGHT TOOLBAR ─── */}
      <div className="bg-white border-b border-slate-200 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 shadow-xs">
        {/* Section A: Text Background Color Swatches */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1.5">
            <FaPaintBrush className="text-[#EA6490]" size={11} />
            Text Highlight:
          </span>

          {HIGHLIGHT_COLORS.map((item) => (
            <button
              key={item.color}
              type="button"
              onMouseDown={(e) => e.preventDefault()} // Keeps editor selection active
              onClick={() => applyBackgroundColor(item.color)}
              className="px-2 py-1 rounded-lg border border-slate-200 hover:border-slate-400 text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs hover:scale-105 active:scale-95"
              style={{ backgroundColor: item.color }}
              title={`Highlight selected text with ${item.name}`}
            >
              <span className="text-slate-800 text-[11px] font-bold">{item.label}</span>
            </button>
          ))}

          {/* Custom Color Input */}
          <div className="relative flex items-center">
            <label
              onMouseDown={(e) => e.preventDefault()}
              className="px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-bold cursor-pointer transition-all flex items-center gap-1.5 shadow-xs"
              title="Pick any custom background color"
            >
              <span
                className="w-3.5 h-3.5 rounded-full border border-slate-300 inline-block"
                style={{ backgroundColor: customColor }}
              ></span>
              <span className="text-[11px]">Custom</span>
              <input
                type="color"
                value={customColor}
                onChange={(e) => {
                  setCustomColor(e.target.value);
                  applyBackgroundColor(e.target.value);
                }}
                className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
              />
            </label>
          </div>

          {/* Clear / Remove Highlight Button */}
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => applyBackgroundColor(null)}
            className="px-2 py-1 rounded-lg bg-slate-50 hover:bg-rose-50 border border-slate-200 hover:border-rose-300 text-slate-600 hover:text-rose-600 text-xs font-bold transition-all flex items-center gap-1 shadow-xs"
            title="Clear background color from selected text"
          >
            <FaEraser size={10} />
            <span className="text-[11px]">Clear</span>
          </button>
        </div>

        {/* Section B: Colored Section Boxes (Cards) */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1">
            <FaPalette className="text-teal-600" size={11} />
            Box Background:
          </span>

          {BOX_CONTAINERS.map((box) => (
            <button
              key={box.name}
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => insertColoredBox(box)}
              className="px-2.5 py-1 rounded-lg border text-xs font-bold transition-all shadow-xs hover:scale-105 active:scale-95 flex items-center gap-1.5"
              style={{
                backgroundColor: box.bgColor,
                borderColor: box.borderColor,
                color: box.borderColor
              }}
              title={`Insert ${box.name} with ${box.title}`}
            >
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{ backgroundColor: box.borderColor }}
              ></span>
              <span className="text-[11px] font-bold">{box.badge} Box</span>
            </button>
          ))}
        </div>
      </div>

      {/* ─── ROW 3: SEO QUICK SNIPPETS ACTION BAR ─── */}
      <div className="bg-slate-100/70 border-b border-slate-200 px-4 py-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1">
            <FaLightbulb className="text-amber-500" />
            SEO Snippets:
          </span>

          {/* Key Takeaways Snippet */}
          <button
            type="button"
            onClick={() =>
              insertSnippet(
                `<div class="seo-takeaways" style="background: linear-gradient(135deg, #fdf2f8 0%, #f0fdfa 100%); border-left: 5px solid #EA6490; padding: 1.5rem; border-radius: 1rem; margin: 2rem 0; box-shadow: 0 4px 15px rgba(234, 100, 144, 0.08);">
  <h3 style="margin-top: 0; color: #EA6490; font-size: 1.25rem; font-weight: 800;">📌 Key Takeaways</h3>
  <ul style="margin-bottom: 0; padding-left: 1.25rem;">
    <li><strong>Core Benefit:</strong> Personalized dermatological care targeted for your skin &amp; hair type.</li>
    <li><strong>Expected Timeline:</strong> Noticeable results within 3-4 treatment sessions.</li>
    <li><strong>Clinical Safety:</strong> Performed with US-FDA approved technologies by Dr. Gurinderjit Singh Puri.</li>
  </ul>
</div>`
              )
            }
            className="px-2.5 py-1 rounded-lg bg-white hover:bg-pink-50 border border-slate-200 hover:border-pink-300 text-slate-700 hover:text-pink-600 text-xs font-bold transition-all flex items-center gap-1 shadow-xs"
            title="Insert a Key Takeaways summary box (favored by Google Snippets & AI Overviews)"
          >
            📌 Key Takeaways
          </button>

          {/* Pro Tip Callout Snippet */}
          <button
            type="button"
            onClick={() =>
              insertSnippet(
                `<div class="seo-callout" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 5px solid #4CA6AE; padding: 1.25rem 1.5rem; border-radius: 1rem; margin: 2rem 0;">
  <p style="margin: 0; color: #1e293b; font-weight: 600; font-size: 1rem;">
    💡 <strong>Dermatologist Pro Tip:</strong> Always apply broad-spectrum sunscreen (SPF 50+) after any clinical laser or peel session to protect regenerating skin cells from UV pigmentation.
  </p>
</div>`
              )
            }
            className="px-2.5 py-1 rounded-lg bg-white hover:bg-teal-50 border border-slate-200 hover:border-teal-300 text-slate-700 hover:text-teal-700 text-xs font-bold transition-all flex items-center gap-1 shadow-xs"
            title="Insert a Pro Tip Callout box"
          >
            💡 Pro Tip Box
          </button>

          {/* Comparison Table Snippet */}
          <button
            type="button"
            onClick={() =>
              insertSnippet(
                `<figure class="table" style="margin: 2rem 0;">
  <table style="width: 100%; border-collapse: collapse; border: 1px solid #e2e8f0; border-radius: 0.75rem; overflow: hidden;">
    <thead>
      <tr style="background-color: #f8fafc; text-align: left; border-bottom: 2px solid #e2e8f0;">
        <th style="padding: 1rem; font-weight: 700; color: #1e293b; border: 1px solid #e2e8f0;">Treatment Feature</th>
        <th style="padding: 1rem; font-weight: 700; color: #EA6490; border: 1px solid #e2e8f0;">Puri Skin Clinic</th>
        <th style="padding: 1rem; font-weight: 700; color: #64748b; border: 1px solid #e2e8f0;">Standard Clinics</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 0.85rem 1rem; border: 1px solid #e2e8f0; font-weight: 600;">Treating Specialist</td>
        <td style="padding: 0.85rem 1rem; border: 1px solid #e2e8f0; color: #059669; font-weight: 700;">Board-Certified MD Dermatologist</td>
        <td style="padding: 0.85rem 1rem; border: 1px solid #e2e8f0; color: #64748b;">General Technician</td>
      </tr>
      <tr style="background-color: #fbfcfe;">
        <td style="padding: 0.85rem 1rem; border: 1px solid #e2e8f0; font-weight: 600;">Technology Used</td>
        <td style="padding: 0.85rem 1rem; border: 1px solid #e2e8f0; color: #059669; font-weight: 700;">US-FDA Approved Medical Lasers</td>
        <td style="padding: 0.85rem 1rem; border: 1px solid #e2e8f0; color: #64748b;">Generic Beauty Equipment</td>
      </tr>
      <tr>
        <td style="padding: 0.85rem 1rem; border: 1px solid #e2e8f0; font-weight: 600;">Treatment Protocol</td>
        <td style="padding: 0.85rem 1rem; border: 1px solid #e2e8f0; color: #059669; font-weight: 700;">5-Step V-Discover Diagnostic</td>
        <td style="padding: 0.85rem 1rem; border: 1px solid #e2e8f0; color: #64748b;">One-size-fits-all</td>
      </tr>
    </tbody>
  </table>
</figure>`
              )
            }
            className="px-2.5 py-1 rounded-lg bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 text-xs font-bold transition-all flex items-center gap-1 shadow-xs"
            title="Insert an SEO Comparison / Pricing Table"
          >
            <FaTable size={11} /> Table
          </button>

          {/* FAQ Block Snippet */}
          <button
            type="button"
            onClick={() =>
              insertSnippet(
                `<div class="seo-faq-section" style="margin: 2.5rem 0;">
  <h3 style="color: #0f172a; font-size: 1.5rem; font-weight: 800; margin-bottom: 1.25rem;">Frequently Asked Questions</h3>
  <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 1.25rem; margin-bottom: 1rem;">
    <h4 style="margin: 0 0 0.5rem 0; color: #1e293b; font-size: 1.1rem; font-weight: 700;">How many sessions are typically required?</h4>
    <p style="margin: 0; color: #475569; font-size: 0.95rem;">Most patients notice significant improvements within 4 to 6 sessions, scheduled 3-4 weeks apart depending on individual skin evaluation.</p>
  </div>
  <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 1.25rem;">
    <h4 style="margin: 0 0 0.5rem 0; color: #1e293b; font-size: 1.1rem; font-weight: 700;">Is there any downtime after the procedure?</h4>
    <p style="margin: 0; color: #475569; font-size: 0.95rem;">No, the procedure is minimally invasive with zero social downtime. You can resume your daily routine immediately.</p>
  </div>
</div>`
              )
            }
            className="px-2.5 py-1 rounded-lg bg-white hover:bg-purple-50 border border-slate-200 hover:border-purple-300 text-slate-700 hover:text-purple-700 text-xs font-bold transition-all flex items-center gap-1 shadow-xs"
            title="Insert a structured FAQ Block (matches Google People Also Ask format)"
          >
            <FaQuestionCircle size={11} /> FAQ Block
          </button>

          {/* Doctor Quote / E-E-A-T Signal */}
          <button
            type="button"
            onClick={() =>
              insertSnippet(
                `<div class="seo-doctor-quote" style="border: 2px dashed #4CA6AE; background-color: #f0fdfa; border-radius: 1.25rem; padding: 1.5rem; margin: 2rem 0;">
  <p style="margin: 0 0 0.75rem 0; font-style: italic; color: #134e4a; font-size: 1.05rem; line-height: 1.6;">
    "Every skin and scalp condition requires a tailored, medical-first diagnosis before administering aesthetic therapies. That is the only guarantee of lasting results."
  </p>
  <div style="font-weight: 800; color: #0f766e; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;">
    — Dr. Gurinderjit Singh Puri (Senior Dermatologist, Puri Skin Clinic)
  </div>
</div>`
              )
            }
            className="px-2.5 py-1 rounded-lg bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-slate-700 hover:text-emerald-700 text-xs font-bold transition-all flex items-center gap-1 shadow-xs"
            title="Insert an E-E-A-T Doctor Quote Box"
          >
            <FaQuoteLeft size={10} /> Doctor Quote
          </button>
        </div>

        {/* Quick Image Upload Button */}
        <div className="flex items-center gap-2">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleQuickImageUpload}
            accept="image/*"
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploadingImage}
            className="px-3 py-1 rounded-lg bg-white hover:bg-[#EA6490] hover:text-white border border-slate-200 hover:border-[#EA6490] text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs disabled:opacity-50"
            title="Directly upload an image from your computer and embed into content"
          >
            {uploadingImage ? (
              <>
                <FaSpinner className="animate-spin text-pink-500" size={11} />
                Uploading...
              </>
            ) : (
              <>
                <FaImage size={11} className="text-[#EA6490]" />
                + Insert Image
              </>
            )}
          </button>
        </div>
      </div>

      {/* Notification Toast */}
      {notification && (
        <div className="bg-emerald-500 text-white text-xs font-bold px-4 py-2 flex items-center gap-2 transition-all">
          <FaCheckCircle size={12} />
          {notification}
        </div>
      )}

      {/* HTML Mode Tag Toolbar (Only shown when mode === 'html') */}
      {mode === 'html' && (
        <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-[10px] font-mono text-slate-400 mr-2 uppercase tracking-widest">
            HTML Helper:
          </span>
          <button
            type="button"
            onClick={() => insertTagInHtml('<h2>', '</h2>')}
            className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-pink-400 font-mono text-xs font-bold"
          >
            &lt;h2&gt;
          </button>
          <button
            type="button"
            onClick={() => insertTagInHtml('<h3>', '</h3>')}
            className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-teal-400 font-mono text-xs font-bold"
          >
            &lt;h3&gt;
          </button>
          <button
            type="button"
            onClick={() => insertTagInHtml('<h4>', '</h4>')}
            className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-blue-400 font-mono text-xs font-bold"
          >
            &lt;h4&gt;
          </button>
          <button
            type="button"
            onClick={() => insertTagInHtml('<p>', '</p>')}
            className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs"
          >
            &lt;p&gt;
          </button>
          <button
            type="button"
            onClick={() => insertTagInHtml('<strong>', '</strong>')}
            className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 font-mono text-xs font-bold"
          >
            &lt;strong&gt;
          </button>
          <button
            type="button"
            onClick={() => insertTagInHtml('<blockquote>', '</blockquote>')}
            className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-purple-300 font-mono text-xs"
          >
            &lt;blockquote&gt;
          </button>
          <button
            type="button"
            onClick={() =>
              insertTagInHtml(
                '<a href="https://puriskinclinic.com/" target="_blank" rel="noopener noreferrer">',
                '</a>'
              )
            }
            className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-sky-400 font-mono text-xs"
          >
            &lt;a link&gt;
          </button>
          <button
            type="button"
            onClick={() =>
              insertTagInHtml(
                `<span style="background-color: ${customColor}; padding: 0.15em 0.4em; border-radius: 0.25rem;">`,
                '</span>'
              )
            }
            className="px-2 py-0.5 rounded bg-amber-900/60 hover:bg-amber-800 text-amber-200 font-mono text-xs font-bold"
            title="Wrap selected code with custom background color span"
          >
            &lt;span bg-color&gt;
          </button>
          <button
            type="button"
            onClick={() => insertTagInHtml('<ul>\n  <li>', '</li>\n</ul>')}
            className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-emerald-400 font-mono text-xs"
          >
            &lt;ul&gt;
          </button>
          <button
            type="button"
            onClick={() => insertTagInHtml('<ol>\n  <li>', '</li>\n</ol>')}
            className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-emerald-400 font-mono text-xs"
          >
            &lt;ol&gt;
          </button>
        </div>
      )}

      {/* Main Editing Area */}
      <div className="relative">
        {/* Visual Mode (CKEditor 5) */}
        <div style={{ display: mode === 'visual' ? 'block' : 'none' }}>
          <CKEditor
            editor={ClassicEditor}
            data={value || ''}
            config={{
              toolbar: {
                items: [
                  'heading',
                  '|',
                  'bold',
                  'italic',
                  'link',
                  '|',
                  'bulletedList',
                  'numberedList',
                  'outdent',
                  'indent',
                  '|',
                  'uploadImage',
                  'insertTable',
                  'blockQuote',
                  'mediaEmbed',
                  '|',
                  'undo',
                  'redo'
                ],
                shouldNotGroupWhenFull: true
              },
              heading: {
                options: [
                  { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                  {
                    model: 'heading2',
                    view: 'h2',
                    title: 'Heading 2 (H2 - Main Section)',
                    class: 'ck-heading_heading2'
                  },
                  {
                    model: 'heading3',
                    view: 'h3',
                    title: 'Heading 3 (H3 - Sub-section)',
                    class: 'ck-heading_heading3'
                  },
                  {
                    model: 'heading4',
                    view: 'h4',
                    title: 'Heading 4 (H4 - Detail Point)',
                    class: 'ck-heading_heading4'
                  }
                ]
              },
              table: {
                contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
              },
              image: {
                toolbar: [
                  'imageStyle:inline',
                  'imageStyle:block',
                  'imageStyle:side',
                  '|',
                  'toggleImageCaption',
                  'imageTextAlternative'
                ]
              },
              extraPlugins: [CustomUploadAdapterPlugin, CustomHighlightPlugin]
            }}
            onReady={(editor) => {
              editorRef.current = editor;
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              onChange(data);
            }}
          />
        </div>

        {/* HTML Source Code Mode */}
        {mode === 'html' && (
          <div className="p-4 bg-slate-950">
            <textarea
              ref={textareaRef}
              value={value || ''}
              onChange={(e) => onChange(e.target.value)}
              placeholder="Paste or write your raw HTML here (e.g. from SurferSEO, ChatGPT, Google Docs)..."
              rows={22}
              className="w-full bg-slate-900 text-slate-100 font-mono text-sm p-4 rounded-xl border border-slate-800 outline-none focus:ring-2 focus:ring-[#EA6490] focus:border-[#EA6490] leading-relaxed resize-y selection:bg-[#EA6490] selection:text-white"
              spellCheck="false"
            />
            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 px-1">
              <span>Tip: All custom HTML tags, classes, and styles are preserved without filtering.</span>
              <span>Lines: {(value || '').split('\n').length} | Characters: {(value || '').length}</span>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        /* CKEditor Custom Styling */
        .ck.ck-editor {
          width: 100% !important;
        }
        .ck.ck-toolbar {
          border: none !important;
          border-bottom: 1px solid #e2e8f0 !important;
          background-color: #ffffff !important;
          padding: 0.65rem 1rem !important;
        }
        .ck.ck-toolbar .ck-toolbar__items {
          flex-wrap: wrap !important;
          gap: 2px !important;
        }
        .ck-editor__editable_inline {
          min-height: 480px !important;
          padding: 2rem 2.5rem !important;
          border: none !important;
          font-family: inherit !important;
          font-size: 1.05rem !important;
          line-height: 1.85 !important;
          color: #334155 !important;
        }
        .ck.ck-editor__main > .ck-editor__editable:not(.ck-focused) {
          border: none !important;
        }
        .ck.ck-editor__main > .ck-editor__editable.ck-focused {
          border: none !important;
          box-shadow: none !important;
        }

        /* Content Headings inside Visual Editor */
        .ck-content h2 {
          font-size: 1.85rem !important;
          font-weight: 800 !important;
          color: #0f172a !important;
          margin-top: 2rem !important;
          margin-bottom: 0.75rem !important;
          border-left: 4px solid #EA6490 !important;
          padding-left: 0.85rem !important;
        }
        .ck-content h3 {
          font-size: 1.45rem !important;
          font-weight: 700 !important;
          color: #0f172a !important;
          margin-top: 1.5rem !important;
          margin-bottom: 0.65rem !important;
        }
        .ck-content h4 {
          font-size: 1.2rem !important;
          font-weight: 700 !important;
          color: #334155 !important;
          margin-top: 1.25rem !important;
          margin-bottom: 0.5rem !important;
        }
        .ck-content p {
          margin-bottom: 1.25rem !important;
        }
        .ck-content ul,
        .ck-content ol {
          padding-left: 1.75rem !important;
          margin-bottom: 1.25rem !important;
        }
        .ck-content li {
          margin-bottom: 0.5rem !important;
        }
        .ck-content blockquote {
          border-left: 4px solid #EA6490 !important;
          padding-left: 1.25rem !important;
          font-style: italic !important;
          color: #64748b !important;
          margin: 1.5rem 0 !important;
        }
        .ck-content table {
          width: 100% !important;
          border-collapse: collapse !important;
          margin: 1.5rem 0 !important;
        }
        .ck-content th,
        .ck-content td {
          border: 1px solid #cbd5e1 !important;
          padding: 0.75rem 1rem !important;
        }
        .ck-content th {
          background-color: #f8fafc !important;
          font-weight: 700 !important;
          color: #0f172a !important;
        }
        .ck-content img {
          border-radius: 0.75rem !important;
          max-width: 100% !important;
          height: auto !important;
          margin: 1.5rem auto !important;
        }
        .ck-content figcaption {
          text-align: center !important;
          font-size: 0.85rem !important;
          color: #94a3b8 !important;
          font-style: italic !important;
          margin-top: 0.5rem !important;
        }
        .ck-content a {
          color: #EA6490 !important;
          text-decoration: underline !important;
          font-weight: 600 !important;
        }

        /* Highlight & Background Color styling inside Visual Editor */
        .ck-content span[style*="background-color"],
        .ck-content mark {
          padding: 0.15em 0.4em !important;
          border-radius: 0.25rem !important;
          box-decoration-break: clone !important;
          -webkit-box-decoration-break: clone !important;
        }
        .ck-content div[style*="background-color"] {
          border-radius: 1rem !important;
          box-sizing: border-box !important;
        }
      `}</style>
    </div>
  );
};

export default Editor;
