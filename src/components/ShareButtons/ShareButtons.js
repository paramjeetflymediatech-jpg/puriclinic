'use client';

import React, { useState } from 'react';

const ShareButtons = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
      <button className="btn btn-outline" onClick={handleCopy}>
        {copied ? 'Copied!' : 'Copy Link'}
      </button>
    </div>
  );
};

export default ShareButtons;
