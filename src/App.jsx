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
      "Sitio inicial con estructura clara para tu negocio",
      "Diseno responsive para celular y PC",
      "Boton de contacto a WhatsApp o formulario basico",
      "Incluye dominio, hosting y certificado SSL por 1 ano",
      "Entrega rapida para emprendedores o negocios pequenos",
    ],
  },
  {
    name: "Intermedio",
    price: "USD 180",
    description: "Para negocios que necesitan un sitio mas completo y persuasivo.",
    featured: true,
    badge: "Mas elegido",
    features: [
      "Sitio con varias paginas y estructura mas avanzada",
      "Animaciones suaves y mejor jerarquia visual",
      "Galeria, testimonios, servicios y preguntas frecuentes",
      "Incluye dominio, hosting y certificado SSL por 1 ano",
      "Optimizacion de contenido para vender mejor",
    ],
  },
  {
    name: "Avanzado",
    price: "USD 360",
    description: "Pensado para proyectos que requieren mas logica y personalizacion.",
    features: [
      "Paneles, integraciones o funcionalidades a medida",
      "Formularios complejos, reservas o catalogos dinamicos",
      "Arquitectura escalable para crecimiento futuro",
      "Incluye dominio, hosting y certificado SSL por 1 ano",
      "Asesoria tecnica para definir la mejor solucion",
    ],
  },
];

const standaloneTools = [
  {
    name: "Turnero online",
    price: "Desde USD 60",
    description:
      "Para peluquerias, estudios, consultorios o negocios que necesitan ordenar reservas y consultas sin depender de mensajes cruzados.",
    features: [
      "Turnos por dia y horario",
      "Boton directo a WhatsApp o formulario",
      "Diseno claro para celular y PC",
    ],
  },
  {
    name: "Calendario de eventos o clases",
    price: "Desde USD 55",
    description:
      "Ideal para talleres, academias, gimnasios o marcas que quieren mostrar fechas, disponibilidad y actividades de forma prolija.",
    features: [
      "Vista mensual o por listado",
      "Fechas destacadas y detalles por evento",
      "Facil de integrar en una landing o web existente",
    ],
  },
  {
    name: "Catalogo digital simple",
    price: "Desde USD 70",
    description:
      "Una solucion rapida para mostrar productos, servicios o menus con mejor presentacion y acceso directo a consultas.",
    features: [
      "Categorias, imagenes y descripciones",
      "Pensado para vender por WhatsApp",
      "Estructura facil de ampliar luego",
    ],
  },
  {
    name: "Cotizador o formulario inteligente",
    price: "Desde USD 85",
    description:
      "Perfecto para negocios que quieren filtrar consultas, pedir datos importantes y ahorrar tiempo en respuestas repetidas.",
    features: [
      "Campos personalizados segun tu rubro",
      "Entrega de consulta mas ordenada",
      "Enfoque en conversion y practicidad",
    ],
  },
];

const processSteps = [
  "Analizamos tu idea, objetivo comercial y tipo de cliente.",
  "Definimos la estructura del sitio, sus paginas y el recorrido ideal del usuario.",
  "Desarrollamos la web con React y una base lista para crecer.",
  "Ajustamos detalles finales y dejamos todo listo para publicar.",
];

const benefits = [
  "Paginas veloces, claras y preparadas para vender",
  "Diseno moderno que transmite confianza",
  "Adaptacion total a celular, tablet y escritorio",
  "Soporte para proyectos personales, negocios y marcas",
];

const portfolioItems = [
  {
    title: "Generador de carteles con base de datos",
    description:
      "Sistema real para buscar, filtrar y administrar productos con datos dinamicos, pensado para trabajar de forma rapida, ordenada y con una interfaz clara para el usuario.",
    image: "/portfolio-carteles-real.jpeg",
    tags: ["Base de datos", "Panel de gestion", "Carga dinamica"],
  },
  {
    title: "Landing comercial para negocios",
    description:
      "Pagina orientada a captar consultas y ventas, con estructura visual persuasiva, contacto directo y contenido pensado para generar confianza.",
    image: "/portfolio-landing.svg",
    tags: ["Responsive", "WhatsApp", "Conversion"],
  },
  {
    title: "Sitio web avanzado a medida",
    description:
      "Proyecto real con una interfaz mas completa, estructura personalizada y una base preparada para sumar funciones, automatizaciones o integraciones segun la necesidad del cliente.",
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
  "Trabajo de forma directa con cada cliente, sin vueltas ni intermediarios.",
  "Diseno cada pagina para transmitir profesionalismo, confianza y claridad desde el primer segundo.",
  "Me enfoco en que tu web no solo se vea bien, sino que te ayude a conseguir consultas y ventas reales.",
];

const routeMeta = {
  "/": {
    eyebrow: "Sitios web con estructura profesional",
    title: "Tu negocio necesita una web seria, clara y lista para crecer.",
    text:
      "Desarrollo sitios web con varias paginas, navegacion clara y foco comercial para emprendedores, marcas y negocios que quieren verse profesionales y convertir mejor.",
  },
  "/sobre-mi": {
    eyebrow: "Conoce mi enfoque",
    title: "Trabajo cada proyecto con una mirada visual, tecnica y comercial.",
    text:
      "No solo pienso en como se ve una web, sino en como guia al usuario, ordena la informacion y convierte visitas en consultas reales.",
  },
  "/proyectos": {
    eyebrow: "Casos y trabajos reales",
    title: "Proyectos desarrollados para negocios que necesitan soluciones concretas.",
    text:
      "Desde interfaces internas hasta sitios comerciales, cada proyecto se diseña segun objetivos reales de uso, gestion y venta.",
  },
  "/herramientas": {
    eyebrow: "Funciones para vender mas",
    title: "Tambien desarrollo herramientas puntuales para sumar a tu negocio.",
    text:
      "Si ya tienes una pagina o no necesitas un sitio completo, puedo crear soluciones especificas para reservas, consultas, catalogos o formularios.",
  },
  "/planes": {
    eyebrow: "Servicios y valores",
    title: "Planes claros para distintos niveles de proyecto.",
    text:
      "Desde una web inicial hasta una solucion mas completa, cada propuesta busca orden, buena presencia y resultados comerciales.",
  },
  "/contacto": {
    eyebrow: "Hablemos de tu proyecto",
    title: "Si ya tienes una idea, podemos convertirla en una web profesional.",
    text:
      "Puedes escribirme para pedir una pagina, un sitio con varias secciones o una herramienta puntual. Lo vemos y te propongo la mejor opcion.",
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
      <p className="eyebrow">{meta.eyebrow}</p>
      <h1>{meta.title}</h1>
      <p className="page-hero-text">{meta.text}</p>
    </section>
  );
}

function HomePage({ whatsappLink, currentPath }) {
  return (
    <>
      <section className="hero hero-home">
        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">Matias Rojo | Desarrollo web a medida</p>
            <h1>Diseno sitios web con varias paginas y navegacion clara para vender mejor.</h1>
            <p className="hero-text">
              Ayudo a emprendedores, negocios y marcas a tener una presencia online
              profesional. Desarrollo desde webs institucionales hasta sitios mas
              completos con paginas internas, herramientas y funciones personalizadas.
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
                <strong>6 paginas</strong>
                <span>para presentar mejor tu negocio</span>
              </li>
              <li>
                <strong>100%</strong>
                <span>responsive</span>
              </li>
              <li>
                <strong>Enfoque comercial</strong>
                <span>desde la estructura</span>
              </li>
            </ul>
          </div>

          <div className="hero-card">
            <div className="floating-card">
              <p className="card-label">Estructura recomendada</p>
              <h2>Inicio, servicios, proyectos y contacto</h2>
              <p>
                Una web con varias paginas te permite ordenar mejor la informacion,
                transmitir mas profesionalismo y facilitar el recorrido de cada cliente.
              </p>
              <div className="card-tags">
                <span>Navegacion clara</span>
                <span>Mas confianza</span>
                <span>Mejor presentacion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section benefits">
        <div className="section-heading">
          <p className="eyebrow">Lo que ofrezco</p>
          <h2>Sitios pensados para mostrar, convencer y vender.</h2>
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

      <section className="section split-feature">
        <div className="split-copy">
          <p className="eyebrow">Por que varias paginas</p>
          <h2>Una estructura multipagina te ayuda a explicar mejor lo que haces.</h2>
          <p>
            Puedes dedicar espacio real a tus servicios, mostrar proyectos con mas detalle,
            responder dudas frecuentes y llevar al usuario al contacto con mas claridad.
          </p>
          <NavLink to="/proyectos" currentPath={currentPath} className="button secondary">
            Ver proyectos
          </NavLink>
        </div>

        <div className="split-panel">
          <article className="info-card">
            <span className="card-dot" />
            <p>Inicio para presentar tu propuesta y captar atencion.</p>
          </article>
          <article className="info-card">
            <span className="card-dot" />
            <p>Paginas internas para servicios, trabajos, preguntas y contacto.</p>
          </article>
          <article className="info-card">
            <span className="card-dot" />
            <p>Recorrido mas profesional para clientes que quieren comparar y confiar.</p>
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
          <h2>Mi nombre es Matias Rojo y me dedico a crear paginas web que ayudan a dar una imagen profesional y vender mejor.</h2>
          <p>
            Me gusta trabajar con emprendedores, negocios y marcas que quieren verse
            serios en internet y tener una web que realmente los represente.
          </p>
          <p>
            Cada proyecto lo encaro con una mirada visual, tecnica y comercial para
            que el sitio se vea bien, sea facil de usar y genere confianza.
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
          <h2>Trabajo con negocios reales y desarrollo soluciones pensadas para su operacion diaria.</h2>
          <p className="portfolio-intro">
            Estas muestras forman parte de trabajos recientes donde el foco estuvo
            en mejorar la experiencia de uso, ordenar informacion y crear interfaces
            claras para equipos y clientes.
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
                <p>{item.description}</p>
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
    <section className="section standalone-tools">
      <div className="section-heading">
        <p className="eyebrow">Herramientas por separado</p>
        <h2>Si no necesitas un sitio completo, tambien puedo desarrollar funciones puntuales listas para usar y vender.</h2>
        <p className="standalone-intro">
          Esta opcion es ideal si ya tienes una web y quieres sumar una herramienta
          puntual sin rehacer todo el proyecto.
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

            <NavLink to="/contacto" currentPath={currentPath} className="button secondary standalone-button">
              Quiero esta herramienta
            </NavLink>
          </article>
        ))}
      </div>
    </section>
  );
}

function PlansPage({ currentPath }) {
  return (
    <>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Planes</p>
          <h2>Elige el nivel de desarrollo que mejor se adapta a tu proyecto.</h2>
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
          <h2>Respuestas claras para que sepas exactamente que esperar del servicio.</h2>
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
          <h2>Trabajamos con una metodologia simple, clara y enfocada en resultados.</h2>
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
          <h2>Si ya tienes una idea, hablemos y la convertimos en una web profesional.</h2>
          <p>
            Trabajo de forma directa para ayudarte a lanzar un sitio claro, moderno
            y pensado para generar confianza. Puedes escribirme por email o WhatsApp
            y coordinamos la mejor opcion para tu proyecto.
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
