import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorDotRef = useRef(null);
  const cursorFollowerRef = useRef(null);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;
    let rafId = null;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.18;
      followerY += (mouseY - followerY) * 0.18;

      if (cursorFollowerRef.current) {
        cursorFollowerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      }
      rafId = requestAnimationFrame(animateFollower);
    };

    rafId = requestAnimationFrame(animateFollower);
    window.addEventListener('mousemove', onMouseMove);

    // Magnetic / hover states
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, input, select, textarea, .interactive-hover');
      if (target) {
        document.body.classList.add('is-hovering');
      } else {
        document.body.classList.remove('is-hovering');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      if (rafId) cancelAnimationFrame(rafId);
      document.body.classList.remove('is-hovering');
    };
  }, []);

  return (
    <>
      <div ref={cursorDotRef} className="custom-cursor hidden md:block" />
      <div ref={cursorFollowerRef} className="custom-cursor-follower hidden md:block" />
    </>
  );
}
