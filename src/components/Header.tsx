
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'About Us', path: '/about' },
    { name: 'Free Website', path: '/free-website' },
    { name: 'Bharat OCR', path: 'https://bharatocr.org', external: true },
    { name: 'Vaaak', path: 'https://vaaak.com', external: true },
  ];

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-white/90 backdrop-blur-sm py-4'
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200">
            <img 
              src="/lovable-uploads/img.png" 
              alt="essentia.dev logo" 
              width={195}
              height={40}
              style={{ width: 195, height: 40, objectFit: 'contain' }}
            />
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center bg-gray-50 rounded-full px-2 py-2 mr-6">
              {navItems.map((item, index) => (
                item.external ? (
                  <a 
                    key={index}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="px-4 py-2 rounded-full text-gray-600 hover:text-primary hover:bg-white transition-all duration-200 font-medium hover:scale-105 transform"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link 
                    key={index}
                    to={item.path} 
                    className={cn(
                      "px-4 py-2 rounded-full transition-all duration-200 font-medium hover:scale-105 transform",
                      isActiveRoute(item.path)
                        ? "text-primary bg-white shadow-sm"
                        : "text-gray-600 hover:text-primary hover:bg-white"
                    )}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
            
            <Button asChild className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 transform">
              <a 
                href="https://cal.com/essentia-sales"
                target="_blank"
                rel="noopener noreferrer" 
              >
                Get in touch
              </a>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-gray-700 focus:outline-none hover:scale-110 transform transition-all duration-200" 
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                item.external ? (
                  <a 
                    key={index}
                    href={item.path} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-700 hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-gray-50 hover:scale-105 transform duration-200"
                    onClick={toggleMobileMenu}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link 
                    key={index}
                    to={item.path} 
                    className={cn(
                      "transition-colors py-2 px-4 rounded-lg hover:scale-105 transform duration-200",
                      isActiveRoute(item.path)
                        ? "text-primary bg-gray-100"
                        : "text-gray-700 hover:text-primary hover:bg-gray-50"
                    )}
                    onClick={toggleMobileMenu}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              
              <a 
                href="https://cal.com/essentia-sales"
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-primary text-white hover:bg-primary/90 w-full py-2 px-4 rounded-lg text-center mt-4 hover:scale-105 transform transition-all duration-200"
                onClick={toggleMobileMenu}
              >
                Get in touch
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
