export default function Contact() {
  return (
    <section id="contact">
      <div className="section-header reveal">
        <span className="section-tag">// get in touch</span>
        <h2 className="section-title">Vamos Conversar?</h2>
        <div className="section-line" />
      </div>

      <div className="contact-wrapper">
        <p className="contact-desc reveal">
          Estou sempre aberto a novas oportunidades, colaborações e projetos interessantes.
          Se quiser bater um papo, trocar ideia sobre tecnologia ou tem uma proposta,
          pode chegar!
        </p>

        <div className="contact-cards reveal">
          <a href="mailto:marciossantos012@gmail.com" className="contact-card">
            <div className="contact-card-icon">
              <i className="fas fa-envelope" />
            </div>
            <div>
              <div className="contact-card-label">Email</div>
              <div className="contact-card-value">marciossantos012@gmail.com</div>
            </div>
          </a>

          <a
            href="https://github.com/marciowt"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-card-icon">
              <i className="fab fa-github" />
            </div>
            <div>
              <div className="contact-card-label">GitHub</div>
              <div className="contact-card-value">marciowt</div>
            </div>
          </a>
        </div>

        <a
          href="mailto:marciossantos012@gmail.com"
          className="btn-primary reveal"
          style={{ margin: '0 auto', width: 'fit-content', display: 'flex' }}
        >
          <i className="fas fa-paper-plane" />
          Enviar mensagem
        </a>
      </div>
    </section>
  );
}
