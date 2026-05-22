// vintage-home.jsx — overview page listing all routes.
// Multi-page mode: uses real URLs via urlFor(); no fixed width (responsive on the real site).

function RouteCard({ route, compact }) {
  const isAvailable = route.status === 'available';
  const inner = (
    <div style={{
      background: VIN.cream, border: `2px solid ${VIN.ink}`,
      boxShadow: `8px 8px 0 ${route.accent}33`,
      position: 'relative', overflow: 'hidden',
      height: '100%',
    }}>
      {!isAvailable && (
        <>
          <div style={{
            position: 'absolute', top: 22, right: -52, transform: 'rotate(25deg)',
            background: route.color, color: VIN.cream,
            padding: '10px 70px',
            fontFamily: 'Special Elite, monospace', fontSize: 15, letterSpacing: '0.25em',
            zIndex: 2, boxShadow: `0 2px 8px rgba(0,0,0,0.35)`,
          }}>
            binnenkort
          </div>
          <div style={{
            position: 'absolute', inset: 0, background: `${VIN.ink}18`,
            zIndex: 1, pointerEvents: 'none',
          }}/>
        </>
      )}
      <div style={{ padding: 10, background: route.color }}>
        <RouteHero route={route} compact={compact}/>
      </div>
      <div style={{ padding: compact ? '18px 18px 20px' : '22px 24px 26px', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 4 }}>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, letterSpacing: '0.2em', color: route.accent, textTransform: 'uppercase' }}>
            Rit {route.number} · {route.region}
          </div>
        </div>
        <h3 style={{
          fontFamily: 'Fraunces, serif', fontWeight: 800,
          fontSize: compact ? 28 : 34, lineHeight: 1, margin: '2px 0 10px',
          letterSpacing: '-0.01em', color: VIN.ink,
        }}>
          {route.name}
        </h3>
        <p style={{ margin: 0, fontSize: 14, opacity: 0.82, lineHeight: 1.55 }}>{route.tagline}.</p>
        <div style={{ display: 'flex', gap: 14, marginTop: 14, fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, letterSpacing: '0.1em', color: VIN.ink, opacity: 0.8, textTransform: 'uppercase' }}>
          <span>{route.distance}</span><span>·</span>
          <span>{route.duration}</span><span>·</span>
          <span>{route.price}</span>
        </div>
        {isAvailable ? (
          <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 6, color: route.accent, fontFamily: 'Fraunces, serif', fontWeight: 600, fontSize: 15 }}>
            Bekijk de rit <span>→</span>
          </div>
        ) : (
          <div style={{ marginTop: 16, color: VIN.ink, opacity: 0.5, fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: 14 }}>
            In ontwikkeling — laat weten als je interesse hebt!
          </div>
        )}
      </div>
    </div>
  );
  return <a href={urlFor(route.id)} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>{inner}</a>;
}

function HomePage() {
  return (
    <div style={{ ...vinPaperBg, color: VIN.ink, fontFamily: 'Alegreya Sans, sans-serif', fontSize: 15, lineHeight: 1.6, minHeight: '100vh' }}>
      <TopNav currentRoute="home"/>

      {/* Hero */}
      <div className="pr-hero-grid" style={{ padding: '72px 48px 48px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'center', maxWidth: 1400, margin: '0 auto' }}>
        <div>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, letterSpacing: '0.3em', color: VIN.defaultAccent, marginBottom: 20, textTransform: 'uppercase' }}>
            ─── Auto puzzelritten ───
          </div>
          <h1 className="pr-h1" style={{ fontFamily: 'Fraunces, serif', fontWeight: 800, fontSize: 104, lineHeight: 0.93, margin: 0, letterSpacing: '-0.02em' }}>
            Rij, puzzel,<br/>
            <span style={{ fontStyle: 'italic', fontWeight: 500, color: VIN.default }}>ontdek.</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 500, marginTop: 28, opacity: 0.85 }}>
            {BRAND.blurb}
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
            <a href="#ritten" style={{
              background: VIN.default, color: VIN.cream, padding: '14px 24px',
              fontFamily: 'Fraunces, serif', fontWeight: 600, fontSize: 16,
              textDecoration: 'none', border: `2px solid ${VIN.default}`,
              display: 'inline-flex', alignItems: 'center', gap: 10,
            }}>
              Bekijk de rondjes <span>↓</span>
            </a>
            <a href={BRAND.wa} style={{
              color: VIN.ink, padding: '14px 20px',
              fontFamily: 'Fraunces, serif', fontSize: 16,
              textDecoration: 'underline', textUnderlineOffset: 4,
            }}>of bestel meteen</a>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ border: `2px solid ${VIN.ink}`, padding: 6, background: VIN.cream, boxShadow: `10px 10px 0 ${VIN.default}22` }}>
            <AnimatedHero palette={heroPaletteForRoute(ROUTES[0])}/>
            <div style={{ textAlign: 'center', fontFamily: 'Special Elite, monospace', fontSize: 11, letterSpacing: '0.15em', padding: '8px 0 4px', opacity: 0.75 }}>
              ─ AL {ROUTES.length} RONDJES · EN SNEL MEER ─
            </div>
          </div>
          <div style={{ position: 'absolute', top: -18, right: -18 }}>
            <Stamp color={VIN.default} rotate={10}>★ gemaakt in Middel ★</Stamp>
          </div>
        </div>
      </div>

      {/* Intro strip */}
      <div style={{ padding: '48px 48px', borderTop: `1px dashed ${VIN.ink}44`, borderBottom: `1px dashed ${VIN.ink}44`, background: VIN.paperDark + '55' }}>
        <div className="pr-feat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 36, maxWidth: 1400, margin: '0 auto' }}>
          {[
            { icon: '🚗', t: 'Eigen tempo', d: 'In je eigen auto, wanneer het uitkomt.' },
            { icon: '🧩', t: 'Echte puzzels', d: 'Bolletje-pijltje én raadsels onderweg.' },
            { icon: '🌳', t: 'Mooie streken', d: 'Telkens een ander gebied, verborgen parels.' },
            { icon: '👨‍👩‍👧‍👦', t: '€10 per auto', d: 'Ongeacht het aantal personen.' },
          ].map((f, i) => (
            <div key={i} className="pr-feat" style={{ paddingRight: 24 }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{f.icon}</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: 20, marginBottom: 6 }}>{f.t}</div>
              <div style={{ fontSize: 14, opacity: 0.78, lineHeight: 1.55 }}>{f.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Routes list */}
      <div id="ritten" style={{ padding: '72px 48px', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 36, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, letterSpacing: '0.3em', color: VIN.defaultAccent, marginBottom: 14, textTransform: 'uppercase' }}>─ Onze rondjes ─</div>
            <h2 className="pr-h2" style={{ fontFamily: 'Fraunces, serif', fontSize: 64, lineHeight: 0.98, margin: 0, fontWeight: 800, letterSpacing: '-0.02em' }}>
              Kies je <span style={{ fontStyle: 'italic', color: VIN.default }}>avontuur.</span>
            </h2>
          </div>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, letterSpacing: '0.2em', color: VIN.ink, opacity: 0.6, textTransform: 'uppercase', textAlign: 'right' }}>
            {ROUTES.filter(r => r.status === 'available').length} beschikbaar<br/>
            {ROUTES.filter(r => r.status === 'coming-soon').length || 'meer'} binnenkort
          </div>
        </div>
        <div className="pr-routes-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
          {ROUTES.map(r => <RouteCard key={r.id} route={r}/>)}
        </div>
        <div style={{ marginTop: 36, padding: '20px 24px', border: `1.5px dashed ${VIN.ink}44`, background: VIN.paperDark + '44', fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: 15, textAlign: 'center' }}>
          Werk aan de volgende rit is volop bezig. Een wens voor een gebied? <a href={BRAND.mail} style={{ color: VIN.defaultAccent }}>Laat het weten.</a>
        </div>
      </div>

      {/* How it works — universal */}
      <div style={{ padding: '72px 48px', background: VIN.default, color: VIN.cream }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, letterSpacing: '0.3em', color: VIN.defaultAccentSoft, marginBottom: 16, textTransform: 'uppercase' }}>─ In vier stappen ─</div>
          <h2 className="pr-h2" style={{ fontFamily: 'Fraunces, serif', fontSize: 56, lineHeight: 1, margin: '0 0 48px', fontWeight: 800 }}>
            Zo werkt het — voor elke rit.
          </h2>
          <div className="pr-feat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
            {UNIVERSAL_STEPS.map(s => (
              <div key={s.n}>
                <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 800, fontSize: 68, lineHeight: 1, color: VIN.defaultAccentSoft, fontStyle: 'italic' }}>
                  {String(s.n).padStart(2, '0')}
                </div>
                <div style={{ width: '60%', height: 1, background: VIN.defaultAccentSoft, margin: '14px 0 16px', opacity: 0.6 }}/>
                <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: 22, marginBottom: 8 }}>{s.title}</div>
                <div style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.85 }}>{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About */}
      <div className="pr-about-grid" style={{ padding: '72px 48px', display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 48, alignItems: 'center', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ border: `2px solid ${VIN.ink}`, padding: 10, background: VIN.cream, boxShadow: `10px 10px 0 ${VIN.default}22`, transform: 'rotate(-2deg)' }}>
            <img src={(typeof PAGE_BASE !== 'undefined' ? PAGE_BASE : '') + 'assets/anne-en-luke.jpg'} alt="Anne en Luke in de auto" style={{ width: '100%', height: 380, objectFit: 'cover', display: 'block' }}/>
            <div style={{ textAlign: 'center', fontFamily: 'Special Elite, monospace', fontSize: 11, letterSpacing: '0.15em', padding: '10px 0 4px', opacity: 0.75 }}>
              ─ ANNE & LUKE · MIDDEL ─
            </div>
          </div>
          <div style={{ position: 'absolute', top: -16, right: -16 }}>
            <Stamp color={VIN.defaultAccent} rotate={12}>★ makers ★</Stamp>
          </div>
        </div>
        <div>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, letterSpacing: '0.3em', color: VIN.defaultAccent, marginBottom: 16, textTransform: 'uppercase' }}>─ Over ons ─</div>
          <h2 className="pr-h2" style={{ fontFamily: 'Fraunces, serif', fontSize: 48, lineHeight: 1.05, margin: 0, fontWeight: 800 }}>
            Wij zijn <span style={{ fontStyle: 'italic', color: VIN.default }}>Anne & Luke.</span>
          </h2>
          <p style={{ marginTop: 20, opacity: 0.85, lineHeight: 1.7, fontSize: 16 }}>{BRAND.about}</p>
          <div style={{ display: 'flex', gap: 18, marginTop: 28 }}>
            <a href={BRAND.fb} style={{ color: VIN.ink, textDecoration: 'underline', textUnderlineOffset: 4, fontFamily: 'Fraunces, serif', fontStyle: 'italic' }}>Facebook</a>
            <a href={BRAND.ig} style={{ color: VIN.ink, textDecoration: 'underline', textUnderlineOffset: 4, fontFamily: 'Fraunces, serif', fontStyle: 'italic' }}>Instagram</a>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div style={{ padding: '96px 48px', background: VIN.ink, color: VIN.cream, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 30, left: '50%', transform: 'translateX(-50%)', opacity: 0.22 }}>
          <CompassRose size={220} color={VIN.defaultAccentSoft}/>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, letterSpacing: '0.4em', color: VIN.defaultAccentSoft, textTransform: 'uppercase' }}>─── Klaar? ───</div>
          <h2 className="pr-h2" style={{ fontFamily: 'Fraunces, serif', fontSize: 80, lineHeight: 1, margin: '20px 0 12px', fontWeight: 800 }}>
            Pak de <span style={{ fontStyle: 'italic', color: VIN.defaultAccentSoft }}>sleutels.</span>
          </h2>
          <p style={{ fontSize: 18, opacity: 0.85, maxWidth: 480, margin: '0 auto 36px' }}>
            Kies een rit, stuur een berichtje, ontvang je PDF. €10 per auto — waar je ook heen rijdt.
          </p>
          <a href={BRAND.wa} style={{
            background: VIN.defaultAccent, color: VIN.cream, padding: '18px 32px',
            fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: 18,
            textDecoration: 'none', display: 'inline-block', letterSpacing: '0.02em',
            border: `2px solid ${VIN.defaultAccent}`,
          }}>Bestel via WhatsApp →</a>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

Object.assign(window, { HomePage, RouteCard });
