// routes.jsx — data model for multiple puzzle routes + shared brand content.

const BRAND = {
  name: "Puzzelrondjes.nl",
  tagline: "Auto puzzelritten door de mooiste hoekjes",
  blurb: "Stap in de auto en beleef onvergetelijke puzzelritten. Bolletje-pijltje-navigatie, raadsels onderweg, verborgen parels langs de weg. Gemaakt met liefde door Anne & Luke uit Buurtschap Middel.",
  wa: "https://wa.me/31614174474?text=Hoi!%20Ik%20wil%20graag%20meedoen%20aan%20een%20puzzelrit!",
  mail: "mailto:middelinbeweging@gmail.com?subject=Bestelling%20puzzelrit",
  fb: "https://www.facebook.com/profile.php?id=61586008074445",
  ig: "https://www.instagram.com/middel.of.nowhere.puzzelrit",
  about: "Wij zijn Anne en Luke, trotse inwoners van Buurtschap Middel. Onze gezamenlijke hobby? Puzzelen en autorijden. Na heel wat kilometers en gepuzzel in andere ritten, begon het te kriebelen: dat kunnen wij ook! Sindsdien zijn we routes aan het ontwerpen door de gebieden die we het best kennen — eentje tegelijk, en telkens met dezelfde aanpak: mooie wegen, slimme raadsels, en een sterke finish.",
};

const UNIVERSAL_STEPS = [
  { n: 1, title: "Stuur een bericht", body: "Via WhatsApp of e-mail — laat ons weten welke rit je wilt doen en vanaf welk startpunt." },
  { n: 2, title: "Ontvang betaalverzoek", body: "We sturen een tikkie van €10,- per auto." },
  { n: 3, title: "Krijg je PDF", body: "Na betaling ontvang je de PDF met instructies, aangepast voor het gewenste startpunt." },
  { n: 4, title: "Print & start", body: "Print de PDF, pak pen en papier, en start je avontuur!" },
];

const UNIVERSAL_TIPS = [
  "Doe de route bij daglicht, zodat je de locatie van de foto's goed herkent.",
  "Neem een pen mee en misschien iets om onder het papier te leggen bij het schrijven.",
  "Print de foto's in kleur of gebruik een tablet of telefoon.",
  "Alles is vanaf de openbare weg te zien — je hoeft geen erven te betreden.",
];

// Per-route content. Accent kleur varieert per route zodat ze onderscheidend zijn.
const ROUTES = [
  {
    id: "middel-of-nowhere",
    name: "Middel of Nowhere",
    number: "01",
    region: "Salland",
    tagline: "Ontdek Salland op z'n mooist",
    status: "available", // "available" | "coming-soon"
    accent: "#b5542c",       // terracotta
    accentSoft: "#c89a2c",   // ochre
    color: "#3a4a2b",        // deep forest
    distance: "≈ 70 km",
    duration: "2 – 3 uur",
    price: "€ 10",
    startpoints: ["Raalte", "Olst", "Deventer", "Heeten"],
    mapPlaces: [
      { id: 'Raalte', x: 300, y: 195, big: true },
      { id: 'Olst', x: 180, y: 280, big: true },
      { id: 'Deventer', x: 230, y: 385, big: true },
      { id: 'Heeten', x: 380, y: 250, big: true },
      { id: 'Middel', x: 250, y: 290, big: false, label: 'Buurtschap Middel' },
    ],
    mapRegion: "M 80 140 Q 180 80 300 110 T 460 180 Q 470 280 440 380 T 320 450 Q 200 470 120 420 T 80 260 Z",
    mapRiver: { path: "M 80 140 Q 110 230 140 300 Q 160 380 120 450", label: "IJssel", labelAt: { x: 100, y: 165 } },
    mapRoute: "M 300 200 Q 350 210 380 250 Q 380 340 250 375 Q 220 390 230 380 Q 175 330 180 280 Q 240 220 300 200",
    intro: "Een puzzelrit door het hart van Overijssel. Navigeer met bolletje-en-pijltje, los raadsels op en ontdek verborgen parels in Salland. Buurtschap Middel als stralend middelpunt.",
    highlights: [
      "Door het coulisselandschap van Salland",
      "Kronkelend langs dorpjes en buurtschappen tussen Raalte en Diepenveen",
      "4 startpunten om uit te kiezen",
    ],
  },
  {
    id: "oude-schipbeekvallei",
    name: "Oude schipbeekvallei",
    number: "02",
    region: "Zuid-Salland",
    tagline: "Door de stille vallei van de Schipbeek",
    status: "coming-soon",
    heroVariant: "valley",
    accent: "#3a6a78",        // river blue-green
    accentSoft: "#8ba67c",    // river green
    color: "#2d3b3f",         // slate
    distance: "≈ 65 km",
    duration: "2 – 3 uur",
    price: "€ 10",
    startpoints: ["Bathmen", "Holten", "Harfsen"],
    mapPlaces: [
      { id: 'Bathmen', x: 140, y: 160, big: true },
      { id: 'Holten', x: 360, y: 150, big: true },
      { id: 'Harfsen', x: 255, y: 330, big: true },
    ],
    mapRegion: "M 80 100 Q 220 70 380 100 T 460 200 Q 470 320 430 420 T 280 470 Q 150 460 90 390 T 70 220 Z",
    mapRiver: { path: "M 40 280 Q 150 250 260 270 Q 370 290 470 260", label: "Schipbeek", labelAt: { x: 42, y: 268 } },
    mapRoute: "M 140 160 Q 175 110 240 125 Q 300 118 360 150 Q 415 185 405 245 Q 395 295 355 310 Q 315 328 255 330 Q 195 332 165 305 Q 120 275 108 225 Q 100 185 140 160",
    intro: "Een puzzelrit door de groene vallei van de Schipbeek, langs eeuwenoude boerderijen, stille bosjes en de kronkelende wegen van het Sallandse binnenland. Bathmen, Laren en Holten als ankers van de route.",
    highlights: [
      "Door de stille Schipbeekvallei",
      "Langs oude boerderijen en Sallands coulisselandschap",
      "Compleet nieuwe puzzels",
    ],
  },
];

function getRoute(id) { return ROUTES.find(r => r.id === id); }

Object.assign(window, { BRAND, ROUTES, UNIVERSAL_STEPS, UNIVERSAL_TIPS, getRoute });
