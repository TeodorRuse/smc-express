/**
 * Fully responsive route map using CSS percentage positioning.
 * Every city is placed with % coordinates relative to the container.
 * Scales perfectly on any screen size, zoom level, or aspect ratio.
 */

const ALBA_IULIA = 'Alba Iulia';

interface City {
  /** Percentage from left (0–100) */
  x: number;
  /** Percentage from top (0–100) */
  y: number;
  name: string;
  capital?: boolean;
}

const cities: City[] = [
  // ── Scandinavia & Baltics — top ──
  { x: 27, y: 5,   name: 'Oslo',       capital: true },    // 0
  { x: 46, y: 4,   name: 'Stockholm',  capital: true },    // 1
  { x: 69, y: 6,   name: 'Helsinki',   capital: true },    // 2
  { x: 65, y: 16,  name: 'Tallinn',    capital: true },    // 3
  { x: 61, y: 26,  name: 'Riga',       capital: true },    // 4
  { x: 57, y: 37,  name: 'Vilnius',    capital: true },    // 5
  { x: 37, y: 13,  name: 'Copenhagen', capital: true },    // 6

  // ── Northern Europe ──
  { x: 18, y: 18,  name: 'Edinburgh' },                    // 7
  { x: 6,  y: 26,  name: 'Dublin',     capital: true },    // 8
  { x: 15, y: 33,  name: 'London',     capital: true },    // 9
  { x: 26, y: 28,  name: 'Amsterdam',  capital: true },    // 10
  { x: 26, y: 35,  name: 'Brussels',   capital: true },    // 11
  { x: 36, y: 25,  name: 'Hamburg' },                      // 12
  { x: 43, y: 29,  name: 'Berlin',     capital: true },    // 13
  { x: 34, y: 36,  name: 'Frankfurt' },                    // 14

  // ── East ──
  { x: 55, y: 31,  name: 'Warsaw',     capital: true },    // 15
  { x: 72, y: 30,  name: 'Minsk',      capital: true },    // 16
  { x: 83, y: 41,  name: 'Kyiv',       capital: true },    // 17

  // ── Central Europe ──
  { x: 22, y: 47,  name: 'Paris',      capital: true },    // 18
  { x: 28, y: 55,  name: 'Lyon' },                         // 19
  { x: 31, y: 49,  name: 'Bern',       capital: true },    // 20
  { x: 38, y: 46,  name: 'Munich' },                       // 21
  { x: 46, y: 44,  name: 'Vienna',     capital: true },    // 22
  { x: 44, y: 39,  name: 'Prague',     capital: true },    // 23
  { x: 50, y: 48,  name: 'Bratislava', capital: true },    // 24
  { x: 56, y: 52,  name: 'Budapest',   capital: true },    // 25

  // ── Romania — focal cluster ──
  { x: 66, y: 52,  name: 'Oradea' },                       // 26
  { x: 68, y: 57,  name: 'Cluj-Napoca' },                  // 27
  { x: 66, y: 63,  name: ALBA_IULIA },                     // 28  ★
  { x: 62, y: 61,  name: 'Timisoara' },                    // 29
  { x: 71, y: 61,  name: 'Sibiu' },                        // 30
  { x: 74, y: 58,  name: 'Brasov' },                       // 31
  { x: 79, y: 65,  name: 'Bucharest',  capital: true },    // 32
  { x: 77, y: 51,  name: 'Iasi' },                         // 33
  { x: 87, y: 62,  name: 'Constanta' },                    // 34
  { x: 84, y: 51,  name: 'Chisinau',   capital: true },    // 35
  { x: 64, y: 69,  name: 'Craiova' },                      // 36

  // ── Italy ──
  { x: 33, y: 59,  name: 'Milan' },                        // 37
  { x: 36, y: 72,  name: 'Rome',       capital: true },    // 38
  { x: 40, y: 79,  name: 'Naples' },                       // 39

  // ── Balkans ──
  { x: 43, y: 54,  name: 'Ljubljana',  capital: true },    // 40
  { x: 48, y: 59,  name: 'Zagreb',     capital: true },    // 41
  { x: 56, y: 66,  name: 'Belgrade',   capital: true },    // 42
  { x: 52, y: 72,  name: 'Sarajevo',   capital: true },    // 43
  { x: 69, y: 73,  name: 'Sofia',      capital: true },    // 44
  { x: 60, y: 79,  name: 'Skopje',     capital: true },    // 45
  { x: 54, y: 85,  name: 'Tirana',     capital: true },    // 46
  { x: 68, y: 89,  name: 'Athens',     capital: true },    // 47
  { x: 81, y: 75,  name: 'Istanbul' },                     // 48

  // ── Iberia ──
  { x: 4,  y: 62,  name: 'Madrid',     capital: true },    // 49
  { x: 10, y: 54,  name: 'Barcelona' },                    // 50
  { x: 14, y: 65,  name: 'Marseille' },                    // 51
  { x: 19, y: 74,  name: 'Bordeaux' },                     // 52
];

const routes: [number, number][] = [
  // Scandinavia arc
  [0, 6], [6, 1], [1, 2], [2, 3],
  // Baltics
  [3, 4], [4, 5],
  // Northern spine
  [6, 12], [12, 13], [13, 15], [15, 5],
  [12, 14], [14, 21],
  // UK-Benelux
  [7, 9], [8, 9], [9, 10], [10, 11], [11, 14],
  // East
  [5, 16], [16, 17], [15, 16],
  // France
  [18, 11], [18, 19], [19, 20], [20, 21],
  // Central Europe
  [21, 22], [22, 23], [23, 13], [22, 24], [24, 25],
  // Into Romania
  [25, 26], [26, 27], [27, 28], [28, 30], [30, 31],
  [31, 32], [32, 34], [27, 33], [33, 35], [35, 17],
  [28, 36], [29, 28], [29, 42],
  // Italy
  [20, 37], [37, 38], [38, 39], [37, 40],
  // Balkans
  [40, 41], [41, 42], [42, 44], [44, 32],
  [42, 43], [44, 45], [45, 46], [45, 47],
  [44, 48],
  // Iberia
  [49, 50], [50, 51], [51, 19],
  // Bridges
  [25, 29], [36, 44],
];

export function RouteMap() {
  return (
    <div className="hero__route-map">
      {/* Route lines — SVG overlay using % coordinates */}
      <svg className="hero__route-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        {routes.map(([a, b], i) => (
          <line
            key={`r-${i}`}
            className="hero__route-line"
            x1={cities[a].x} y1={cities[a].y}
            x2={cities[b].x} y2={cities[b].y}
            style={{ animationDelay: `${i * 0.03}s` }}
          />
        ))}
      </svg>

      {/* City dots — HTML divs with % positioning */}
      {cities.map((city, i) => {
        const isAlba = city.name === ALBA_IULIA;
        return (
          <div
            key={i}
            className={`hero__pin${city.capital ? ' hero__pin--capital' : ''}${isAlba ? ' hero__pin--alba' : ''}`}
            style={{
              left: `${city.x}%`,
              top: `${city.y}%`,
              animationDelay: `${0.15 + i * 0.012}s`,
            }}
          >
            {isAlba && <span className="hero__pin-ring" />}
            {isAlba && <span className="hero__pin-ring hero__pin-ring--delayed" />}
            <span className="hero__pin-dot" />
            {isAlba && <span className="hero__pin-core" />}
            <span className="hero__pin-label">{city.name}</span>
          </div>
        );
      })}
    </div>
  );
}
