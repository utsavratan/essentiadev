
import React from 'react';
import AnimatedElement from './AnimatedElement';

const partners = [
  { 
    name: "Company 1", 
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="/client-logo/iitb.svg" className="w-12 h-12">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    name: "Company 2", 
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="/client-logo/india-today.svg" className="w-12 h-12">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
      </svg>
    )
  },
  { 
    name: "Company 3", 
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    name: "Company 4", 
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    name: "Company 5", 
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    name: "Company 6", 
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <path d="M12 3V21M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
];

const Partners = () => {
  return (
    <section id="partners" className="section bg-gray-50">
      <div className="container">
        <AnimatedElement animation="slide-up" className="text-center mb-16">
          <span className="text-sm text-primary font-semibold uppercase tracking-wider">
            Our Partners
          </span>
          <h2 className="mt-2 text-4xl font-bold">Trusted By Leading Companies</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with forward-thinking organizations to create exceptional digital experiences.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <AnimatedElement
              key={index}
              animation="scale-in"
              delay={0.1 * index}
              className="bg-white p-6 rounded-lg flex items-center justify-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-gray-500 hover:text-primary transition-colors duration-300">
                {partner.logo}
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
