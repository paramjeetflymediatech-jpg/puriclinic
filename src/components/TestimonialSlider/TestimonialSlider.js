'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight, FaGoogle, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styles from './TestimonialSlider.module.css';

/* ─── Read More / Less component ─── */
const CHAR_LIMIT = 140;

function ReadMoreText({ text }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text && text.length > CHAR_LIMIT;

  return (
    <div>
      <p className={styles.reviewText}>
        &ldquo;
        {isLong && !expanded
          ? text.slice(0, CHAR_LIMIT).trimEnd() + '…'
          : text}
        &rdquo;
      </p>
      {isLong && (
        <button
          onClick={() => setExpanded(v => !v)}
          className={styles.readMoreBtn}
          aria-expanded={expanded}
        >
          {expanded ? (
            <><FaChevronUp size={9} /> Read less</>
          ) : (
            <><FaChevronDown size={9} /> Read more</>
          )}
        </button>
      )}
    </div>
  );
}

/* ─── Relative time helper ─── */
function timeAgo(dateStr) {
  if (!dateStr) return '';
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days < 1)  return 'Today';
  if (days < 7)  return `${days} day${days > 1 ? 's' : ''} ago`;
  const weeks = Math.floor(days / 7);
  if (weeks < 5) return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months > 1 ? 's' : ''} ago`;
  return `${Math.floor(days / 365)} year${Math.floor(days / 365) > 1 ? 's' : ''} ago`;
}

/* ─── Derive avg rating + count ─── */
function deriveStats(testimonials) {
  if (!testimonials?.length) return { avg: 5, count: 0 };
  const sum = testimonials.reduce((a, t) => a + (t.rating || 5), 0);
  return { avg: Math.round((sum / testimonials.length) * 10) / 10, count: testimonials.length };
}

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translatePx, setTranslatePx]   = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const trackRef = useRef(null);
  const slideRef = useRef(null);

  /* ── Visible count from viewport ── */
  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      setVisibleCount(w < 641 ? 1 : w < 1024 ? 2 : 3);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const total    = testimonials?.length || 0;
  const maxIndex = Math.max(0, total - visibleCount);

  /* ── Recalculate pixel offset whenever index or layout changes ── */
  const recalcTranslate = useCallback((idx) => {
    if (!slideRef.current || !trackRef.current) return;
    // measure the first slide's full width including its right gap
    const trackEl  = trackRef.current;
    const slides   = trackEl.children;
    if (!slides.length) return;

    // gap is the distance between end of slide[0] and start of slide[1]
    if (slides.length >= 2) {
      const s0End   = slides[0].getBoundingClientRect().right;
      const s1Start = slides[1].getBoundingClientRect().left;
      const slideW  = slides[0].getBoundingClientRect().width;
      const gap     = s1Start - s0End;
      setTranslatePx((slideW + gap) * idx);
    } else {
      const slideW = slides[0].getBoundingClientRect().width;
      setTranslatePx(slideW * idx);
    }
  }, []);

  useEffect(() => {
    // small delay so layout is painted after visibleCount change
    const t = setTimeout(() => recalcTranslate(currentIndex), 50);
    return () => clearTimeout(t);
  }, [currentIndex, visibleCount, recalcTranslate]);

  /* Reset index when visible count changes */
  useEffect(() => {
    setCurrentIndex(0);
    setTranslatePx(0);
  }, [visibleCount]);

  /* ── Auto slide ── */
  useEffect(() => {
    if (total <= visibleCount) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => {
        const next = prev >= maxIndex ? 0 : prev + 1;
        return next;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, [total, visibleCount, maxIndex]);

  const goTo = (idx) => setCurrentIndex(Math.max(0, Math.min(idx, maxIndex)));
  const next = () => goTo(currentIndex >= maxIndex ? 0 : currentIndex + 1);
  const prev = () => goTo(currentIndex <= 0 ? maxIndex : currentIndex - 1);

  if (!testimonials?.length) return null;

  const { avg, count } = deriveStats(testimonials);
  const dots = Array.from({ length: maxIndex + 1 });

  return (
    <div className={styles.outerContainer}>
      <div className={styles.mainWrapper}>

        {/* ─── Left: Summary panel ─── */}
        <div className={styles.leftSummary}>
          <div className={styles.statusBadge}>EXCELLENT</div>

          {/* Dynamic stars */}
          <div className={styles.largeStars}>
            {[1,2,3,4,5].map(i => (
              <FaStar key={i} style={{ color: i <= Math.round(avg) ? '#EA6490' : '#e2e8f0' }} />
            ))}
          </div>

          {/* Dynamic rating number */}
          <p style={{ fontSize: '1.6rem', fontWeight: 900, color: '#1e293b', margin: '2px 0 0', letterSpacing: '-0.03em', lineHeight: 1 }}>
            {avg.toFixed(1)}
            <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 700 }}> / 5</span>
          </p>

          {/* Dynamic count */}
          <p className={styles.basedOn}>
            Based on <strong style={{ color: '#1e293b' }}>{count}</strong> review{count !== 1 ? 's' : ''}
          </p>

          <div className={styles.googleGoogle}>
            <FaGoogle className={styles.gLogo} />
            <span>Google</span>
          </div>
        </div>

        <div className={styles.divider} />

        {/* ─── Slider ─── */}
        <div className={styles.sliderContainer}>
          <div
            ref={trackRef}
            className={styles.sliderTrack}
            style={{ transform: `translateX(-${translatePx}px)` }}
          >
            {testimonials.map((test, i) => {
              const isGoogle  = test.source?.toLowerCase().includes('google');
              const hasAvatar = Boolean(test.avatar_url);
              const initial   = test.author?.charAt(0).toUpperCase() || 'P';

              return (
                <div
                  key={i}
                  className={styles.slide}
                  ref={i === 0 ? slideRef : null}
                >
                  <div className={styles.testimonialCard}>
                    {/* Header */}
                    <div className={styles.cardHeader}>
                      {/* Avatar */}
                      {hasAvatar ? (
                        <img
                          src={test.avatar_url}
                          alt={test.author}
                          width={44}
                          height={44}
                          className={styles.avatar}
                          style={{ objectFit: 'cover' }}
                          onError={e => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div
                        className={styles.avatar}
                        style={{ display: hasAvatar ? 'none' : 'flex' }}
                      >
                        {initial}
                      </div>

                      {/* Name + date */}
                      <div className={styles.headerText}>
                        <div className={styles.authorName}>{test.author}</div>
                        <div className={styles.date}>{timeAgo(test.createdAt || test.created_at)}</div>
                      </div>

                      {/* Source badge */}
                      {isGoogle ? (
                        <FaGoogle className={styles.cardG} title="Google Review" />
                      ) : (
                        <span className={styles.sourceBadge}>{test.source || 'Review'}</span>
                      )}
                    </div>

                    {/* Rating row */}
                    <div className={styles.cardRating}>
                      <div className={styles.smallStars}>
                        {[1,2,3,4,5].map(i => (
                          <FaStar key={i} style={{ color: i <= (test.rating || 5) ? '#EA6490' : '#e2e8f0' }} />
                        ))}
                      </div>
                      <div className={styles.verifiedBadge}>
                        <span className={styles.check}>✓</span> Verified
                      </div>
                    </div>

                    {/* Review text with Read More */}
                    <ReadMoreText text={test.review} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls: prev · dots · next */}
          <div className={styles.controls}>
            <button onClick={prev} className={styles.navBtn} aria-label="Previous">
              <FaChevronLeft />
            </button>

            <div className={styles.dots}>
              {dots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`${styles.dot} ${currentIndex === i ? styles.dotActive : ''}`}
                />
              ))}
            </div>

            <button onClick={next} className={styles.navBtn} aria-label="Next">
              <FaChevronRight />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TestimonialSlider;
