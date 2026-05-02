import { useEffect, useState } from 'react';

const roles = [
  'Estudante de ADS 🎓',
  'Dev em Formação 💻',
  'Amante de Tecnologia 🚀',
  'Criador de Soluções ⚡',
];

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => {
          setTypedText(current.slice(0, charIndex + 1));
          setCharIndex(c => c + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setTypedText(current.slice(0, charIndex - 1));
          setCharIndex(c => c - 1);
        }, 60);
      } else {
        setIsDeleting(false);
        setRoleIndex(i => (i + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="hero">
      <div className="hero-tag">
        <div className="dot" />
        Disponível para oportunidades
      </div>

      <p className="hero-greeting">Olá, mundo! Eu sou 👋</p>
      <h1 className="hero-name">MSS.dev</h1>

      <p className="hero-role">
        {typedText}<span className="typing-text">&nbsp;</span>
      </p>

      <p className="hero-desc">
        Estudante de{' '}
        <strong style={{ color: 'var(--accent-secondary)' }}>
          Análise e Desenvolvimento de Sistemas
        </strong>
        , apaixonado por tecnologia, programação e por construir soluções que fazem a diferença.
      </p>

      <div className="hero-actions">
        <a href="#projects" className="btn-primary">
          <i className="fas fa-code" />
          Ver Projetos
        </a>
        <a href="#contact" className="btn-secondary">
          <i className="fas fa-envelope" />
          Entrar em contato
        </a>
      </div>

      <div className="hero-socials">
        <a
          href="https://github.com/marcinBOLADO"
          target="_blank"
          rel="noreferrer"
          className="social-link"
          title="GitHub"
        >
          <i className="fab fa-github" />
        </a>
        <a
          href="mailto:marciossantos012@gmail.com"
          className="social-link"
          title="Email"
        >
          <i className="fas fa-envelope" />
        </a>
        <a href="#" className="social-link" title="LinkedIn">
          <i className="fab fa-linkedin-in" />
        </a>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>scroll</span>
      </div>
    </section>
  );
}
