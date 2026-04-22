# Puzzelrondjes.nl

Statische website voor auto-puzzelritten — door Anne & Luke, Buurtschap Middel.

## Structuur

```
site/
├── index.html                           # Home / overzicht alle ritten
├── middel-of-nowhere/index.html         # Rit 01 — Salland
├── genieten-van-gelderijssel/index.html # Rit 02 — Gelderijssel (binnenkort)
├── 404.html                             # Not-found pagina
├── CNAME                                # Custom domein (puzzelrondjes.nl)
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── site.css                         # Gedeelde responsive styles
│   ├── favicon.svg
│   └── anne-en-luke.jpg                 # Foto op home ("over ons")
└── js/
    ├── routes.jsx                       # Content: alle ritten + merk-teksten
    ├── shared.jsx                       # Widgets: hero-animatie, kaart, tulip, fotopuzzel
    ├── vintage-ui.jsx                   # Nav, footer, kleuren, stempels
    ├── vintage-home.jsx                 # <HomePage/>
    └── vintage-route.jsx                # <RoutePage route={...}/>
```

De site gebruikt **React + Babel-in-browser** — geen build-stap nodig. Upload de `site/` inhoud zoals-ie-is naar GitHub Pages.

## Nieuwe rit toevoegen

1. Voeg een object toe in `js/routes.jsx` (in de `ROUTES` array) — zie bestaande voorbeelden.
2. Maak `<route-id>/index.html` door `middel-of-nowhere/index.html` te kopiëren en `getRoute('<route-id>')` aan te passen.
3. Voeg de URL toe aan `sitemap.xml`.
4. Commit + push — klaar.

## Deploy naar GitHub Pages

### Eenmalig opzetten

1. Push de inhoud van `site/` naar de `main` branch van je repo (óf naar een `gh-pages` branch — doe één van beide consistent).
   - **Optie A — alles in root:** kopieer de inhoud van `site/` naar de repo-root.
   - **Optie B — subfolder:** laat `site/` staan en configureer Pages om vanuit `/site` te serveren.

2. Ga naar je repo → **Settings → Pages**.
3. **Source**: Deploy from a branch → kies `main` + `/ (root)` of `/site` afhankelijk van optie A/B.
4. **Custom domain**: vul `puzzelrondjes.nl` in (het `CNAME`-bestand is al aanwezig).
5. Vink **Enforce HTTPS** aan zodra het SSL-certificaat is uitgegeven (kan een paar minuten duren).

### DNS (bij je domein-registrar)

Zorg dat je DNS zo staat (zie ook GitHub's docs):

| Type  | Host | Waarde |
|-------|------|--------|
| A     | @    | 185.199.108.153 |
| A     | @    | 185.199.109.153 |
| A     | @    | 185.199.110.153 |
| A     | @    | 185.199.111.153 |
| CNAME | www  | `<github-username>.github.io.` |

### Daarna

Elke `git push` naar `main` triggert een automatische deploy (1-2 min).

## Lokaal testen

```bash
cd site
python3 -m http.server 8000
# open http://localhost:8000
```

(Gewoon `file://` openen werkt niet — de JSX-bestanden moeten via HTTP geladen worden.)

## Nog te doen / placeholders

- [ ] `apple-touch-icon.png` (180×180 PNG) en `favicon.ico` genereren vanuit `favicon.svg`.
- [ ] OG-image `social-share.jpg` (1200×630) maken voor mooie previews op WhatsApp / Facebook.
- [ ] Echte foto's vervangen van de huidige SVG-illustraties in de route-kaarten.
- [ ] Eventueel Google Analytics / Plausible toevoegen.

## Merk

- **Fonts:** Fraunces (display), Alegreya Sans (body), Special Elite (stempel-accent), IBM Plex Mono (labels)
- **Kleuren:** `#3a4a2b` (groen), `#b5542c` (terracotta), `#c89a2c` (oker), `#f4ead5` (papier), `#2a211a` (inkt)
- **Stijl:** Vintage roadtrip, ambachtelijk papier, kompas-detail, stempels, gedempte aardetinten
