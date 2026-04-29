import { Link } from 'react-router-dom';

type Props = {
  variant: 'home' | 'writing';
};

export function Footer({ variant }: Props) {
  const isHome = variant === 'home';

  return (
    <footer
      className="grid12 site-footer"
      style={{
        borderTop: isHome ? '3px solid var(--accent)' : '2px solid var(--ink)',
        paddingTop: 16,
        alignItems: 'end'
      }}
    >
      <div
        style={{
          gridColumn: '1 / span 6',
          display: 'flex',
          gap: 24,
          flexWrap: 'wrap'
        }}
      >
        {isHome ? (
          <>
            <FootInternalLink to="/writing" arrow="→">
              Writing
            </FootInternalLink>
            <FootExternalLink href="mailto:opp2@cornell.edu" arrow="↗">
              Email
            </FootExternalLink>
            <FootExternalLink href="https://www.linkedin.com/in/orazio-petito/" arrow="↗">
              LinkedIn
            </FootExternalLink>
            <FootExternalLink href="https://github.com/OrazioP26" arrow="↗">
              GitHub
            </FootExternalLink>
          </>
        ) : (
          <>
            <FootInternalLink to="/" arrow="←" arrowBefore>
              Home
            </FootInternalLink>
            <FootExternalLink href="mailto:opp2@cornell.edu" arrow="↗">
              Email
            </FootExternalLink>
          </>
        )}
      </div>
      <div
        style={{
          gridColumn: '7 / span 6',
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 24
        }}
      >
        <span className="mono">© 2026</span>
        {isHome && <span className="mono">v 2.0</span>}
      </div>

      <style>{`
        .foot-link {
          font-family: "JetBrains Mono", monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          position: relative;
          padding-bottom: 2px;
          color: inherit;
          text-decoration: none;
        }
        .foot-link::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.2, 0.7, 0.2, 1);
        }
        .foot-link:hover { color: var(--accent); }
        .foot-link:hover::after { transform: scaleX(1); }
        .foot-arrow { display: inline-block; transition: transform 0.3s ease; margin-left: 4px; }
        .foot-arrow-before { display: inline-block; transition: transform 0.3s ease; margin-right: 4px; margin-left: 0; }
        .foot-link:hover .foot-arrow-ext { transform: translate(3px, -3px); }
        .foot-link:hover .foot-arrow-int { transform: translateX(3px); }
        .foot-link:hover .foot-arrow-back { transform: translateX(-3px); }
      `}</style>
    </footer>
  );
}

function FootInternalLink({
  to,
  children,
  arrow,
  arrowBefore
}: {
  to: string;
  children: React.ReactNode;
  arrow: string;
  arrowBefore?: boolean;
}) {
  if (arrowBefore) {
    return (
      <Link to={to} className="foot-link">
        <span className="foot-arrow-before foot-arrow-back">{arrow}</span>
        {children}
      </Link>
    );
  }
  return (
    <Link to={to} className="foot-link">
      {children} <span className="foot-arrow foot-arrow-int">{arrow}</span>
    </Link>
  );
}

function FootExternalLink({
  href,
  children,
  arrow
}: {
  href: string;
  children: React.ReactNode;
  arrow: string;
}) {
  const isMail = href.startsWith('mailto:');
  return (
    <a
      href={href}
      className="foot-link"
      target={isMail ? undefined : '_blank'}
      rel={isMail ? undefined : 'noopener noreferrer'}
    >
      {children} <span className="foot-arrow foot-arrow-ext">{arrow}</span>
    </a>
  );
}
