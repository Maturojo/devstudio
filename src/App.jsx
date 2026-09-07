import React from "react";
import {
  benefitPoints,
  budgetOptions,
  contactConfig,
  getWhatsappLink,
  heroIndicators,
  navigation,
  processSteps,
  projectGroups,
  reasons,
  services,
  tools,
} from "./siteData";

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  function handleNavClick() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <nav className="site-nav" aria-label="Principal">
        <a className="brand" href="#inicio" onClick={handleNavClick}>
          <span className="brand-mark" aria-hidden="true" />
          <span>DevStudio</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div id="main-navigation" className={`nav-panel ${menuOpen ? "is-open" : ""}`}>
          <div className="nav-links">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={handleNavClick}>
                {item.label}
              </a>
            ))}
          </div>
          <a className="button nav-cta" href={getWhatsappLink()} target="_blank" rel="noreferrer">
            Hablemos
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero section-band">
      <div className="hero-copy">
        <p className="eyebrow">Desarrollo y diseno web para negocios</p>
        <h1>Creamos paginas web que hacen crecer tu negocio.</h1>
        <p className="hero-text">
          Disenamos sitios modernos, rapidos y adaptados a todos los dispositivos para
          que tus clientes encuentren tu negocio, conozcan tus servicios y puedan
          contactarte facilmente.
        </p>
        <div className="hero-actions" aria-label="Acciones principales">
          <a className="button primary" href={getWhatsappLink()} target="_blank" rel="noreferrer">
            Quiero mi pagina web
          </a>
          <a className="button secondary" href="#proyectos">
            Ver proyectos
          </a>
        </div>
        <ul className="hero-indicators" aria-label="Caracteristicas principales">
          {heroIndicators.map((indicator) => (
            <li key={indicator}>{indicator}</li>
          ))}
        </ul>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="browser-card">
          <div className="browser-bar">
            <span />
            <span />
            <span />
          </div>
          <div className="browser-content">
            <div className="mock-nav" />
            <div className="mock-hero">
              <span />
              <strong />
              <p />
              <p />
            </div>
            <div className="mock-grid">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <div className="floating-note note-top">
          <span>Consulta</span>
          <strong>WhatsApp integrado</strong>
        </div>
        <div className="floating-note note-bottom">
          <span>Publicacion</span>
          <strong>Lista para compartir</strong>
        </div>
      </div>
    </section>
  );
}

function ProblemBenefit() {
  return (
    <section className="section-band problem-section">
      <div className="section-heading">
        <p className="eyebrow">Presencia profesional</p>
        <h2>Tu negocio merece algo mas que un Instagram.</h2>
        <p>
          Una web bien pensada ordena la informacion importante, transmite confianza
          y le da a cada visita un camino simple para consultar.
        </p>
      </div>

      <div className="benefit-layout">
        <article className="benefit-main">
          <span className="section-number">01</span>
          <h3>Un lugar propio para que te encuentren, entiendan y escriban.</h3>
          <p>
            Redes sociales ayudan, pero no siempre explican todo. Tu pagina puede
            funcionar como base comercial: servicios, productos, ubicacion, horarios,
            preguntas frecuentes y contacto en un solo lugar.
          </p>
        </article>

        <div className="benefit-grid">
          {benefitPoints.map((point) => (
            <article className="mini-card" key={point}>
              <span className="card-dot" />
              <p>{point}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="section-band">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">Servicios</p>
          <h2>Soluciones claras para vender, mostrar y gestionar mejor.</h2>
        </div>
        <p>
          El foco no esta en la tecnologia, sino en resolver una necesidad concreta
          del negocio con una experiencia simple para el cliente final.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <article className="service-card" key={service.name}>
            <span className="service-index">0{index + 1}</span>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <a
              className="service-link"
              href={getWhatsappLink(`Hola! Queria consultar por ${service.name.toLowerCase()} para mi negocio.`)}
              target="_blank"
              rel="noreferrer"
            >
              {service.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, onOpenGallery }) {
  const gallery = project.gallery ?? [project.image];

  return (
    <article className={`project-card ${project.isPlaceholder ? "is-placeholder" : ""}`}>
      <button
        type="button"
        className="project-image"
        onClick={() => onOpenGallery(project, 0)}
        aria-label={`Ver imagen de ${project.name}`}
      >
        <img src={project.image} alt={`Vista previa de ${project.name}`} loading="lazy" />
        {project.isPlaceholder ? <span className="project-label">Placeholder editable</span> : null}
      </button>
      <div className="project-copy">
        <p className="project-category">{project.category}</p>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tag-list" aria-label="Caracteristicas del proyecto">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-actions">
          {project.url ? (
            <a className="button small primary" href={project.url} target="_blank" rel="noreferrer">
              Ver online
            </a>
          ) : null}
          {gallery.length > 1 ? (
            <button type="button" className="button small secondary" onClick={() => onOpenGallery(project, 0)}>
              Ver capturas
            </button>
          ) : null}
          {project.repository ? (
            <a className="button small secondary" href={project.repository} target="_blank" rel="noreferrer">
              Repositorio
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function Projects({ onOpenGallery }) {
  return (
    <section id="proyectos" className="section-band projects-section">
      <div className="section-heading">
        <p className="eyebrow">Proyectos</p>
        <h2>Algunos de nuestros trabajos</h2>
        <p>
          Estructura reutilizable para mostrar proyectos reales con imagen, categoria,
          descripcion, tecnologias y enlaces opcionales.
        </p>
      </div>

      <div className="project-groups">
        {projectGroups.map((group) => (
          <section
            className={`project-group ${group.projects.length === 1 ? "is-single" : "is-pair"}`}
            key={group.name}
            aria-labelledby={`project-group-${group.name}`}
          >
            <div className="project-group-heading">
              <img className="project-group-logo" src={group.logo} alt={group.logoAlt} loading="lazy" />
              <div>
                <p className="project-group-kicker">Proyecto</p>
                <h3 id={`project-group-${group.name}`}>{group.name}</h3>
                <p>{group.description}</p>
              </div>
            </div>
            <div className="projects-grid">
              {group.projects.map((project) => (
                <ProjectCard key={project.name} project={project} onOpenGallery={onOpenGallery} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

function Tools() {
  return (
    <section id="herramientas" className="section-band tools-section">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">Herramientas</p>
          <h2>Demos listas para imaginar que podria tener tu web.</h2>
        </div>
        <p>
          Son ejemplos funcionales que pueden adaptarse a un comercio, profesional o
          PyME: turnos, catalogos, pedidos, cotizadores y pequenas soluciones internas.
        </p>
      </div>

      <div className="tools-grid">
        {tools.map((tool) => (
          <article className="tool-card" key={tool.name}>
            <div>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
            </div>
            <div className="tag-list" aria-label={`Caracteristicas de ${tool.name}`}>
              {tool.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="tool-actions">
              <a className="button small primary" href={tool.demo} target="_blank" rel="noreferrer">
                Ver demo
              </a>
              <a
                className="tool-link"
                href={getWhatsappLink(`Hola! Queria consultar por una herramienta tipo ${tool.name}.`)}
                target="_blank"
                rel="noreferrer"
              >
                Consultar
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="proceso" className="section-band process-section">
      <div className="section-heading">
        <p className="eyebrow">Como trabajamos</p>
        <h2>Un proceso simple, sin vueltas tecnicas.</h2>
      </div>

      <div className="process-timeline">
        {processSteps.map((step) => (
          <article className="process-card" key={step.number}>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhyDevStudio() {
  return (
    <section className="section-band why-section">
      <div className="why-panel">
        <div className="section-heading">
          <p className="eyebrow">Por que DevStudio</p>
          <h2>Una web pensada para tu negocio, no una plantilla mas.</h2>
        </div>
        <div className="reason-grid">
          {reasons.map((reason) => (
            <article className="mini-card" key={reason}>
              <span className="card-dot" />
              <p>{reason}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BudgetOptions() {
  return (
    <section className="section-band budget-section">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">Presupuesto</p>
          <h2>Tres formas de empezar segun lo que necesita tu negocio.</h2>
        </div>
        <p>
          Cada proyecto se presupuesta segun alcance, contenido y funcionalidades.
          Asi evitamos precios cerrados que no encajan con necesidades reales.
        </p>
      </div>

      <div className="budget-grid">
        {budgetOptions.map((option) => (
          <article className="budget-card" key={option.name}>
            <h3>{option.name}</h3>
            <p>{option.description}</p>
            <strong>Consultar presupuesto</strong>
            <a
              className="button secondary"
              href={getWhatsappLink(`Hola! Queria consultar presupuesto por ${option.name}.`)}
              target="_blank"
              rel="noreferrer"
            >
              Consultar por WhatsApp
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contacto" className="final-cta section-band">
      <div>
        <p className="eyebrow">Contacto</p>
        <h2>Tenes un negocio? Hagamos algo juntos.</h2>
        <p>Contanos que necesitas y te ayudamos a encontrar la mejor solucion.</p>
      </div>
      <a className="button primary" href={getWhatsappLink()} target="_blank" rel="noreferrer">
        Hablemos por WhatsApp
      </a>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const socialLinks = [
    contactConfig.instagram ? { label: "Instagram", href: contactConfig.instagram } : null,
    contactConfig.github ? { label: "GitHub", href: contactConfig.github } : null,
  ].filter(Boolean);

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <a className="footer-brand" href="#inicio">
            <span className="brand-mark" aria-hidden="true" />
            <span>DevStudio</span>
          </a>
          <p>Desarrollo y diseno de paginas web para negocios y empresas.</p>
        </div>
        <nav className="footer-nav" aria-label="Navegacion secundaria">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="footer-contact">
          <a href={getWhatsappLink()} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={`mailto:${contactConfig.email}`}>{contactConfig.email}</a>
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <p className="copyright">&copy; {year} DevStudio. Todos los derechos reservados.</p>
    </footer>
  );
}

function Lightbox({ activeGallery, onClose, onStep }) {
  if (!activeGallery) {
    return null;
  }

  const currentImage = activeGallery.images[activeGallery.index];

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={activeGallery.name} onClick={onClose}>
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Cerrar imagen">
        Cerrar
      </button>
      {activeGallery.images.length > 1 ? (
        <>
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              onStep(-1);
            }}
            aria-label="Imagen anterior"
          >
            Anterior
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              onStep(1);
            }}
            aria-label="Imagen siguiente"
          >
            Siguiente
          </button>
        </>
      ) : null}
      <img
        className="lightbox-image"
        src={currentImage}
        alt={`Captura de ${activeGallery.name}`}
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
}

function App() {
  const [activeGallery, setActiveGallery] = React.useState(null);

  function openGallery(project, index) {
    setActiveGallery({
      name: project.name,
      images: project.gallery ?? [project.image],
      index,
    });
  }

  function stepGallery(direction) {
    setActiveGallery((gallery) => {
      if (!gallery) {
        return gallery;
      }

      return {
        ...gallery,
        index: (gallery.index + direction + gallery.images.length) % gallery.images.length,
      };
    });
  }

  return (
    <>
      <Header />
      <main id="contenido" className="page-shell">
        <Hero />
        <ProblemBenefit />
        <Services />
        <Projects onOpenGallery={openGallery} />
        <Tools />
        <Process />
        <WhyDevStudio />
        <BudgetOptions />
        <FinalCta />
      </main>
      <Footer />
      <a className="whatsapp-float" href={getWhatsappLink()} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp">
        <span>WA</span>
      </a>
      <Lightbox activeGallery={activeGallery} onClose={() => setActiveGallery(null)} onStep={stepGallery} />
    </>
  );
}

export default App;
