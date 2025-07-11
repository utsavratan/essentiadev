
import React, { useState, useEffect } from 'react';
import AnimatedElement from './AnimatedElement';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  
  const heroTexts = [
    {
      title: "Redefining Possibilities with AI and Software",
      description: "We transform your dreams to ideas, bring them alive and scale them beyond your imagination.",
    },
    {
      title: "Premier IT Staffing for Premier Companies",
      description: "Bringing you the best IT professionals to drive innovation and achieve your strategic goals",
    },
    {
      title: "Expert Tech Consulting Services",
      description: "We craft performant, beautiful, and accessible web applications that elevate your brand and deliver results.",
    }
  ];

  useEffect(() => {
    const currentFullText = heroTexts[currentIndex].title;
    const typingSpeed = isDeleting ? 50 : 100;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(currentFullText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % heroTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Typewriter Title */}
            <AnimatedElement animation="slide-up" delay={0.2}>
              <div className="min-h-[120px] flex items-start">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                  {currentText}
                  <span className="animate-pulse text-primary">|</span>
                </h1>
              </div>
            </AnimatedElement>
            
            {/* Subtitle */}
            <AnimatedElement animation="slide-up" delay={0.3}>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                {heroTexts[currentIndex].description}
              </p>
            </AnimatedElement>
          </div>
          
          {/* Right Content - GIF */}
          <AnimatedElement animation="scale-in" delay={0.3} className="relative">
            <div className="relative flex justify-center">
              <img 
                src="/lovable-uploads/img.gif" 
                alt="Essentia Animation" 
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Hero;
