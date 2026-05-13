// shared.jsx — shared widgets: hero scene, tulip, photo puzzle demo, map, compass, placeholder.
// Region-agnostic so routes can pass their own palette + map geometry.

// ═══════════════════════════════════════════════════════════════════
// AnimatedHero — lightweight rolling-hills SVG with an animated car driving a road.
// Palette is passed in per route. Region-agnostic (no region-specific landmarks).
// ═══════════════════════════════════════════════════════════════════
function AnimatedHero({ palette, style, compact }) {
  const p = palette;
  const h = compact ? 260 : 420;
  return (
    <div style={{ position: 'relative', width: '100%', height: h, overflow: 'hidden', borderRadius: 2, ...style }}>
      <svg viewBox="0 0 800 420" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', display: 'block' }}>
        <defs>
          <linearGradient id={"sky"+p.id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={p.skyTop}/>
            <stop offset="100%" stopColor={p.sky}/>
          </linearGradient>
          <pattern id={"dots"+p.id} width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="6" cy="6" r="0.8" fill={p.ink} opacity="0.08"/>
          </pattern>
        </defs>
        <rect width="800" height="300" fill={`url(#sky${p.id})`}/>
        <circle cx="640" cy="90" r="38" fill={p.accent} opacity="0.85"/>
        <circle cx="640" cy="90" r="58" fill={p.accent} opacity="0.12"/>

        {/* Clouds */}
        <g opacity="0.75">
          <g>
            <ellipse cx="150" cy="70" rx="44" ry="11" fill="#fff" opacity="0.7"/>
            <ellipse cx="180" cy="65" rx="30" ry="9" fill="#fff" opacity="0.7"/>
            <animateTransform attributeName="transform" type="translate" from="0 0" to="900 0" dur="60s" repeatCount="indefinite"/>
          </g>
          <g>
            <ellipse cx="-200" cy="110" rx="60" ry="12" fill="#fff" opacity="0.55"/>
            <animateTransform attributeName="transform" type="translate" from="0 0" to="1100 0" dur="80s" repeatCount="indefinite"/>
          </g>
        </g>

        {/* Birds */}
        <g fill="none" stroke={p.ink} strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
          <g>
            <path d="M0 0 q4 -4 8 0 q4 -4 8 0"/>
            <animateTransform attributeName="transform" type="translate" from="100 60" to="700 50" dur="25s" repeatCount="indefinite"/>
          </g>
          <g>
            <path d="M0 0 q3 -3 6 0 q3 -3 6 0"/>
            <animateTransform attributeName="transform" type="translate" from="180 90" to="720 80" dur="28s" repeatCount="indefinite"/>
          </g>
        </g>

        {/* Hills */}
        <path d="M0 260 C 120 210, 240 240, 360 225 S 600 200, 800 240 L 800 320 L 0 320 Z" fill={p.hillBack}/>
        <path d="M0 290 C 100 260, 260 290, 400 270 S 640 260, 800 285 L 800 320 L 0 320 Z" fill={p.hillMid}/>

        <g fill={p.tree} opacity="0.9">
          <g transform="translate(80 278)"><circle r="8"/><rect x="-1" y="5" width="2" height="10" fill={p.ink} opacity="0.5"/></g>
          <g transform="translate(110 282)"><circle r="6"/><rect x="-1" y="4" width="2" height="8" fill={p.ink} opacity="0.5"/></g>
          <g transform="translate(560 276)"><circle r="9"/><rect x="-1" y="6" width="2" height="11" fill={p.ink} opacity="0.5"/></g>
          <g transform="translate(720 282)"><circle r="7"/><rect x="-1" y="5" width="2" height="9" fill={p.ink} opacity="0.5"/></g>
        </g>

        <path d="M0 340 C 140 300, 320 340, 460 320 S 700 330, 800 320 L 800 420 L 0 420 Z" fill={p.hillFront}/>
        <rect x="0" y="320" width="800" height="100" fill={`url(#dots${p.id})`}/>

        <path d="M -20 420 C 200 420, 300 360, 500 360 S 780 380, 820 340" fill="none" stroke={p.road} strokeWidth="22" strokeLinecap="round"/>
        <path d="M -20 420 C 200 420, 300 360, 500 360 S 780 380, 820 340" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="8 10" opacity="0.7"/>

        <g>
          <g transform="translate(-30 -10)">
            <rect x="-18" y="-6" width="36" height="10" rx="3" fill={p.car}/>
            <path d="M -12 -6 L -6 -14 L 8 -14 L 14 -6 Z" fill={p.car}/>
            <rect x="-10" y="-12" width="8" height="6" fill={p.skyTop} opacity="0.8"/>
            <rect x="0" y="-12" width="8" height="6" fill={p.skyTop} opacity="0.8"/>
            <circle cx="-10" cy="5" r="3.5" fill={p.ink}/>
            <circle cx="10" cy="5" r="3.5" fill={p.ink}/>
            <circle cx="-10" cy="5" r="1.5" fill="#eee"/>
            <circle cx="10" cy="5" r="1.5" fill="#eee"/>
            <circle cx="18" cy="-2" r="2" fill={p.accent}/>
          </g>
          <animateMotion dur="18s" repeatCount="indefinite" rotate="auto"
            path="M -20 420 C 200 420, 300 360, 500 360 S 780 380, 820 340"/>
        </g>

        <g fill={p.hillFront} opacity="0.8">
          <path d="M 40 410 q 3 -8 6 0 q 3 -8 6 0 z"/>
          <path d="M 220 400 q 3 -8 6 0 q 3 -8 6 0 z"/>
          <path d="M 380 408 q 3 -8 6 0 q 3 -8 6 0 z"/>
          <path d="M 600 402 q 3 -8 6 0 q 3 -8 6 0 z"/>
        </g>
      </svg>
    </div>
  );
}

// Build a hero palette from a route
function heroPaletteForRoute(r) {
  return {
    id: r.id,
    skyTop: '#e8d9a6',
    sky: '#f4ead5',
    hillBack: '#8a8a4a',
    hillMid: '#6b7a3e',
    hillFront: r.color,
    road: '#9b7a4a',
    car: r.accent,
    accent: r.accentSoft,
    tree: r.color,
    ink: '#2a211a',
  };
}

// ═══════════════════════════════════════════════════════════════════
// AnimatedHeroValley — alternate scene: Sallandse Heuvelrug op de achtergrond,
// een meanderende beek door de vallei, boerderij, knotwilgen, koe in de wei,
// en een autootje op een onderdoorlopende weg.
// ═══════════════════════════════════════════════════════════════════
function AnimatedHeroValley({ palette, style, compact }) {
  const p = palette;
  const h = compact ? 260 : 420;
  return (
    <div style={{ position: 'relative', width: '100%', height: h, overflow: 'hidden', borderRadius: 2, ...style }}>
      <svg viewBox="0 0 800 420" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', display: 'block' }}>
        <defs>
          <linearGradient id={"vSky"+p.id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={p.skyTop}/>
            <stop offset="100%" stopColor={p.sky}/>
          </linearGradient>
          <linearGradient id={"vWater"+p.id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={p.car} stopOpacity="0.9"/>
            <stop offset="100%" stopColor={p.car} stopOpacity="0.55"/>
          </linearGradient>
          <pattern id={"vDots"+p.id} width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="6" cy="6" r="0.8" fill={p.ink} opacity="0.08"/>
          </pattern>
        </defs>

        {/* Sky */}
        <rect width="800" height="320" fill={`url(#vSky${p.id})`}/>

        {/* Sun */}
        <circle cx="640" cy="85" r="34" fill={p.accent} opacity="0.78"/>
        <circle cx="640" cy="85" r="56" fill={p.accent} opacity="0.1"/>

        {/* Clouds */}
        <g opacity="0.7">
          <g>
            <ellipse cx="180" cy="55" rx="48" ry="11" fill="#fff" opacity="0.75"/>
            <ellipse cx="218" cy="48" rx="32" ry="9" fill="#fff" opacity="0.75"/>
            <animateTransform attributeName="transform" type="translate" from="0 0" to="900 0" dur="70s" repeatCount="indefinite"/>
          </g>
          <g>
            <ellipse cx="-160" cy="105" rx="55" ry="11" fill="#fff" opacity="0.5"/>
            <animateTransform attributeName="transform" type="translate" from="0 0" to="1100 0" dur="90s" repeatCount="indefinite"/>
          </g>
        </g>

        {/* Birds */}
        <g fill="none" stroke={p.ink} strokeWidth="1.5" strokeLinecap="round" opacity="0.55">
          <g>
            <path d="M0 0 q4 -4 8 0 q4 -4 8 0"/>
            <animateTransform attributeName="transform" type="translate" from="80 70" to="730 60" dur="28s" repeatCount="indefinite"/>
          </g>
          <g>
            <path d="M0 0 q3 -3 6 0 q3 -3 6 0"/>
            <animateTransform attributeName="transform" type="translate" from="200 100" to="740 95" dur="32s" repeatCount="indefinite"/>
          </g>
        </g>

        {/* Sallandse Heuvelrug — achterste laag, gevarieerde topografie */}
        <path d="M 0 230 L 50 215 L 100 200 L 160 180 L 230 165 L 310 152 L 380 148 L 450 158 L 520 168 L 590 175 L 670 188 L 740 200 L 800 215 L 800 290 L 0 290 Z" fill={p.hillBack}/>
        {/* Donkerdere achtergrond achter heuvelrug */}
        <path d="M 0 250 Q 200 230 380 240 Q 560 250 800 245 L 800 290 L 0 290 Z" fill={p.hillBack} opacity="0.55"/>

        {/* Pijnbomen op de heuvelrug */}
        <g>
          {[
            { x: 60, y: 218, h: 16 }, { x: 110, y: 202, h: 20 },
            { x: 170, y: 184, h: 24 }, { x: 230, y: 168, h: 28 },
            { x: 290, y: 158, h: 26 }, { x: 360, y: 152, h: 30 },
            { x: 420, y: 154, h: 28 }, { x: 480, y: 162, h: 24 },
            { x: 540, y: 172, h: 22 }, { x: 610, y: 180, h: 20 },
            { x: 670, y: 192, h: 22 }, { x: 730, y: 204, h: 18 },
          ].map((t, i) => (
            <g key={i} transform={`translate(${t.x} ${t.y})`}>
              <polygon points={`0,${-t.h} ${-t.h*0.4},${-t.h*0.3} ${t.h*0.4},${-t.h*0.3}`} fill={p.tree}/>
              <polygon points={`0,${-t.h*0.55} ${-t.h*0.5},${t.h*0.05} ${t.h*0.5},${t.h*0.05}`} fill={p.tree}/>
              <rect x="-1" y={t.h*0.05} width="2" height="5" fill={p.ink} opacity="0.5"/>
            </g>
          ))}
        </g>

        {/* Vallei-vloer middengrond */}
        <path d="M 0 290 Q 200 278 400 285 Q 600 292 800 280 L 800 365 L 0 365 Z" fill={p.hillMid}/>
        <rect x="0" y="290" width="800" height="130" fill={`url(#vDots${p.id})`}/>

        {/* Boerderij silhouet */}
        <g transform="translate(460 285)">
          <rect x="-24" y="-20" width="48" height="22" fill={p.ink} opacity="0.85"/>
          <polygon points="-28,-20 0,-40 28,-20" fill={p.ink}/>
          {/* Schoorsteen */}
          <rect x="10" y="-36" width="5" height="10" fill={p.ink}/>
          {/* Verlichte raampjes */}
          <rect x="-18" y="-14" width="6" height="6" fill={p.skyTop} opacity="0.85"/>
          <rect x="-6" y="-14" width="6" height="6" fill={p.skyTop} opacity="0.85"/>
          <rect x="12" y="-14" width="6" height="6" fill={p.skyTop} opacity="0.85"/>
          {/* Deur */}
          <rect x="-3" y="-8" width="6" height="10" fill={p.tree} opacity="0.7"/>
        </g>

        {/* Hekje langs weide */}
        <g stroke={p.ink} strokeWidth="1.2" opacity="0.55">
          <line x1="0" y1="350" x2="800" y2="346"/>
          {[40, 90, 140, 240, 320, 400, 470, 540, 610, 680, 750].map((x, i) => (
            <line key={i} x1={x} y1="346" x2={x} y2="358"/>
          ))}
        </g>

        {/* Schipbeek — meanderende beek */}
        <path d="M -10 325 Q 110 308 220 320 Q 330 332 440 318 Q 560 302 680 320 Q 750 330 810 322"
          fill="none" stroke={`url(#vWater${p.id})`} strokeWidth="13" strokeLinecap="round"/>
        {/* Glinstering op water */}
        <path d="M -10 325 Q 110 308 220 320 Q 330 332 440 318 Q 560 302 680 320 Q 750 330 810 322"
          fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.4" strokeDasharray="10 22">
          <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="6s" repeatCount="indefinite"/>
        </path>

        {/* Knotwilgen langs de beek */}
        <g>
          <g transform="translate(70 318)">
            <ellipse cx="0" cy="-11" rx="14" ry="11" fill={p.tree}/>
            <ellipse cx="-7" cy="-7" rx="6" ry="5" fill={p.tree} opacity="0.85"/>
            <ellipse cx="6" cy="-8" rx="5" ry="4" fill={p.tree} opacity="0.85"/>
            <rect x="-2" y="0" width="4" height="9" fill={p.ink} opacity="0.6"/>
          </g>
          <g transform="translate(295 322)">
            <ellipse cx="0" cy="-9" rx="11" ry="9" fill={p.tree}/>
            <rect x="-2" y="0" width="4" height="7" fill={p.ink} opacity="0.6"/>
          </g>
          <g transform="translate(580 322)">
            <ellipse cx="0" cy="-12" rx="15" ry="12" fill={p.tree}/>
            <ellipse cx="-8" cy="-7" rx="5" ry="4" fill={p.tree} opacity="0.85"/>
            <rect x="-2" y="0" width="4" height="10" fill={p.ink} opacity="0.6"/>
          </g>
          <g transform="translate(740 320)">
            <ellipse cx="0" cy="-10" rx="12" ry="10" fill={p.tree}/>
            <rect x="-2" y="0" width="4" height="8" fill={p.ink} opacity="0.6"/>
          </g>
        </g>

        {/* Koe in de weide */}
        <g transform="translate(180 376)">
          <ellipse cx="0" cy="0" rx="13" ry="6.5" fill="#faf4e3" stroke={p.ink} strokeWidth="1.2"/>
          <ellipse cx="6" cy="-2" rx="4" ry="3" fill={p.ink} opacity="0.55"/>
          <ellipse cx="-4" cy="2" rx="3" ry="2" fill={p.ink} opacity="0.55"/>
          <circle cx="-12" cy="-4" r="4.5" fill="#faf4e3" stroke={p.ink} strokeWidth="1.2"/>
          <circle cx="-13" cy="-7" r="0.8" fill={p.ink}/>
          <line x1="-6" y1="6" x2="-6" y2="14" stroke={p.ink} strokeWidth="1.5"/>
          <line x1="3" y1="6" x2="3" y2="14" stroke={p.ink} strokeWidth="1.5"/>
          <line x1="9" y1="5" x2="9" y2="13" stroke={p.ink} strokeWidth="1.5"/>
          <line x1="-12" y1="5" x2="-12" y2="13" stroke={p.ink} strokeWidth="1.5"/>
        </g>

        {/* Voorgrond weide */}
        <path d="M 0 360 Q 200 348 400 358 Q 600 368 800 350 L 800 420 L 0 420 Z" fill={p.hillFront}/>

        {/* Weg in voorgrond */}
        <path d="M -20 400 Q 200 388 400 395 Q 600 402 820 388"
          fill="none" stroke={p.road} strokeWidth="20" strokeLinecap="round"/>
        <path d="M -20 400 Q 200 388 400 395 Q 600 402 820 388"
          fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="8 10" opacity="0.6"/>

        {/* Auto */}
        <g>
          <g transform="translate(-30 -10)">
            <rect x="-18" y="-6" width="36" height="10" rx="3" fill={p.car}/>
            <path d="M -12 -6 L -6 -14 L 8 -14 L 14 -6 Z" fill={p.car}/>
            <rect x="-10" y="-12" width="8" height="6" fill={p.skyTop} opacity="0.8"/>
            <rect x="0" y="-12" width="8" height="6" fill={p.skyTop} opacity="0.8"/>
            <circle cx="-10" cy="5" r="3.5" fill={p.ink}/>
            <circle cx="10" cy="5" r="3.5" fill={p.ink}/>
            <circle cx="-10" cy="5" r="1.5" fill="#eee"/>
            <circle cx="10" cy="5" r="1.5" fill="#eee"/>
            <circle cx="18" cy="-2" r="2" fill={p.accent}/>
          </g>
          <animateMotion dur="22s" repeatCount="indefinite" rotate="auto"
            path="M -20 400 Q 200 388 400 395 Q 600 402 820 388"/>
        </g>

        {/* Grasspritzers voorgrond */}
        <g fill={p.hillFront} opacity="0.85">
          <path d="M 50 416 q 2 -7 4 0 q 2 -7 4 0 z"/>
          <path d="M 240 412 q 2 -7 4 0 q 2 -7 4 0 z"/>
          <path d="M 410 414 q 2 -7 4 0 q 2 -7 4 0 z"/>
          <path d="M 580 410 q 2 -7 4 0 q 2 -7 4 0 z"/>
          <path d="M 720 415 q 2 -7 4 0 q 2 -7 4 0 z"/>
        </g>
      </svg>
    </div>
  );
}

// Wrapper that picks the right hero scene per route
function RouteHero({ route, style, compact }) {
  const palette = heroPaletteForRoute(route);
  if (route.heroVariant === 'valley') {
    return <AnimatedHeroValley palette={palette} style={style} compact={compact}/>;
  }
  return <AnimatedHero palette={palette} style={style} compact={compact}/>;
}

// ═══════════════════════════════════════════════════════════════════
// InteractiveTulip — tulip diagram demo (bolletje-pijltje).
// ═══════════════════════════════════════════════════════════════════
function InteractiveTulip({ color = '#2d3d2a', accent = '#c9572c', bg = '#f5efe3' }) {
  const options = [
    { id: 'left', label: 'Linksaf', km: 1.3, desc: 'kom je bij een afslag en ga je',
      roads: [{x1:0,y1:48,x2:0,y2:0},{x1:0,y1:0,x2:-38,y2:0},{x1:0,y1:0,x2:0,y2:-38}],
      arrow: [{x1:0,y1:0,x2:-28,y2:0}], arrowHead: '-34,0 -24,-4 -24,4' },
    { id: 'right', label: 'Rechtsaf', km: 2.1, desc: 'kom je bij een t-splitsing en ga je',
      roads: [{x1:0,y1:48,x2:0,y2:0},{x1:0,y1:0,x2:-38,y2:0},{x1:0,y1:0,x2:38,y2:0}],
      arrow: [{x1:0,y1:0,x2:28,y2:0}], arrowHead: '34,0 24,-4 24,4' },
    { id: 'round', label: '3e afslag', km: 3.4, desc: 'kom je bij een rotonde en neem je de',
      roads: [{x1:0,y1:48,x2:0,y2:14},{x1:14,y1:0,x2:38,y2:0},{x1:0,y1:-14,x2:0,y2:-38},{x1:-14,y1:0,x2:-38,y2:0}],
      circle: {cx:0,cy:0,r:14},
      arrow: [{x1:-14,y1:0,x2:-28,y2:0}], arrowHead: '-34,0 -24,-4 -24,4' },
  ];
  const [sel, setSel] = React.useState(options[0]);
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
        <div style={{ width: 140, height: 140, position: 'relative', background: bg, border: `2px solid ${color}`, flexShrink: 0 }}>
          <svg viewBox="-50 -50 100 100" style={{ width: '100%', height: '100%', display: 'block' }}>
            {/* Zijwegen (lichtgrijs) */}
            {sel.roads.map((rd, i) => (
              <line key={i} x1={rd.x1} y1={rd.y1} x2={rd.x2} y2={rd.y2} stroke={color} strokeWidth={i === 0 ? 3 : 1.5} strokeLinecap="round" opacity={i === 0 ? 1 : 0.35}/>
            ))}
            {/* Rotonde cirkel */}
            {sel.circle && <circle cx={sel.circle.cx} cy={sel.circle.cy} r={sel.circle.r} fill="none" stroke={color} strokeWidth="1.5" opacity="0.4"/>}
            {/* Bolletje (startpunt) */}
            <circle cx="0" cy="48" r="5" fill={color}/>
            {/* Pijl (de richting die je op moet) */}
            {sel.arrow.map((a, i) => (
              <line key={i} x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2} stroke={accent} strokeWidth="3" strokeLinecap="round"/>
            ))}
            <polygon points={sel.arrowHead} fill={accent}/>
          </svg>
          <div style={{ position: 'absolute', top: 6, right: 8, background: accent, color: '#fff', fontSize: 11, padding: '2px 8px', fontFamily: 'IBM Plex Mono, monospace', fontWeight: 500, whiteSpace: 'nowrap' }}>
            {sel.km.toFixed(1)} km
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 160 }}>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, letterSpacing: '0.1em', color, opacity: 0.6, textTransform: 'uppercase', marginBottom: 8 }}>
            klik om te wisselen
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {options.map(o => (
              <button key={o.id} onClick={() => setSel(o)} style={{
                border: `1.5px solid ${color}`,
                background: sel.id === o.id ? color : 'transparent',
                color: sel.id === o.id ? bg : color,
                padding: '6px 12px', borderRadius: 20, fontSize: 13, cursor: 'pointer',
                fontFamily: 'inherit', transition: 'all .15s'
              }}>{o.label}</button>
            ))}
          </div>
          <div style={{ marginTop: 14, fontSize: 14, color, lineHeight: 1.6 }}>
            <b>●</b> = waar je bent &nbsp; <b style={{color: accent}}>→</b> = waar je heen moet
          </div>
          <div style={{ marginTop: 6, fontSize: 13, color, opacity: 0.85, lineHeight: 1.5 }}>
            Na <b>{sel.km.toFixed(1)} km</b> {sel.desc} <b>{sel.label.toLowerCase()}</b>.
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// PhotoPuzzleDemo
// ═══════════════════════════════════════════════════════════════════
function PhotoPuzzleDemo({ color = '#2d3d2a', accent = '#c9572c', bg = '#f5efe3' }) {
  const word = "KINDEREN";
  const targetIdx = 3; // 'D' at index 3
  const [step, setStep] = React.useState(0); // 0, 1, 2
  const [typed, setTyped] = React.useState(Array(word.length).fill(''));
  const refs = React.useRef([]);
  const base = (typeof PAGE_BASE !== 'undefined' ? PAGE_BASE : '');

  const onChange = (i, v) => {
    const letter = v.toUpperCase().slice(-1);
    if (!/^[A-Z]?$/.test(letter)) return;
    const next = [...typed]; next[i] = letter; setTyped(next);
    if (letter && refs.current[i+1]) refs.current[i+1].focus();
  };
  const correct = typed.join('') === word;

  const steps = [
    { label: '①', title: 'Je krijgt een foto…', desc: 'In je boekje staat een foto van onderweg, maar een deel van de tekst is afgeplakt.' },
    { label: '②', title: 'Je vindt de plek…', desc: 'Onderweg herken je de locatie en zie je wat er écht staat.' },
    { label: '③', title: 'Je vult het in!', desc: 'Schrijf het verborgen woord op de streepjes. De gemarkeerde letter hoort bij een nummer — zo los je de eindpuzzel op.' },
  ];

  return (
    <div>
      {/* Step indicator */}
      <div style={{ display: 'flex', gap: 0, marginBottom: 20 }}>
        {steps.map((s, i) => (
          <button key={i} onClick={() => setStep(i)} style={{
            flex: 1, padding: '10px 8px', border: `1.5px solid ${color}`,
            borderRight: i < 2 ? 'none' : `1.5px solid ${color}`,
            background: step === i ? color : 'transparent',
            color: step === i ? bg : color,
            fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, letterSpacing: '0.05em',
            cursor: 'pointer', transition: 'all .2s',
            borderRadius: i === 0 ? '4px 0 0 4px' : i === 2 ? '0 4px 4px 0' : 0,
          }}>
            {s.label} {s.title}
          </button>
        ))}
      </div>

      {/* Step description */}
      <div style={{ fontSize: 14, color, opacity: 0.8, marginBottom: 16, lineHeight: 1.5, minHeight: 42 }}>
        {steps[step].desc}
      </div>

      {/* Step content */}
      {step === 0 && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'inline-block', textAlign: 'center' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <img src={base + 'assets/images/demo/demo.jpg'} alt="Foto met afgeplakte tekst"
                style={{ width: '100%', maxWidth: 340, borderRadius: 4, border: `1.5px solid ${color}`, display: 'block' }}/>
              <div style={{
                position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)',
                background: accent, color: bg, padding: '3px 10px', borderRadius: 12,
                fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, letterSpacing: '0.1em', whiteSpace: 'nowrap',
              }}>welk woord is afgeplakt?</div>
            </div>
            <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginTop: 14 }}>
              {word.split('').map((_, i) => (
                <div key={i} style={{
                  width: 26, height: 32, borderBottom: `2px solid ${color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: i === targetIdx ? accent + '22' : 'transparent',
                  boxShadow: i === targetIdx ? `inset 0 0 0 1.5px ${accent}` : 'none',
                  fontFamily: 'Special Elite, monospace', fontSize: 14, color, opacity: 1.0,
                }}>{i === targetIdx ? '?' : ''}</div>
              ))}
            </div>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 16, color, opacity: 1.0, marginTop: 6 }}>63&nbsp;&nbsp;&nbsp;</div>
          </div>
        </div>
      )}

      {step === 1 && (
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <div style={{ textAlign: 'center' }}>
            <img src={base + 'assets/images/demo/demo.jpg'} alt="Afgeplakt"
              style={{ width: 160, borderRadius: 4, border: `1.5px solid ${color}33`, display: 'block', opacity: 0.5 }}/>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, color, opacity: 0.5, marginTop: 6 }}>in je boekje</div>
          </div>
          <div style={{ fontSize: 24, color: accent, fontWeight: 700, paddingBottom: 30 }}>→</div>
          <div style={{ textAlign: 'center' }}>
            <img src={base + 'assets/images/demo/clear.jpg'} alt="Echte situatie onderweg"
              style={{ width: 200, borderRadius: 4, border: `1.5px solid ${color}`, display: 'block' }}/>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, color: accent, marginTop: 6, fontWeight: 600 }}>langs de route!</div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div style={{ textAlign: 'center', flexShrink: 0 }}>
            <img src={base + 'assets/images/demo/clear.jpg'} alt="Oplossing"
              style={{ width: 180, borderRadius: 4, border: `1.5px solid ${color}`, display: 'block' }}/>
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, letterSpacing: '0.1em', color, opacity: 0.6, textTransform: 'uppercase', marginBottom: 10 }}>
              vul het afgeplakte woord in
            </div>
            <div style={{ display: 'flex', gap: 4, marginBottom: 12, flexWrap: 'wrap' }}>
              {word.split('').map((_, i) => (
                <input key={i} ref={el => refs.current[i] = el}
                  value={typed[i]} onChange={e => onChange(i, e.target.value)}
                  maxLength="1"
                  style={{
                    width: 28, height: 34, border: 'none',
                    borderBottom: `2px solid ${color}`,
                    background: i === targetIdx ? accent + '22' : 'transparent',
                    textAlign: 'center', fontFamily: 'Special Elite, monospace', fontSize: 18,
                    color, outline: 'none', padding: 0,
                    boxShadow: i === targetIdx ? `inset 0 0 0 1.5px ${accent}` : 'none',
                  }}/>
              ))}
            </div>
            <div style={{ fontSize: 12, color, opacity: 0.75, lineHeight: 1.6 }}>
              De letter in <span style={{ background: accent + '33', padding: '1px 5px', borderRadius: 2, fontWeight: 600 }}>het gemarkeerde vakje</span> hoort bij nummer <b>63</b>.
              <br/>Zo spaar je letters en los je de eindpuzzel op!
            </div>
            {correct && (
              <div style={{ marginTop: 12, padding: '8px 14px', background: color, color: bg, borderRadius: 4, fontSize: 13, fontWeight: 600, display: 'inline-block' }}>
                ✓ Klopt! 63 = D
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function Placeholder({ label, sub, color = '#2d3d2a', bg = '#e8e2d2', width = '100%', height = 200, style }) {
  return (
    <div style={{
      width, height, position: 'relative', overflow: 'hidden',
      background: `repeating-linear-gradient(45deg, ${bg} 0 10px, ${bg}dd 10px 20px)`,
      border: `1px dashed ${color}55`, display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column', color: color, ...style,
    }}>
      <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.7 }}>{label}</div>
      {sub && <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, opacity: 0.5, marginTop: 4, letterSpacing: '0.1em' }}>{sub}</div>}
    </div>
  );
}

function CompassRose({ size = 80, color = '#3a2f1e', spin = true }) {
  return (
    <svg viewBox="-50 -50 100 100" width={size} height={size} style={{ display: 'block' }}>
      <g style={spin ? { animation: 'compassSpin 60s linear infinite', transformOrigin: 'center' } : {}}>
        <circle r="46" fill="none" stroke={color} strokeWidth="1" opacity="0.4"/>
        <circle r="38" fill="none" stroke={color} strokeWidth="0.5" opacity="0.3"/>
        {[0, 45, 90, 135, 180, 225, 270, 315].map(a => (
          <g key={a} transform={`rotate(${a})`}>
            <polygon points={a % 90 === 0 ? "0,-40 3,0 -3,0" : "0,-34 2,0 -2,0"} fill={color} opacity={a % 90 === 0 ? 0.85 : 0.35}/>
            <polygon points={a % 90 === 0 ? "0,40 3,0 -3,0" : "0,34 2,0 -2,0"} fill={color} opacity={a % 90 === 0 ? 0.2 : 0.1}/>
          </g>
        ))}
        <circle r="3" fill={color}/>
      </g>
      <text x="0" y="-44" textAnchor="middle" fontSize="8" fill={color} fontFamily="Fraunces, serif" fontWeight="700">N</text>
      <text x="44" y="3" textAnchor="middle" fontSize="8" fill={color} fontFamily="Fraunces, serif" fontWeight="700">E</text>
      <text x="0" y="50" textAnchor="middle" fontSize="8" fill={color} fontFamily="Fraunces, serif" fontWeight="700">S</text>
      <text x="-44" y="3" textAnchor="middle" fontSize="8" fill={color} fontFamily="Fraunces, serif" fontWeight="700">W</text>
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════
// RouteMap — generic stylized map, drives its shape from the route object.
// ═══════════════════════════════════════════════════════════════════
function RouteMap({ route, stroke, fill, accent, height = 320, showContour = true, style }) {
  const places = route.mapPlaces || [];
  const active = route.startpoints || [];
  return (
    <svg viewBox="0 0 500 500" style={{ width: '100%', height, display: 'block', ...style }}>
      <defs>
        <pattern id={"mapGrid-"+route.id} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke={stroke} strokeWidth="0.3" opacity="0.2"/>
        </pattern>
      </defs>
      <rect width="500" height="500" fill={fill}/>
      <rect width="500" height="500" fill={`url(#mapGrid-${route.id})`}/>
      <path d={route.mapRegion} fill={stroke} fillOpacity="0.06" stroke={stroke} strokeWidth="1.5" strokeDasharray="4 3"/>
      {showContour && (
        <g fill="none" stroke={stroke} strokeWidth="0.6" opacity="0.25">
          <path d="M 150 200 Q 240 170 330 220 T 420 300"/>
          <path d="M 130 260 Q 230 230 340 270 T 440 340"/>
          <path d="M 120 320 Q 220 290 330 320 T 430 380"/>
          <path d="M 110 380 Q 220 360 320 380"/>
        </g>
      )}
      {route.mapRiver && (
        <>
          <path d={route.mapRiver.path} fill="none" stroke={accent} strokeWidth="2" opacity="0.5" strokeLinecap="round"/>
          <text x={route.mapRiver.labelAt.x} y={route.mapRiver.labelAt.y} fontSize="10" fill={accent} fontFamily="Fraunces, serif" fontStyle="italic">{route.mapRiver.label}</text>
        </>
      )}
      <path d={route.mapRoute} fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 4" opacity="0.8"/>
      {places.map(p => {
        const isActive = active.includes(p.id);
        return (
          <g key={p.id}>
            {p.big && isActive && <circle cx={p.x} cy={p.y} r="14" fill={accent} opacity="0.2"/>}
            <circle cx={p.x} cy={p.y} r={p.big ? 5 : 3.5} fill={p.big ? (isActive ? accent : stroke) : stroke}/>
            {p.big && <circle cx={p.x} cy={p.y} r="8" fill="none" stroke={isActive ? accent : stroke} strokeWidth="1.5" opacity={isActive ? 0.8 : 0.4}/>}
            <text x={p.x + 10} y={p.y + 4} fontSize={p.big ? 13 : 10} fill={stroke}
              fontFamily="Fraunces, serif" fontWeight={p.big ? 600 : 400} fontStyle={p.big ? 'normal' : 'italic'}>
              {p.label || p.id}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// Shared keyframes
if (typeof document !== 'undefined' && !document.getElementById('shared-anim-styles')) {
  const s = document.createElement('style');
  s.id = 'shared-anim-styles';
  s.textContent = `
    @keyframes compassSpin { from { transform: rotate(0); } to { transform: rotate(360deg); } }
  `;
  document.head.appendChild(s);
}

Object.assign(window, {
  AnimatedHero, AnimatedHeroValley, RouteHero, heroPaletteForRoute, InteractiveTulip, PhotoPuzzleDemo, Placeholder, CompassRose, RouteMap
});
