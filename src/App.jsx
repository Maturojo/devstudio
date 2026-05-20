import React from "react";

const navigation = [
  { label: "Inicio", path: "/" },
  { label: "Sobre mi", path: "/sobre-mi" },
  { label: "Proyectos", path: "/proyectos" },
  { label: "Herramientas", path: "/herramientas" },
  { label: "Planes", path: "/planes" },
  { label: "Contacto", path: "/contacto" },
];

const plans = [
  {
    name: "Basico",
    price: "USD 80",
    description: "Ideal para una web simple, clara y profesional.",
    features: [
      "Landing clara",
      "WhatsApp o formulario",
      "Dominio y hosting 1 ano",
    ],
  },
  {
    name: "Intermedio",
    price: "USD 180",
    description: "Para negocios que necesitan un sitio mas completo y persuasivo.",
    featured: true,
    badge: "Mas elegido",
    features: [
      "Varias paginas",
      "Animaciones suaves",
      "Contenido mas comercial",
      "Dominio y hosting 1 ano",
    ],
  },
  {
    name: "Avanzado",
    price: "USD 360",
    description: "Pensado para proyectos que requieren mas logica y personalizacion.",
    features: [
      "Funciones a medida",
      "Reservas o catalogos",
      "Integraciones",
      "Base escalable",
    ],
  },
];

const standaloneTools = [
  {
    name: "Turnero online",
    price: "Desde USD 60",
    description:
      "Reservas simples para negocios que trabajan con horarios.",
    features: [
      "Turnos por dia y horario",
      "Boton directo a WhatsApp o formulario",
      "Diseno claro para celular y PC",
    ],
    demo: "/turnero/",
  },
  {
    name: "Calendario de eventos o clases",
    price: "Desde USD 55",
    description:
      "Fechas, clases y actividades en una vista clara.",
    features: [
      "Vista mensual o por listado",
      "Fechas destacadas y detalles por evento",
      "Facil de integrar en una landing o web existente",
    ],
    demo: "/calendario/",
  },
  {
    name: "Catalogo digital simple",
    price: "Desde USD 70",
    description:
      "Productos o servicios listos para consultar por WhatsApp.",
    features: [
      "Categorias, imagenes y descripciones",
      "Pensado para vender por WhatsApp",
      "Estructura facil de ampliar luego",
    ],
    demo: "/catalogo/",
  },
  {
    name: "Cotizador o formulario inteligente",
    price: "Desde USD 85",
    description:
      "Consultas mas ordenadas desde el primer mensaje.",
    features: [
      "Campos personalizados segun tu rubro",
      "Entrega de consulta mas ordenada",
      "Enfoque en conversion y practicidad",
    ],
    demo: "/cotizador/",
  },
];

const processSteps = [
  "Idea y objetivo",
  "Estructura visual",
  "Desarrollo",
  "Publicacion",
];

const benefits = [
  "Web clara",
  "Lista para celular",
  "Contacto directo",
  "Base para crecer",
];

const targetClients = [
  "Emprendedores",
  "Negocios locales",
  "Profesionales",
  "Marcas",
];

const portfolioItems = [
  {
    title: "Generador de carteles con base de datos",
    problem: "El negocio necesitaba crear carteles y consultar productos sin perder tiempo buscando datos manualmente.",
    solution:
      "Desarrolle una interfaz para buscar, filtrar y administrar productos con datos dinamicos y una experiencia clara para el equipo.",
    result:
      "El proceso quedo mas rapido, ordenado y facil de usar en el trabajo diario.",
    image: "/portfolio-carteles-real.jpeg",
    tags: ["Base de datos", "Panel de gestion", "Carga dinamica"],
  },
  {
    title: "Landing comercial para negocios",
    problem: "Muchos negocios tienen redes sociales, pero no un lugar propio donde explicar servicios y generar confianza.",
    solution:
      "Arme una pagina orientada a captar consultas, mostrar una propuesta clara y llevar al usuario al contacto directo.",
    result:
      "La marca queda mejor presentada y el cliente encuentra rapido que ofrece, por que confiar y como consultar.",
    image: "/portfolio-landing.svg",
    tags: ["Responsive", "WhatsApp", "Conversion"],
  },
  {
    title: "Sitio web avanzado a medida",
    problem: "El proyecto necesitaba una estructura mas completa que una pagina simple y preparada para crecer.",
    solution:
      "Construyo una base personalizada con paginas internas, interfaz cuidada y espacio para sumar funciones o integraciones.",
    result:
      "El sitio puede evolucionar sin rehacer todo desde cero cuando aparecen nuevas necesidades.",
    image: "/portfolio-avanzado-real.png",
    tags: ["Escalable", "Integraciones", "A medida"],
  },
];

const faqs = [
  {
    question: "Que incluye cada plan?",
    answer:
      "Cada plan incluye diseno responsive, desarrollo web, dominio, hosting y certificado SSL por 1 ano. La diferencia esta en el nivel de personalizacion, cantidad de paginas y funcionalidades.",
  },
  {
    question: "Puedo tener varias paginas dentro del sitio?",
    answer:
      "Si. Podemos armar un sitio con inicio, servicios, proyectos, preguntas frecuentes, contacto y las paginas que mejor le sirvan a tu negocio.",
  },
  {
    question: "Cuanto tarda en estar lista una web?",
    answer:
      "Depende del alcance. Una web simple puede estar lista en pocos dias y un sitio mas completo con varias paginas o herramientas puede requerir mas tiempo.",
  },
  {
    question: "Puedo pedir cambios una vez terminada?",
    answer:
      "Si, siempre podemos hacer ajustes y mejoras. La idea es que tu sitio quede alineado con tu negocio y se vea profesional antes de publicarlo.",
  },
];

const aboutPoints = [
  "Trato directo",
  "Diseno claro",
  "Foco comercial",
];

const routeMeta = {
  "/": {
    eyebrow: "Sitios web con estructura profesional",
    title: "Tu negocio necesita una web seria, clara y lista para crecer.",
    text:
      "Desarrollo sitios web con varias paginas, navegacion clara y foco comercial para emprendedores, marcas y negocios que quieren verse profesionales y convertir mejor.",
  },
  "/sobre-mi": {
    eyebrow: "Enfoque",
    title: "Diseno sitios claros para negocios reales.",
    text:
      "Menos vueltas, mas claridad visual y una estructura pensada para convertir visitas en consultas.",
  },
  "/proyectos": {
    eyebrow: "Trabajos",
    title: "Interfaces simples para necesidades concretas.",
    text:
      "Sitios, paneles y herramientas creadas para verse bien y funcionar rapido.",
  },
  "/herramientas": {
    eyebrow: "Herramientas",
    title: "Funciones simples para sumar a tu web.",
    text:
      "Reservas, catalogos, formularios y pequenas apps listas para usar.",
  },
  "/planes": {
    eyebrow: "Planes",
    title: "Elige una base y la hacemos crecer.",
    text:
      "Precios claros para empezar con una web simple o avanzar hacia algo mas completo.",
  },
  "/contacto": {
    eyebrow: "Contacto",
    title: "Contame que necesitas. Lo ordenamos.",
    text:
      "Escribime por WhatsApp o dejame un mensaje y vemos la mejor forma de publicarlo.",
  },
};

function normalizePath(pathname) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.replace(/\/+$/, "");
}

function navigateTo(path) {
  const nextPath = normalizePath(path);

  if (window.location.pathname !== nextPath) {
    window.history.pushState({}, "", nextPath);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }
}

function useCurrentPath() {
  const [path, setPath] = React.useState(() => normalizePath(window.location.pathname));

  React.useEffect(() => {
    const onChange = () => setPath(normalizePath(window.location.pathname));

    window.addEventListener("popstate", onChange);
    return () => window.removeEventListener("popstate", onChange);
  }, []);

  return path;
}

function NavLink({ to, currentPath, children, className = "" }) {
  const active = currentPath === to;

  return (
    <a
      href={to}
      className={`${className} ${active ? "is-active" : ""}`.trim()}
      onClick={(event) => {
        event.preventDefault();
        navigateTo(to);
      }}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </a>
  );
}

function PageHero({ currentPath }) {
  const meta = routeMeta[currentPath] ?? routeMeta["/"];

  return (
    <section className="page-hero">
      <div>
        <p className="eyebrow">{meta.eyebrow}</p>
        <h1>{meta.title}</h1>
        <p className="page-hero-text">{meta.text}</p>
      </div>
      <div className="page-hero-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}

function HomePage({ whatsappLink, currentPath }) {
  return (
    <>
      <section className="hero hero-home">
        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">Matias Rojo | Desarrollo web</p>
            <h1>Paginas web simples, modernas y listas para vender.</h1>
            <p className="hero-text">
              Diseno y desarrollo sitios claros para negocios que quieren verse mejor,
              compartir su propuesta y recibir consultas por WhatsApp.
            </p>

            <div className="hero-actions">
              <NavLink to="/planes" currentPath={currentPath} className="button primary">
                Ver planes
              </NavLink>
              <a className="button secondary" href={whatsappLink} target="_blank" rel="noreferrer">
                Hablar por WhatsApp
              </a>
            </div>

            <ul className="hero-metrics">
              <li>
                <strong>Desde USD 80</strong>
                <span>landing inicial</span>
              </li>
              <li>
                <strong>1 ano</strong>
                <span>dominio y hosting</span>
              </li>
              <li>
                <strong>100%</strong>
                <span>responsive</span>
              </li>
            </ul>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="browser-frame">
              <div className="browser-top">
                <span />
                <span />
                <span />
              </div>
              <div className="browser-preview">
                <div className="preview-nav" />
                <div className="preview-hero">
                  <span />
                  <strong />
                  <p />
                  <p />
                </div>
                <div className="preview-grid">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
            <div className="motion-card motion-card-one">
              <span>WhatsApp</span>
              <strong>Consulta recibida</strong>
            </div>
            <div className="motion-card motion-card-two">
              <span>Web publicada</span>
              <strong>Lista para compartir</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section compact-section">
        <div className="section-heading">
          <p className="eyebrow">Lo que ofrezco</p>
          <h2>Una presencia online clara, sin vueltas.</h2>
        </div>
        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <article className="info-card" key={benefit}>
              <span className="card-dot" />
              <p>{benefit}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section target-clients">
        <div className="section-heading">
          <p className="eyebrow">Para quien es</p>
          <h2>Hecha para negocios que necesitan verse mas confiables.</h2>
        </div>
        <div className="target-grid">
          {targetClients.map((client) => (
            <article className="info-card" key={client}>
              <span className="card-dot" />
              <p>{client}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-feature">
        <div className="split-copy">
          <p className="eyebrow">Estructura</p>
          <h2>Todo ordenado para que el cliente entienda rapido.</h2>
          <p>
            Inicio, servicios, trabajos y contacto. Solo lo necesario para presentar
            tu negocio y llevar la visita a la consulta.
          </p>
          <NavLink to="/proyectos" currentPath={currentPath} className="button secondary">
            Ver proyectos
          </NavLink>
        </div>

        <div className="split-panel">
          <article className="info-card">
            <span className="card-dot" />
            <p>Inicio claro</p>
          </article>
          <article className="info-card">
            <span className="card-dot" />
            <p>Servicios visibles</p>
          </article>
          <article className="info-card">
            <span className="card-dot" />
            <p>Contacto directo</p>
          </article>
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <section className="section about">
      <div className="about-panel">
        <div className="about-copy">
          <p className="eyebrow">Sobre mi</p>
          <h2>Hola, soy Matias. Desarrollo webs simples, prolijas y utiles.</h2>
          <p>
            Trabajo directo con cada cliente para ordenar la idea, darle una buena
            presencia y dejarla lista para compartir.
          </p>
        </div>

        <div className="about-list">
          {aboutPoints.map((point) => (
            <article className="about-card" key={point}>
              <span className="card-dot" />
              <p>{point}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsPage({ setActiveImage }) {
  return (
    <section className="section portfolio">
      <div className="portfolio-showcase">
        <div className="section-heading portfolio-heading">
          <p className="eyebrow">Ultimos proyectos</p>
          <h2>Proyectos reales, interfaces claras.</h2>
          <p className="portfolio-intro">
            Algunas muestras de sitios, paneles y herramientas hechas para negocios.
          </p>
        </div>

        <div className="portfolio-client">
          <div className="portfolio-client-card">
            <img className="portfolio-client-logo" src="/sur-maderas-logo.png" alt="Logo de Sur Maderas" />
            <div>
              <p className="portfolio-client-name">Sur Maderas</p>
              <p className="portfolio-client-text">
                Proyecto real con interfaces y herramientas adaptadas a necesidades
                comerciales y de gestion.
              </p>
            </div>
          </div>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <article key={item.title} className="portfolio-card">
              <button
                type="button"
                className="portfolio-visual"
                onClick={() => setActiveImage({ src: item.image, alt: item.title })}
                aria-label={`Ver imagen completa de ${item.title}`}
              >
                <img src={item.image} alt={item.title} />
                <span className="portfolio-zoom">Ver imagen completa</span>
              </button>

              <div className="portfolio-copy">
                <h3>{item.title}</h3>
                <p>{item.result}</p>
                <div className="portfolio-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolsPage({ currentPath }) {
  return (
    <>
      <section className="section own-tools">
        <div className="section-heading">
          <p className="eyebrow">Herramientas propias</p>
          <h2>Apps simples, hechas para resolver cosas concretas.</h2>
        </div>

        <div className="own-tools-grid">
          <article className="own-tool-card">
            <div className="own-tool-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
              </svg>
            </div>
            <div className="own-tool-copy">
              <div className="own-tool-header">
                <p className="plan-name">Organizador</p>
                <span className="own-tool-badge">Gratis - PWA</span>
              </div>
              <p className="standalone-description">
                Control de ingresos, gastos y recordatorios. Se instala desde el navegador
                y funciona en PC o celular.
              </p>
              <ul className="feature-list">
                <li>Registro de ingresos y egresos por mes</li>
                <li>Recordatorios con alertas de vencimiento</li>
                <li>Graficos y balance mensual</li>
                <li>Funciona sin internet una vez instalada</li>
              </ul>
              <a
                href="/organizador/"
                target="_blank"
                rel="noreferrer"
                className="button primary own-tool-button"
              >
                Abrir e instalar
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section standalone-tools">
        <div className="section-heading">
          <p className="eyebrow">Herramientas por separado</p>
          <h2>Funciones puntuales para sumar a tu negocio.</h2>
          <p className="standalone-intro">
            Si ya tienes una web, podemos agregar solo lo que falta.
          </p>
        </div>

        <div className="standalone-grid">
          {standaloneTools.map((tool) => (
            <article key={tool.name} className="standalone-card">
              <div className="standalone-header">
                <div>
                  <p className="plan-name">{tool.name}</p>
                  <h3>{tool.price}</h3>
                </div>
                <span className="standalone-badge">Solucion puntual</span>
              </div>

              <p className="standalone-description">{tool.description}</p>

              <ul className="feature-list">
                {tool.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <div className="standalone-actions">
                <a href={tool.demo} target="_blank" rel="noreferrer" className="button primary standalone-button">
                  Ver demo
                </a>
                <NavLink to="/contacto" currentPath={currentPath} className="button secondary standalone-button">
                  Quiero esta
                </NavLink>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function PlansPage({ currentPath }) {
  return (
    <>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Planes</p>
          <h2>Tres formas simples de empezar.</h2>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => (
            <article key={plan.name} className={`plan-card ${plan.featured ? "featured" : ""}`}>
              <div className="plan-header">
                <div className="plan-topline">
                  <p className="plan-name">{plan.name}</p>
                  {plan.badge ? <p className="plan-badge">{plan.badge}</p> : null}
                </div>
                <h3>{plan.price}</h3>
                <p className="plan-note">Unico pago</p>
                <p className="plan-description">{plan.description}</p>
              </div>

              <ul className="feature-list">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <NavLink to="/contacto" currentPath={currentPath} className="button plan-button">
                Solicitar este plan
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq">
        <div className="section-heading">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2>Lo importante antes de avanzar.</h2>
        </div>

        <div className="faq-list">
          {faqs.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section workflow">
        <div className="section-heading">
          <p className="eyebrow">Proceso</p>
          <h2>De la idea a la web publicada.</h2>
        </div>

        <div className="steps">
          {processSteps.map((step, index) => (
            <article className="step-card" key={step}>
              <span className="step-number">0{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ContactPage({ whatsappLink }) {
  return (
    <section className="section contact">
      <div className="contact-panel">
        <div className="contact-copy">
          <p className="eyebrow">Contacto</p>
          <h2>Mandame tu idea y la bajamos a una web clara.</h2>
          <p>
            Podes escribirme por WhatsApp o dejar el mensaje aca. Te respondo con una
            propuesta simple para empezar.
          </p>
          <div className="contact-direct">
            <a href="mailto:maturojo123mdq@gmail.com">maturojo123mdq@gmail.com</a>
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>

        <form className="contact-form" action="https://formsubmit.co/maturojo123mdq@gmail.com" method="POST">
          <input type="hidden" name="_subject" value="Nueva consulta desde DevStudio" />
          <input type="hidden" name="_next" value="https://devstudio-chi.vercel.app/contacto" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />

          <label className="form-field">
            <span>Nombre</span>
            <input type="text" name="name" placeholder="Tu nombre" required />
          </label>

          <label className="form-field">
            <span>Email</span>
            <input type="email" name="email" placeholder="tuemail@ejemplo.com" required />
          </label>

          <label className="form-field">
            <span>Mensaje</span>
            <textarea name="message" rows="5" placeholder="Cuentame que tipo de web o herramienta necesitas" required />
          </label>

          <button className="button primary form-submit" type="submit">
            Enviar consulta
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer({ currentPath }) {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <p className="footer-title">DevStudio</p>
          <p>Diseno y desarrollo por Matias Rojo</p>
        </div>

        <div className="footer-links footer-nav">
          {navigation.map((item) => (
            <NavLink key={item.path} to={item.path} currentPath={currentPath} className="footer-link">
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="footer-meta">
          <p>Desarrollo web a medida</p>
          <p>Dominio, hosting y SSL incluidos por 1 ano</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 DevStudio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

function App() {
  const whatsappLink =
    "https://wa.me/5492235954195?text=Hola%20DevStudio%2C%20quiero%20consultar%20por%20una%20pagina%20web.";
  const currentPath = useCurrentPath();
  const [activeImage, setActiveImage] = React.useState(null);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveImage(null);
  }, [currentPath]);

  const pageContent = {
    "/": <HomePage whatsappLink={whatsappLink} currentPath={currentPath} />,
    "/sobre-mi": <AboutPage />,
    "/proyectos": <ProjectsPage setActiveImage={setActiveImage} />,
    "/herramientas": <ToolsPage currentPath={currentPath} />,
    "/planes": <PlansPage currentPath={currentPath} />,
    "/contacto": <ContactPage whatsappLink={whatsappLink} />,
  };

  return (
    <>
      <div className="page-shell">
        <header className="site-header">
          <div className="topbar site-nav">
            <NavLink to="/" currentPath={currentPath} className="brand">
              <span className="brand-mark" />
              <span>DevStudio</span>
            </NavLink>

            <nav className="nav-links" aria-label="Principal">
              {navigation.map((item) => (
                <NavLink key={item.path} to={item.path} currentPath={currentPath} className="nav-link">
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <NavLink to="/contacto" currentPath={currentPath} className="button nav-cta">
              Consultar
            </NavLink>
          </div>
        </header>

        <main>
          {currentPath !== "/" ? <PageHero currentPath={currentPath} /> : null}
          {pageContent[currentPath] ?? pageContent["/"]}
        </main>

        <Footer currentPath={currentPath} />
      </div>

      {activeImage ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={activeImage.alt} onClick={() => setActiveImage(null)}>
          <button type="button" className="lightbox-close" onClick={() => setActiveImage(null)} aria-label="Cerrar imagen">
            Cerrar
          </button>
          <img className="lightbox-image" src={activeImage.src} alt={activeImage.alt} onClick={(event) => event.stopPropagation()} />
        </div>
      ) : null}

      <a className="whatsapp-float" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp">
        <span className="whatsapp-icon" aria-hidden="true">
          <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
            <path fill="currentColor" d="M19.11 17.21c-.29-.14-1.72-.85-1.99-.95-.27-.1-.46-.14-.66.14s-.75.95-.92 1.15c-.17.19-.34.22-.63.07-.29-.14-1.23-.45-2.34-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.66-1.59-.9-2.18-.24-.57-.49-.5-.66-.5h-.56c-.19 0-.51.07-.78.36-.27.29-1.02 1-.98 2.45.05 1.45 1.03 2.85 1.17 3.04.14.19 2.02 3.09 4.89 4.33.68.29 1.22.47 1.64.6.69.22 1.32.19 1.81.12.55-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.56-.34Z" />
            <path fill="currentColor" d="M16.03 3.2c-7.08 0-12.82 5.74-12.82 12.82 0 2.26.59 4.47 1.7 6.41L3.1 28.8l6.55-1.72a12.78 12.78 0 0 0 6.38 1.71h.01c7.08 0 12.82-5.74 12.82-12.82S23.11 3.2 16.03 3.2Zm0 23.45h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.89 1.02 1.04-3.79-.25-.39a10.66 10.66 0 1 1 8.9 4.87Z" />
          </svg>
        </span>
      </a>
    </>
  );
}

export default App;
