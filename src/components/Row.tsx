type Props = {
  yr: string;
  ttl: string;
  role?: string;
  desc: string;
  hi?: boolean;
  delayMs?: number;
  href?: string;
};

export function Row({ yr, ttl, role, desc, hi, delayMs = 0, href }: Props) {
  const className = `row-grid${hi ? ' row-hi' : ''}${href ? ' row-link' : ''}`;
  const inner = (
    <>
      <span className="row-yr">{yr}</span>
      <span className="row-ttl">
        <span className="row-name">{ttl}</span>
        {role ? <span className="row-role">{role}</span> : null}
      </span>
      <span className="row-desc" dangerouslySetInnerHTML={{ __html: desc }} />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={{ animationDelay: `${delayMs}ms`, color: 'inherit', textDecoration: 'none' }}
      >
        {inner}
      </a>
    );
  }

  return (
    <div className={className} style={{ animationDelay: `${delayMs}ms` }}>
      {inner}
    </div>
  );
}
