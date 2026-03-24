import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

const navLinks = [
  { name: 'Work', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
] as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={
        'fixed inset-x-0 top-0 z-50 transition-all ' +
        (isScrolled
          ? 'bg-paper-1/80 backdrop-blur border-b border-ink-3/10'
          : 'bg-transparent')
      }
    >
      <div className="container-page flex h-14 items-center justify-between">
        <a
          href="#home"
          className="font-mono text-xs tracking-widest text-ink-2 no-underline hover:text-ink-1"
        >
          ORAZIO
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-ink-2 no-underline hover:text-ink-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-ink-3/15 bg-paper-2 p-2"
          onClick={() => setIsMenuOpen(v => !v)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-ink-3/10 bg-paper-1">
          <div className="container-page py-4 flex flex-col gap-3">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-ink-2 no-underline hover:text-ink-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
