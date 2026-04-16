'use client';
import React, { useState, useEffect } from 'react';

export default function TypewriterText({ 
  words = ["Puri", "Puri Skin Clinic"], 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseDuration = 2000 
}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timer);
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    if (!isDeleting && subIndex === words[index].length) {
      setIsPaused(true);
      return;
    }

    const timer = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [subIndex, isDeleting, isPaused, index, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="relative text-[#EA6490] inline-block border-r-4 border-[#EA6490] pr-1 animate-pulse-fast">
      {words[index].substring(0, subIndex)}
      <style jsx global>{`
        @keyframes pulse-fast {
          0%, 100% { border-color: transparent; }
          50% { border-color: #EA6490; }
        }
        .animate-pulse-fast {
          animation: pulse-fast 0.8s step-end infinite;
        }
      `}</style>
    </span>
  );
}
