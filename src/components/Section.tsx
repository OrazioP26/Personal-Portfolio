import type { ReactNode } from 'react';

type Props = {
  label: string;
  children: ReactNode;
};

export function Section({ label, children }: Props) {
  return (
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
        {label}
      </div>
      <div
        className="section-body"
        style={{
          gridColumn: '3 / span 10',
          borderTop: '1px solid var(--ink)',
          paddingTop: 8
        }}
      >
        {children}
      </div>

      <style>{`
        .section-block { padding-top: 56px; }
        @media (max-width: 720px) {
          .section-label { grid-column: 1 / -1 !important; padding-top: 16px !important; }
          .section-body { grid-column: 1 / -1 !important; }
        }
      `}</style>
    </section>
  );
}
