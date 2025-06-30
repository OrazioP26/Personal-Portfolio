import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navLinks = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-indigo-600">
          Orazio Petito
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => <a key={link.name} href={link.href} className="font-medium hover:text-indigo-600 transition-colors">
              {link.name}
            </a>)}
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
          {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map(link => <a key={link.name} href={link.href} className="font-medium hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>)}
          </div>
        </div>}
    </header>;
}