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
  stats: { tonnes: 'Toneladas Transportadas', onTime: 'Tasa de Puntualidad', vehicles: 'Vehículos', countries: 'Países Cubiertos' },
  services: {
    tag: 'Lo Que Hacemos', title: 'Servicios Logísticos\nCompletos',
    desc: 'Desde un solo palet hasta una cadena de suministro completa — SMC Express entrega precisión en cada etapa.',
    items: [
      { title: 'Transporte de Carga', desc: 'Soluciones de carga completa y parcial para mercancías nacionales y transfronterizas con seguimiento en tiempo real.' },
      { title: 'Entrega Express', desc: 'Envíos urgentes gestionados con enrutamiento prioritario y opciones de entrega en el mismo día o al día siguiente.' },
      { title: 'Almacenamiento', desc: 'Instalaciones de almacenamiento seguras y climatizadas con gestión integrada de inventario.' },
      { title: 'Última Milla', desc: 'Redes de entrega urbanas y suburbanas optimizadas para velocidad y precisión.' },
      { title: 'Cadena de Frío', desc: 'Transporte con monitoreo de temperatura para productos perecederos y farmacéuticos.' },
      { title: 'Soluciones Personalizadas', desc: 'Arquitectura logística a medida construida alrededor de su modelo operativo.' },
    ],
  },
  about: {
    tag: 'Quiénes Somos', title: 'Construidos sobre Confianza.\nImpulsados por Precisión.',
    body1: 'Fundada en __YEAR__, SMC Express comenzó como __ORIGIN_STORY__. Años de mejora operativa nos han convertido en un socio logístico de confianza.',
    body2: 'Nuestra filosofía es simple: cada envío lleva la promesa de alguien a su cliente. Tomamos esa responsabilidad en serio.',
    pillars: ['Certificado ISO 9001:2015', 'Centro Operativo 24/7', 'Gestores de Cuenta Dedicados', 'Seguimiento de Carga en Tiempo Real'],
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
