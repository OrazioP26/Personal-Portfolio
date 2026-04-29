const NAME = 'Orazio Petito.';

export function Hero() {
  return (
    <section className="grid12" style={{ paddingTop: 16 }}>
      <div
        style={{
          gridColumn: '1 / span 12',
          display: 'flex',
          justifyContent: 'space-between',
          paddingBottom: 8,
          borderBottom: '1px solid var(--rule)'
        }}
      >
        <span className="mono">N° 001 / Personal</span>
        <span className="mono">B.S. Computer Science · Cornell '27</span>
      </div>

      <h1
        aria-label="Orazio Petito"
        className="hero-name"
        style={{
          gridColumn: '1 / span 8',
          margin: '32px 0 0',
          fontFamily: '"Inter Tight", sans-serif',
          fontWeight: 700,
          fontSize: 'clamp(48px, 8.5vw, 132px)',
          lineHeight: 0.9,
          letterSpacing: '-0.045em',
          color: 'var(--ink)',
          whiteSpace: 'nowrap'
        }}
      >
        {[...NAME].map((c, i) => {
          const isSpace = c === ' ';
          const isLast = i === NAME.length - 1;
          const cls = ['name-ch', isSpace && 'sp', isLast && 'accent']
            .filter(Boolean)
            .join(' ');
          return (
            <span key={i} className={cls} style={{ animationDelay: `${i * 35 + 80}ms` }}>
              {c}
            </span>
          );
        })}
      </h1>

      <div
        className="hero-portrait"
        style={{
          gridColumn: '9 / span 4',
          aspectRatio: '4 / 5',
          overflow: 'hidden',
          background: '#f4f4f4',
          position: 'relative',
          marginTop: 32,
          opacity: 0,
          animation: 'fadein 0.8s ease 0.4s forwards'
        }}
      >
        <img
          src="/headshot.png"
          alt="Orazio Petito"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '50% 22%',
            transition: 'transform 1s cubic-bezier(0.2, 0.7, 0.2, 1)'
          }}
        />
      </div>

      <p
        style={{
          gridColumn: '1 / span 8',
          marginTop: 32,
          fontSize: 24,
          fontWeight: 400,
          lineHeight: 1.3,
          maxWidth: '22ch',
          letterSpacing: '-0.01em',
          opacity: 0,
          animation: 'fadein 0.8s ease 1.2s forwards'
        }}
      >
        Building <span style={{ color: 'var(--accent)', fontWeight: 500 }}>Vdrio</span> — an AI
        estimator for glaziers. Previously{' '}
        <span style={{ color: 'var(--accent)', fontWeight: 500 }}>Novl AI</span>, LinkedIn, Dasion.
      </p>

      <div
        style={{
          gridColumn: '9 / span 4',
          marginTop: 32,
          borderTop: '1px solid var(--rule)',
          paddingTop: 12,
          opacity: 0,
          animation: 'fadein 0.8s ease 1.4s forwards'
        }}
      >
        <MetaRow k="Based" v="Ithaca, NY" />
        <MetaRow k="From" v="Glen Cove, NY" />
        <MetaRow k="Class" v="2027" />
        <MetaRow
          k="Status"
          v={
            <>
              <span className="dot" />
              Available
            </>
          }
        />
      </div>

      <style>{`
        .hero-portrait:hover img { transform: scale(1.04); }
        @media (max-width: 720px) {
          .hero-name { grid-column: 1 / -1 !important; }
          .hero-portrait { grid-column: 1 / -1 !important; max-width: 240px; margin-top: 16px !important; }
          .hero-name + .hero-portrait + p,
          .hero-portrait + p { grid-column: 1 / -1 !important; }
        }
      `}</style>
    </section>
  );
}

function MetaRow({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px 0',
        borderBottom: '1px solid var(--rule)',
        fontSize: 11
      }}
    >
      <span
        style={{
          color: 'var(--accent)',
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
          fontFamily: '"JetBrains Mono", monospace'
        }}
      >
        {k}
      </span>
      <span>{v}</span>
    </div>
  );
}
