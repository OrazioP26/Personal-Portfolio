import React from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

type Project = {
  title: string;
  blurb: string;
  highlights: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
};

const featured: Project = {
  title: 'Novl',
  blurb:
    'AI-native slide building and editing — with the reliability and control real teams need.',
  highlights: [
    'Template-aware workflows with “human-in-the-loop” approvals',
    'Focus on deterministic formatting + brand consistency',
    'Built for high-output teams (consulting, finance, operators)'
  ],
  technologies: ['TypeScript', 'React', 'Office.js', 'LLMs', 'Formatting engine'],
  githubUrl: 'https://github.com/OrazioP26'
};

const otherProjects: Project[] = [
  {
    title: 'SprBrk — College Break Calendar',
    blurb:
      'Scrapes academic calendars to generate a searchable break calendar across thousands of U.S. colleges.',
    highlights: ['Data pipeline + normalization', 'Search + filters', 'Practical utility'],
    technologies: ['React', 'Scraping', 'APIs'],
    githubUrl: 'https://github.com/OrazioP26'
  },
  {
    title: 'Interactive Image Selector',
    blurb:
      'Interactive image selection tooling (desktop demo). Algorithms + UI — not just a static toy.',
    highlights: ['Selection models', 'Graph/pathfinding', 'UI state machine'],
    technologies: ['Java', 'Swing', 'Algorithms'],
    githubUrl: 'https://github.com/OrazioP26/Interactive-Image-Selector'
  },
  {
    title: 'LinkedIn Rooms (prototype)',
    blurb:
      'A lightweight networking-room concept (prototype).',
    highlights: ['Simple join/create loop', 'Fast iteration', 'Demo-first UX'],
    technologies: ['Node', 'Express', 'EJS'],
    githubUrl: 'https://github.com/OrazioP26/LinkedIn-Rooms'
  }
];

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-4">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm no-underline"
        >
          <ExternalLinkIcon className="h-4 w-4" />
          Live
        </a>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm no-underline"
        >
          <GithubIcon className="h-4 w-4" />
          Code
        </a>
      )}
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="container-page">
        <div className="mb-10">
          <div className="kicker">SELECTED WORK</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            Things I’ve shipped
          </h2>
          <p className="mt-3 max-w-2xl text-ink-2">
            A small set of projects that reflect how I think: clear constraints,
            fast iteration, and obsessive attention to the final output.
          </p>
        </div>

        {/* Featured */}
        <div className="rounded-xl border border-ink-3/15 bg-paper-2 p-6 shadow-subtle">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="md:max-w-2xl">
              <div className="kicker">FEATURED</div>
              <h3 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">
                {featured.title}
              </h3>
              <p className="mt-3 text-ink-2">{featured.blurb}</p>

              <ul className="mt-4 space-y-2 text-sm text-ink-2">
                {featured.highlights.map(h => (
                  <li key={h} className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {featured.technologies.map(t => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              <ProjectLinks project={featured} />
            </div>

            <div className="md:w-[280px]">
              <div className="rounded-xl border border-ink-3/10 bg-paper-3 p-4">
                <div className="font-mono text-xs text-ink-3/70">Case study</div>
                <div className="mt-2 text-sm text-ink-2">
                  If you want, I can turn this into a full case-study section with
                  screenshots + metrics.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {otherProjects.map(p => (
            <div
              key={p.title}
              className="rounded-xl border border-ink-3/15 bg-paper-1 p-5 hover:bg-paper-2 transition"
            >
              <h3 className="text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-ink-2">{p.blurb}</p>

              <ul className="mt-3 space-y-1 text-sm text-ink-2">
                {p.highlights.map(h => (
                  <li key={h} className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.technologies.map(t => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              <ProjectLinks project={p} />
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://github.com/OrazioP26"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost no-underline"
          >
            View more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
