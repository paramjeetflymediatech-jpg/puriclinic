'use client';

import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Editor = ({ value, onChange }) => {
  return (
    <div className="ck-editor-wrapper">
      <CKEditor
        editor={ClassicEditor}
        data={value}
        config={{
          toolbar: [
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            'blockQuote',
            'undo',
            'redo'
          ],
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
      />
      <style jsx global>{`
        .ck-editor__editable_inline {
          min-height: 400px;
          border-bottom-left-radius: 1.5rem !important;
          border-bottom-right-radius: 1.5rem !important;
          padding: 0 2rem !important;
        }
        .ck-toolbar {
          border-top-left-radius: 1.5rem !important;
          border-top-right-radius: 1.5rem !important;
          background-color: #f8fafc !important;
          padding: 0.5rem 1rem !important;
        }
        .ck.ck-editor__main>.ck-editor__editable:not(.ck-focused) {
          border-color: #f1f5f9 !important;
        }
        .ck.ck-editor__main>.ck-editor__editable.ck-focused {
          border-color: #EA6490 !important;
          box-shadow: 0 0 0 4px rgba(234, 100, 144, 0.05) !important;
        }
      `}</style>
    </div>
  );
};

export default Editor;
