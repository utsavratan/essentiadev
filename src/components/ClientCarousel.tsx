
import React, { useEffect, useRef } from 'react';
import AnimatedElement from './AnimatedElement';

// Mock client logos - replace with actual client logos
const clientLogos = [
  { name: 'Client 1', logo: '/client-logo/iitb.svg' },
  { name: 'Client 2', logo: '/client-logo/india-today.svg' },
  { name: 'Client 3', logo: '/client-logo/astra-techz.svg' },
  { name: 'Client 4', logo: '/client-logo/analytics-vidhya.svg' },
  { name: 'Client 5', logo: '/client-logo/blubyn.svg' },
  { name: 'Client 6', logo: '/client-logo/careers-360.svg' },
  { name: 'Client 7', logo: '/client-logo/csds.svg' },
  { name: 'Client 8', logo: '/client-logo/datasudh.svg' },
  { name: 'Client 9', logo: '/client-logo/episource.svg' },
  { name: 'Client 10', logo: '/client-logo/jsm.svg' },
  { name: 'Client 11', logo: '/client-logo/life-force-fitness.svg' },
  { name: 'Client 12', logo: '/client-logo/novo.svg' },
  { name: 'Client 13', logo: '/client-logo/optum.svg' },
  { name: 'Client 14', logo: '/client-logo/oxo-reality.svg' },
  { name: 'Client 15', logo: '/client-logo/spendcubes.svg' },
];

// Duplicate the logos to create a seamless infinite effect
const allLogos = [...clientLogos, ...clientLogos];

const ClientCarousel = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;
    
    const scrollerContent = Array.from(scrollerRef.current.children);
    
    // Set up the animation
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      if (scrollerRef.current) {
        scrollerRef.current.appendChild(duplicatedItem);
      }
    });
    
    // Start the animation
    startAnimation();
    
    function startAnimation() {
      if (!scrollerRef.current) return;
      
      // Get animation duration based on the number of items
      const scrollerContentWidth = scrollerRef.current.scrollWidth;
      const duration = scrollerContentWidth / 50; // Adjust speed by changing divisor
      
      scrollerRef.current.setAttribute(
        'style',
        `animation: scroll ${duration}s linear infinite; width: ${scrollerContentWidth}px;`
      );
    }
    
    // Add the animation to CSS
    if (!document.querySelector('#carousel-animation')) {
      const style = document.createElement('style');
      style.id = 'carousel-animation';
      style.textContent = `
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `;
      document.head.append(style);
    }
    
    const handleResize = () => {
      if (!scrollerRef.current) return;
      startAnimation();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <section className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedElement animation="fade-in" delay={0.1}>
        <div className="text-center mb-12">
          <span className="text-2xl md:text-3xl text-primary font-bold uppercase tracking-wider">
            Clientele
          </span>
          <h4 className="text-lg md:text-xl font-medium mt-2">
            You'll be in good company
          </h4>
        </div>
        </AnimatedElement>
        
        <div className="overflow-hidden">
          <div className="flex justify-start items-center py-6 w-full">
            <div 
              ref={scrollerRef}
              className="flex items-center justify-around gap-8"
              style={{
                minWidth: "100%",
              }}
            >
              {allLogos.map((client, index) => (
                <div key={`${client.name}-${index}`} className="flex-shrink-0 px-6">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="h-12 md:h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;
