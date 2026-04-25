// vintage-ui.jsx — shared vintage-style UI primitives used by home + route pages.
// Navigation uses real URLs (multi-page static site). `base` is the root prefix from each page
// ("" for home in project root, "../" for route subfolder pages).

const VIN = {
  paper: '#f4ead5',
  paperDark: '#ebdfc2',
  ink: '#2a211a',
  cream: '#faf4e3',
  default: '#3a4a2b',
  defaultAccent: '#b5542c',
  defaultAccentSoft: '#c89a2c',
};

const vinPaperBg = {
  background: `
    radial-gradient(ellipse at 20% 15%, rgba(200,154,44,0.08) 0%, transparent 40%),
    radial-gradient(ellipse at 80% 85%, rgba(181,84,44,0.06) 0%, transparent 50%),
    ${VIN.paper}
  `,
};

// URL builder. PAGE_BASE is a global set by each page before loading scripts.
function urlFor(id) {
  const base = (typeof PAGE_BASE !== 'undefined' ? PAGE_BASE : '');
  if (id === 'home') return base + 'index.html';
  return base + id + '/index.html';
}

function Stamp({ children, color = VIN.defaultAccent, rotate = -8, style }) {
  return (
    <div style={{
      display: 'inline-block', border: `2px solid ${color}`, color, padding: '4px 10px',
      fontFamily: 'Special Elite, monospace', fontSize: 11, letterSpacing: '0.15em',
      textTransform: 'uppercase', transform: `rotate(${rotate}deg)`,
      boxShadow: 'inset 0 0 0 1px ' + color + '33', opacity: 0.85, ...style,
    }}>{children}</div>
  );
}

function Ticket({ label, value, sub, color = VIN.ink, style }) {
  return (
    <div style={{
      border: `1.5px solid ${color}`, borderStyle: 'dashed',
      padding: '10px 14px', background: VIN.cream, position: 'relative', ...style,
    }}>
      <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color, opacity: 0.6 }}>{label}</div>
      <div style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 700, color, marginTop: 2, lineHeight: 1 }}>{value}</div>
      {sub && <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, color, opacity: 0.7, marginTop: 4 }}>{sub}</div>}
    </div>
  );
}

function TopNav({ currentRoute }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      {/* Desktop nav */}
      <div className="pr-nav-desktop" style={{ borderBottom: `1px dashed ${VIN.ink}44`, padding: '16px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href={urlFor('home')} style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', color: VIN.ink }}>
          <CompassRose size={38} color={VIN.default} spin={false}/>
          <div>
            <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 800, fontSize: 19, letterSpacing: '0.01em', lineHeight: 1 }}>
              Puzzelrondjes<span style={{ color: VIN.defaultAccent }}>.nl</span>
            </div>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, letterSpacing: '0.25em', color: VIN.default, opacity: 0.7, marginTop: 3, textTransform: 'uppercase' }}>
              auto puzzelritten · door Anne & Luke
            </div>
          </div>
        </a>
        <div style={{ display: 'flex', gap: 22, alignItems: 'center', fontFamily: 'Fraunces, serif', fontSize: 14 }}>
          <a href={urlFor('home')} style={{ color: VIN.ink, opacity: currentRoute === 'home' ? 1 : 0.75, textDecoration: 'none', fontWeight: currentRoute === 'home' ? 600 : 400 }}>Alle rondjes</a>
          {ROUTES.map(r => (
            <a key={r.id} href={urlFor(r.id)}
              style={{
                color: VIN.ink, opacity: currentRoute === r.id ? 1 : 0.75,
                textDecoration: 'none', fontStyle: currentRoute === r.id ? 'italic' : 'normal',
                fontWeight: currentRoute === r.id ? 600 : 400,
                borderBottom: currentRoute === r.id ? `2px solid ${r.accent}` : 'none',
                paddingBottom: 2,
              }}>
              {r.name}
            </a>
          ))}
          <a href={BRAND.wa} style={{ color: VIN.defaultAccent, fontWeight: 700, textDecoration: 'none' }}>Bestel →</a>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="pr-nav-mobile" style={{ padding: '14px 18px', borderBottom: `1px dashed ${VIN.ink}44`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
        <a href={urlFor('home')} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: VIN.ink }}>
          <CompassRose size={26} color={VIN.default} spin={false}/>
          <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 800, fontSize: 15, lineHeight: 1 }}>Puzzelrondjes<span style={{ color: VIN.defaultAccent }}>.nl</span></div>
        </a>
        <button onClick={() => setMenuOpen(o => !o)} style={{ background: 'transparent', border: 'none', fontSize: 22, color: VIN.ink, cursor: 'pointer', padding: 4 }}>
          {menuOpen ? '✕' : '≡'}
        </button>
        {menuOpen && (
          <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: VIN.cream, borderBottom: `1px dashed ${VIN.ink}44`, padding: '8px 18px 14px', zIndex: 20, boxShadow: '0 10px 20px rgba(0,0,0,.08)' }}>
            <a href={urlFor('home')} style={{ display: 'block', padding: '10px 0', fontFamily: 'Fraunces, serif', fontSize: 15, color: VIN.ink, textDecoration: 'none', borderBottom: `1px dashed ${VIN.ink}22`, fontWeight: currentRoute === 'home' ? 700 : 400 }}>Alle rondjes</a>
            {ROUTES.map(r => (
              <a key={r.id} href={urlFor(r.id)} style={{ display: 'block', padding: '10px 0', fontFamily: 'Fraunces, serif', fontSize: 15, color: VIN.ink, textDecoration: 'none', borderBottom: `1px dashed ${VIN.ink}22`, fontStyle: currentRoute === r.id ? 'italic' : 'normal', fontWeight: currentRoute === r.id ? 700 : 400 }}>
                {r.name}
              </a>
            ))}
            <a href={BRAND.wa} style={{ display: 'block', padding: '12px 0 4px', color: VIN.defaultAccent, fontWeight: 700, textDecoration: 'none', fontFamily: 'Fraunces, serif' }}>Bestel via WhatsApp →</a>
          </div>
        )}
      </div>
    </>
  );
}

function Footer() {
  return (
    <div style={{ padding: '20px 24px', fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, letterSpacing: '0.15em', color: VIN.ink, opacity: 0.6, textAlign: 'center', textTransform: 'uppercase', borderTop: `1px dashed ${VIN.ink}33` }}>
      © Puzzelrondjes.nl · auto puzzelritten · door Anne & Luke
    </div>
  );
}

Object.assign(window, { VIN, vinPaperBg, urlFor, Stamp, Ticket, TopNav, Footer });
