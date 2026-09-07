export const contactConfig = {
  whatsappNumber: "5492235954195",
  whatsappMessage:
    "Hola! Estuve viendo la pagina de DevStudio y queria consultar por una pagina web para mi negocio.",
  email: "maturojo123mdq@gmail.com",
  instagram: "",
  github: "",
};

export function getWhatsappLink(message = contactConfig.whatsappMessage) {
  return `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Herramientas", href: "#herramientas" },
  { label: "Como trabajamos", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export const heroIndicators = [
  "Diseno personalizado",
  "Adaptado a celulares",
  "Integracion con WhatsApp",
  "Optimizado para Google",
];

export const benefitPoints = [
  "Mostrar servicios o productos de forma ordenada.",
  "Centralizar horarios, ubicacion, contacto e informacion clave.",
  "Generar consultas sin depender solo de redes sociales.",
  "Transmitir una presencia profesional cuando alguien busca tu negocio.",
];

export const services = [
  {
    name: "Paginas web",
    description:
      "Para comercios, profesionales y empresas que necesitan una presencia online profesional, clara y preparada para recibir consultas.",
    cta: "Consultar por una web",
  },
  {
    name: "Catalogos online",
    description:
      "Para mostrar productos, imagenes e informacion, y facilitar consultas o pedidos directos desde WhatsApp.",
    cta: "Quiero un catalogo",
  },
  {
    name: "Sistemas personalizados",
    description:
      "Soluciones para stock, presupuestos, pedidos, clientes, administracion y procesos internos de tu negocio.",
    cta: "Hablar de mi sistema",
  },
];

export const projectGroups = [
  {
    name: "Mate&Co",
    logo: "/ecommercekit/logo.jpeg",
    logoAlt: "Logo de Mate&Co",
    description: "Ecommerce y panel administrativo para mostrar productos, vender y gestionar contenido.",
    projects: [
      {
        name: "Tienda online Mate&Co",
        category: "Ecommerce",
        description:
          "Sitio comercial con catalogo, carrito, checkout y secciones de marca para presentar productos y recibir pedidos.",
        image: "/ecommercekit/hero.jpeg",
        technologies: ["Catalogo", "Carrito", "Checkout"],
        url: "https://www.mateandcomdp.com.ar/",
      },
      {
        name: "Panel administrativo Mate&Co",
        category: "Sistema interno",
        description:
          "Panel para gestionar productos, revisar informacion comercial y administrar contenido clave del ecommerce.",
        image: "/mateco-admin/DashboardAdmin.png",
        technologies: ["Productos", "Dashboard", "Gestion"],
        gallery: [
          "/mateco-admin/AdminLogin.png",
          "/mateco-admin/DashboardAdmin.png",
          "/mateco-admin/ProductosAdmin.png",
          "/mateco-admin/EstidisticasADMIN.png",
          "/mateco-admin/ContenidoAdmin.png",
        ],
      },
    ],
  },
  {
    name: "Liga de Football Americano",
    logo: "/football-league/logo.png",
    logoAlt: "Logo de la Liga de Football Americano",
    description: "Sitio institucional deportivo con informacion, calendario, equipos e inscripciones.",
    projects: [
      {
        name: "Web de la liga",
        category: "Sitio institucional",
        description:
          "Web para presentar una liga deportiva con equipos, calendario, informacion institucional e inscripciones.",
        image: "/football-league/slide-1.png",
        technologies: ["Institucional", "Fixture", "Inscripciones"],
        url: "https://football-two-rouge.vercel.app/",
        gallery: [
          "/football-league/slide-1.png",
          "/football-league/slide-2.png",
          "/football-league/slide-3.png",
          "/football-league/slide-4.png",
          "/football-league/slide-5.png",
        ],
      },
    ],
  },
  {
    name: "Sur Maderas",
    logo: "/sur-maderas-logo.png",
    logoAlt: "Logo de Sur Maderas",
    description: "Herramientas e interfaces pensadas para tareas comerciales y gestion interna.",
    projects: [
      {
        name: "Generador de carteles",
        category: "Herramienta comercial",
        description:
          "Interfaz para buscar, filtrar y administrar productos con datos dinamicos, orientada a agilizar tareas internas.",
        image: "/portfolio-carteles-real.jpeg",
        technologies: ["Base de datos", "Filtros", "Administracion"],
      },
      {
        name: "Demo de landing comercial",
        category: "Placeholder editable",
        description:
          "Espacio preparado para reemplazar por un proximo proyecto real con descripcion, imagen, tecnologias y link.",
        image: "/portfolio-landing.svg",
        technologies: ["Responsive", "WhatsApp", "Conversion"],
        isPlaceholder: true,
      },
    ],
  },
];

export const tools = [
  {
    name: "Turnero online",
    description: "Reserva de turnos por dia y horario para negocios que trabajan con agenda.",
    demo: "/turnero/index.html",
    tags: ["Reservas", "Horarios", "WhatsApp"],
  },
  {
    name: "Catalogo digital",
    description: "Productos o servicios ordenados por categorias, con consulta directa por WhatsApp.",
    demo: "/catalogo/index.html",
    tags: ["Productos", "Categorias", "Pedidos"],
  },
  {
    name: "Cotizador inteligente",
    description: "Formulario guiado para recibir consultas mas completas desde el primer mensaje.",
    demo: "/cotizador/index.html",
    tags: ["Presupuestos", "Formulario", "Conversion"],
  },
  {
    name: "Menu digital",
    description: "Carta online para gastronomia con categorias, carrito simple y pedido por WhatsApp.",
    demo: "/menu-digital/index.html",
    tags: ["Gastronomia", "Carrito", "Pedidos"],
  },
  {
    name: "Calculadora de envios",
    description: "Calculo de costos por zona, monto minimo y reglas comerciales configurables.",
    demo: "/calculadora-envios/index.html",
    tags: ["Envios", "Zonas", "Reglas"],
  },
  {
    name: "Organizador",
    description: "PWA para ingresos, gastos y recordatorios, pensada para uso personal o interno.",
    demo: "/organizador/index.html",
    tags: ["PWA", "Gastos", "Recordatorios"],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Nos contas sobre tu negocio",
    text: "Analizamos que necesitas y que objetivo tiene la pagina.",
  },
  {
    number: "02",
    title: "Disenamos la propuesta",
    text: "Definimos estructura, estilo, contenido y funcionalidades.",
  },
  {
    number: "03",
    title: "Desarrollamos",
    text: "Construimos la web y la adaptamos para computadora, tablet y celular.",
  },
  {
    number: "04",
    title: "Publicamos",
    text: "La pagina queda online y lista para compartir con tus clientes.",
  },
];

export const reasons = [
  "Atencion personalizada",
  "Diseno a medida",
  "Responsive",
  "Acompanamiento despues de publicar",
];

export const budgetOptions = [
  {
    name: "Landing Page",
    description: "Una pagina profesional para presentar tu negocio y generar consultas.",
  },
  {
    name: "Web Profesional",
    description: "Una solucion mas completa con diferentes secciones y funcionalidades.",
  },
  {
    name: "Desarrollo personalizado",
    description: "Sistemas y soluciones creadas especificamente para las necesidades de tu negocio.",
  },
];
