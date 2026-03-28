/**
 * Stylised European route map — EU + nearby countries only.
 * No Iceland, Ukraine, Russia, Turkey, Belarus.
 * Shifted right so Constanta sits near the right edge (~92%).
 * Every city is connected to the network.
 */

const ALBA_IULIA = 'Alba Iulia';

interface City { x: number; y: number; name: string; capital?: boolean }

const cities: City[] = [
  // ═══════ SCANDINAVIA (top) ═══════
  { x: 30, y: 3,  name: 'Oslo',       capital: true },  // 0
  { x: 36, y: 2,  name: 'Bergen' },                     // 1
  { x: 42, y: 5,  name: 'Gothenburg' },                 // 2
  { x: 48, y: 3,  name: 'Stockholm',  capital: true },  // 3
  { x: 40, y: 10, name: 'Copenhagen', capital: true },  // 4
  { x: 46, y: 7,  name: 'Malmö' },                      // 5
  { x: 51, y: 9,  name: 'Aarhus' },                     // 6
  { x: 54, y: 4,  name: 'Turku' },                      // 7
  { x: 61, y: 3,  name: 'Helsinki',   capital: true },  // 8
  { x: 52, y: 2,  name: 'Tampere' },                    // 9

  // ═══════ BALTICS ═══════
  { x: 60, y: 11, name: 'Tallinn',    capital: true },  // 10
  { x: 59, y: 19, name: 'Riga',       capital: true },  // 11
  { x: 57, y: 27, name: 'Vilnius',    capital: true },  // 12
  { x: 55, y: 23, name: 'Kaunas' },                     // 13
  { x: 62, y: 15, name: 'Tartu' },                      // 14

  // ═══════ UK & IRELAND ═══════
  { x: 8,  y: 8,  name: 'Edinburgh' },                  // 15
  { x: 12, y: 12, name: 'Glasgow' },                    // 16
  { x: 18, y: 14, name: 'Manchester' },                 // 17
  { x: 14, y: 18, name: 'Birmingham' },                 // 18
  { x: 20, y: 22, name: 'London',     capital: true },  // 19
  { x: 10, y: 20, name: 'Dublin',     capital: true },  // 20
  { x: 14, y: 15, name: 'Belfast' },                    // 21
  { x: 12, y: 26, name: 'Bristol' },                    // 22
  { x: 16, y: 12, name: 'Leeds' },                      // 23

  // ═══════ BENELUX ═══════
  { x: 28, y: 18, name: 'Amsterdam',  capital: true },  // 24
  { x: 29, y: 23, name: 'Brussels',   capital: true },  // 25
  { x: 32, y: 26, name: 'Luxembourg', capital: true },  // 26
  { x: 26, y: 20, name: 'Rotterdam' },                  // 27

  // ═══════ GERMANY ═══════
  { x: 34, y: 14, name: 'Hamburg' },                    // 28
  { x: 31, y: 18, name: 'Cologne' },                    // 29
  { x: 36, y: 20, name: 'Hannover' },                   // 30
  { x: 42, y: 18, name: 'Berlin',     capital: true },  // 31
  { x: 38, y: 16, name: 'Leipzig' },                    // 32
  { x: 41, y: 22, name: 'Dresden' },                    // 33
  { x: 35, y: 26, name: 'Frankfurt' },                  // 34
  { x: 34, y: 30, name: 'Nuremberg' },                  // 35
  { x: 38, y: 34, name: 'Munich' },                     // 36
  { x: 36, y: 36, name: 'Stuttgart' },                  // 37

  // ═══════ POLAND ═══════
  { x: 48, y: 14, name: 'Gdansk' },                     // 38
  { x: 46, y: 20, name: 'Poznan' },                     // 39
  { x: 52, y: 18, name: 'Warsaw',     capital: true },  // 40
  { x: 50, y: 24, name: 'Lodz' },                       // 41
  { x: 49, y: 29, name: 'Krakow' },                     // 42
  { x: 48, y: 33, name: 'Wroclaw' },                    // 43
  { x: 54, y: 15, name: 'Lublin' },                     // 44

  // ═══════ FRANCE ═══════
  { x: 22, y: 28, name: 'Calais' },                     // 45
  { x: 24, y: 36, name: 'Paris',      capital: true },  // 46
  { x: 18, y: 34, name: 'Nantes' },                     // 47
  { x: 22, y: 32, name: 'Le Havre' },                   // 48
  { x: 26, y: 40, name: 'Dijon' },                      // 49
  { x: 28, y: 44, name: 'Lyon' },                       // 50
  { x: 26, y: 50, name: 'Marseille' },                  // 51
  { x: 30, y: 52, name: 'Nice' },                       // 52
  { x: 20, y: 48, name: 'Toulouse' },                   // 53
  { x: 18, y: 54, name: 'Bordeaux' },                   // 54
  { x: 26, y: 46, name: 'Strasbourg' },                 // 55
  { x: 22, y: 42, name: 'Geneva' },                     // 56

  // ═══════ SWITZERLAND ═══════
  { x: 30, y: 40, name: 'Bern',       capital: true },  // 57
  { x: 32, y: 43, name: 'Zurich' },                     // 58

  // ═══════ IBERIA ═══════
  { x: 8,  y: 68, name: 'Lisbon',     capital: true },  // 59
  { x: 10, y: 62, name: 'Porto' },                      // 60
  { x: 16, y: 66, name: 'Madrid',     capital: true },  // 61
  { x: 22, y: 58, name: 'Barcelona' },                  // 62
  { x: 12, y: 72, name: 'Seville' },                    // 63
  { x: 18, y: 72, name: 'Valencia' },                   // 64
  { x: 14, y: 76, name: 'Malaga' },                     // 65
  { x: 20, y: 62, name: 'Zaragoza' },                   // 66
  { x: 10, y: 58, name: 'Bilbao' },                     // 67

  // ═══════ ITALY ═══════
  { x: 34, y: 48, name: 'Milan' },                      // 68
  { x: 32, y: 52, name: 'Turin' },                      // 69
  { x: 38, y: 52, name: 'Venice' },                     // 70
  { x: 36, y: 56, name: 'Bologna' },                    // 71
  { x: 38, y: 58, name: 'Genoa' },                      // 72
  { x: 38, y: 62, name: 'Florence' },                   // 73
  { x: 40, y: 66, name: 'Pisa' },                       // 74
  { x: 42, y: 72, name: 'Rome',       capital: true },  // 75
  { x: 44, y: 80, name: 'Naples' },                     // 76
  { x: 46, y: 86, name: 'Bari' },                       // 77
  { x: 48, y: 92, name: 'Palermo' },                    // 78
  { x: 48, y: 88, name: 'Catania' },                    // 79
  { x: 36, y: 68, name: 'Corsica' },                    // 80
  { x: 38, y: 76, name: 'Sardinia' },                   // 81
  { x: 46, y: 84, name: 'Messina' },                    // 82

  // ═══════ CENTRAL EUROPE ═══════
  { x: 44, y: 30, name: 'Prague',     capital: true },  // 83
  { x: 48, y: 36, name: 'Vienna',     capital: true },  // 84
  { x: 51, y: 38, name: 'Bratislava', capital: true },  // 85
  { x: 56, y: 42, name: 'Budapest',   capital: true },  // 86
  { x: 46, y: 32, name: 'Brno' },                       // 87
  { x: 46, y: 37, name: 'Graz' },                       // 88
  { x: 42, y: 34, name: 'Innsbruck' },                  // 89
  { x: 44, y: 36, name: 'Salzburg' },                   // 90

  // ═══════ ROMANIA ═══════
  { x: 64, y: 40, name: 'Oradea' },                     // 91
  { x: 66, y: 44, name: 'Cluj-Napoca' },                // 92
  { x: 64, y: 50, name: ALBA_IULIA },                   // 93  ★
  { x: 60, y: 48, name: 'Timisoara' },                  // 94
  { x: 69, y: 48, name: 'Sibiu' },                      // 95
  { x: 72, y: 45, name: 'Brasov' },                     // 96
  { x: 78, y: 52, name: 'Bucharest',  capital: true },  // 97
  { x: 74, y: 38, name: 'Iasi' },                       // 98
  { x: 90, y: 48, name: 'Constanta' },                  // 99
  { x: 80, y: 38, name: 'Chisinau',   capital: true },  // 100
  { x: 62, y: 56, name: 'Craiova' },                    // 101
  { x: 82, y: 46, name: 'Galati' },                     // 102
  { x: 68, y: 36, name: 'Suceava' },                    // 103
  { x: 71, y: 41, name: 'Bacau' },                      // 104
  { x: 66, y: 40, name: 'Targu Mures' },                // 105
  { x: 76, y: 49, name: 'Ploiesti' },                   // 106
  { x: 62, y: 44, name: 'Arad' },                       // 107
  { x: 59, y: 42, name: 'Debrecen' },                   // 108

  // ═══════ BALKANS ═══════
  { x: 42, y: 44, name: 'Ljubljana',  capital: true },  // 109
  { x: 46, y: 48, name: 'Zagreb',     capital: true },  // 110
  { x: 54, y: 54, name: 'Belgrade',   capital: true },  // 111
  { x: 50, y: 60, name: 'Sarajevo',   capital: true },  // 112
  { x: 48, y: 54, name: 'Dubrovnik' },                  // 113
  { x: 68, y: 60, name: 'Sofia',      capital: true },  // 114
  { x: 60, y: 66, name: 'Skopje',     capital: true },  // 115
  { x: 54, y: 72, name: 'Tirana',     capital: true },  // 116
  { x: 64, y: 80, name: 'Athens',     capital: true },  // 117
  { x: 58, y: 62, name: 'Pristina',   capital: true },  // 118
  { x: 52, y: 50, name: 'Podgorica',  capital: true },  // 119
  { x: 70, y: 70, name: 'Thessaloniki' },               // 120
  { x: 50, y: 64, name: 'Split' },                      // 121
  { x: 56, y: 56, name: 'Nis' },                        // 122
  { x: 44, y: 50, name: 'Rijeka' },                     // 123
  { x: 48, y: 58, name: 'Zadar' },                      // 124
  { x: 66, y: 68, name: 'Plovdiv' },                    // 125
  { x: 62, y: 76, name: 'Patras' },                     // 126
  { x: 72, y: 78, name: 'Rhodes' },                     // 127
  { x: 84, y: 56, name: 'Varna' },                      // 128
  { x: 60, y: 84, name: 'Crete' },                      // 129

  // ═══════ MORE SPAIN ═══════
  { x: 6,  y: 64, name: 'Vigo' },                       // 130
  { x: 14, y: 58, name: 'Valladolid' },                 // 131
  { x: 20, y: 68, name: 'Alicante' },                   // 132
  { x: 8,  y: 78, name: 'Cadiz' },                      // 133
  { x: 18, y: 76, name: 'Granada' },                    // 134
  { x: 24, y: 56, name: 'Montpellier' },                // 135
  { x: 10, y: 54, name: 'A Coruna' },                   // 136
  { x: 14, y: 64, name: 'Salamanca' },                  // 137

  // ═══════ MORE FRANCE ═══════
  { x: 16, y: 38, name: 'Rennes' },                     // 138
  { x: 20, y: 30, name: 'Rouen' },                      // 139
  { x: 28, y: 36, name: 'Reims' },                      // 140
  { x: 16, y: 44, name: 'Limoges' },                    // 141

  // ═══════ MORE SCANDINAVIA ═══════
  { x: 34, y: 6,  name: 'Stavanger' },                  // 142
  { x: 56, y: 7,  name: 'Oulu' },                       // 143

  // ═══════ MORE GERMANY ═══════
  { x: 30, y: 22, name: 'Dortmund' },                   // 144
  { x: 40, y: 26, name: 'Erfurt' },                     // 145

  // ═══════ MORE BALKANS / GREECE ═══════
  { x: 56, y: 50, name: 'Novi Sad' },                   // 146
  { x: 58, y: 80, name: 'Ioannina' },                   // 147
  { x: 68, y: 84, name: 'Heraklion' },                  // 148
  { x: 48, y: 68, name: 'Vlora' },                      // 149

  // ═══════ MORE POLAND / BALTICS ═══════
  { x: 52, y: 10, name: 'Szczecin' },                   // 150
  { x: 56, y: 30, name: 'Bialystok' },                  // 151

  // ═══════ MORE ITALY ═══════
  { x: 30, y: 46, name: 'Verona' },                     // 152
  { x: 44, y: 76, name: 'Foggia' },                     // 153
];

const routes: [number, number][] = [
  // Scandinavia
  [0, 1], [0, 2], [2, 4], [4, 3], [3, 5], [5, 4], [4, 6],
  [3, 7], [7, 8], [8, 9], [9, 3],
  // Baltics
  [8, 10], [10, 11], [11, 13], [13, 12], [10, 14],
  // Scandi → Germany
  [4, 28], [28, 31], [38, 4],
  // UK & Ireland
  [15, 16], [16, 17], [17, 23], [23, 18], [18, 19], [20, 21], [21, 16], [19, 22],
  // UK → continent
  [19, 45], [45, 24], [17, 24],
  // Benelux
  [24, 27], [27, 25], [25, 26], [24, 29],
  // Germany
  [28, 30], [30, 31], [31, 32], [32, 33], [33, 83],
  [29, 30], [29, 34], [34, 35], [35, 36], [37, 36], [37, 34],
  [28, 38], [31, 39], [39, 40], [40, 38],
  // Poland
  [40, 44], [40, 41], [41, 42], [42, 43], [43, 83],
  [38, 10], [44, 12],
  // France
  [45, 46], [46, 48], [46, 47], [46, 49], [49, 50], [50, 51], [51, 52],
  [53, 54], [50, 56], [55, 49], [25, 46],
  // Switzerland
  [57, 58], [58, 68], [57, 56], [55, 58],
  // Iberia
  [59, 60], [60, 61], [61, 66], [66, 62], [61, 64], [63, 65], [61, 63],
  [67, 60], [62, 51], [54, 61],
  // Italy
  [68, 69], [68, 70], [70, 71], [71, 72], [72, 73], [73, 74], [74, 75],
  [75, 76], [76, 77], [76, 82], [82, 79], [79, 78],
  [75, 80], [80, 81], [81, 75],
  [68, 109], [70, 109],
  // Central Europe
  [83, 31], [83, 87], [87, 84], [84, 88], [88, 84],
  [84, 85], [85, 86], [83, 33], [36, 90], [90, 89], [89, 36],
  [84, 90], [109, 70], [109, 123], [123, 110],
  // Poland → Baltics
  [40, 44], [44, 12], [42, 86],
  // Romania internal
  [86, 108], [108, 91], [91, 105], [105, 92], [92, 93],
  [93, 95], [95, 96], [96, 106], [106, 97], [97, 99],
  [92, 98], [98, 100],
  [93, 101], [94, 93], [94, 111], [97, 102], [103, 92], [103, 98],
  [104, 96], [107, 91], [107, 94], [102, 99], [86, 94],
  // Romania → neighbors
  [97, 114], [99, 128],
  // Balkans
  [110, 111], [111, 114], [114, 97],
  [111, 112], [112, 113], [113, 119],
  [114, 115], [115, 116], [115, 120], [120, 117],
  [116, 117], [117, 129],
  [118, 115], [119, 110], [122, 111], [122, 114],
  [121, 112], [111, 122], [124, 121],
  [114, 125], [125, 120], [128, 114],
  [120, 127], [117, 127], [117, 126],
  [128, 99],
  // Cross-bridges
  [101, 114], [42, 86], [26, 34], [52, 75], [62, 46],
  [19, 24], [50, 57], [36, 84], [43, 84],
  [86, 91], [70, 109], [68, 109],
  // New Spain cities
  [130, 60], [130, 136], [136, 67], [131, 61], [131, 67], [131, 60],
  [132, 64], [132, 61], [133, 63], [133, 65], [134, 65], [134, 63],
  [137, 61], [137, 131],
  // Montpellier
  [135, 62], [135, 51],
  // New France
  [138, 47], [138, 48], [139, 48], [139, 46], [140, 46], [140, 25],
  [141, 47], [141, 53], [141, 54],
  // New Scandinavia
  [142, 0], [142, 2], [143, 8], [143, 9],
  // New Germany
  [144, 29], [144, 34], [145, 33], [145, 35],
  // New Balkans / Greece
  [146, 111], [146, 122], [147, 116], [147, 117], [148, 129], [148, 117],
  [149, 116], [149, 126],
  // New Poland / Baltics
  [150, 38], [150, 31], [151, 40], [151, 12],
  // New Italy
  [152, 68], [152, 70], [153, 76], [153, 77],
];

/** Pulse paths — every hop verified against routes array */
const pulsePaths: { hops: number[]; dur: number; delay: number }[] = [
  // Romania outbound
  { hops: [93, 95, 96, 106, 97],              dur: 5,  delay: 0 },
  { hops: [97, 114, 125, 120],                dur: 5,  delay: 2 },
  { hops: [94, 93, 92, 105, 91, 108, 86],     dur: 6,  delay: 1 },
  { hops: [92, 98, 100],                      dur: 4,  delay: 3 },
  { hops: [97, 99, 128, 114],                 dur: 5,  delay: 0.5 },

  // Western Europe
  { hops: [19, 45, 24, 27, 25, 46],           dur: 6,  delay: 1 },
  { hops: [46, 49, 50, 56, 57, 58, 68],       dur: 7,  delay: 3 },
  { hops: [61, 66, 62, 51],                   dur: 4,  delay: 2 },

  // Northern corridor
  { hops: [4, 28, 30, 31, 39, 40],            dur: 6,  delay: 0 },
  { hops: [3, 7, 8, 10, 11],                  dur: 5,  delay: 2.5 },
  { hops: [31, 32, 33, 83, 87, 84],           dur: 5,  delay: 1 },

  // Central → South
  { hops: [84, 90, 89, 36, 37, 34, 35],       dur: 6,  delay: 0.5 },
  { hops: [86, 94, 111, 114, 115, 120, 117],  dur: 7,  delay: 2 },
  { hops: [25, 26, 34, 35, 36, 84],           dur: 7,  delay: 4 },

  // Extra
  { hops: [75, 76, 82, 79, 78],               dur: 4,  delay: 1.5 },
  { hops: [40, 44, 12],                       dur: 3,  delay: 3 },
  { hops: [114, 115, 116, 117, 129],          dur: 5,  delay: 0 },
  { hops: [59, 60, 61, 63, 65],               dur: 5,  delay: 3.5 },
  { hops: [68, 109, 123, 110, 111],           dur: 5,  delay: 2 },
  { hops: [17, 23, 18, 19, 45, 24, 29],       dur: 5,  delay: 4 },
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
            style={{ animationDelay: `${i * 0.003}s` }}
          />
        ))}

        {pulsePaths.map(({ hops, dur, delay }, i) => {
          const pathD = buildPath(hops);
          return (
            <circle key={`p-${i}`} r="0.2" className="hero__pulse-head">
              <animateMotion path={pathD} dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" />
            </circle>
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
              animationDelay: `${0.02 + i * 0.002}s`,
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
