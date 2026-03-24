import React from 'react';
import { GithubIcon, LinkedinIcon, FileTextIcon } from 'lucide-react';

const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/OrazioP26',
    icon: GithubIcon
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/orazio-petito/',
    icon: LinkedinIcon
  },
  {
    label: 'Resume',
    href: '/Orazio_Petito_Resume_6_30_2025.pdf',
    icon: FileTextIcon
  }
] as const;

export function HeroSection() {
  return (
    <section id="home" className="section pt-24 md:pt-28">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-7">
            <div className="kicker mb-4">CORNELL CS • BUILDER • FOUNDER</div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Orazio Petito
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-2 md:text-lg">
              I build software that turns messy workflows into clean, shippable
              systems — currently focused on AI + productivity tools.
            </p>

            <ul className="mt-6 grid max-w-2xl grid-cols-1 gap-2 text-sm text-ink-2 md:grid-cols-2">
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Founder/engineer; ship fast, iterate faster</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Strong UI taste + systems mindset</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Interested in startups, AI tooling, and finance workflows</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Based in Ithaca / NYC</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-primary" href="#projects">
                See work
              </a>
              <a className="btn-ghost" href="#contact">
                Contact
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              {links.map(l => {
                const Icon = l.icon;
                return (
                  <a
                    key={l.label}
                    className="inline-flex items-center gap-2 rounded-xl border border-ink-3/15 bg-paper-2 px-3 py-2 text-sm no-underline hover:bg-paper-3"
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{l.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-5 md:justify-self-end">
            <div className="rounded-xl border border-ink-3/15 bg-paper-2 p-4 shadow-subtle">
              <div className="overflow-hidden rounded-xl border border-ink-3/10 bg-paper-3">
                <img
                  src="/profile.jpg"
                  alt="Orazio Petito"
                  className="h-[360px] w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm">
                  <div className="font-medium">Quick intro</div>
                  <div className="text-ink-2">Cornell CS • founder-builder</div>
                </div>
                <div className="chip">Open to: collabs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
