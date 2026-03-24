import React from 'react';
import { BriefcaseIcon, GraduationCapIcon, FileTextIcon } from 'lucide-react';

type TimelineItem = {
  title: string;
  org: string;
  when: string;
  description: string;
};

const experience: TimelineItem[] = [
  {
    title: 'Co-Founder, CEO & CTO',
    org: 'Pitchly AI',
    when: 'May 2025 — Present',
    description:
      'Building a browser workspace for decks with a focus on speed, brand consistency, and deterministic editing.'
  },
  {
    title: 'Software Engineering Intern',
    org: 'Dasion AI',
    when: 'Dec 2024 — Present',
    description:
      'Built an internal image editing tool enabling real-time visual previews of edits.'
  },
  {
    title: 'Software Engineering Intern (ASCEND)',
    org: 'LinkedIn',
    when: 'Aug 2023 — May 2025',
    description:
      'Shipped product features in a cross-functional environment; learned what “production quality” actually means.'
  }
];

const education: TimelineItem[] = [
  {
    title: 'B.A. Computer Science (Minor: Business)',
    org: 'Cornell University',
    when: 'Expected May 2027',
    description:
      'Relevant coursework: FP, DS&A, OOP, discrete math foundations, linear algebra, calculus.'
  }
];

function Timeline({ items, icon: Icon }: { items: TimelineItem[]; icon: any }) {
  return (
    <div className="space-y-4">
      {items.map(item => (
        <div
          key={item.title + item.org}
          className="rounded-xl border border-ink-3/15 bg-paper-2 p-4"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-ink-2" />
                <div className="text-sm font-semibold">{item.title}</div>
              </div>
              <div className="mt-1 text-sm text-ink-2">{item.org}</div>
            </div>
            <div className="font-mono text-xs text-ink-3/70">{item.when}</div>
          </div>
          <p className="mt-3 text-sm text-ink-2">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <div className="mb-10">
          <div className="kicker">ABOUT</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            A little context
          </h2>
          <p className="mt-3 max-w-2xl text-ink-2">
            I’m a Cornell CS student who likes building real products (not just
            demos) — especially tools that compress time for high-output teams.
          </p>
          <div className="mt-6">
            <a
              href="/Orazio_Petito_Resume_6_30_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary no-underline"
            >
              <FileTextIcon className="mr-2 h-4 w-4" />
              Resume
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-sm font-semibold tracking-wide text-ink-1">
              Experience
            </h3>
            <Timeline items={experience} icon={BriefcaseIcon} />
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold tracking-wide text-ink-1">
              Education
            </h3>
            <Timeline items={education} icon={GraduationCapIcon} />

            <div className="mt-6 rounded-xl border border-ink-3/15 bg-paper-1 p-4">
              <div className="kicker">NOTE</div>
              <p className="mt-2 text-sm text-ink-2">
                If you want this to be more “minimal editorial”, we can replace
                timeline cards with a single tight paragraph + 3 bulletproof
                proof points.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
