interface Project {
  emoji: string;
  title: string;
  desc: string;
  tags: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    emoji: '📂',
    title: 'Sistema de Cadastro',
    desc: 'Sistema de gerenciamento de cadastros com interface intuitiva, CRUD completo e banco de dados relacional.',
    tags: ['Python', 'SQL', 'Tkinter'],
    github: 'https://github.com/marcinBOLADO',
    demo: '#',
  },
  {
    emoji: '📂',
    title: 'Landing Page',
    desc: 'Página de apresentação responsiva com design moderno, animações CSS e otimizada para todos os dispositivos.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/marcinBOLADO',
    demo: '#',
  },
  {
    emoji: '📂',
    title: 'Calculadora App',
    desc: 'Calculadora com operações matemáticas avançadas, interface dark e histórico de cálculos.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/marcinBOLADO',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-header reveal">
        <span className="section-tag">// featured projects</span>
        <h2 className="section-title">Projetos</h2>
        <div className="section-line" />
      </div>

      <div className="projects-grid">
        {projects.map(p => (
          <div className="project-card reveal" key={p.title}>
            <div className="project-header">
              <div className="project-icons">
                <span className="project-folder">{p.emoji}</span>
                <div className="project-links">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                    title="GitHub"
                  >
                    <i className="fab fa-github" />
                  </a>
                  <a
                    href={p.demo}
                    className="project-link"
                    title="Ver Projeto"
                  >
                    <i className="fas fa-external-link-alt" />
                  </a>
                </div>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
            </div>
            <div className="project-footer">
              <div className="project-tags">
                {p.tags.map(tag => (
                  <span className="project-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }} className="reveal">
        <a
          href="https://github.com/marcinBOLADO"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
          style={{ display: 'inline-flex' }}
        >
          <i className="fab fa-github" />
          Ver mais no GitHub
        </a>
      </div>
    </section>
  );
}
