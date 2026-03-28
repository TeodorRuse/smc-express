import type { Translations } from './types';

/** French translations */
export const fr: Translations = {
  nav: { services: 'Services', about: 'À propos', fleet: 'Flotte', coverage: 'Couverture', careers: 'Carrières', contact: 'Contact', getQuote: 'Expédiez Avec Nous' },
  hero: {
    eyebrow: 'Vitesse. Sécurité. Livré.',
    titleLine1: 'Votre Cargo',
    titleLine2: 'Notre Mission',
    subtitle: 'Solutions de fret mondiales fondées sur la vitesse et la sécurité — nous livrons ce qui compte, où que ce soit.',
    ctaPrimary: 'Expédiez Avec Nous', ctaSecondary: 'Explorer les Services', scroll: 'Défiler',
  },
  stats: { tonnes: 'Tonnes Transportées', onTime: 'Taux de Ponctualité', vehicles: 'Véhicules', countries: 'Pays Couverts' },
  services: {
    tag: 'Ce Que Nous Faisons', title: 'Services Logistiques\nComplets',
    desc: 'D\'une seule palette à une refonte complète de la chaîne d\'approvisionnement — SMC Express livre la précision à chaque étape.',
    items: [
      { title: 'Transport de Fret', desc: 'Solutions de chargement complet et partiel pour les marchandises nationales et transfrontalières avec suivi en temps réel et délais garantis.' },
      { title: 'Livraison Rapide', desc: 'Expéditions urgentes gérées avec routage prioritaire, chauffeurs dédiés et options de livraison le jour même ou le lendemain.' },
      { title: 'Sécurité du Fret', desc: 'Votre marchandise est sécurisée et protégée dans nos véhicules tout au long du trajet. Systèmes de fixation professionnels et surveillance continue.' },
      { title: 'Transport International', desc: 'Transport transfrontalier européen avec gestion complète des douanes et documentation dans les pays de l\'UE.' },
      { title: 'Conseil Logistique', desc: 'Optimisation des itinéraires, analyse des coûts et conseil en chaîne d\'approvisionnement — nous vous aidons à planifier une logistique plus intelligente.' },
      { title: 'Logistique Dédiée', desc: 'Une flotte et un chauffeur dédiés exclusivement à votre entreprise — itinéraires personnalisés, horaires flexibles et véhicules adaptés.' },
    ],
  },
  about: {
    tag: 'Qui Nous Sommes', title: 'Fondés sur la Confiance.\nPortés par la Précision.',
    body1: 'Fondée en __YEAR__, SMC Express a commencé comme __ORIGIN_STORY__. Des années d\'amélioration opérationnelle nous ont transformés en un partenaire logistique de confiance.',
    body2: 'Notre philosophie est simple : chaque expédition porte la promesse de quelqu\'un envers son client. Nous prenons cette responsabilité au sérieux.',
    pillars: ['Certifié ISO 9001:2015', 'Centre Opérationnel 24h/7j', 'Responsables de Compte Dédiés', 'Suivi de Fret en Temps Réel'],
    badge: 'Années d\'Excellence',
  },
  fleet: {
    tag: 'Notre Flotte', title: 'Moderne. Entretenue.\nPrête à la Mission.',
    footnote: 'Tous les véhicules équipés de GPS, capteurs de charge et systèmes de télémétrie. Âge moyen de la flotte: 3,2 ans.',
    items: [
      { type: '__VEHICLE_TYPE_1__', capacity: '__CAPACITY_1__', count: '__COUNT_1__', tag: '__TAG_1__' },
      { type: '__VEHICLE_TYPE_2__', capacity: '__CAPACITY_2__', count: '__COUNT_2__', tag: '__TAG_2__' },
      { type: '__VEHICLE_TYPE_3__', capacity: '__CAPACITY_3__', count: '__COUNT_3__', tag: '__TAG_3__' },
      { type: '__VEHICLE_TYPE_4__', capacity: '__CAPACITY_4__', count: '__COUNT_4__', tag: '__TAG_4__' },
    ],
    capacity: 'Capacité', fleetSize: 'Taille de Flotte',
  },
  coverage: {
    tag: 'Couverture', title: '28 Pays.\nUn Réseau.',
    body: 'Notre réseau paneuropéen s\'étend de Lisbonne à Bucarest et de Stockholm à Athènes — avec des hubs stratégiques à Varsovie, Vienne, Lyon et Munich.',
    regions: ['Europe de l\'Ouest', 'Europe Centrale & de l\'Est', 'États Baltes', 'Région Balkanique', 'Scandinavie'],
    mapLabel: 'Carte de Couverture Européenne',
  },
  careers: {
    tag: 'Rejoignez-nous', title: 'Construisez l\'Avenir\nde la Logistique',
    subtitle: 'Nous sommes une équipe de professionnels passionnés qui façonnent la façon dont l\'Europe bouge. Si vous êtes passionné par les opérations, la technologie ou le succès client — il y a une place pour vous chez SMC Express.',
    openRoles: 'Postes Ouverts', applyNow: 'Postuler Maintenant',
    roles: [
      { title: '__ROLE_1_TITLE__', location: '__ROLE_1_LOCATION__', type: '__ROLE_1_TYPE__' },
      { title: '__ROLE_2_TITLE__', location: '__ROLE_2_LOCATION__', type: '__ROLE_2_TYPE__' },
      { title: '__ROLE_3_TITLE__', location: '__ROLE_3_LOCATION__', type: '__ROLE_3_TYPE__' },
    ],
    perksTitle: 'Pourquoi SMC Express',
    perks: ['Salaire compétitif et primes de performance', 'Postes flexibles et remote-friendly', 'Mobilité de carrière paneuropéenne', 'Outils modernes et stack technologique', 'Couverture santé et avantages bien-être', '30 jours de congés annuels'],
    cta: 'Vous ne trouvez pas le bon poste ? Envoyez-nous votre CV quand même.',
    ctaBtn: 'Candidature Spontanée',
  },
  testimonials: {
    tag: 'Témoignages Clients', title: 'Approuvé par les Leaders du Secteur',
    items: [
      { quote: 'Passer à SMC Express a réduit nos coûts logistiques de 22% et pratiquement éliminé les échecs de livraison dans notre réseau de distribution européen.', author: '__CLIENT_1_NAME__', role: 'Directrice Chaîne d\'Approvisionnement, __CLIENT_1_COMPANY__' },
      { quote: 'Leur solution de chaîne du froid nous a donné la confiance d\'expansion vers de nouveaux marchés. La visibilité et la fiabilité sont incomparables.', author: '__CLIENT_2_NAME__', role: 'VP Opérations, __CLIENT_2_COMPANY__' },
      { quote: 'Du premier appel aux opérations quotidiennes, l\'équipe SMC Express traite notre fret comme le leur. Ce type de partenariat est rare.', author: '__CLIENT_3_NAME__', role: 'PDG, __CLIENT_3_COMPANY__' },
    ],
  },
  contact: {
    tag: 'Nous Contacter', title: 'Bougeons\nEnsemble',
    body: 'Parlez-nous de votre expédition et nous aurons une proposition sur mesure dans votre boîte de réception dans les 4 heures ouvrables.',
    phone: '__PHONE__', email: '__EMAIL__', address: '__ADDRESS__',
    form: {
      name: 'Nom Complet', company: 'Entreprise', emailLabel: 'E-mail', origin: 'Origine', destination: 'Destination', cargo: 'Détails de la Marchandise',
      namePh: 'Votre nom', companyPh: 'Votre entreprise', emailPh: 'vous@entreprise.fr', originPh: 'Ville / Pays', destPh: 'Ville / Pays', cargoPh: 'Poids, dimensions, exigences spéciales...', submit: 'Envoyer la Demande',
    },
  },
  footer: {
    tagline: 'Logistique de précision pour un monde en mouvement.',
    company: 'Entreprise', companyLinks: ['À propos', 'Carrières', 'Presse', 'Certifications'],
    services: 'Services', serviceLinks: ['Fret', 'Express', 'Entreposage', 'Chaîne du Froid'],
    support: 'Support', supportLinks: ['Suivre Expédition', 'FAQ', 'Mentions Légales', 'Confidentialité'],
    legal: '© 2026 SMC Express __LEGAL_NAME__ — Tous droits réservés.',
    vat: 'Enregistré en Roumanie · TVA __VAT_NUMBER__',
  },
};
