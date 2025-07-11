
import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {/* Large floating circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full animate-float-1"></div>
        <div className="absolute top-1/4 right-20 w-24 h-24 bg-secondary/10 rounded-full animate-float-2"></div>
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-accent/8 rounded-full animate-float-3"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-primary/7 rounded-full animate-float-4"></div>
        <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-secondary/6 rounded-full animate-float-5"></div>
        
        {/* Medium floating shapes */}
        <div className="absolute top-1/3 left-3/4 w-16 h-16 bg-primary/10 rotate-45 animate-float-2" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/2 right-10 w-20 h-20 bg-secondary/8 rotate-12 animate-float-1" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-20 w-12 h-12 bg-accent/12 rounded-full animate-float-4" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Small floating dots */}
        <div className="absolute top-20 right-1/4 w-6 h-6 bg-primary/15 rounded-full animate-float-3" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-secondary/12 rounded-full animate-float-5" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-2/3 right-1/2 w-4 h-4 bg-accent/20 rounded-full animate-float-1" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Additional scattered elements */}
        <div className="absolute top-1/6 left-2/3 w-14 h-14 bg-primary/8 rounded-lg rotate-45 animate-float-4" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/6 right-1/6 w-18 h-18 bg-secondary/9 rounded-full animate-float-2" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-5/6 left-1/6 w-10 h-10 bg-accent/11 rotate-12 animate-float-3" style={{ animationDelay: '3.2s' }}></div>
      </div>

      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/2 to-secondary/3 animate-gradient-shift"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-slide-right" style={{ animationDuration: '20s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent animate-slide-up" style={{ animationDuration: '25s' }}></div>
      </div>
    </div>
  );
};

export default BackgroundAnimation;
