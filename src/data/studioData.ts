import wimpernClient from '../assets/images/wimpernverlaengerung-client.jpg';
import browLiftingClient from '../assets/images/brow-lifting-client.jpg';
import lashLiftingClient from '../assets/images/lash-lifting-client.jpg';

export type ServiceId = 'lash-lifting' | 'brow-lifting' | 'wimpernverlaengerung';

export interface StudioService {
  id: ServiceId;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  pricePlaceholder: string;
  durationPlaceholder: string;
  image: string;
  imageAlt: string;
}

export interface GalleryWorkItem {
  id: string;
  category: ServiceId;
  categoryLabel: string;
  title: string;
  caption: string;
  image: string;
  imageAlt: string;
  aspect: 'portrait' | 'landscape';
}

export interface PillarItem {
  index: string;
  title: string;
  description: string;
}

export const STUDIO_IMAGES = {
  hero: '/src/assets/images/hero_lash_brow_editorial_1795019999999.jpg',
  lashLifting: '/src/assets/images/service_lash_lifting_1795019999911.jpg',
  browLifting: '/src/assets/images/service_brow_lifting_1795020001358.jpg',
  wimpernverlaengerung: '/src/assets/images/service_wimpernverlaengerung_1795020001636.jpg',
  portrait: '/src/assets/images/gallery_transformation_portrait_1795020001811.jpg',
  ceoConvention: '/src/assets/images/ceo_convention_editorial_1795020001520.jpg',
} as const;

export const STUDIO_CONTACT = {
  brandName: 'BEAUTY EYEZ',
  studioDescriptor: 'LASH & BROW STUDIO',
  city: 'Nürnberg, Deutschland',
  instagramHandle: '@beauteyez.de',
  instagramUrl: 'https://www.instagram.com/beauteyez.de/',
  phonePlaceholder: 'Telefonische Auskunft auf Anfrage',
  addressPlaceholder: 'Nürnberg · Studio-Adresse nach Terminbestätigung',
  hoursPlaceholder: 'Flexible Termine nach persönlicher Vereinbarung',
  whatsappPlaceholder: 'Persönliche Abstimmung auf Anfrage',
} as const;

export const STUDIO_SERVICES: StudioService[] = [
  {
    id: 'lash-lifting',
    index: '01.',
    title: 'Lash Lifting',
    subtitle: 'Natürlicher Schwung vom Ansatz an',
    description:
      'Sanft geliftete Naturwimpern für einen offenen, frischen Blick.',
    highlights: [
      'Harmonischer Schwung für die eigenen Naturwimpern',
      'Optional mit tiefschwarzer Färbung und pflegender Versiegelung',
      'Geeignet für den natürlichen, mühelosen Alltagslook',
    ],
    pricePlaceholder: 'Individuelle Preisauskunft auf Anfrage',
    durationPlaceholder: 'Entspannte Einzelbehandlung inkl. Beratung',
    image: lashLiftingClient,
    imageAlt: 'Lash Lifting Ergebnis mit geschwungenen, glänzenden Naturwimpern bei Beauty Eyez Nürnberg',
  },
  {
    id: 'brow-lifting',
    index: '02.',
    title: 'Brow Lifting',
    subtitle: 'Definierte, weich geformte Brauenarchitektur',
    description:
      'Form und Fülle für gepflegte, natürlich definierte Augenbrauen.',
    highlights: [
      'Individuelle Vermessung und Formgebung der Brauenlinie',
      'Sanfte Laminierung für kontrollierte, federleichte Struktur',
      'Abgestimmtes Styling passend zu Teint und Haarfarbe',
    ],
    pricePlaceholder: 'Individuelle Preisauskunft auf Anfrage',
    durationPlaceholder: 'Präzise Formgebung inklusive Styling',
    image: browLiftingClient,
    imageAlt: 'Brow Lifting Ergebnis mit harmonisch geformten Augenbrauen im Beauty Eyez Studio',
  },
  {
    id: 'wimpernverlaengerung',
    index: '03.',
    title: 'Wimpernverlängerung',
    subtitle: 'Maßgeschneiderte Fülle und federleichte Eleganz',
    description:
      'Individuelle Wimpernextensions für natürliche bis ausdrucksstarke Fülle.',
    highlights: [
      'Präzise Einzel- oder Volumentechnik nach persönlicher Beratung',
      'Hoher Tragekomfort durch abgestimmte Längen und Biegungen',
      'Sorgfältige Vor- und Nachbereitung für langanhaltende Sauberkeit',
    ],
    pricePlaceholder: 'Preis je nach gewünschtem Set auf Anfrage',
    durationPlaceholder: 'Ausführliche Einzeltermin-Behandlung',
    image: wimpernClient,
    imageAlt: 'Wimpernverlängerung in entspannter Studio-Atmosphäre bei Beauty Eyez in Nürnberg',
  },
];

export const GALLERY_WORKS: GalleryWorkItem[] = [
  {
    id: 'work-1',
    category: 'lash-lifting',
    categoryLabel: 'Lash Lifting',
    title: 'Sanfter Schwung & Glanz',
    caption: 'Natürliche Anhebung der eigenen Wimpern für einen frischen, offenen Augenaufschlag.',
    image: lashLiftingClient,
    imageAlt: 'Lash Lifting Portfolio Aufnahme',
    aspect: 'landscape',
  },
  {
    id: 'work-2',
    category: 'brow-lifting',
    categoryLabel: 'Brow Lifting',
    title: 'Fein definierte Brauenlinie',
    caption: 'Ausgeglichene Symmetrie und weiche Textur unter Beibehaltung der natürlichen Dichte.',
    image: browLiftingClient,
    imageAlt: 'Brow Lifting Portfolio Aufnahme',
    aspect: 'landscape',
  },
  {
    id: 'work-3',
    category: 'wimpernverlaengerung',
    categoryLabel: 'Wimpernverlängerung',
    title: 'Federleichte Fülle',
    caption: 'Detailgenaue Applikation für einen harmonischen Übergang und angenehmes Tragegefühl.',
    image: wimpernClient,
    imageAlt: 'Wimpernverlängerung Portfolio Aufnahme',
    aspect: 'landscape',
  },
];

export const WHY_BEAUTY_EYEZ_PILLARS: PillarItem[] = [
  {
    index: '01.',
    title: 'Individuelle Aufmerksamkeit',
    description:
      'Jeder Termin beginnt mit einem ruhigen Gespräch und einem genauen Blick auf Ihre Gesichtsproportionen, Wünsche und Gewohnheiten.',
  },
  {
    index: '02.',
    title: 'Präzision und Qualität',
    description:
      'Sorgfältiges Arbeiten, hochwertige Materialien und höchste Hygienestandards bilden die Grundlage jeder Behandlung.',
  },
  {
    index: '03.',
    title: 'Professionelle Beauty-Behandlungen',
    description:
      'Spezialisierte Techniken rund um Lash Lifting, Brow Lifting und Wimpernverlängerung – abgestimmt auf die Empfindlichkeit der Augenpartie.',
  },
  {
    index: '04.',
    title: 'Liebe zum kleinsten Detail',
    description:
      'Vom exakten Winkel einzelner Härchen bis zur entspannten Atmosphäre im Studio zählt jede Nuance.',
  },
  {
    index: '05.',
    title: 'Unterstreichung der natürlichen Schönheit',
    description:
      'Unser Anspruch ist kein überladener Effekt, sondern eine stimmige Veredelung, die Ihre eigene Ausstrahlung hervorhebt.',
  },
];






