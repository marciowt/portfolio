import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, index) => {
          if (!entry.isIntersecting) return;

          const target = entry.target as HTMLElement;
          const delay = Number(target.dataset.revealDelay) || index * 100;

          setTimeout(() => {
            target.classList.add('visible');
          }, delay);

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );

    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export function useActiveNav() {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const onScroll = () => {
      let current = '';
      sections.forEach(section => {
        const top = (section as HTMLElement).offsetTop - 100;
        if (window.scrollY >= top) current = section.getAttribute('id') || '';
      });

      document.querySelectorAll('.nav-links a').forEach(link => {
        (link as HTMLElement).style.color = '';
        if (link.getAttribute('href') === '#' + current) {
          (link as HTMLElement).style.color = 'var(--text-primary)';
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
