export type CornellRow = {
  yr: string;
  ttl: string;
  role?: string;
  desc: string;
};

export const cornell: CornellRow[] = [
  {
    yr: 'Sport',
    ttl: 'Rugby',
    desc: "Cornell Men's Rugby."
  },
  {
    yr: 'Markets',
    ttl: 'Cornell Algorithmic Trading Club',
    desc: 'Quant + systematic strategies.'
  },
  {
    yr: 'Venture',
    ttl: 'Cornell eLab Startup Accelerator',
    desc: "Cornell's student startup accelerator."
  }
];
