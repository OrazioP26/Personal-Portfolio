import React from 'react';
import { MailIcon } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container-page">
        <div className="rounded-xl border border-ink-3/15 bg-paper-2 p-6 shadow-subtle">
          <div className="kicker">CONTACT</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            Let’s talk
          </h2>
          <p className="mt-3 max-w-2xl text-ink-2">
            The fastest way to reach me is email. If you’re reaching out about a
            project, include a sentence on the goal + timeline.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="btn-primary no-underline"
              href="mailto:oraziopetito@gmail.com"
            >
              <MailIcon className="mr-2 h-4 w-4" />
              oraziopetito@gmail.com
            </a>
            <a className="btn-ghost no-underline" href="#home">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
