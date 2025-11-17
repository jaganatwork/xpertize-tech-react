import { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { useNavigationStore } from '@/stores/navigationStore';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { activeSection, setActiveSection, isMobileMenuOpen, setMobileMenuOpen } = useNavigationStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string, label: string) => {
    setActiveSection(label.toLowerCase());
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-slate-900/80' : 'backdrop-blur-md bg-slate-900/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home', 'Home');
              }}
              className="text-2xl font-extrabold text-text-primary"
            >
              MetaFyAI
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href, item.label);
                }}
                className={`text-base font-normal transition-colors duration-200 cursor-pointer hover:text-accent ${
                  activeSection === item.label.toLowerCase()
                    ? 'text-accent'
                    : 'text-text-secondary'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-gradient-primary text-text-primary font-normal hover:opacity-90 transition-opacity duration-200"
              onClick={() => handleNavClick('#contact', 'Contact')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile MenuIcon Button */}
          <button
            className="md:hidden text-text-primary"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <XIcon size={32} /> : <MenuIcon size={32} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-border">
            <nav className="flex flex-col py-8 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, item.label);
                  }}
                  className={`text-base font-normal px-8 py-3 transition-colors duration-200 cursor-pointer hover:text-accent ${
                    activeSection === item.label.toLowerCase()
                      ? 'text-accent'
                      : 'text-text-secondary'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-8 pt-4">
                <Button
                  className="w-full bg-gradient-primary text-text-primary font-normal hover:opacity-90 transition-opacity duration-200"
                  onClick={() => handleNavClick('#contact', 'Contact')}
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
