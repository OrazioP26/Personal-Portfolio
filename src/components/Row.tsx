type Props = {
  yr: string;
  ttl: string;
  role?: string;
  desc: string;
  hi?: boolean;
  delayMs?: number;
};

export function Row({ yr, ttl, role, desc, hi, delayMs = 0 }: Props) {
  return (
    <div
      className={`row-grid${hi ? ' row-hi' : ''}`}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <span className="row-yr">{yr}</span>
      <span className="row-ttl">
        <span className="row-name">{ttl}</span>
        {role ? <span className="row-role">{role}</span> : null}
      </span>
      <span className="row-desc" dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  );
}
