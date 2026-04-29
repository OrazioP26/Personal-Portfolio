export type CornellRow = {
  yr: string;
  ttl: string;
  role?: string;
  desc: string;
  href?: string;
};

export const cornell: CornellRow[] = [
  {
    yr: 'Sport',
    ttl: 'Rugby',
    desc: "Cornell Men's Rugby.",
    href: 'https://www.cornellsun.com/article/2025/11/resilience-passion-discipline-meet-cornell-s-undefeated-club-rugby-team'
  },
  {
    yr: 'Markets',
    ttl: 'Cornell Algorithmic Trading Club',
    desc: 'Quant + systematic strategies.',
    href: 'https://www.cornellalgo.com/'
  },
  {
    yr: 'Venture',
    ttl: 'Cornell eLab Startup Accelerator',
    desc: "Cornell's student startup accelerator.",
    href: 'https://elab.cornell.edu/'
  }
];
