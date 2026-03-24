import React from 'react';
import { CodeIcon, ServerIcon, LayoutIcon, DatabaseIcon } from 'lucide-react';

function SkillList({ skills }: { skills: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {skills.map(s => (
        <span key={s} className="chip">
          {s}
        </span>
      ))}
    </div>
  );
}

export function SkillsSection() {
  // Curated: keep it high-signal. We can expand later if you want.
  const core = {
    frontend: ['TypeScript', 'React', 'Tailwind', 'UI systems'],
    backend: ['Node.js', 'Python', 'APIs', 'Data pipelines'],
    cs: ['Algorithms', 'Data structures', 'Graphs', 'Performance'],
    ops: ['Git', 'Docker', 'CI', 'Shipping fast']
  } as const;

  const familiar = [
    'Java',
    'Postgres/SQL',
    'Express',
    'Firebase',
    'Figma',
    'OCaml',
    'C#'
  ];

  return (
    <section id="skills" className="section bg-paper-2">
      <div className="container-page">
        <div className="mb-10">
          <div className="kicker">SKILLS</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            What I’m strong at
          </h2>
          <p className="mt-3 max-w-2xl text-ink-2">
            I’m best when I can own the full loop: prototype → product → polish →
            ship.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-ink-3/15 bg-paper-1 p-5">
            <div className="flex items-center gap-2">
              <CodeIcon className="h-4 w-4" />
              <div className="text-sm font-semibold">Frontend</div>
            </div>
            <SkillList skills={[...core.frontend]} />
          </div>

          <div className="rounded-xl border border-ink-3/15 bg-paper-1 p-5">
            <div className="flex items-center gap-2">
              <ServerIcon className="h-4 w-4" />
              <div className="text-sm font-semibold">Backend</div>
            </div>
            <SkillList skills={[...core.backend]} />
          </div>

          <div className="rounded-xl border border-ink-3/15 bg-paper-1 p-5">
            <div className="flex items-center gap-2">
              <DatabaseIcon className="h-4 w-4" />
              <div className="text-sm font-semibold">CS / Systems</div>
            </div>
            <SkillList skills={[...core.cs]} />
          </div>

          <div className="rounded-xl border border-ink-3/15 bg-paper-1 p-5">
            <div className="flex items-center gap-2">
              <LayoutIcon className="h-4 w-4" />
              <div className="text-sm font-semibold">Ops</div>
            </div>
            <SkillList skills={[...core.ops]} />
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-ink-3/15 bg-paper-1 p-5">
          <div className="kicker">FAMILIAR</div>
          <p className="mt-2 text-sm text-ink-2">
            Things I’ve used enough to be dangerous:
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {familiar.map(s => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
