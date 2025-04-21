import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { navLinks } from '../constants';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-primary-900" />
            <span className="ml-2 text-lg font-bold text-primary-900">VersaPRO Services</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  className="text-neutral-700 hover:text-accent-500 font-medium transition-colors duration-300"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          <button className="hidden md:block bg-accent-500 hover:bg-accent-600 text-white font-medium py-2 px-5 rounded-md transition-colors duration-300">
            Get Started
          </button>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-neutral-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
            <ul className="flex flex-col px-4 pt-2 pb-4">
              {navLinks.map((link) => (
                <li key={link.title} className="py-2">
                  <a
                    href={link.href}
                    className="text-neutral-700 hover:text-accent-500 font-medium transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
              <li className="py-2">
                <button className="w-full bg-accent-500 hover:bg-accent-600 text-white font-medium py-2 px-5 rounded-md transition-colors duration-300">
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
