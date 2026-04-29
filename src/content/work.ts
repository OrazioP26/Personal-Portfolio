export type WorkRow = {
  yr: string;
  ttl: string;
  role: string;
  desc: string;
  hi?: boolean;
};

export const work: WorkRow[] = [
  {
    yr: '2026 · Now',
    ttl: 'Vdrio',
    role: 'Co-founder',
    hi: true,
    desc: 'AI estimator for glaziers.'
  },
  {
    yr: '2025 — 2026',
    ttl: 'Novl AI',
    role: 'Founder',
    hi: true,
    desc: 'AI PowerPoint add-in for finance and consulting. <strong>$5,000 in revenue.</strong>'
  },
  {
    yr: '2024 — 2025',
    ttl: 'Dasion',
    role: 'SWE',
    desc: 'Software engineering at an early-stage startup.'
  },
  {
    yr: '2024',
    ttl: 'LinkedIn',
    role: 'SWE',
    desc: 'Software engineering intern.'
  },
  {
    yr: '2021 — 2022',
    ttl: 'Aurora',
    role: 'Founder',
    hi: true,
    desc: 'Landscaping &amp; contracting — landscaping, construction, plumbing, electrical, concrete, odd jobs. <strong>Grew to $50k in revenue in a single summer</strong> as a high-school sophomore.'
  },
  {
    yr: '2019 — 2026',
    ttl: 'Meadowbrook Country Club',
    role: 'Caddy',
    desc: 'Long-running summer gig back home.'
  }
];
