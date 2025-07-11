
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200">
              <img 
                src="/lovable-uploads/img.png" 
                alt="essentia.dev logo" 
                width={195}
                height={40}
                style={{ width: 195, height: 40, objectFit: 'contain' }}
              />
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <Link to="/about" className="text-gray-600 hover:text-primary transition-colors duration-200 hover:scale-105 transform">
              About
            </Link>
            <Link to="/privacy" className="text-gray-600 hover:text-primary transition-colors duration-200 hover:scale-105 transform">
              Privacy Policy
            </Link>
            <HashLink to="/#contact" smooth className="text-gray-600 hover:text-primary transition-colors duration-200 hover:scale-105 transform">
              Contact
            </HashLink>
            <Link to="/terms" className="text-gray-600 hover:text-primary transition-colors duration-200 hover:scale-105 transform">
              Terms of Service
            </Link>
          </div>
          
          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <div className="relative flex-1">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
              />
            </div>
            <Button className="whitespace-nowrap hover:scale-105 transform transition-all duration-200">
              Subscribe
            </Button>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            © {currentYear} Essentia Softserv LLP. All Rights Reserved.
          </p>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/company/essentia-dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-110 transform"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a 
              href="https://twitter.com/essentia_dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-110 transform"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a 
              href="https://github.com/essentiasoftserv" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-110 transform"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
