import React from 'react';
import { navLinks } from '../constants';
import { BookOpen, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <BookOpen className="h-7 w-7 text-accent-400" />
              <span className="ml-2 text-xl font-bold">VersaPRO Services</span>
            </div>
            <p className="text-primary-100 mb-6">
              Professional thesis development services to help you achieve academic excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-100 hover:text-accent-400 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-primary-100 hover:text-accent-400 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-100 hover:text-accent-400 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-100 hover:text-accent-400 transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <a 
                    href={link.href}
                    className="text-primary-100 hover:text-accent-400 transition-colors duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Thesis Development',
                'Thesis Editing',
                'Research Assistance',
                'Research Paper Writing',
                'Review Paper Writing',
                'Resume Writing',
                'Plagiarism Services',
                'Pharmacy Projects',
                'Academic Consultation',
                'Literature Review',
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-primary-100 hover:text-accent-400 transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {[
                'Academic Blogs',
                'Thesis Guidelines',
                'Research Methods',
                'Writing Tips',
                'FAQs',
              ].map((resource) => (
                <li key={resource}>
                  <a href="#" className="text-primary-100 hover:text-accent-400 transition-colors duration-300">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-200 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()}VersaPRO . All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-primary-200 hover:text-accent-400 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-200 hover:text-accent-400 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-primary-200 hover:text-accent-400 text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
