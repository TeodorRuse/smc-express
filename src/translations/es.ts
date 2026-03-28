import type { Translations } from './types';

/** Spanish translations */
export const es: Translations = {
  nav: { services: 'Servicios', about: 'Nosotros', fleet: 'Flota', coverage: 'Cobertura', careers: 'Empleo', contact: 'Contacto', getQuote: 'Envía Con Nosotros' },
  hero: {
    eyebrow: 'Velocidad. Seguridad. Entregado.',
    titleLine1: 'Tu Carga',
    titleLine2: 'Nuestra Misión',
    subtitle: 'Soluciones de transporte mundial basadas en velocidad y seguridad — entregamos lo que importa, donde sea necesario.',
    ctaPrimary: 'Envía Con Nosotros', ctaSecondary: 'Explorar Servicios', scroll: 'Desplazar',
  },
  stats: { clients: 'Clientes Satisfechos', onTime: 'Tasa de Puntualidad', vehicles: 'Vehículos', countries: 'Países Cubiertos' },
  services: {
    tag: 'Lo Que Hacemos', title: 'Servicios Logísticos\nCompletos',
    desc: 'Desde un solo palet hasta una cadena de suministro completa — SMC Express entrega precisión en cada etapa.',
    items: [
      { title: 'Transporte de Carga', desc: 'Soluciones de carga completa y parcial para mercancías nacionales y transfronterizas con seguimiento en tiempo real y plazos garantizados.' },
      { title: 'Entrega Rápida', desc: 'Envíos urgentes gestionados con enrutamiento prioritario, conductores dedicados y opciones de entrega en el mismo día o al día siguiente.' },
      { title: 'Seguridad de la Carga', desc: 'Su carga está asegurada y protegida en nuestros vehículos durante todo el trayecto. Sistemas de fijación profesionales y monitoreo continuo.' },
      { title: 'Transporte Internacional', desc: 'Transporte transfronterizo europeo con gestión completa de aduanas y documentación en países de la UE.' },
      { title: 'Consultoría Logística', desc: 'Optimización de rutas, análisis de costos y consultoría de cadena de suministro — le ayudamos a planificar una logística más inteligente.' },
      { title: 'Logística Dedicada', desc: 'Una flota y conductor dedicados exclusivamente a su empresa — rutas personalizadas, horarios flexibles y vehículos adaptados a sus necesidades.' },
    ],
  },
  about: {
    tag: 'Quiénes Somos', title: 'Tu Carga.\nNuestra Promesa.',
    body1: 'Fundada en __YEAR__, SMC Express comenzó como __ORIGIN_STORY__. Lo que empezó siendo pequeño ha crecido gracias a la dedicación, el trabajo duro y una convicción simple: tu carga merece el mismo cuidado que daríamos a la nuestra.',
    body2: 'Cada envío que gestionamos lleva la promesa de alguien a su cliente. Entendemos esa responsabilidad. Por eso invertimos en nuestra gente, mantenemos nuestra flota con los más altos estándares y estamos disponibles siempre que nos necesites. Con SMC Express, no eres solo un cliente — eres un socio.',
    pillars: ['Seguridad de la Carga', 'Flota Moderna', 'Cobertura Europea', 'Experiencia & Confianza'],
    badge: 'Años de Excelencia',
  },
  fleet: {
    tag: 'Nuestra Flota', title: 'Moderna. Mantenida.\nLista para la Misión.',
    footnote: 'Todos los vehículos equipados con GPS, sensores de carga y sistemas de telemetría. Antigüedad media de la flota: 3,2 años.',
    items: [
      { type: '__VEHICLE_TYPE_1__', capacity: '__CAPACITY_1__', count: '__COUNT_1__', tag: '__TAG_1__' },
      { type: '__VEHICLE_TYPE_2__', capacity: '__CAPACITY_2__', count: '__COUNT_2__', tag: '__TAG_2__' },
      { type: '__VEHICLE_TYPE_3__', capacity: '__CAPACITY_3__', count: '__COUNT_3__', tag: '__TAG_3__' },
      { type: '__VEHICLE_TYPE_4__', capacity: '__CAPACITY_4__', count: '__COUNT_4__', tag: '__TAG_4__' },
    ],
    capacity: 'Capacidad', fleetSize: 'Tamaño de Flota',
  },
  coverage: {
    tag: 'Cobertura', title: '28 Países.\nUna Red.',
    body: 'Nuestra red paneuropea se extiende de Lisboa a Bucarest y de Estocolmo a Atenas — con ubicaciones de centros estratégicos en Varsovia, Viena, Lyon y Múnich.',
    regions: ['Europa Occidental', 'Europa Central & Oriental', 'Estados Bálticos', 'Región Balcánica', 'Escandinavia'],
    mapLabel: 'Mapa de Cobertura Europea',
  },
  careers: {
    tag: 'Únete', title: 'Construye el Futuro\nde la Logística',
    subtitle: 'Somos un equipo de profesionales apasionados que están dando forma a cómo se mueve Europa. Si te apasionan las operaciones, la tecnología o el éxito del cliente — hay un lugar para ti en SMC Express.',
    openRoles: 'Puestos Abiertos', applyNow: 'Aplicar Ahora',
    roles: [
      { title: '__ROLE_1_TITLE__', location: '__ROLE_1_LOCATION__', type: '__ROLE_1_TYPE__' },
      { title: '__ROLE_2_TITLE__', location: '__ROLE_2_LOCATION__', type: '__ROLE_2_TYPE__' },
      { title: '__ROLE_3_TITLE__', location: '__ROLE_3_LOCATION__', type: '__ROLE_3_TYPE__' },
    ],
    perksTitle: 'Por Qué SMC Express',
    perks: ['Salario competitivo y bonificaciones de rendimiento', 'Puestos flexibles y remote-friendly', 'Movilidad profesional paneuropea', 'Herramientas modernas y stack tecnológico', 'Cobertura de salud y beneficios de bienestar', '30 días de vacaciones anuales'],
    cta: '¿No encuentras el puesto adecuado? Envíanos tu CV de todas formas.',
    ctaBtn: 'Solicitud Abierta',
  },
  testimonials: {
    tag: 'Historias de Clientes', title: 'Confiado por Líderes del Sector',
    items: [
      { quote: 'Cambiar a SMC Express redujo nuestros costes logísticos un 22% y prácticamente eliminó los fallos de entrega en toda nuestra red de distribución europea.', author: '__CLIENT_1_NAME__', role: 'Directora de Cadena de Suministro, __CLIENT_1_COMPANY__' },
      { quote: 'Su solución de cadena de frío nos dio la confianza para expandirnos a nuevos mercados. La visibilidad y fiabilidad son incomparables.', author: '__CLIENT_2_NAME__', role: 'VP de Operaciones, __CLIENT_2_COMPANY__' },
      { quote: 'Desde la primera llamada hasta las operaciones diarias, el equipo de SMC Express trata nuestra carga como propia.', author: '__CLIENT_3_NAME__', role: 'CEO, __CLIENT_3_COMPANY__' },
    ],
  },
  contact: {
    tag: 'Contáctanos', title: 'Movamos Algo\nJuntos',
    body: 'Cuéntanos sobre tu envío y tendremos una propuesta personalizada en tu bandeja de entrada en 4 horas hábiles.',
    phone: '__PHONE__', email: '__EMAIL__', address: '__ADDRESS__',
    form: {
      name: 'Nombre Completo', company: 'Empresa', emailLabel: 'Correo', origin: 'Origen', destination: 'Destino', cargo: 'Detalles de Carga',
      namePh: 'Tu nombre', companyPh: 'Tu empresa', emailPh: 'tu@empresa.es', originPh: 'Ciudad / País', destPh: 'Ciudad / País', cargoPh: 'Peso, dimensiones, requisitos especiales...', submit: 'Enviar Solicitud',
    },
  },
  footer: {
    tagline: 'Logística de precisión para un mundo en movimiento.',
    company: 'Empresa', companyLinks: ['Sobre Nosotros', 'Empleo', 'Prensa', 'Certificaciones'],
    services: 'Servicios', serviceLinks: ['Carga', 'Express', 'Almacenamiento', 'Cadena de Frío'],
    support: 'Soporte', supportLinks: ['Rastrear Envío', 'FAQ', 'Legal', 'Privacidad'],
    legal: '© 2026 SMC Express __LEGAL_NAME__ — Todos los derechos reservados.',
    vat: 'Registrado en Rumanía · IVA __VAT_NUMBER__',
  },
};
