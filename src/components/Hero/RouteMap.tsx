/**
 * Responsive constellation map — Europe only.
 * Map weighted to the right. Left cities pushed to edges
 * to avoid overlapping the hero title text (x 0–42%, y 15–50%).
 * All coordinates are % of the container.
 */

const ALBA_IULIA = 'Alba Iulia';

interface City { x: number; y: number; name: string; capital?: boolean }

const cities: City[] = [
  // ═══════════════════════════════════════════
  //  LEFT EDGE — tiny dots along the margin,
  //  BELOW the title (y > 55) or ABOVE it (y < 12)
  // ═══════════════════════════════════════════

  // Top-left (above title)
  { x: 2,   y: 4,   name: 'Reykjavik', capital: true }, // 0
  { x: 10,  y: 6,   name: 'Edinburgh' },             // 1
  { x: 5,   y: 10,  name: 'Glasgow' },               // 2
  { x: 14,  y: 10,  name: 'Manchester' },             // 3

  // Left edge (well below buttons, y > 62)
  { x: -2,  y: 66,  name: 'Lisbon',    capital: true }, // 4
  { x: 3,   y: 60,  name: 'Porto' },                 // 5
  { x: 8,   y: 70,  name: 'Madrid',    capital: true }, // 6
  { x: 4,   y: 76,  name: 'Seville' },               // 7
  { x: 10,  y: 74,  name: 'Malaga' },                // 8
  { x: 6,   y: 66,  name: 'Valencia' },              // 9
  { x: 12,  y: 78,  name: 'Toulouse' },              // 10
  { x: 16,  y: 74,  name: 'Bordeaux' },              // 11

  // Far bottom-left
  { x: 4,   y: 84,  name: 'Casablanca' },            // 12

  // ═══════════════════════════════════════════
  //  CENTER-LEFT — pushed right to x ~20–30
  //  These sit at the boundary, mostly below title
  // ═══════════════════════════════════════════

  // UK → continent bridge (y < 15 or y > 50)
  { x: 18,  y: 8,   name: 'Dublin',    capital: true }, // 13
  { x: 20,  y: 14,  name: 'London',    capital: true }, // 14
  { x: 15,  y: 12,  name: 'Birmingham' },            // 15
  { x: 22,  y: 10,  name: 'Calais' },                // 16

  // France & Benelux (y < 14 or y > 60)
  { x: 26,  y: 8,   name: 'Amsterdam', capital: true }, // 17
  { x: 28,  y: 14,  name: 'Brussels',  capital: true }, // 18
  { x: 25,  y: 62,  name: 'Paris',     capital: true }, // 19
  { x: 28,  y: 68,  name: 'Lyon' },                  // 20
  { x: 24,  y: 72,  name: 'Marseille' },             // 21
  { x: 28,  y: 76,  name: 'Nice' },                  // 22
  { x: 24,  y: 66,  name: 'Strasbourg' },            // 23
  { x: 20,  y: 70,  name: 'Nantes' },                // 24
  { x: 30,  y: 18,  name: 'Luxembourg', capital: true }, // 25
  { x: 22,  y: 64,  name: 'Dijon' },                 // 26
  { x: 18,  y: 62,  name: 'Le Havre' },              // 27
  { x: 30,  y: 80,  name: 'Geneva' },                // 28

  // ═══════════════════════════════════════════
  //  CENTER — Germany, Scandinavia, Switzerland
  //  (x 30–45, spread vertically)
  // ═══════════════════════════════════════════

  // Scandinavia (top)
  { x: 32,  y: 2,   name: 'Oslo',      capital: true }, // 29
  { x: 38,  y: 6,   name: 'Copenhagen', capital: true }, // 30
  { x: 47,  y: 2,   name: 'Stockholm', capital: true }, // 31
  { x: 40,  y: 3,   name: 'Gothenburg' },            // 32
  { x: 36,  y: 2,   name: 'Bergen' },                // 33
  { x: 44,  y: 5,   name: 'Malmö' },                 // 34
  { x: 49,  y: 8,   name: 'Aarhus' },                // 35

  // Germany
  { x: 34,  y: 12,  name: 'Hamburg' },                // 36
  { x: 40,  y: 16,  name: 'Berlin',    capital: true }, // 37
  { x: 34,  y: 20,  name: 'Hannover' },              // 38
  { x: 32,  y: 16,  name: 'Cologne' },               // 39
  { x: 36,  y: 18,  name: 'Leipzig' },               // 40
  { x: 38,  y: 22,  name: 'Dresden' },               // 41
  { x: 34,  y: 24,  name: 'Frankfurt' },             // 42
  { x: 32,  y: 28,  name: 'Nuremberg' },             // 43
  { x: 36,  y: 30,  name: 'Munich' },                // 44
  { x: 34,  y: 34,  name: 'Stuttgart' },             // 45
  { x: 38,  y: 26,  name: 'Prague',    capital: true }, // 46

  // Switzerland / N. Italy
  { x: 32,  y: 38,  name: 'Bern',      capital: true }, // 47
  { x: 34,  y: 42,  name: 'Zurich' },                // 48
  { x: 36,  y: 46,  name: 'Milan' },                 // 49
  { x: 34,  y: 50,  name: 'Turin' },                 // 50
  { x: 36,  y: 38,  name: 'Innsbruck' },             // 51
  { x: 38,  y: 34,  name: 'Salzburg' },              // 52

  // ═══════════════════════════════════════════
  //  CENTER-RIGHT — Italy, Central Europe
  // ═══════════════════════════════════════════

  // Italy continued
  { x: 38,  y: 52,  name: 'Venice' },                // 53
  { x: 36,  y: 56,  name: 'Bologna' },               // 54
  { x: 38,  y: 58,  name: 'Genoa' },                 // 55
  { x: 38,  y: 64,  name: 'Florence' },              // 56
  { x: 40,  y: 68,  name: 'Pisa' },                  // 57
  { x: 42,  y: 76,  name: 'Rome',      capital: true }, // 58
  { x: 44,  y: 84,  name: 'Naples' },                // 59
  { x: 44,  y: 88,  name: 'Bari' },                  // 60
  { x: 46,  y: 94,  name: 'Palermo' },               // 61
  { x: 46,  y: 90,  name: 'Catania' },               // 62
  { x: 36,  y: 72,  name: 'Corsica' },               // 63
  { x: 38,  y: 78,  name: 'Sardinia' },              // 64

  // Central Europe
  { x: 46,  y: 32,  name: 'Vienna',    capital: true }, // 65
  { x: 48,  y: 36,  name: 'Bratislava', capital: true }, // 66
  { x: 54,  y: 40,  name: 'Budapest',  capital: true }, // 67
  { x: 42,  y: 28,  name: 'Brno' },                  // 68
  { x: 44,  y: 34,  name: 'Graz' },                  // 69

  // ═══════════════════════════════════════════
  //  RIGHT — Baltics, Poland, East
  // ═══════════════════════════════════════════

  // Baltics & Finland
  { x: 60,  y: 2,   name: 'Helsinki',  capital: true }, // 70
  { x: 58,  y: 10,  name: 'Tallinn',   capital: true }, // 71
  { x: 56,  y: 18,  name: 'Riga',      capital: true }, // 72
  { x: 54,  y: 26,  name: 'Vilnius',   capital: true }, // 73
  { x: 52,  y: 22,  name: 'Kaunas' },                // 74
  { x: 50,  y: 4,   name: 'Turku' },                 // 75
  { x: 54,  y: 8,   name: 'Tampere' },               // 76
  { x: 60,  y: 12,  name: 'Tartu' },                 // 77

  // Poland
  { x: 46,  y: 14,  name: 'Gdansk' },                // 78
  { x: 44,  y: 20,  name: 'Poznan' },                // 79
  { x: 50,  y: 18,  name: 'Warsaw',    capital: true }, // 80
  { x: 48,  y: 24,  name: 'Krakow' },                // 81
  { x: 46,  y: 28,  name: 'Wroclaw' },               // 82
  { x: 51,  y: 14,  name: 'Lublin' },                // 83
  { x: 49,  y: 28,  name: 'Lodz' },                  // 84

  // East
  { x: 66,  y: 16,  name: 'Minsk',     capital: true }, // 85
  { x: 64,  y: 8,   name: 'St. Petersburg' },        // 86
  { x: 78,  y: 24,  name: 'Kyiv',      capital: true }, // 87
  { x: 74,  y: 18,  name: 'Lviv' },                  // 88
  { x: 68,  y: 22,  name: 'Brest' },                 // 89
  { x: 86,  y: 32,  name: 'Odessa' },                // 90
  { x: 84,  y: 24,  name: 'Dnipro' },                // 91
  { x: 72,  y: 14,  name: 'Smolensk' },              // 92
  { x: 70,  y: 28,  name: 'Zhytomyr' },              // 93

  // ═══════════════════════════════════════════
  //  ROMANIA — focal cluster (center-right)
  // ═══════════════════════════════════════════
  { x: 62,  y: 38,  name: 'Oradea' },                // 94
  { x: 64,  y: 43,  name: 'Cluj-Napoca' },           // 95
  { x: 62,  y: 49,  name: ALBA_IULIA },              // 96  ★
  { x: 58,  y: 47,  name: 'Timisoara' },             // 97
  { x: 67,  y: 47,  name: 'Sibiu' },                 // 98
  { x: 71,  y: 44,  name: 'Brasov' },                // 99
  { x: 77,  y: 50,  name: 'Bucharest', capital: true }, // 100
  { x: 73,  y: 37,  name: 'Iasi' },                  // 101
  { x: 84,  y: 46,  name: 'Constanta' },             // 102
  { x: 80,  y: 36,  name: 'Chisinau',  capital: true }, // 103
  { x: 60,  y: 55,  name: 'Craiova' },               // 104
  { x: 79,  y: 44,  name: 'Galati' },                // 105
  { x: 66,  y: 35,  name: 'Suceava' },               // 106
  { x: 70,  y: 40,  name: 'Bacau' },                 // 107
  { x: 64,  y: 39,  name: 'Targu Mures' },           // 108
  { x: 74,  y: 47,  name: 'Ploiesti' },              // 109
  { x: 61,  y: 42,  name: 'Arad' },                  // 110
  { x: 57,  y: 42,  name: 'Debrecen' },              // 111

  // ═══════════════════════════════════════════
  //  BALKANS (center-right, lower)
  // ═══════════════════════════════════════════
  { x: 42,  y: 42,  name: 'Ljubljana', capital: true }, // 112
  { x: 46,  y: 46,  name: 'Zagreb',    capital: true }, // 113
  { x: 54,  y: 52,  name: 'Belgrade',  capital: true }, // 114
  { x: 50,  y: 58,  name: 'Sarajevo',  capital: true }, // 115
  { x: 47,  y: 52,  name: 'Dubrovnik' },             // 116
  { x: 66,  y: 58,  name: 'Sofia',     capital: true }, // 117
  { x: 58,  y: 64,  name: 'Skopje',    capital: true }, // 118
  { x: 52,  y: 70,  name: 'Tirana',    capital: true }, // 119
  { x: 64,  y: 78,  name: 'Athens',    capital: true }, // 120
  { x: 78,  y: 62,  name: 'Istanbul' },              // 121
  { x: 56,  y: 60,  name: 'Pristina',  capital: true }, // 122
  { x: 52,  y: 48,  name: 'Podgorica', capital: true }, // 123
  { x: 70,  y: 68,  name: 'Thessaloniki' },          // 124
  { x: 48,  y: 62,  name: 'Split' },                 // 125
  { x: 56,  y: 54,  name: 'Nis' },                   // 126
  { x: 44,  y: 50,  name: 'Rijeka' },                // 127
  { x: 60,  y: 84,  name: 'Crete' },                 // 128
  { x: 48,  y: 56,  name: 'Zadar' },                 // 129
  { x: 74,  y: 56,  name: 'Plovdiv' },               // 130
  { x: 62,  y: 72,  name: 'Patras' },                // 131
  { x: 72,  y: 78,  name: 'Rhodes' },                // 132
  { x: 82,  y: 58,  name: 'Varna' },                 // 133
  { x: 88,  y: 52,  name: 'Sevastopol' },            // 134
  { x: 46,  y: 92,  name: 'Messina' },               // 135
];

const routes: [number, number][] = [
  // UK & Ireland
  [0, 1], [1, 2], [1, 3], [3, 14], [13, 15], [15, 14], [14, 16],
  // Iberia
  [4, 5], [5, 6], [6, 9], [9, 7], [7, 8], [6, 8], [10, 11],
  // Iberia → France
  [8, 21], [11, 10],
  // France
  [16, 17], [17, 18], [19, 26], [26, 23], [23, 20], [20, 21], [21, 22],
  [19, 24], [24, 27], [27, 5], [28, 22], [20, 28],
  // Benelux
  [16, 18], [18, 25], [17, 39],
  // Germany
  [36, 38], [38, 37], [37, 40], [40, 41], [41, 46],
  [39, 38], [39, 36], [42, 43], [43, 44], [44, 52], [52, 51],
  [45, 44], [45, 42], [42, 38], [25, 42],
  // Scandinavia
  [29, 33], [29, 30], [30, 31], [31, 32], [32, 30], [34, 30], [35, 34],
  [30, 36], [36, 78],
  // Baltics
  [70, 71], [71, 72], [72, 74], [74, 73], [75, 70], [76, 70], [71, 77],
  [31, 75],
  // Poland
  [37, 79], [79, 80], [80, 78], [78, 71], [80, 83],
  [81, 82], [82, 80], [84, 82], [81, 67],
  // Central Europe
  [46, 37], [46, 68], [68, 65], [65, 69], [69, 65],
  [65, 66], [66, 67], [41, 46],
  [112, 53], [112, 127], [127, 113],
  // Switzerland → Italy
  [47, 48], [48, 49], [47, 28], [49, 50], [50, 55],
  [51, 65], [52, 44],
  // Italy
  [49, 53], [53, 54], [54, 55], [55, 56], [56, 57], [57, 58], [58, 59],
  [59, 60], [60, 61], [59, 62], [62, 135],
  [58, 63], [63, 64], [64, 58],
  // East
  [73, 85], [85, 87], [70, 86], [86, 92], [92, 85],
  [87, 91], [91, 90], [83, 85], [87, 93], [93, 88], [88, 87],
  // Romania
  [67, 111], [111, 94], [94, 95], [95, 96], [96, 98], [98, 99],
  [99, 109], [109, 100], [100, 102], [95, 101], [101, 103], [103, 87],
  [96, 104], [97, 96], [97, 114], [100, 105], [106, 95], [106, 101],
  [107, 99], [108, 95], [67, 97], [105, 102], [110, 94], [110, 97],
  // Romania → neighbors
  [100, 117], [102, 121], [100, 133], [103, 90],
  // Balkans
  [113, 114], [114, 117], [117, 100],
  [114, 115], [115, 116], [116, 123],
  [117, 118], [118, 119], [118, 124], [124, 120],
  [119, 120], [120, 128], [120, 131],
  [122, 118], [123, 113], [126, 114], [126, 117],
  [125, 115], [114, 126], [129, 125],
  [117, 130], [130, 124], [121, 117], [121, 133],
  [124, 132], [120, 132], [131, 120],
  [134, 102], [133, 134],
  [88, 101], [81, 66],
  // Cross-bridges
  [104, 117], [82, 67], [25, 42], [22, 58], [8, 19],
  [14, 17], [47, 45], [44, 65], [59, 60],
  [67, 94], [85, 89], [89, 80],
  [53, 112], [49, 112], [90, 102],
];

/** Multi-hop particle paths following actual edges */
const particlePaths: { hops: number[]; dur: number; delay: number }[] = [
  // Romania routes
  { hops: [96, 98, 99, 109, 100],          dur: 5, delay: 0 },
  { hops: [100, 117, 121],                 dur: 4, delay: 2 },
  { hops: [97, 96, 95, 94, 111, 67],       dur: 6, delay: 1 },
  { hops: [95, 101, 103, 87],              dur: 5, delay: 3 },
  { hops: [100, 102, 134, 133],            dur: 4, delay: 0.5 },

  // Western Europe
  { hops: [14, 16, 18, 25, 42],            dur: 6, delay: 1 },
  { hops: [19, 26, 23, 20, 21],            dur: 5, delay: 3 },
  { hops: [6, 8, 21, 22],                  dur: 4, delay: 2 },

  // Northern corridor
  { hops: [30, 36, 37, 79, 80],            dur: 6, delay: 0 },
  { hops: [31, 75, 70, 71, 72],            dur: 5, delay: 2.5 },
  { hops: [37, 41, 46, 68, 65],            dur: 5, delay: 1 },

  // Central → South
  { hops: [65, 112, 53, 54, 55, 56],       dur: 6, delay: 0.5 },
  { hops: [67, 114, 117, 118, 124, 120],   dur: 7, delay: 2 },
  { hops: [18, 25, 42, 43, 44, 65],        dur: 7, delay: 4 },

  // Extra
  { hops: [58, 59, 60, 61],                dur: 4, delay: 1.5 },
  { hops: [80, 83, 85, 87],                dur: 4, delay: 3 },
  { hops: [117, 118, 119, 120, 128],       dur: 5, delay: 0 },
  { hops: [4, 5, 6, 9, 7],                 dur: 5, delay: 3.5 },
  { hops: [87, 88, 101, 95, 96],           dur: 5, delay: 1.5 },
  { hops: [100, 133, 121, 124],            dur: 5, delay: 0 },
  { hops: [49, 53, 112, 127, 113],         dur: 5, delay: 2 },
  { hops: [15, 14, 17, 39, 36],            dur: 5, delay: 4 },
];

function buildPath(hops: number[]): string {
  return hops.map((ci, i) => `${i === 0 ? 'M' : 'L'}${cities[ci].x},${cities[ci].y}`).join(' ');
}

export function RouteMap() {
  return (
    <div className="hero__route-map">
      <svg className="hero__route-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        {routes.map(([a, b], i) => (
          <line
            key={`r-${i}`}
            className="hero__route-line"
            x1={cities[a].x} y1={cities[a].y}
            x2={cities[b].x} y2={cities[b].y}
            style={{ animationDelay: `${i * 0.01}s` }}
          />
        ))}

        {particlePaths.map(({ hops, dur, delay }, i) => {
          const pathD = buildPath(hops);
          return (
            <g key={`p-${i}`}>
              <circle r="0.6" className="hero__particle-halo">
                <animateMotion path={pathD} dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" />
              </circle>
              <circle r="0.2" className="hero__particle-dot">
                <animateMotion path={pathD} dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}
      </svg>

      {cities.map((city, i) => {
        const isAlba = city.name === ALBA_IULIA;
        return (
          <div
            key={i}
            className={`hero__pin${city.capital ? ' hero__pin--capital' : ''}${isAlba ? ' hero__pin--alba' : ''}`}
            style={{
              left: `${city.x}%`,
              top: `${city.y}%`,
              animationDelay: `${0.05 + i * 0.005}s`,
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
