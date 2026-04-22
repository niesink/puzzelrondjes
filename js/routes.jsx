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
      { id: 'Raalte', x: 300, y: 200, big: true },
      { id: 'Olst', x: 180, y: 280, big: true },
      { id: 'Deventer', x: 120, y: 380, big: true },
      { id: 'Heeten', x: 380, y: 250, big: true },
      { id: 'Middel', x: 250, y: 290, big: false, label: 'Buurtschap Middel' },
    ],
    mapRegion: "M 80 140 Q 180 80 300 110 T 460 180 Q 470 280 440 380 T 320 450 Q 200 470 120 420 T 80 260 Z",
    mapRiver: { path: "M 80 140 Q 110 230 140 300 Q 160 380 120 450", label: "IJssel", labelAt: { x: 85, y: 135 } },
    mapRoute: "M 300 200 Q 360 220 380 250 Q 400 290 350 320 Q 290 340 250 290 Q 210 260 180 280 Q 150 310 120 380 Q 150 400 220 380 Q 290 360 330 330 Q 380 300 380 250",
    intro: "Een puzzelrit door het hart van Overijssel. Navigeer met bolletje-en-pijltje, los raadsels op en ontdek verborgen parels in Salland. Buurtschap Middel als stralend middelpunt.",
    highlights: [
      "Door het coulisselandschap van Salland",
      "Langs de IJsseldijk en door Buurtschap Middel",
      "4 startpunten om uit te kiezen",
    ],
  },
  {
    id: "genieten-van-gelderijssel",
    name: "Genieten van Gelderijssel",
    number: "02",
    region: "Gelderijssel",
    tagline: "Waar de IJssel Gelderland raakt",
    status: "coming-soon",
    accent: "#3a6a78",        // river blue-green
    accentSoft: "#8ba67c",    // river green
    color: "#2d3b3f",         // slate
    distance: "≈ 65 km",
    duration: "2 – 3 uur",
    price: "€ 10",
    startpoints: ["Zutphen", "Doesburg", "Brummen", "Dieren"],
    mapPlaces: [
      { id: 'Zutphen', x: 200, y: 160, big: true },
      { id: 'Doesburg', x: 140, y: 360, big: true },
      { id: 'Brummen', x: 320, y: 240, big: true },
      { id: 'Dieren', x: 360, y: 340, big: true },
    ],
    mapRegion: "M 100 120 Q 220 90 340 130 T 450 220 Q 460 320 420 410 T 280 460 Q 160 450 100 400 T 90 240 Z",
    mapRiver: { path: "M 120 100 Q 160 200 180 280 Q 200 380 150 460", label: "IJssel", labelAt: { x: 130, y: 95 } },
    mapRoute: "M 200 160 Q 260 180 310 220 Q 360 260 340 330 Q 300 380 250 360 Q 190 340 150 370 Q 130 410 180 420 Q 260 430 310 400 Q 370 360 360 310 Q 350 260 320 240",
    intro: "Een nieuwe rit door de streek waar Gelderland en de IJssel elkaar ontmoeten — hanzestadjes, uiterwaarden, en kronkelige binnenwegen. Dezelfde aanpak, compleet nieuwe route.",
    highlights: [
      "Door de hanzestreek langs de IJssel",
      "Uiterwaarden, dijken en oude binnenwegen",
      "Compleet nieuwe puzzels",
    ],
  },
];

function getRoute(id) { return ROUTES.find(r => r.id === id); }

Object.assign(window, { BRAND, ROUTES, UNIVERSAL_STEPS, UNIVERSAL_TIPS, getRoute });
