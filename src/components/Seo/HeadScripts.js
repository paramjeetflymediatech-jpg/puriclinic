'use client';

import { useEffect } from 'react';

export default function HeadScripts({ html }) {
  useEffect(() => {
    if (!html) return;

    const div = document.createElement('div');
    div.innerHTML = html;
    const nodes = Array.from(div.childNodes);

    nodes.forEach(node => {
      // Check if already exists to prevent duplicates
      const id = node.id || (node.src ? node.src.split('/').pop() : null);
      if (id && document.getElementById(id)) return;

      if (node.tagName === 'SCRIPT') {
        const s = document.createElement('script');
        s.innerHTML = node.innerHTML;
        if (id) s.id = id;
        Array.from(node.attributes).forEach(a => s.setAttribute(a.name, a.value));
        document.head.appendChild(s);
      } else if (node.nodeType === 1) {
        const clone = node.cloneNode(true);
        if (id) clone.id = id;
        document.head.appendChild(clone);
      }
    });
  }, [html]);

  return null; // This component doesn't render anything in the HTML
}
