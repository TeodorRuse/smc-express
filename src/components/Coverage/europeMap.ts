/* ─── Europe dot-matrix map data ─────────────────────────────
 *  Generates a hex-packed grid of dots clipped to simplified
 *  European landmass polygons via ray-casting.
 * ──────────────────────────────────────────────────────────── */

/* Ray-cast point-in-polygon test */
function pip(x: number, y: number, poly: number[][]): boolean {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi)
      inside = !inside;
  }
  return inside;
}

/* ── Simplified Europe region polygons (480 × 420 viewBox) ── */
const EUROPE: number[][][] = [
  // Scandinavian Peninsula (Norway + Sweden)
  [
    [230, 8], [260, 2], [295, 5], [315, 18], [328, 40],
    [325, 65], [318, 88], [305, 105], [288, 112], [275, 105],
    [268, 115], [264, 126], [256, 115], [250, 96], [244, 74],
    [238, 50], [230, 28],
  ],
  // Finland
  [
    [318, 5], [362, 2], [390, 24], [396, 52], [390, 74],
    [378, 92], [366, 106], [350, 116], [336, 116], [324, 100],
    [318, 76], [314, 50], [314, 24],
  ],
  // Denmark
  [
    [250, 95], [286, 92], [294, 106], [288, 122], [274, 126],
    [258, 122], [248, 110],
  ],
  // Great Britain
  [
    [90, 56], [124, 48], [148, 56], [162, 74], [170, 96],
    [170, 124], [164, 148], [154, 166], [138, 174], [120, 172],
    [104, 162], [92, 146], [82, 124], [78, 100], [82, 78],
  ],
  // Ireland
  [
    [42, 82], [70, 70], [90, 84], [94, 108], [90, 132],
    [76, 146], [56, 152], [38, 138], [32, 116], [34, 96],
  ],
  // France + Benelux
  [
    [102, 168], [128, 152], [156, 138], [188, 128], [214, 120],
    [238, 128], [240, 148], [234, 170], [230, 192], [234, 214],
    [238, 236], [234, 256], [208, 264], [184, 268], [160, 272],
    [138, 268], [124, 256], [112, 240], [106, 218], [98, 196],
    [98, 178],
  ],
  // Iberian Peninsula
  [
    [30, 246], [70, 234], [102, 232], [138, 242], [160, 262],
    [170, 284], [160, 304], [142, 322], [120, 332], [96, 340],
    [68, 344], [46, 332], [30, 320], [26, 296], [26, 268],
  ],
  // Central Europe (Germany → Poland → Czech → Austria → Switzerland → Hungary)
  [
    [214, 116], [256, 112], [298, 116], [340, 116], [378, 124],
    [402, 138], [414, 162], [420, 190], [416, 218], [406, 236],
    [386, 242], [362, 236], [336, 228], [312, 224], [292, 216],
    [274, 208], [262, 196], [252, 178], [244, 160], [238, 140],
    [224, 124],
  ],
  // Romania + Bulgaria + Moldova
  [
    [366, 214], [406, 210], [432, 228], [438, 260], [428, 282],
    [408, 290], [386, 286], [368, 276], [358, 256], [358, 234],
  ],
  // Italian Peninsula
  [
    [234, 246], [256, 240], [280, 250], [296, 270], [306, 292],
    [314, 314], [306, 332], [292, 342], [276, 334], [266, 318],
    [256, 298], [248, 278], [240, 262],
  ],
  // Balkans (Croatia, Serbia, Bosnia, Albania, Montenegro)
  [
    [298, 240], [330, 234], [358, 246], [374, 268], [376, 290],
    [366, 304], [348, 308], [330, 304], [316, 292], [302, 276],
    [294, 258],
  ],
  // Greece + Peloponnese
  [
    [336, 300], [368, 292], [386, 308], [394, 330], [388, 350],
    [378, 368], [362, 372], [346, 362], [338, 340], [332, 320],
  ],
  // Baltic States (Estonia, Latvia, Lithuania)
  [
    [346, 76], [386, 72], [402, 90], [404, 114], [396, 130],
    [380, 135], [358, 130], [342, 120], [338, 104], [342, 86],
  ],
  // Sicily
  [
    [268, 332], [304, 326], [314, 342], [302, 356], [274, 354], [262, 342],
  ],
  // Sardinia
  [
    [224, 280], [244, 276], [248, 300], [240, 318], [224, 314], [220, 296],
  ],
  // Corsica
  [
    [222, 254], [238, 250], [240, 272], [234, 280], [222, 276],
  ],
];

/* ── Dot grid generation (hex-packed) ───────────────────────── */
const STEP = 9;
const HALF = STEP / 2;
const VERT = STEP * 0.866;

export interface Dot { x: number; y: number }

export const bgDots: Dot[] = [];

let row = 0;
for (let y = 4; y < 420; y += VERT) {
  const xOff = (row % 2) * HALF;
  for (let x = 4 + xOff; x < 480; x += STEP) {
    if (EUROPE.some(poly => pip(x, y, poly))) {
      bgDots.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
  }
  row++;
}

/* ── Labelled cities ────────────────────────────────────────── */
export interface City {
  name: string;
  x: number;
  y: number;
  hub?: boolean;
  capital?: boolean;
  alba?: boolean;
}

export const cities: City[] = [
  // SMC HQ
  { name: 'Alba Iulia', x: 370, y: 232, alba: true },
  // SMC Express hubs
  { name: 'Warsaw',     x: 340, y: 160, hub: true },
  { name: 'Vienna',     x: 306, y: 206, hub: true },
  { name: 'Lyon',       x: 192, y: 240, hub: true },
  { name: 'Munich',     x: 264, y: 200, hub: true },
  // Country capitals
  { name: 'London',     x: 140, y: 144, capital: true },
  { name: 'Paris',      x: 180, y: 186, capital: true },
  { name: 'Madrid',     x: 95,  y: 298, capital: true },
  { name: 'Lisbon',     x: 48,  y: 314, capital: true },
  { name: 'Berlin',     x: 278, y: 142, capital: true },
  { name: 'Rome',       x: 272, y: 294, capital: true },
  { name: 'Athens',     x: 370, y: 344, capital: true },
  { name: 'Bucharest',  x: 396, y: 252, capital: true },
  { name: 'Stockholm',  x: 298, y: 56, capital: true },
  { name: 'Helsinki',   x: 366, y: 52, capital: true },
  { name: 'Dublin',     x: 62,  y: 114, capital: true },
  { name: 'Copenhagen', x: 274, y: 108, capital: true },
  { name: 'Prague',     x: 284, y: 170, capital: true },
  { name: 'Budapest',   x: 326, y: 218, capital: true },
  { name: 'Amsterdam',  x: 214, y: 136, capital: true },
  { name: 'Brussels',   x: 204, y: 156, capital: true },
  { name: 'Bern',       x: 230, y: 216, capital: true },
  { name: 'Zagreb',     x: 308, y: 246, capital: true },
  { name: 'Oslo',       x: 260, y: 78, capital: true },
];

/* ── Routes connecting capitals + hubs ──────────────────────── */
export const routes: [string, string][] = [
  // Hub-to-hub backbone
  ['Lyon', 'Munich'],
  ['Munich', 'Vienna'],
  ['Vienna', 'Warsaw'],
  ['Vienna', 'Alba Iulia'],
  ['Alba Iulia', 'Bucharest'],
  // Western Europe
  ['Lisbon', 'Madrid'],
  ['Madrid', 'Paris'],
  ['Paris', 'Lyon'],
  ['Paris', 'Brussels'],
  ['Brussels', 'Amsterdam'],
  ['Amsterdam', 'Berlin'],
  ['Paris', 'London'],
  ['London', 'Dublin'],
  ['London', 'Amsterdam'],
  // Central corridor
  ['Berlin', 'Warsaw'],
  ['Berlin', 'Prague'],
  ['Prague', 'Vienna'],
  ['Munich', 'Bern'],
  ['Bern', 'Lyon'],
  // South
  ['Lyon', 'Rome'],
  ['Munich', 'Rome'],
  ['Rome', 'Athens'],
  ['Rome', 'Zagreb'],
  ['Zagreb', 'Budapest'],
  ['Budapest', 'Vienna'],
  ['Budapest', 'Bucharest'],
  ['Bucharest', 'Athens'],
  // North
  ['Copenhagen', 'Berlin'],
  ['Copenhagen', 'Stockholm'],
  ['Stockholm', 'Helsinki'],
  ['Stockholm', 'Oslo'],
  ['Oslo', 'Copenhagen'],
  ['Warsaw', 'Helsinki'],
];
