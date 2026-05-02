import { useEffect, useRef, useState, MouseEvent } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent | Event) => {
      const target = event.target as Node;
      if (menuOpen && navRef.current && !navRef.current.contains(target)) {
        setMenuOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('mousedown', onDocumentClick);
    document.addEventListener('touchstart', onDocumentClick);
    document.addEventListener('keydown', onEscape);

    return () => {
      document.removeEventListener('mousedown', onDocumentClick);
      document.removeEventListener('touchstart', onDocumentClick);
      document.removeEventListener('keydown', onEscape);
    };
  }, [menuOpen]);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <nav ref={navRef} id="navbar" className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo" onClick={e => handleNavClick(e, '#hero')}>
        mss<span>.dev</span>
      </a>

      <div
        className={`nav-overlay${menuOpen ? ' active' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={menuOpen ? 'false' : 'true'}
      />

      {menuOpen && (
        <button
          type="button"
          className="nav-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>
      )}

      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        <li><a href="#about" onClick={e => handleNavClick(e, '#about')}>Sobre</a></li>
        <li><a href="#skills" onClick={e => handleNavClick(e, '#skills')}>Skills</a></li>
        <li><a href="#projects" onClick={e => handleNavClick(e, '#projects')}>Projetos</a></li>
        <li><a href="#contact" className="nav-cta" onClick={e => handleNavClick(e, '#contact')}>Contato</a></li>
      </ul>

      <div
        className={`hamburger${menuOpen ? ' active' : ''}`}
        onClick={() => setMenuOpen(prev => !prev)}
        role="button"
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
}
