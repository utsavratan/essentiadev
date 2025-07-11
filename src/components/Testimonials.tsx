
import React, { useState } from 'react';
import AnimatedElement from './AnimatedElement';

const testimonials = [
  {
    quote: "I was impressed by the long term thinking of Essentia folks and their ability to create solutions which are reusable and generic in nature which helped us scale from 30K odd users to 250K users with ease.",
    author: "Anand Mishra",
    title: "CTO at Analytics Vidhya",
    avatar: "/c/c1.jpg"
  },
  {
    quote: "Essentia Softserv's professionalism and technical capabilities were extremely impressive. They were quick to understand our complex system and it was a pleasure working with them.",
    author: "Arastu Zakia",
    title: "Chief Product Officer at Careers360",
    avatar: "/c/c2.jpg"
  },
  {
    quote: "Whenever we got ourselves in a tangle we would video link. Consequently we were able to evolve with the security of knowing that we were using industry best practices, and avoiding incurring technical debt.",
    author: "Zorawar Purohit",
    title: "Director at AstraTechz",
    avatar: "/c/c3.jpg"
  },
  {
    quote: "Excellent team, fabulous timely delivery. These are brilliant at going beyond the basics and delivering world class scalable technology. I am certain to build more with them ahead.",
    author: "Pi (Sam King)",
    title: "CTO at CueAudio",
    avatar: "/c/c4.jpg"
  },
  {
    quote: "Anuvrat solved my AWS configuration issue quickly while educating me on the contents of these files. Very impressed with how quickly he jumped in and was able to problem solve. Highly recommend working with him.",
    author: "Jeremiah Parrack",
    title: "CEO at Jeremiah Parrack LLC",
    avatar: "/c/c5.png"
  },
  {
    quote: "They're not only knowledgeable and skilled, they are intellectually engaged in the problem and want to develop a sophisticated and scalable solution. We've been loving working with them and plan to continue to do so as we grow.",
    author: "Dr. Anzar Abbas, PhD",
    title: "Founder of a stealth startup",
    avatar: "/c/c6.jpg"
  },
  {
    quote: "Clients, look no further! Essentia is a highly professional, communicative, and efficient team. They delivered high-quality software on time and on budget, and I highly recommend their services.",
    author: "Vijay Yadav",
    title: "CTO @ Stealth",
    avatar: "/c/c7.jpg"
  },
  {
    quote: "We've been with Essentia for over 10 years. They have an impressive team skilled in modern dev languages, are able to onboard and bring value quickly, and communicate effectively to deliver high quality products.",
    author: "Dr. Thomas Barus",
    title: "Barus Consulting",
    avatar: "/c/c8.jpg"
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedElement animation="scale-in" className="text-center mb-16">
          <div className="relative inline-block">
            <span className="text-sm text-primary font-semibold uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
              ✨ Testimonials
            </span>
          </div>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary to-secondary bg-clip-text text-transparent">
            Voices of Excellence
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our clients' experiences and feedback are essential to us. We're honored to share their stories with you. Their encouraging words are what motivate us to keep striving for excellence.
          </p>
        </AnimatedElement>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden py-12">
            <div className="flex transition-all duration-700 ease-in-out transform"
                 style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <AnimatedElement animation="fade-in" 
                    className={`relative transform transition-all duration-500 ${
                      index === activeIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
                    }`}>
                    
                    {/* Testimonial Card with Glassmorphism Effect */}
                    <div className="relative bg-white rounded-2xl p-8 md:p-10 shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-100">
                      
                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center text-center">
                        
                        {/* Animated Quote Icon */}
                        <div className="relative mb-8">
                          <div className="relative bg-gray-50 p-3 rounded-full">
                            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.13456 9H5.25L7.5 3H4.5L1.5 9V12H9.13456V9Z" fill="currentColor"/>
                              <path d="M19.1346 9H15.25L17.5 3H14.5L11.5 9V12H19.1346V9Z" fill="currentColor"/>
                            </svg>
                          </div>
                        </div>
                        
                        {/* Quote Text with Typing Animation Effect */}
                        <div className="relative mb-8">
                          <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed italic">
                            "{testimonial.quote}"
                          </p>
                        </div>
                        
                        {/* Author Section with Enhanced Animation */}
                        <div className="flex flex-col items-center group-hover:scale-105 transition-transform duration-300">
                          
                          {/* Avatar with Glow Effect */}
                          <div className="relative mb-4">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 scale-110"></div>
                            <img 
                              src={testimonial.avatar} 
                              alt={testimonial.author} 
                              className="relative w-20 h-20 rounded-full border-4 border-white shadow-xl object-cover" 
                            />
                            
                            {/* Floating badge */}
                            <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                              </svg>
                            </div>
                          </div>
                          
                          {/* Author Info */}
                          <div className="text-center">
                            <p className="font-bold text-lg text-gray-900 mb-1">{testimonial.author}</p>
                            <p className="text-primary font-medium">{testimonial.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedElement>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Navigation Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-300 border border-white/20 group md:-translate-x-6"
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600 group-hover:text-primary transition-colors duration-300">
              <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-300 border border-white/20 group md:translate-x-6"
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600 group-hover:text-primary transition-colors duration-300">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Enhanced Progress Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'w-12 bg-gradient-to-r from-primary to-secondary shadow-lg' 
                    : 'w-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                {activeIndex === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse opacity-50"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
