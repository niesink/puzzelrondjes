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
// InteractiveTulip — user-clickable diagrams.
// ═══════════════════════════════════════════════════════════════════
function InteractiveTulip({ color = '#2d3d2a', accent = '#c9572c', bg = '#f5efe3', size = 180 }) {
  const options = [
    { id: 'left', label: 'Links', km: 1.3, angle: 180 },
    { id: 'straight', label: 'Rechtdoor', km: 2.1, angle: 90 },
    { id: 'right', label: 'Rechts', km: 0.8, angle: 0 },
    { id: 'round', label: 'Rotonde', km: 3.4, angle: -45 },
  ];
  const [sel, setSel] = React.useState(options[0]);
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
        <div style={{ width: size, height: size, position: 'relative', background: bg, borderRadius: '50%', border: `2px solid ${color}`, flexShrink: 0 }}>
          <svg viewBox="-50 -50 100 100" style={{ width: '100%', height: '100%', display: 'block' }}>
            <line x1="0" y1="40" x2="0" y2="8" stroke={color} strokeWidth="3" strokeLinecap="round"/>
            <circle cx="0" cy="40" r="5" fill={color}/>
            <g style={{ transition: 'transform .5s cubic-bezier(.3,1.4,.5,1)', transform: `rotate(${-sel.angle - 90}deg)`, transformOrigin: 'center' }}>
              <line x1="0" y1="0" x2="0" y2="-36" stroke={accent} strokeWidth="3" strokeLinecap="round"/>
              <polygon points="0,-44 -5,-34 5,-34" fill={accent}/>
            </g>
            <line x1="-42" y1="0" x2="-14" y2="0" stroke={color} strokeWidth="1" opacity="0.3"/>
            <line x1="14" y1="0" x2="42" y2="0" stroke={color} strokeWidth="1" opacity="0.3"/>
            <line x1="0" y1="-42" x2="0" y2="-14" stroke={color} strokeWidth="1" opacity="0.3"/>
          </svg>
          <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: accent, color: '#fff', fontSize: 11, padding: '2px 8px', borderRadius: 10, fontFamily: 'IBM Plex Mono, monospace', fontWeight: 500, whiteSpace: 'nowrap' }}>
            {sel.km.toFixed(1)} km
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 160 }}>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, letterSpacing: '0.1em', color, opacity: 0.6, textTransform: 'uppercase', marginBottom: 8 }}>
            probeer zelf
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
          <div style={{ marginTop: 12, fontSize: 13, color, opacity: 0.8, lineHeight: 1.5 }}>
            Na <b>{sel.km.toFixed(1)} km</b> kom je op een kruising en sla je <b>{sel.label.toLowerCase()}</b>.
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
  const targetIdx = 3;
  const [typed, setTyped] = React.useState(Array(word.length).fill(''));
  const [revealed, setRevealed] = React.useState(false);
  const refs = React.useRef([]);
  const onChange = (i, v) => {
    const letter = v.toUpperCase().slice(-1);
    if (!/^[A-Z]?$/.test(letter)) return;
    const next = [...typed]; next[i] = letter; setTyped(next);
    if (letter && refs.current[i+1]) refs.current[i+1].focus();
  };
  const correct = typed.join('') === word;
  return (
    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <div style={{ position: 'relative', width: 260, flexShrink: 0 }}>
        <div style={{
          width: 260, height: 180, background: `linear-gradient(135deg, ${color} 0%, ${color} 40%, ${accent} 40%, ${accent} 55%, ${bg} 55%)`,
          borderRadius: 4, overflow: 'hidden', position: 'relative', border: `1.5px solid ${color}`
        }}>
          <div style={{ position: 'absolute', top: 20, left: 20, right: 20, bottom: 20, border: '1px dashed rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: bg, fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, letterSpacing: '0.15em' }}>
            <div style={{ opacity: 0.7 }}>[ FOTO ONDERWEG ]</div>
            <div style={{ opacity: 0.5, marginTop: 4, fontSize: 9 }}>bord • boerderij • tegel</div>
          </div>
          <div style={{
            position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
            background: revealed ? 'transparent' : accent, color: revealed ? '#fff' : accent,
            padding: '4px 10px', fontFamily: 'Special Elite, monospace', fontSize: 18, letterSpacing: '0.15em',
            borderRadius: 2, fontWeight: 600, transition: 'background .3s',
            textShadow: revealed ? '2px 2px 0 rgba(0,0,0,.4)' : 'none',
          }}>
            {revealed ? word : '████████'}
          </div>
        </div>
        <button onClick={() => setRevealed(r => !r)} style={{
          marginTop: 8, border: `1px solid ${color}`, background: 'transparent', color,
          padding: '4px 10px', borderRadius: 14, fontSize: 11, cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.05em',
        }}>{revealed ? '◐ verberg' : '◑ toon oplossing'}</button>
      </div>
      <div style={{ flex: 1, minWidth: 220 }}>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, letterSpacing: '0.1em', color, opacity: 0.6, textTransform: 'uppercase', marginBottom: 8 }}>
          vul het afgeplakte woord in
        </div>
        <div style={{ display: 'flex', gap: 4, marginBottom: 12, flexWrap: 'wrap' }}>
          {word.split('').map((_, i) => (
            <input key={i} ref={el => refs.current[i] = el}
              value={typed[i]} onChange={e => onChange(i, e.target.value)}
              maxLength="1"
              style={{
                width: 26, height: 32, border: 'none',
                borderBottom: `2px solid ${color}`,
                background: i === targetIdx ? accent + '22' : 'transparent',
                textAlign: 'center', fontFamily: 'Special Elite, monospace', fontSize: 18,
                color, outline: 'none', padding: 0,
                boxShadow: i === targetIdx ? `inset 0 0 0 1.5px ${accent}` : 'none',
              }}/>
          ))}
        </div>
        <div style={{ fontSize: 12, color, opacity: 0.75, lineHeight: 1.5 }}>
          Op de plek van <span style={{ background: accent + '33', padding: '0 4px', borderRadius: 2 }}>het vakje</span> staat een letter die bij <b>63</b> hoort.
        </div>
        {correct && (
          <div style={{ marginTop: 10, padding: '8px 12px', background: color, color: bg, borderRadius: 4, fontSize: 13, fontWeight: 600, display: 'inline-block' }}>
            ✓ Klopt! 63 = D
          </div>
        )}
      </div>
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
  AnimatedHero, heroPaletteForRoute, InteractiveTulip, PhotoPuzzleDemo, Placeholder, CompassRose, RouteMap
});
