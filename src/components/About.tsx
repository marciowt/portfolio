import { useEffect, useRef, useState } from 'react';

interface StatProps {
  target: number;
  suffix: string;
  label: string;
}

function StatCounter({ target, suffix, label }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true;
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCount(Math.round(current));
            }, 40);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="stat-card" ref={ref}>
      <div className="stat-number">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about">
      <div className="section-header reveal">
        <span className="section-tag">// about me</span>
        <h2 className="section-title">Sobre Mim</h2>
        <div className="section-line" />
      </div>

      <div className="about-grid">
        <div className="about-visual reveal">
          <div className="about-avatar-wrapper">
            <div className="avatar-ring" />
            <div className="avatar-ring-inner" />
            <div className="avatar-circle">
              <span className="avatar-emoji">👨‍💻</span>
            </div>
          </div>
          <div className="about-badges">
            <span className="badge">🎓 ADS Student</span>
            <span className="badge">💡 Problem Solver</span>
            <span className="badge">🚀 Fast Learner</span>
            <span className="badge">☕ Coffee Driven</span>
          </div>
        </div>

        <div className="about-content reveal">
          <div className="code-decoration">
            <span className="code-keyword">const</span>{' '}
            <span className="code-var">dev</span> ={' '}
            <span className="code-bracket">{'{'}</span>
          </div>

          <h3>
            Olá! Eu sou o <span>MSS.dev</span> ✌️
          </h3>

          <p>
            Sou estudante de <strong>Análise e Desenvolvimento de Sistemas</strong>,
            movido pela curiosidade e pelo desejo de transformar ideias em realidade através do código.
          </p>

          <p>
            Tenho interesse em desenvolvimento de software, tecnologia e resolução de problemas
            complexos. Estou sempre buscando aprender novas tecnologias e expandir meus conhecimentos
            no universo da programação.
          </p>

          <p>
            Quando não estou codando, gosto de explorar novos projetos, estudar tendências
            tecnológicas e trabalhar em soluções criativas.
          </p>

          <div className="code-decoration" style={{ marginTop: '1rem' }}>
            <span className="code-bracket">{'}'}</span>
          </div>

          <div className="about-stats">
            <StatCounter target={100} suffix="%" label="% Dedicação" />
            <StatCounter target={10} suffix="+" label="Projetos" />
            <StatCounter target={5} suffix="+" label="Tecnologias" />
          </div>
        </div>
      </div>
    </section>
  );
}
