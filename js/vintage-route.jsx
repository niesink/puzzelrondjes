// vintage-route.jsx — detail page for a single route.
// Multi-page mode: uses real URLs, no fixed width.

function RoutePage({ route }) {
  const r = route;
  const firstWord = r.name.split(' ').slice(0, -1).join(' ');
  const lastWord = r.name.split(' ').slice(-1);
  return (
    <div style={{ ...vinPaperBg, color: VIN.ink, fontFamily: 'Alegreya Sans, sans-serif', fontSize: 15, lineHeight: 1.6, minHeight: '100vh' }}>
      <TopNav currentRoute={r.id}/>

      <div style={{ padding: '18px 48px 0', fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, letterSpacing: '0.15em', color: VIN.ink, opacity: 0.6, textTransform: 'uppercase', maxWidth: 1400, margin: '0 auto' }}>
        <a href={urlFor('home')} style={{ color: 'inherit' }}>← Alle ritten</a> ─ Rit {r.number} ─ {r.region}
      </div>

      {/* Hero */}
      <div className="pr-hero-grid" style={{ padding: '32px 48px 48px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'center', maxWidth: 1400, margin: '0 auto' }}>
        <div>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, letterSpacing: '0.3em', color: r.accent, marginBottom: 18, textTransform: 'uppercase' }}>
            ─ Rit {r.number} · {r.region} ─
          </div>
          <h1 className="pr-h1" style={{ fontFamily: 'Fraunces, serif', fontWeight: 800, fontSize: 104, lineHeight: 0.92, margin: 0, letterSpacing: '-0.02em' }}>
            {firstWord} <span style={{ fontStyle: 'italic', fontWeight: 500, color: r.color }}>{lastWord}</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 500, marginTop: 24, opacity: 0.85 }}>{r.intro}</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
            <Ticket label="Afstand" value={r.distance} color={r.color}/>
            <Ticket label="Duur" value={r.duration} color={r.color}/>
            <Ticket label="Prijs" value={r.price} sub="per auto" color={r.color}/>
          </div>
          {r.status === 'available' ? (
            <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <a href={`https://wa.me/31614174474?text=${encodeURIComponent('Hoi! Ik wil graag de rit ' + r.name + ' bestellen.')}`} style={{
                background: r.accent, color: VIN.cream, padding: '14px 24px',
                fontFamily: 'Fraunces, serif', fontWeight: 600, fontSize: 16,
                textDecoration: 'none', display: 'inline-block',
                border: `2px solid ${r.accent}`,
              }}>Bestel via WhatsApp →</a>
              <a href={`mailto:middelinbeweging@gmail.com?subject=${encodeURIComponent('Bestelling ' + r.name)}`} style={{
                color: r.accent, padding: '14px 24px',
                fontFamily: 'Fraunces, serif', fontWeight: 600, fontSize: 16,
                textDecoration: 'none', display: 'inline-block',
                border: `2px solid ${r.accent}`,
              }}>of per mail</a>
            </div>
          ) : (
            <div style={{ marginTop: 28 }}>
              <p style={{ fontSize: 15, opacity: 0.8, margin: '0 0 14px', fontStyle: 'italic', color: r.accent }}>
                Deze rit is nog in ontwikkeling. Laat ons weten dat je interesse hebt, dan sturen we je een seintje zodra de route klaar is.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <a href={`https://wa.me/31614174474?text=${encodeURIComponent('Hoi! Ik ben geïnteresseerd in de rit ' + r.name + '. Laat me weten wanneer deze klaar is!')}`} style={{
                background: r.accent, color: VIN.cream, padding: '14px 24px',
                fontFamily: 'Fraunces, serif', fontWeight: 600, fontSize: 16,
                textDecoration: 'none', display: 'inline-block',
                border: `2px solid ${r.accent}`,
              }}>Houd me op de hoogte →</a>
              <a href={`mailto:middelinbeweging@gmail.com?subject=${encodeURIComponent('Houd me op de hoogte — ' + r.name)}`} style={{
                color: r.accent, padding: '14px 24px',
                fontFamily: 'Fraunces, serif', fontWeight: 600, fontSize: 16,
                textDecoration: 'none', display: 'inline-block',
                border: `2px solid ${r.accent}`,
              }}>of per mail</a>
              </div>
            </div>
          )}
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ border: `2px solid ${VIN.ink}`, padding: 6, background: VIN.cream, boxShadow: `10px 10px 0 ${r.color}33` }}>
            <RouteHero route={r}/>
            <div style={{ textAlign: 'center', fontFamily: 'Special Elite, monospace', fontSize: 11, letterSpacing: '0.15em', padding: '8px 0 4px', opacity: 0.75 }}>
              ─ {r.region.toUpperCase()} ─
            </div>
          </div>
          <div style={{ position: 'absolute', top: -18, left: -18 }}>
            <Stamp color={r.accent} rotate={-10}>★ #{r.number} ★</Stamp>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div style={{ padding: '36px 48px', borderTop: `1px dashed ${VIN.ink}44`, borderBottom: `1px dashed ${VIN.ink}44`, background: VIN.paperDark + '55' }}>
        <div className="pr-highlights" style={{ display: 'grid', gridTemplateColumns: `80px repeat(${r.highlights.length}, 1fr)`, gap: 28, alignItems: 'center', maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, letterSpacing: '0.25em', color: r.accent, textTransform: 'uppercase' }}>
            ─ deze<br/>rit ─
          </div>
          {r.highlights.map((h, i) => (
            <div key={i} style={{ borderLeft: `1px dashed ${VIN.ink}33`, paddingLeft: 18 }}>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 18, fontWeight: 600, lineHeight: 1.3 }}>{h}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Startpunten + Map */}
      <div className="pr-about-grid" style={{ padding: '64px 48px', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 48, alignItems: 'center', maxWidth: 1400, margin: '0 auto' }}>
        <div>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, letterSpacing: '0.3em', color: r.accent, marginBottom: 14, textTransform: 'uppercase' }}>─ Startpunten ─</div>
          <h2 className="pr-h2" style={{ fontFamily: 'Fraunces, serif', fontSize: 48, lineHeight: 1.05, margin: 0, fontWeight: 800 }}>
            Begin waar het jou <span style={{ fontStyle: 'italic', color: r.color }}>uitkomt.</span>
          </h2>
          <p style={{ marginTop: 16, opacity: 0.85, lineHeight: 1.65 }}>
            Je kiest één van de {r.startpoints.length} startpunten. De rit is een rondje — eindigt altijd op hetzelfde plek waar je begon.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 20 }}>
            {r.startpoints.map(s => (
              <div key={s} style={{ border: `1.5px solid ${r.color}`, padding: '8px 16px', fontFamily: 'Fraunces, serif', fontWeight: 600, fontSize: 15, color: r.color, background: VIN.cream }}>
                ◦ {s}
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ border: `2px solid ${VIN.ink}`, padding: 8, background: VIN.cream, boxShadow: `10px 10px 0 ${r.color}33` }}>
            <RouteMap route={r} stroke={r.color} fill={VIN.paperDark + '55'} accent={r.accent} height={380}/>
            <div style={{ fontFamily: 'Special Elite, monospace', fontSize: 10, letterSpacing: '0.15em', padding: '6px 4px 2px', opacity: 0.7, display: 'flex', justifyContent: 'space-between' }}>
              <span>─ {r.region.toUpperCase()} · SCHETSKAART ─</span>
              <span>N ↑</span>
            </div>
          </div>
        </div>
      </div>

      {/* Demos */}
      <div style={{ padding: '64px 48px', background: r.color, color: VIN.cream }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, letterSpacing: '0.3em', color: r.accentSoft, marginBottom: 16, textTransform: 'uppercase' }}>─ Hoe puzzel je? ─</div>
          <h2 className="pr-h2" style={{ fontFamily: 'Fraunces, serif', fontSize: 56, lineHeight: 1, margin: '0 0 40px', fontWeight: 800 }}>
            Probeer het <span style={{ fontStyle: 'italic', color: r.accentSoft }}>even zelf.</span>
          </h2>
          <div className="pr-demo-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <div style={{ background: VIN.cream, color: VIN.ink, padding: 28, border: `2px solid ${VIN.ink}` }}>
              <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, letterSpacing: '0.2em', color: r.accent, marginBottom: 8, textTransform: 'uppercase' }}>◐ navigatie</div>
              <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 28, margin: '0 0 16px', fontWeight: 700 }}>Bolletje-pijltje</h3>
              <InteractiveTulip color={r.color} accent={r.accent} bg={VIN.cream}/>
            </div>
            <div style={{ background: VIN.cream, color: VIN.ink, padding: 28, border: `2px solid ${VIN.ink}` }}>
              <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, letterSpacing: '0.2em', color: r.accent, marginBottom: 8, textTransform: 'uppercase' }}>◑ fotopuzzel</div>
              <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 28, margin: '0 0 16px', fontWeight: 700 }}>Zoek & vul in</h3>
              <PhotoPuzzleDemo color={r.color} accent={r.accent} bg={VIN.cream}/>
            </div>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="pr-about-grid" style={{ padding: '64px 48px', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 48, maxWidth: 1400, margin: '0 auto' }}>
        <div>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, letterSpacing: '0.3em', color: r.accent, marginBottom: 14, textTransform: 'uppercase' }}>─ Praktische tips ─</div>
          <h2 className="pr-h2" style={{ fontFamily: 'Fraunces, serif', fontSize: 40, lineHeight: 1.05, margin: 0, fontWeight: 800 }}>
            Voor <span style={{ fontStyle: 'italic', color: r.color }}>onderweg.</span>
          </h2>
        </div>
        <div>
          {UNIVERSAL_TIPS.map((t, i) => (
            <div key={i} style={{ display: 'flex', gap: 18, padding: '14px 0', borderBottom: i < UNIVERSAL_TIPS.length - 1 ? `1px dashed ${VIN.ink}33` : 'none' }}>
              <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 800, fontSize: 22, color: r.accent, fontStyle: 'italic', minWidth: 32 }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.6, opacity: 0.88 }}>{t}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Other routes */}
      <div style={{ padding: '48px 48px', borderTop: `1px dashed ${VIN.ink}44`, background: VIN.paperDark + '55' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, letterSpacing: '0.3em', color: VIN.defaultAccent, marginBottom: 20, textTransform: 'uppercase' }}>─ Andere ritten ─</div>
          <div className="pr-routes-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {ROUTES.filter(o => o.id !== r.id).map(o => <RouteCard key={o.id} route={o} compact/>)}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '72px 48px', background: VIN.ink, color: VIN.cream, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 30, left: '50%', transform: 'translateX(-50%)', opacity: 0.22 }}>
          <CompassRose size={200} color={r.accentSoft}/>
        </div>
        <div style={{ position: 'relative' }}>
          <h2 className="pr-h2" style={{ fontFamily: 'Fraunces, serif', fontSize: 64, lineHeight: 1, margin: '0 0 12px', fontWeight: 800 }}>
            Klaar voor <span style={{ fontStyle: 'italic', color: r.accentSoft }}>{r.name}?</span>
          </h2>
          {r.status === 'available' ? (
            <>
              <p style={{ fontSize: 17, opacity: 0.85, margin: '0 auto 28px', maxWidth: 460 }}>
                Stuur een bericht, kies je startpunt, ontvang de PDF. €10 per auto.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                <a href={`https://wa.me/31614174474?text=${encodeURIComponent('Hoi! Ik wil graag de rit ' + r.name + ' bestellen.')}`} style={{
                  background: r.accent, color: VIN.cream, padding: '16px 28px',
                  fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: 17,
                  textDecoration: 'none', display: 'inline-block',
                  border: `2px solid ${r.accent}`,
                }}>Bestel via WhatsApp →</a>
                <a href={`mailto:middelinbeweging@gmail.com?subject=${encodeURIComponent('Bestelling ' + r.name)}`} style={{
                  color: r.accentSoft, padding: '16px 28px',
                  fontFamily: 'Fraunces, serif', fontWeight: 600, fontSize: 17,
                  textDecoration: 'none', display: 'inline-block',
                  border: `2px solid ${r.accentSoft}`,
                }}>of per mail</a>
              </div>
            </>
          ) : (
            <>
              <p style={{ fontSize: 17, opacity: 0.85, margin: '0 auto 28px', maxWidth: 460, fontStyle: 'italic' }}>
                Deze rit is nog in ontwikkeling. Laat ons weten dat je interesse hebt, dan sturen we je een seintje zodra de route klaar is.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                <a href={`https://wa.me/31614174474?text=${encodeURIComponent('Hoi! Ik ben geïnteresseerd in de rit ' + r.name + '. Laat me weten wanneer deze klaar is!')}`} style={{
                  background: r.accent, color: VIN.cream, padding: '16px 28px',
                  fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: 17,
                  textDecoration: 'none', display: 'inline-block',
                  border: `2px solid ${r.accent}`,
                }}>Stuur een WhatsApp →</a>
                <a href={`mailto:middelinbeweging@gmail.com?subject=${encodeURIComponent('Houd me op de hoogte — ' + r.name)}`} style={{
                  color: r.accentSoft, padding: '16px 28px',
                  fontFamily: 'Fraunces, serif', fontWeight: 600, fontSize: 17,
                  textDecoration: 'none', display: 'inline-block',
                  border: `2px solid ${r.accentSoft}`,
                }}>of per mail</a>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

Object.assign(window, { RoutePage });
