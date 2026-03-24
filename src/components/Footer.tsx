import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-ink-3/10 bg-paper-1">
      <div className="container-page py-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="font-mono text-xs tracking-widest text-ink-3/70">
          © {new Date().getFullYear()} ORAZIO PETITO
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <a className="no-underline text-ink-2 hover:text-ink-1" href="#projects">
            Work
          </a>
          <a className="no-underline text-ink-2 hover:text-ink-1" href="#about">
            About
          </a>
          <a className="no-underline text-ink-2 hover:text-ink-1" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
