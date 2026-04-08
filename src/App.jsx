const plans = [
  {
    name: "Basico",
    price: "USD 80 - pago unico",
    description: "Ideal para presencia digital rapida y profesional.",
    features: [
      "Landing page de una sola seccion o varias secciones simples",
      "Diseno responsive para celular y PC",
      "Boton de contacto a WhatsApp o formulario basico",
      "Incluye dominio, hosting y certificado SSL por 1 ano",
      "Entrega rapida para emprendedores o negocios pequenos",
    ],
  },
  {
    name: "Intermedio",
    price: "USD 180 - pago unico",
    description: "Para negocios que necesitan una web mas completa y persuasiva.",
    featured: true,
    features: [
      "Sitio con multiples paginas o secciones avanzadas",
      "Animaciones suaves y mejor estructura visual",
      "Galeria, testimonios, servicios y preguntas frecuentes",
      "Incluye dominio, hosting y certificado SSL por 1 ano",
      "Optimizacion de contenido para vender mejor",
    ],
  },
  {
    name: "Avanzado",
    price: "USD 360 - pago unico",
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

const processSteps = [
  "Analizamos tu idea, objetivo comercial y tipo de cliente.",
  "Disenamos una propuesta clara, moderna y enfocada en conversion.",
  "Desarrollamos la web con React y una estructura lista para crecer.",
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
      "Sistema pensado para crear, guardar y administrar carteles de forma rapida, con informacion organizada en base de datos y una interfaz clara para el usuario.",
    image: "/portfolio-carteles.svg",
    tags: ["Base de datos", "Panel de gestion", "Carga dinamica"],
  },
  {
    title: "Landing comercial para negocios",
    description:
      "Paginas orientadas a captar consultas y ventas, con estructura visual persuasiva, contacto directo y contenido pensado para generar confianza.",
    image: "/portfolio-landing.svg",
    tags: ["Responsive", "WhatsApp", "Conversion"],
  },
  {
    title: "Sitio web avanzado a medida",
    description:
      "Desarrollo de webs con multiples secciones, formularios, integraciones y una arquitectura preparada para crecer junto al proyecto.",
    image: "/portfolio-avanzado.svg",
    tags: ["Escalable", "Integraciones", "A medida"],
  },
];

const faqs = [
  {
    question: "Que incluye cada plan?",
    answer:
      "Cada plan incluye diseno responsive, desarrollo web, dominio, hosting y certificado SSL por 1 ano. La diferencia esta en el nivel de personalizacion, cantidad de secciones y funcionalidades.",
  },
  {
    question: "Cuanto tarda en estar lista una pagina?",
    answer:
      "Depende del tipo de proyecto, pero una landing simple puede estar lista en pocos dias y una web mas avanzada puede requerir mas tiempo segun la cantidad de contenido y funciones.",
  },
  {
    question: "Puedo pedir cambios una vez terminada?",
    answer:
      "Si, siempre podemos hacer ajustes y mejoras. La idea es que tu pagina quede alineada con tu negocio y se vea profesional antes de publicarla.",
  },
  {
    question: "Trabajas con negocios pequenos o solo proyectos grandes?",
    answer:
      "Trabajo con emprendedores, marcas personales, negocios pequenos y tambien proyectos mas completos. Podemos encontrar una solucion segun tu necesidad y presupuesto.",
  },
];

const aboutPoints = [
  "Trabajo de forma directa con cada cliente, sin vueltas ni intermediarios.",
  "Diseno cada pagina para transmitir profesionalismo, confianza y claridad desde el primer segundo.",
  "Me enfoco en que tu web no solo se vea bien, sino que te ayude a conseguir consultas y ventas reales.",
];

function App() {
  const whatsappLink =
    "https://wa.me/5492235954195?text=Hola%20DevStudio%2C%20quiero%20consultar%20por%20una%20pagina%20web.";

  return (
    <>
      <div className="page-shell">
        <header className="hero">
          <nav className="topbar">
            <div className="brand">
              <span className="brand-mark" />
              <span>DevStudio</span>
            </div>
            <a className="nav-cta" href="#planes">
              Ver planes
            </a>
          </nav>

          <div className="hero-content">
            <div className="hero-copy">
              <p className="eyebrow">Matias Rojo | Desarrollo web a medida</p>
              <h1>Diseno y desarrollo paginas web a medida con enfoque comercial.</h1>
              <p className="hero-text">
                Ayudo a emprendedores, negocios y marcas a tener una presencia online
                profesional. Desarrollo desde paginas simples hasta sitios avanzados
                con funcionalidades personalizadas, siempre con enfoque visual, tecnico
                y comercial para que tu web no solo se vea bien: tambien convierta.
              </p>

              <div className="hero-actions">
                <a className="button primary" href="#planes">
                  Elegir plan
                </a>
                <a
                  className="button secondary"
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Hablar por WhatsApp
                </a>
              </div>

              <ul className="hero-metrics">
                <li>
                  <strong>Matias Rojo</strong>
                  <span>trato directo</span>
                </li>
                <li>
                  <strong>100%</strong>
                  <span>responsive</span>
                </li>
                <li>
                  <strong>3 niveles</strong>
                  <span>de servicio</span>
                </li>
              </ul>
            </div>

            <div className="hero-card">
              <div className="floating-card">
                <p className="card-label">Presentacion profesional</p>
                <h2>DevStudio by Matias Rojo</h2>
                <p>
                  Trabajo cada proyecto de manera personalizada para que tu negocio
                  tenga una web clara, moderna y preparada para transmitir confianza
                  desde el primer segundo.
                </p>
                <div className="card-tags">
                  <span>Personalizada</span>
                  <span>Profesional</span>
                  <span>Con foco comercial</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section className="section about">
            <div className="about-panel">
              <div className="about-copy">
                <p className="eyebrow">Sobre mi</p>
                <h2>Mi nombre es Matias Rojo y me dedico a crear paginas web que ayudan a dar una imagen profesional y vender mejor.</h2>
                <p>
                  Me gusta trabajar con emprendedores, negocios y marcas que quieren
                  verse serios en internet y tener una pagina que realmente los represente.
                  Cada proyecto lo encaro con una mirada visual, tecnica y comercial para
                  que tu sitio se vea bien, sea facil de usar y genere confianza.
                </p>
                <p>
                  Si estas empezando o quieres mejorar tu presencia online, puedo ayudarte
                  a construir una web clara, moderna y pensada para convertir visitas en
                  mensajes, consultas y ventas.
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

          <section className="section benefits">
            <div className="section-heading">
              <p className="eyebrow">Lo que ofrezco</p>
              <h2>Paginas pensadas para mostrar, convencer y vender.</h2>
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

          <section className="section portfolio" id="portfolio">
            <div className="section-heading">
              <p className="eyebrow">Portfolio</p>
              <h2>Algunos tipos de proyectos que puedo desarrollar para tu negocio.</h2>
            </div>

            <div className="portfolio-grid">
              {portfolioItems.map((item) => (
                <article key={item.title} className="portfolio-card">
                  <div className="portfolio-visual">
                    <img src={item.image} alt={item.title} />
                  </div>

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
          </section>

          <section className="section faq" id="faq">
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

          <section className="section" id="planes">
            <div className="section-heading">
              <p className="eyebrow">Planes</p>
              <h2>Elige el nivel de desarrollo que mejor se adapta a tu proyecto.</h2>
            </div>

            <div className="plans-grid">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`plan-card ${plan.featured ? "featured" : ""}`}
                >
                  <div className="plan-header">
                    <p className="plan-name">{plan.name}</p>
                    <h3>{plan.price}</h3>
                    <p className="plan-description">{plan.description}</p>
                  </div>

                  <ul className="feature-list">
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <a className="button plan-button" href="#contacto">
                    Solicitar este plan
                  </a>
                </article>
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

          <section className="section contact" id="contacto">
            <div className="contact-panel">
              <div>
                <p className="eyebrow">Contacto</p>
                <h2>Si ya tienes una idea, la convertimos en una pagina lista para vender.</h2>
                <p>
                  Puedes cambiar estos datos luego por tu WhatsApp, tu email o un
                  formulario real conectado a tu servicio favorito. Por ahora, la
                  pagina ya queda lista para que te contacten directo.
                </p>
              </div>

              <div className="contact-actions">
                <a className="button primary" href="mailto:maturojo123mdq@gmail.com">
                  maturojo123mdq@gmail.com
                </a>
                <a
                  className="button secondary"
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  2235954195
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="footer-grid">
            <div className="footer-brand">
              <p className="footer-title">DevStudio</p>
              <p>Design by Matias Rojo</p>
            </div>

            <div className="footer-links">
              <a href="#planes">Planes</a>
              <a href="#contacto">Contacto</a>
              <a href={`mailto:maturojo123mdq@gmail.com`}>Email</a>
            </div>

            <div className="footer-meta">
              <p>Desarrollo web a medida</p>
              <p>Dominio, hosting y SSL incluidos por 1 ano</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 DevStudio. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>

      <a
        className="whatsapp-float"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <span className="whatsapp-icon" aria-hidden="true">
          <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
            <path
              fill="currentColor"
              d="M19.11 17.21c-.29-.14-1.72-.85-1.99-.95-.27-.1-.46-.14-.66.14s-.75.95-.92 1.15c-.17.19-.34.22-.63.07-.29-.14-1.23-.45-2.34-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.66-1.59-.9-2.18-.24-.57-.49-.5-.66-.5h-.56c-.19 0-.51.07-.78.36-.27.29-1.02 1-.98 2.45.05 1.45 1.03 2.85 1.17 3.04.14.19 2.02 3.09 4.89 4.33.68.29 1.22.47 1.64.6.69.22 1.32.19 1.81.12.55-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.56-.34Z"
            />
            <path
              fill="currentColor"
              d="M16.03 3.2c-7.08 0-12.82 5.74-12.82 12.82 0 2.26.59 4.47 1.7 6.41L3.1 28.8l6.55-1.72a12.78 12.78 0 0 0 6.38 1.71h.01c7.08 0 12.82-5.74 12.82-12.82S23.11 3.2 16.03 3.2Zm0 23.45h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.89 1.02 1.04-3.79-.25-.39a10.66 10.66 0 1 1 8.9 4.87Z"
            />
          </svg>
        </span>
      </a>
    </>
  );
}

export default App;
