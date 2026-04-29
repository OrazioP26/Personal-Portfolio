import { Link } from 'react-router-dom';
import { TopHeader } from '../components/TopHeader';
import { Footer } from '../components/Footer';

export function WritingPage() {
  return (
    <div className="frame frame-writing">
      <TopHeader variant="writing" />

      <main>
        <section className="grid12" style={{ padding: '32px 0 8px' }}>
          <div
            className="mono"
            style={{
              gridColumn: '1 / span 12',
              paddingBottom: 12,
              borderBottom: '1px solid var(--rule)'
            }}
          >
            <Link
              to="/"
              style={{ color: 'var(--muted)', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
            >
              Home
            </Link>{' '}
            / Writing
          </div>

          <h1
            className="writing-h1"
            style={{
              gridColumn: '1 / span 8',
              margin: '32px 0 0',
              fontFamily: '"Inter Tight", sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(56px, 9vw, 132px)',
              lineHeight: 0.9,
              letterSpacing: '-0.04em'
            }}
          >
            Thoughts <span style={{ color: 'var(--accent)' }}>&amp; takes.</span>
          </h1>

          <p
            className="writing-lede"
            style={{
              gridColumn: '1 / span 8',
              marginTop: 24,
              fontSize: 20,
              color: 'var(--muted)',
              maxWidth: '30ch',
              opacity: 0,
              animation: 'fadein 0.8s ease 0.3s forwards'
            }}
          >
            Notes on what I'm building, reading, and thinking about.
          </p>
        </section>

        <section className="grid12 section-block">
          <div
            className="section-label"
            style={{
              gridColumn: '1 / span 2',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 10,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'var(--muted)',
              paddingTop: 24,
              borderTop: '1px solid var(--ink)'
            }}
          >
            § 01 · Posts
          </div>
          <div
            className="section-body"
            style={{
              gridColumn: '3 / span 10',
              borderTop: '1px solid var(--ink)',
              paddingTop: 8
            }}
          >
            <div
              style={{
                padding: '80px 0',
                display: 'grid',
                placeItems: 'center',
                textAlign: 'center',
                borderBottom: '1px solid var(--rule)'
              }}
            >
              <div
                style={{
                  fontFamily: '"Inter Tight", sans-serif',
                  fontWeight: 300,
                  fontSize: 96,
                  color: 'var(--rule)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  marginBottom: 12,
                  animation: 'blink-soft 3s ease-in-out infinite'
                }}
              >
                ¶
              </div>
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  marginBottom: 8
                }}
              >
                No posts yet.
              </div>
              <div
                style={{
                  color: 'var(--muted)',
                  maxWidth: '38ch',
                  margin: '0 auto 24px'
                }}
              >
                First piece is in the oven. Subscribe or check back soon.
              </div>
              <button
                type="button"
                className="new-post-btn"
                onClick={() => {
                  /* hook to authoring pipeline once posts exist */
                }}
              >
                New post <span className="new-post-arrow">→</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="writing" />

      <style>{`
        .new-post-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--ink);
          color: white;
          padding: 14px 22px;
          font-family: "JetBrains Mono", monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          transition: background 0.25s ease, transform 0.25s ease;
          cursor: pointer;
          border: 0;
        }
        .new-post-btn:hover { background: var(--accent); transform: translateY(-2px); }
        .new-post-arrow { transition: transform 0.3s ease; display: inline-block; }
        .new-post-btn:hover .new-post-arrow { transform: translateX(4px); }

        @media (max-width: 720px) {
          .writing-h1 { grid-column: 1 / -1 !important; }
          .writing-lede { grid-column: 1 / -1 !important; }
        }
      `}</style>
    </div>
  );
}
