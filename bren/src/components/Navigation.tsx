
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Calculate which section is currently visible
      const sections = ['hero', 'about', 'services', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      }) || 'hero';
      
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Logo className="animate-fade-in" />
          
          <div className="hidden md:flex items-center space-x-6">
            {isHomePage ? (
              navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''} hover:text-teal-600 dark:hover:text-teal-400`}
                >
                  {link.label}
                </a>
              ))
            ) : (
              <Link to="/" className="nav-link hover:text-teal-600 dark:hover:text-teal-400">
                Home
              </Link>
            )}
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-800 text-white hover-lift">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              className="text-foreground dark:text-white hover:bg-teal-100 dark:hover:bg-teal-900/30"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {isHomePage ? (
              navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-foreground hover:text-teal-600 dark:text-white dark:hover:text-teal-400 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  {link.label}
                </a>
              ))
            ) : (
              <Link 
                to="/" 
                className="block py-2 text-foreground hover:text-teal-600 dark:text-white dark:hover:text-teal-400 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
            )}
            <div className="pt-4">
              <Button 
                className="w-full bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-800 text-white hover-lift"
                onClick={toggleMenu}
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
