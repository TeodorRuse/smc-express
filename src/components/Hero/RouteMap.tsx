/**
 * Stylised European route map — EU + nearby countries only.
 * On first page load, all pulse lights originate from Alba Iulia
 * and spread outward across Europe before continuing their normal loops.
 */

const ALBA_IULIA = 'Alba Iulia';

interface City { x: number; y: number; name: string; capital?: boolean }

const cities: City[] = [
  // ═══════ SCANDINAVIA ═══════
  { x: 32, y: 3,  name: 'Oslo',       capital: true },  // 0
  { x: 25, y: 5,  name: 'Bergen' },                     // 1
  { x: 38, y: 6,  name: 'Gothenburg' },                 // 2
  { x: 47, y: 4,  name: 'Stockholm',  capital: true },  // 3
  { x: 40, y: 12, name: 'Copenhagen', capital: true },  // 4
  { x: 43, y: 9,  name: 'Malmö' },                      // 5
  { x: 37, y: 9,  name: 'Aarhus' },                     // 6
  { x: 56, y: 5,  name: 'Turku' },                      // 7
  { x: 60, y: 3,  name: 'Helsinki',   capital: true },  // 8
  { x: 55, y: 2,  name: 'Tampere' },                    // 9

  // ═══════ BALTICS ═══════
  { x: 60, y: 10, name: 'Tallinn',    capital: true },  // 10
  { x: 59, y: 18, name: 'Riga',       capital: true },  // 11
  { x: 58, y: 26, name: 'Vilnius',    capital: true },  // 12
  { x: 56, y: 22, name: 'Kaunas' },                     // 13
  { x: 62, y: 14, name: 'Tartu' },                      // 14

  // ═══════ UK & IRELAND ═══════
  { x: 10, y: 8,  name: 'Edinburgh' },                  // 15
  { x: 6,  y: 10, name: 'Glasgow' },                    // 16
  { x: 14, y: 14, name: 'Manchester' },                 // 17
  { x: 14, y: 18, name: 'Birmingham' },                 // 18
  { x: 18, y: 22, name: 'London',     capital: true },  // 19
  { x: 4,  y: 18, name: 'Dublin',     capital: true },  // 20
  { x: 7,  y: 13, name: 'Belfast' },                    // 21
  { x: 14, y: 24, name: 'Bristol' },                    // 22
  { x: 14, y: 11, name: 'Leeds' },                      // 23

  // ═══════ BENELUX ═══════
  { x: 27, y: 18, name: 'Amsterdam',  capital: true },  // 24
  { x: 27, y: 22, name: 'Brussels',   capital: true },  // 25
  { x: 29, y: 26, name: 'Luxembourg', capital: true },  // 26
  { x: 25, y: 20, name: 'Rotterdam' },                  // 27

  // ═══════ GERMANY ═══════
  { x: 34, y: 14, name: 'Hamburg' },                    // 28
  { x: 30, y: 22, name: 'Cologne' },                    // 29
  { x: 35, y: 18, name: 'Hannover' },                   // 30
  { x: 42, y: 16, name: 'Berlin',     capital: true },  // 31
  { x: 40, y: 20, name: 'Leipzig' },                    // 32
  { x: 43, y: 22, name: 'Dresden' },                    // 33
  { x: 32, y: 26, name: 'Frankfurt' },                  // 34
  { x: 36, y: 29, name: 'Nuremberg' },                  // 35
  { x: 38, y: 33, name: 'Munich' },                     // 36
  { x: 33, y: 32, name: 'Stuttgart' },                  // 37

  // ═══════ POLAND ═══════
  { x: 48, y: 12, name: 'Gdansk' },                     // 38
  { x: 46, y: 19, name: 'Poznan' },                     // 39
  { x: 52, y: 18, name: 'Warsaw',     capital: true },  // 40
  { x: 50, y: 22, name: 'Lodz' },                       // 41
  { x: 50, y: 27, name: 'Krakow' },                     // 42
  { x: 46, y: 25, name: 'Wroclaw' },                    // 43
  { x: 55, y: 20, name: 'Lublin' },                     // 44

  // ═══════ FRANCE ═══════
  { x: 22, y: 25, name: 'Calais' },                     // 45
  { x: 22, y: 33, name: 'Paris',      capital: true },  // 46
  { x: 16, y: 38, name: 'Nantes' },                     // 47
  { x: 20, y: 32, name: 'Le Havre' },                   // 48
  { x: 26, y: 38, name: 'Dijon' },                      // 49
  { x: 27, y: 43, name: 'Lyon' },                       // 50
  { x: 25, y: 50, name: 'Marseille' },                  // 51
  { x: 30, y: 52, name: 'Nice' },                       // 52
  { x: 18, y: 48, name: 'Toulouse' },                   // 53
  { x: 14, y: 50, name: 'Bordeaux' },                   // 54
  { x: 30, y: 33, name: 'Strasbourg' },                 // 55
  { x: 23, y: 40, name: 'Geneva' },                     // 56

  // ═══════ SWITZERLAND ═══════
  { x: 30, y: 38, name: 'Bern',       capital: true },  // 57
  { x: 32, y: 36, name: 'Zurich' },                     // 58

  // ═══════ IBERIA ═══════
  { x: 4,  y: 66, name: 'Lisbon',     capital: true },  // 59
  { x: 5,  y: 60, name: 'Porto' },                      // 60
  { x: 12, y: 64, name: 'Madrid',     capital: true },  // 61
  { x: 22, y: 56, name: 'Barcelona' },                  // 62
  { x: 8,  y: 70, name: 'Seville' },                    // 63
  { x: 16, y: 68, name: 'Valencia' },                   // 64
  { x: 10, y: 74, name: 'Malaga' },                     // 65
  { x: 18, y: 60, name: 'Zaragoza' },                   // 66
  { x: 9,  y: 55, name: 'Bilbao' },                     // 67

  // ═══════ ITALY ═══════
  { x: 34, y: 46, name: 'Milan' },                      // 68
  { x: 30, y: 47, name: 'Turin' },                      // 69
  { x: 40, y: 46, name: 'Venice' },                     // 70
  { x: 38, y: 50, name: 'Bologna' },                    // 71
  { x: 34, y: 52, name: 'Genoa' },                      // 72
  { x: 38, y: 56, name: 'Florence' },                   // 73
  { x: 36, y: 58, name: 'Pisa' },                       // 74
  { x: 40, y: 64, name: 'Rome',       capital: true },  // 75
  { x: 42, y: 72, name: 'Naples' },                     // 76
  { x: 48, y: 76, name: 'Bari' },                       // 77
  { x: 44, y: 86, name: 'Palermo' },                    // 78
  { x: 46, y: 84, name: 'Catania' },                    // 79
  { x: 34, y: 64, name: 'Corsica' },                    // 80
  { x: 34, y: 70, name: 'Sardinia' },                   // 81
  { x: 46, y: 80, name: 'Messina' },                    // 82

  // ═══════ CENTRAL EUROPE ═══════
  { x: 44, y: 27, name: 'Prague',     capital: true },  // 83
  { x: 48, y: 33, name: 'Vienna',     capital: true },  // 84
  { x: 50, y: 34, name: 'Bratislava', capital: true },  // 85
  { x: 56, y: 36, name: 'Budapest',   capital: true },  // 86
  { x: 47, y: 29, name: 'Brno' },                       // 87
  { x: 46, y: 37, name: 'Graz' },                       // 88
  { x: 40, y: 34, name: 'Innsbruck' },                  // 89
  { x: 42, y: 33, name: 'Salzburg' },                   // 90

  // ═══════ ROMANIA & MOLDOVA (compact cluster) ═════════════════
  { x: 68, y: 37, name: 'Oradea' },                     // 91
  { x: 70, y: 39, name: 'Cluj-Napoca' },                // 92
  { x: 70, y: 44, name: ALBA_IULIA },                   // 93  ★
  { x: 66, y: 42, name: 'Timisoara' },                  // 94
  { x: 72, y: 42, name: 'Sibiu' },                      // 95
  { x: 75, y: 40, name: 'Brasov' },                     // 96
  { x: 79, y: 45, name: 'Bucharest',  capital: true },  // 97
  { x: 77, y: 36, name: 'Iasi' },                       // 98
  { x: 85, y: 44, name: 'Constanta' },                  // 99
  { x: 82, y: 35, name: 'Chisinau',   capital: true },  // 100
  { x: 73, y: 48, name: 'Craiova' },                    // 101
  { x: 82, y: 47, name: 'Galati' },                     // 102
  { x: 74, y: 34, name: 'Suceava' },                    // 103
  { x: 76, y: 37, name: 'Bacau' },                      // 104
  { x: 73, y: 39, name: 'Targu Mures' },                // 105
  { x: 77, y: 44, name: 'Ploiesti' },                   // 106
  { x: 66, y: 39, name: 'Arad' },                       // 107
  { x: 63, y: 37, name: 'Debrecen' },                   // 108

  // ═══════ BALKANS ═══════
  { x: 43, y: 42, name: 'Ljubljana',  capital: true },  // 109
  { x: 47, y: 44, name: 'Zagreb',     capital: true },  // 110
  { x: 56, y: 48, name: 'Belgrade',   capital: true },  // 111
  { x: 50, y: 55, name: 'Sarajevo',   capital: true },  // 112
  { x: 48, y: 58, name: 'Dubrovnik' },                  // 113
  { x: 68, y: 56, name: 'Sofia',      capital: true },  // 114
  { x: 62, y: 62, name: 'Skopje',     capital: true },  // 115
  { x: 56, y: 68, name: 'Tirana',     capital: true },  // 116
  { x: 64, y: 78, name: 'Athens',     capital: true },  // 117
  { x: 58, y: 58, name: 'Pristina',   capital: true },  // 118
  { x: 52, y: 54, name: 'Podgorica',  capital: true },  // 119
  { x: 66, y: 66, name: 'Thessaloniki' },               // 120
  { x: 48, y: 63, name: 'Split' },                      // 121
  { x: 58, y: 52, name: 'Nis' },                        // 122
  { x: 44, y: 46, name: 'Rijeka' },                     // 123
  { x: 46, y: 52, name: 'Zadar' },                      // 124
  { x: 66, y: 62, name: 'Plovdiv' },                    // 125
  { x: 60, y: 74, name: 'Patras' },                     // 126
  { x: 74, y: 74, name: 'Rhodes' },                     // 127
  { x: 84, y: 52, name: 'Varna' },                      // 128
  { x: 62, y: 84, name: 'Crete' },                      // 129

  // ═══════ MORE SPAIN ═══════
  { x: 3,  y: 60, name: 'Vigo' },                       // 130
  { x: 10, y: 57, name: 'Valladolid' },                 // 131
  { x: 18, y: 68, name: 'Alicante' },                   // 132
  { x: 6,  y: 74, name: 'Cadiz' },                      // 133
  { x: 12, y: 74, name: 'Granada' },                    // 134
  { x: 24, y: 52, name: 'Montpellier' },                // 135
  { x: 4,  y: 54, name: 'A Coruna' },                   // 136
  { x: 8,  y: 62, name: 'Salamanca' },                  // 137

  // ═══════ MORE FRANCE ═══════
  { x: 15, y: 34, name: 'Rennes' },                     // 138
  { x: 20, y: 28, name: 'Rouen' },                      // 139
  { x: 25, y: 32, name: 'Reims' },                      // 140
  { x: 16, y: 43, name: 'Limoges' },                    // 141

  // ═══════ MORE SCANDINAVIA ═══════
  { x: 27, y: 5,  name: 'Stavanger' },                  // 142
  { x: 58, y: 0,  name: 'Oulu' },                       // 143

  // ═══════ MORE GERMANY ═══════
  { x: 30, y: 19, name: 'Dortmund' },                   // 144
  { x: 38, y: 25, name: 'Erfurt' },                     // 145

  // ═══════ MORE BALKANS / GREECE ═══════
  { x: 55, y: 45, name: 'Novi Sad' },                   // 146
  { x: 58, y: 74, name: 'Ioannina' },                   // 147
  { x: 66, y: 84, name: 'Heraklion' },                  // 148
  { x: 54, y: 66, name: 'Vlora' },                      // 149

  // ═══════ MORE POLAND / BALTICS ═══════
  { x: 44, y: 13, name: 'Szczecin' },                   // 150
  { x: 55, y: 26, name: 'Bialystok' },                  // 151

  // ═══════ MORE ITALY ═══════
  { x: 36, y: 44, name: 'Verona' },                     // 152
  { x: 44, y: 70, name: 'Foggia' },                     // 153
];

/**
 * Routes follow real European transport corridors (E-roads / freight lanes).
 * Each city connects to 1-3 neighbors max — no spider webs.
 * Rule: prefer chain connections (A→B→C) over star connections (A→B, A→C, A→D).
 */
const routes: [number, number][] = [

  // ── CORRIDOR: Scandinavia spine ──────────────────────────────
  // Oslo → Stavanger, Oslo → Gothenburg → Copenhagen → Malmö
  [0, 142], [1, 142], [0, 2], [2, 4], [4, 5],
  // Stockholm → Gothenburg, Stockholm → Tampere → Helsinki → Oulu
  [3, 2], [3, 9], [9, 7], [7, 8], [8, 143],
  // Copenhagen → Aarhus
  [4, 6], [142, 4], [5, 3], [6, 0], [150, 5], [143, 10],

  // ── CORRIDOR: Baltics chain ──────────────────────────────────
  // Helsinki → Tallinn → Tartu, Tallinn → Riga → Kaunas → Vilnius, Lublin → Riga
  [8, 10], [10, 14], [10, 11], [11, 13], [13, 12], [44, 11],

  // ── CORRIDOR: Scandinavia → Germany ──────────────────────────
  // Copenhagen → Hamburg, Szczecin → Gdansk
  [4, 28], [150, 38],

  // ── CORRIDOR: UK & Ireland ───────────────────────────────────
  // Dublin → Belfast → Glasgow → Edinburgh
  [20, 21], [21, 16], [16, 15],
  // Glasgow → Leeds → Manchester → Birmingham → London → Bristol
  [16, 23], [23, 17], [17, 18], [18, 19], [19, 22],

  // ── CORRIDOR: UK → Continent (Channel) ───────────────────────
  [19, 45], [45, 24],

  // ── CORRIDOR: Benelux spine ──────────────────────────────────
  // Amsterdam → Rotterdam → Brussels, Amsterdam → Dortmund → Brussels
  [24, 27], [27, 25], [24, 144], [144, 25],

  // ── CORRIDOR: Germany north→south (E45/A7) ──────────────────
  // Hamburg → Hannover → Cologne → Frankfurt → Nuremberg → Stuttgart → Munich
  [28, 30], [29, 34], [34, 35], [35, 37], [37, 36],
  // Luxembourg → Nuremberg, Frankfurt → Erfurt, Dortmund → Luxembourg
  [26, 35], [34, 145], [144, 26],
  // Hamburg → Szczecin → Berlin
  [150, 31],

  // ── CORRIDOR: Germany east→west ──────────────────────────────
  // Berlin → Leipzig, Berlin → Hannover, Dortmund → Cologne
  [31, 32], [31, 30], [144, 29],
  // Berlin → Dresden → Prague
  [31, 33], [33, 83],
  // Erfurt hub — connects Hannover, Dresden, Munich
  [145, 30], [145, 33], [145, 36],

  // ── CORRIDOR: Germany → Poland (E30/E40) ─────────────────────
  // Berlin → Poznan → Warsaw → Lodz → Krakow → Wroclaw, Prague → Poznan
  [31, 39], [39, 40], [40, 41], [41, 42], [42, 43], [83, 39],
  // Warsaw → Gdansk, Warsaw → Lublin → Bialystok
  [40, 38], [40, 44], [44, 151], [42, 151],
  // Vilnius → Bialystok
  [12, 151],

  // ── CORRIDOR: France north (E15/A1) ──────────────────────────
  // Calais → Rouen → Paris → Reims → Brussels
  [45, 139], [139, 46], [46, 140], [140, 25],
  // Paris → Le Havre, Paris → Rennes → Nantes
  [46, 48], [138, 47], [46, 138],

  // ── CORRIDOR: France south (A6/A7) ──────────────────────────
  // Paris → Dijon → Lyon → Marseille → Nice
  [46, 49], [49, 50], [50, 51], [51, 52],
  // Lyon → Geneva → Bern → Zurich
  [50, 56], [57, 58], [56, 49], [57, 49],
  // Strasbourg → Dijon
  [55, 140], [55, 37], [55, 57],

  // ── CORRIDOR: France west/south ──────────────────────────────
  // Limoges → Toulouse → Bordeaux, Limoges → Nantes
  [141, 53], [53, 54], [141, 47],
  // Toulouse → Montpellier → Marseille
  [53, 135], [135, 51],

  // ── CORRIDOR: Switzerland → Italy (Gotthard/Brenner) ─────────
  // Zurich → Milan, Munich → Innsbruck → Salzburg → Vienna
  [58, 68], [36, 89], [89, 90], [90, 84],

  // ── CORRIDOR: Iberia spine ───────────────────────────────────
  // A Coruña → Vigo → Porto → Lisbon
  [136, 130], [130, 60], [60, 59], [60, 137],
  // Bilbao → Valladolid → Salamanca → Madrid
  [67, 131], [131, 137], [137, 61],
  // Madrid → Zaragoza → Barcelona → Montpellier
  [61, 66], [66, 62], [62, 135],
  // Madrid → Valencia → Alicante
  [61, 64], [64, 132],
  // Madrid → Seville → Cadiz, Seville → Malaga → Granada
  [61, 63], [63, 133], [63, 65], [65, 134], [59, 133], [137, 63],
  // Bordeaux → Bilbao
  [54, 67],

  // ── CORRIDOR: Italy spine (A1/E45) ──────────────────────────
  // Milan → Turin, Milan → Verona → Venice → Bologna
  [68, 152], [68, 69], [69, 70], [70, 71],
  // Verona → Nice, Verona → Turin, Turin → Nice, Turin → Venice, Bern → Stuttgart
  [69, 52], [57, 37],
  // Bologna → Genoa → Florence → Pisa → Rome
  [71, 72], [71, 73], [73, 74], [74, 75],
  // Rome → Naples → Foggia → Bari → Messina → Catania → Palermo
  [75, 76], [76, 153], [76, 82], [82, 79], [79, 78], [79, 77],
  // Rome → Corsica → Sardinia
  [75, 80], [80, 81], [75, 149],

  // ── CORRIDOR: Central Europe (E60/E65) ──────────────────────
  // Prague → Brno → Vienna → Bratislava → Budapest
  [83, 87], [87, 84], [84, 85], [85, 86],
  // Vienna → Graz → Ljubljana → Rijeka → Zagreb
  [84, 88], [88, 109], [109, 123], [123, 110],
  // Milan → Ljubljana
  [68, 109],

  // ── CORRIDOR: Romania (all internal) ────────────────────────
  // Budapest → Debrecen → Oradea → Arad → Timisoara
  [86, 108], [108, 91], [91, 107], [107, 94],
  // Oradea → Targu Mures → Cluj-Napoca → Alba Iulia → Sibiu → Brasov
  [105, 92], [92, 93], [93, 95], [95, 96], [91, 92], [91, 103],
  // Brasov → Ploiesti → Bucharest → Constanta
  [96, 106], [106, 97], [97, 99],
  // Cluj-Napoca → Suceava → Iasi → Chisinau
  [92, 103], [103, 98], [98, 100],
  // Bucharest → Craiova, Bucharest → Galati → Constanta
  [97, 101], [97, 102], [102, 99],
  // Alba Iulia → Timisoara, Bacau → Brasov
  [93, 94], [104, 96], [104, 98],

  // ── CORRIDOR: Romania → neighbors ───────────────────────────
  // Timisoara → Belgrade, Bucharest → Sofia, Constanta → Varna
  [94, 111], [97, 114], [99, 128],
  // Craiova → Nis, Craiova → Sofia
  [101, 122], [101, 114],
  // Krakow → Budapest (via Tatras)
  [42, 86],

  // ── CORRIDOR: Balkans (E75/E80) ─────────────────────────────
  // Zagreb → Belgrade → Novi Sad, Belgrade → Nis → Sofia
  [110, 111], [111, 146], [146, 86], [111, 122],
  // Zagreb → Zadar → Split → Dubrovnik → Sarajevo
  [110, 124], [124, 121], [121, 113], [113, 112],
  // Sofia → Plovdiv → Thessaloniki → Athens
  [114, 125], [125, 120], [120, 117],
  // Sofia → Skopje → Pristina, Skopje → Tirana → Vlora
  [114, 115], [115, 118], [118, 112], [115, 116], [116, 149],
  // Athens → Patras → Ioannina → Tirana
  [117, 126], [126, 147], [147, 116],
  // Athens → Crete, Thessaloniki → Rhodes, Varna → Sofia
  [117, 129], [120, 127], [128, 114],
  // Crete → Heraklion
  [129, 148],
  // Sarajevo → Belgrade
  [112, 111],
];

/**
 * Each pulse starts from Alba Iulia (93), travels outward during the initial burst,
 * then loops its normal route indefinitely.
 *
 * initialHops: one-time path FROM Alba Iulia outward (played once on page load)
 * loopHops:    repeating route after the burst completes
 */
const INITIAL_BURST_DURATION = 4; // seconds for the opening journey

/**
 * Pulse routes — all follow valid route connections.
 * Each bursts from Alba Iulia (93) on page load, then loops a corridor.
 */
const pulseRoutes: { initialHops: number[]; loopHops: number[]; loopDur: number; burstDelay: number }[] = [
  // East — Alba Iulia → Brasov → Bucharest → Constanta → Varna
  { initialHops: [93, 95, 96, 106, 97, 99, 128], loopHops: [97, 99, 128, 114, 125, 120], loopDur: 6, burstDelay: 0 },
  // South — Alba Iulia → Timisoara → Belgrade → Nis → Craiova → Sofia → Thessaloniki → Athens
  { initialHops: [93, 94, 111, 122, 101, 114, 125, 120, 117], loopHops: [114, 125, 120, 117, 129], loopDur: 5, burstDelay: 0.3 },
  // North — Alba Iulia → Cluj → Suceava → Iasi → Chisinau
  { initialHops: [93, 92, 103, 98, 100], loopHops: [92, 103, 98, 100], loopDur: 4, burstDelay: 0.5 },
  // West — Alba Iulia → Timisoara → Belgrade → Zagreb → Rijeka → Ljubljana → Milan
  { initialHops: [93, 94, 111, 110, 123, 109, 68], loopHops: [109, 68, 58, 57, 49, 50], loopDur: 6, burstDelay: 0.2 },
  // Northwest — Alba Iulia → Cluj → Oradea → Budapest → Vienna → Salzburg → Munich
  { initialHops: [93, 92, 91, 108, 86, 85, 84, 90, 89, 36], loopHops: [84, 90, 89, 36, 37, 35, 34, 29], loopDur: 6, burstDelay: 0.4 },
  // Far north — Alba Iulia → Budapest → Vienna → Prague → Dresden → Berlin → Hamburg → Copenhagen
  { initialHops: [93, 92, 91, 108, 86, 85, 84, 87, 83, 33, 31, 30, 28, 4], loopHops: [4, 28, 30, 31, 39, 40], loopDur: 6, burstDelay: 0.6 },
  // To London — Alba Iulia → ... → Dijon → Paris → Rouen → Calais → London
  { initialHops: [93, 94, 111, 110, 123, 109, 68, 58, 57, 49, 46, 139, 45, 19], loopHops: [19, 45, 24, 144, 25, 140, 46], loopDur: 6, burstDelay: 0.8 },
  // To Spain — Alba Iulia → ... → Marseille → Barcelona → Madrid
  { initialHops: [93, 94, 111, 110, 123, 109, 68, 69, 52, 51, 135, 62, 66, 61], loopHops: [61, 66, 62, 135, 51, 50, 49], loopDur: 7, burstDelay: 1.0 },
  // To Scandinavia — Alba Iulia → Budapest → Krakow → Warsaw → Gdansk → Szczecin → Malmö → Stockholm → Helsinki
  { initialHops: [93, 92, 91, 108, 86, 42, 41, 40, 38, 150, 5, 3, 9, 7, 8], loopHops: [3, 9, 7, 8, 10, 11], loopDur: 5, burstDelay: 0.7 },
  // Italy — Alba Iulia → Ljubljana → Milan → Turin → Venice → Bologna → Florence → Rome → Naples
  { initialHops: [93, 94, 111, 110, 123, 109, 68, 69, 70, 71, 73, 74, 75, 76], loopHops: [75, 76, 82, 79, 78], loopDur: 4, burstDelay: 0.9 },
  // Balkans — Alba Iulia → Nis → Craiova → Sofia → Skopje → Tirana
  { initialHops: [93, 94, 111, 122, 101, 114, 115, 116, 149], loopHops: [116, 147, 126, 117, 120, 125, 114], loopDur: 6, burstDelay: 0.1 },
  // Romania circuit
  { initialHops: [93, 95, 96, 104, 98, 103, 92], loopHops: [93, 95, 96, 106, 97, 101, 122, 111, 94, 93], loopDur: 7, burstDelay: 0 },
  // Central corridor — Alba Iulia → Prague → Dresden → Berlin → Leipzig → Erfurt → Frankfurt → Cologne → Dortmund
  { initialHops: [93, 92, 91, 108, 86, 85, 84, 87, 83, 33, 31, 32], loopHops: [144, 26, 35, 34, 145, 36, 89, 90, 84], loopDur: 7, burstDelay: 1.2 },
  // To Lisbon — deep west via Spain
  { initialHops: [93, 94, 111, 110, 123, 109, 68, 69, 52, 51, 135, 62, 66, 61, 137, 60, 59], loopHops: [59, 60, 130, 136, 130, 60, 137, 63], loopDur: 6, burstDelay: 1.5 },
  // Poland/Baltics — Alba Iulia → Warsaw → Lublin → Bialystok → Vilnius → Riga → Tallinn
  { initialHops: [93, 92, 91, 108, 86, 42, 41, 40, 44, 151, 12, 13, 11, 10], loopHops: [40, 38, 150, 31, 30, 28], loopDur: 5, burstDelay: 0.6 },
];

function buildPath(hops: number[]): string {
  return hops.map((cityIndex, i) => {
    const city = cities[cityIndex];
    return `${i === 0 ? 'M' : 'L'}${city.x},${city.y}`;
  }).join(' ');
}

export function RouteMap() {
  return (
    <div className="hero__route-map">
      <svg className="hero__route-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Route lines */}
        {routes.map(([a, b], i) => (
          <line
            key={`r-${i}`}
            className="hero__route-line"
            x1={cities[a].x} y1={cities[a].y}
            x2={cities[b].x} y2={cities[b].y}
            style={{ animationDelay: `${i * 0.003}s` }}
          />
        ))}

        {/* Pulse lights — burst from Alba Iulia on load, then loop normally */}
        {pulseRoutes.map(({ initialHops, loopHops, loopDur, burstDelay }, i) => {
          const initialPath = buildPath(initialHops);
          const loopPath = buildPath(loopHops);
          const loopStartsAt = INITIAL_BURST_DURATION + burstDelay;

          return (
            <circle key={`p-${i}`} r="0.2" className="hero__pulse-head">
              {/* Phase 1: burst outward from Alba Iulia (plays once) */}
              <animateMotion
                path={initialPath}
                dur={`${INITIAL_BURST_DURATION}s`}
                begin={`${burstDelay}s`}
                fill="freeze"
                repeatCount="1"
              />
              {/* Phase 2: continuous loop (starts after burst finishes) */}
              <animateMotion
                path={loopPath}
                dur={`${loopDur}s`}
                begin={`${loopStartsAt}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}
      </svg>

      {/* City pins */}
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
