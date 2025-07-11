
import React from 'react';
import AnimatedElement from './AnimatedElement';

const CallToAction = () => {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <div className="container relative z-10">
        <AnimatedElement animation="fade-in" delay={0.1} className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how our services can help you achieve your digital goals.
            </p>
            <button 
              onClick={() => window.open('https://cal.com/essentia-sales/', '_blank')}
              className="bg-white text-primary px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started Today
            </button>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default CallToAction;
