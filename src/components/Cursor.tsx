import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = mouseX - 6 + 'px';
        cursorRef.current.style.top = mouseY - 6 + 'px';
      }
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX - 18) * 0.12;
      followerY += (mouseY - followerY - 18) * 0.12;
      if (followerRef.current) {
        followerRef.current.style.left = followerX + 'px';
        followerRef.current.style.top = followerY + 'px';
      }
      rafId = requestAnimationFrame(animateFollower);
    };

    document.addEventListener('mousemove', onMouseMove);
    rafId = requestAnimationFrame(animateFollower);

    const interactiveEls = document.querySelectorAll(
      'a, button, .project-card, .contact-card, .skill-category'
    );

    const onEnter = () => {
      if (cursorRef.current) cursorRef.current.style.transform = 'scale(2)';
      if (followerRef.current) {
        followerRef.current.style.transform = 'scale(1.5)';
        followerRef.current.style.opacity = '0.3';
      }
    };

    const onLeave = () => {
      if (cursorRef.current) cursorRef.current.style.transform = 'scale(1)';
      if (followerRef.current) {
        followerRef.current.style.transform = 'scale(1)';
        followerRef.current.style.opacity = '0.5';
      }
    };

    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      interactiveEls.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-follower" ref={followerRef} />
    </>
  );
}
