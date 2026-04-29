import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  variant: 'home' | 'writing';
};

const fmt = new Intl.DateTimeFormat('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
  timeZone: 'America/New_York'
});

export function TopHeader({ variant }: Props) {
  const [now, setNow] = useState<string>('--:--:--');

  useEffect(() => {
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const isHome = variant === 'home';

  return (
    <header
      className="grid12"
      style={{
        borderTop: isHome ? '3px solid var(--accent)' : '2px solid var(--ink)',
        borderBottom: '1px solid var(--ink)',
        padding: '12px 0',
        alignItems: 'baseline'
      }}
    >
      <div className="mono" style={{ gridColumn: '1 / span 4', color: 'var(--ink)' }}>
        {isHome ? (
          'Orazio Petito'
        ) : (
          <Link to="/" style={{ color: 'inherit' }}>
            ← Orazio Petito
          </Link>
        )}
      </div>
      <div
        className="mono"
        style={{ gridColumn: '5 / span 4', textAlign: 'center', color: 'var(--accent)' }}
      >
        {isHome ? 'Index · MMXXVI' : 'Writing · MMXXVI'}
      </div>
      <div className="mono" style={{ gridColumn: '9 / span 4', textAlign: 'right' }}>
        ITH · {now}
      </div>
    </header>
  );
}
