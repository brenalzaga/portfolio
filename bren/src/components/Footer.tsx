
import React from 'react';
import Logo from './Logo';
import { Github, Mail, MessageSquare, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-teal-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <Logo className="text-white" />
            <p className="text-teal-200 max-w-xs">
              A passionate BSIT student specializing in web development, UI/UX design, and data analysis.
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href="https://github.com/mabrenquiro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-teal-800 text-white hover:bg-teal-600 transition-colors"
              >
                <Github size={18} />
              </a>
              <a 
                href="mailto:mabrenquiro@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-teal-800 text-white hover:bg-teal-600 transition-colors"
              >
                <Mail size={18} />
              </a>
              <a 
                href="https://m.me/mabrenquiro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-teal-800 text-white hover:bg-teal-600 transition-colors"
              >
                <MessageSquare size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-teal-200 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-teal-200 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-teal-200 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-teal-200 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-teal-200 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-teal-200">
                <span className="font-semibold">Email:</span> mabrenquiro@gmail.com
              </li>
              <li className="text-teal-200">
                <span className="font-semibold">Phone:</span> +63 912 345 6789
              </li>
              <li className="text-teal-200">
                <span className="font-semibold">Location:</span> Philippines
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-teal-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-teal-200 text-sm">
            © {new Date().getFullYear()} Mabren Quiro. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop} 
            className="mt-4 md:mt-0 p-2 rounded-full bg-teal-800 text-white hover:bg-teal-600 transition-colors"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
