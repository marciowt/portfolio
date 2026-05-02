import { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
}

interface Category {
  icon: string;
  title: string;
  sub: string;
  skills: Skill[];
}

const categories: Category[] = [
  {
    icon: 'fas fa-code',
    title: 'Frontend',
    sub: 'Interface & Design',
    skills: [
      { name: 'HTML5', level: 75 },
      { name: 'CSS3', level: 65 },
      { name: 'JavaScript', level: 55 },
    ],
  },
  {
    icon: 'fas fa-server',
    title: 'Backend',
    sub: 'Lógica & Servidor',
    skills: [
      { name: 'Python', level: 60 },
      { name: 'Java', level: 10 },
      { name: 'SQL', level: 10 },
    ],
  },
  {
    icon: 'fas fa-tools',
    title: 'Ferramentas',
    sub: 'Dev & Ambiente',
    skills: [
      { name: 'Git & GitHub', level: 65 },
      { name: 'VS Code', level: 80 },
      { name: 'Linux', level: 40 },
    ],
  },
];

function SkillBar({ name, level }: Skill) {
  const fillRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true;
            setTimeout(() => {
              if (fillRef.current) fillRef.current.style.width = level + '%';
            }, 300);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (fillRef.current) observer.observe(fillRef.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="skill-item">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" ref={fillRef} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-header reveal">
        <span className="section-tag">// skills &amp; tools</span>
        <h2 className="section-title">Habilidades</h2>
        <div className="section-line" />
      </div>

      <div className="skills-grid">
        {categories.map(cat => (
          <div className="skill-category reveal" key={cat.title}>
            <div className="skill-cat-header">
              <div className="skill-cat-icon">
                <i className={cat.icon} style={{ color: 'white' }} />
              </div>
              <div>
                <div className="skill-cat-title">{cat.title}</div>
                <div className="skill-cat-sub">{cat.sub}</div>
              </div>
            </div>
            <div className="skill-items">
              {cat.skills.map(s => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
