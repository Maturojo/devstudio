const plans = [
  {
    name: "Basico",
    price: "Precio a definir",
    description: "Ideal para presencia digital rapida y profesional.",
    features: [
      "Landing page de una sola seccion o varias secciones simples",
      "Diseno responsive para celular y PC",
      "Boton de contacto a WhatsApp o formulario basico",
      "Entrega rapida para emprendedores o negocios pequenos",
    ],
  },
  {
    name: "Intermedio",
    price: "Precio a definir",
    description: "Para negocios que necesitan una web mas completa y persuasiva.",
    featured: true,
    features: [
      "Sitio con multiples paginas o secciones avanzadas",
      "Animaciones suaves y mejor estructura visual",
      "Galeria, testimonios, servicios y preguntas frecuentes",
      "Optimizacion de contenido para vender mejor",
    ],
  },
  {
    name: "Avanzado",
    price: "Precio a definir",
    description: "Pensado para proyectos que requieren mas logica y personalizacion.",
    features: [
      "Paneles, integraciones o funcionalidades a medida",
      "Formularios complejos, reservas o catalogos dinamicos",
      "Arquitectura escalable para crecimiento futuro",
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
              <h1>Soy Matias Rojo y creo paginas web pensadas para dar confianza y generar ventas.</h1>
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
      </div>

      <a
        className="whatsapp-float"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <span className="whatsapp-icon" aria-hidden="true">
          W
        </span>
        <span className="whatsapp-text">WhatsApp</span>
      </a>
    </>
  );
}

export default App;
