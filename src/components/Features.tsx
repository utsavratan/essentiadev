
import React from 'react';
import AnimatedElement from './AnimatedElement';

const featureItems = [
  {
    name: "React",
    description: "A JavaScript library for building user interfaces",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
        <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="currentColor"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C14.5 2 19.5 5.5 19.5 12C19.5 18.5 14.5 22 12 22C9.5 22 4.5 18.5 4.5 12C4.5 5.5 9.5 2 12 2ZM12 4C10.5 4 6.5 6.5 6.5 12C6.5 17.5 10.5 20 12 20C13.5 20 17.5 17.5 17.5 12C17.5 6.5 13.5 4 12 4Z" fill="currentColor"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 8C15.5 4.5 18.5 6 18.5 8C18.5 10 15.5 11.5 12 15C8.5 11.5 5.5 10 5.5 8C5.5 6 8.5 4.5 12 8Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    description: "A utility-first CSS framework for rapid UI development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
        <path d="M12.001 4.8C9.601 4.8 8.101 6.2 7.501 9C8.401 7.8 9.401 7.3 10.601 7.5C11.301 7.6 11.801 8.1 12.301 8.7C13.201 9.5 14.301 10.5 16.501 10.5C18.901 10.5 20.401 9.1 21.001 6.3C20.101 7.5 19.101 8 17.901 7.8C17.201 7.7 16.701 7.2 16.201 6.6C15.201 5.8 14.101 4.8 12.001 4.8ZM7.501 10.5C5.101 10.5 3.601 11.9 3.001 14.7C3.901 13.5 4.901 13 6.101 13.2C6.801 13.3 7.301 13.8 7.801 14.4C8.701 15.2 9.801 16.2 12.001 16.2C14.401 16.2 15.901 14.8 16.501 12C15.601 13.2 14.601 13.7 13.401 13.5C12.701 13.4 12.201 12.9 11.701 12.3C10.801 11.5 9.701 10.5 7.501 10.5Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    description: "JavaScript with syntax for types, enhancing code quality and understanding",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
        <path d="M3 3H21V21H3V3Z" fill="currentColor" fillOpacity="0.2"/>
        <path d="M13.2 13.125V17.25C13.6 17.65 14.1 17.9625 14.7 18.1375C15.3 18.3125 15.9375 18.4 16.6125 18.4C17.3 18.4 17.925 18.3125 18.4875 18.1375C19.05 17.9625 19.5375 17.7125 19.95 17.3875C20.3625 17.0625 20.6875 16.675 20.925 16.225C21.1625 15.775 21.2875 15.275 21.2875 14.725C21.2875 14.275 21.225 13.875 21.1 13.525C20.975 13.175 20.7875 12.8625 20.55 12.5875C20.3125 12.3125 20.025 12.0625 19.6875 11.85C19.35 11.6375 18.975 11.4375 18.5625 11.25C18.275 11.125 18.025 11 17.8125 10.875C17.5999 10.75 17.425 10.625 17.2875 10.5C17.15 10.375 17.0375 10.25 16.95 10.125C16.8625 10 16.825 9.8625 16.825 9.7125C16.825 9.5625 16.8625 9.425 16.9375 9.3C17.0125 9.175 17.1125 9.0625 17.2375 8.9625C17.3625 8.8625 17.5125 8.7875 17.6875 8.7375C17.8625 8.6875 18.05 8.6625 18.25 8.6625C18.6 8.6625 18.9625 8.7375 19.3375 8.8875C19.7125 9.0375 20.0875 9.275 20.4625 9.6V7.2875C20.075 7.075 19.6625 6.9125 19.225 6.8C18.7875 6.6875 18.3 6.625 17.7625 6.625C17.075 6.625 16.45 6.7125 15.8875 6.8875C15.325 7.0625 14.8375 7.3125 14.425 7.6375C14.0125 7.9625 13.6875 8.35 13.45 8.8C13.2125 9.25 13.0875 9.75 13.0875 10.3C13.0875 10.9875 13.25 11.5625 13.575 12.025C13.9 12.4875 14.4 12.9 15.075 13.25C15.375 13.4 15.6625 13.5375 15.9375 13.675C16.2125 13.8125 16.4625 13.95 16.6875 14.0875C16.9125 14.225 17.1 14.3625 17.25 14.5C17.4 14.6375 17.475 14.8 17.475 14.9875C17.475 15.1375 17.4375 15.275 17.3625 15.3875C17.2875 15.5125 17.175 15.6125 17.0375 15.7C16.9 15.7875 16.7375 15.85 16.55 15.8875C16.3625 15.925 16.1625 15.95 15.95 15.95C15.5 15.95 15.05 15.85 14.6 15.65C14.15 15.4375 13.6999 15.1375 13.2499 14.75V13.125H13.2ZM9.5 11.5H12V9.5H3V11.5H5.5V19H9.5V11.5Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Vite",
    description: "Next generation frontend tooling",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
        <path d="M12.0001 2L3 6.5L4.88854 16.6615L12.0001 21.5L19.1115 16.6615L21 6.5L12.0001 2Z" fill="currentColor" fillOpacity="0.2"/>
        <path d="M18.2308 6.46159L12.0769 15.0386L7.84616 9.28466L12.0769 4.13159L18.2308 6.46159Z" fill="currentColor"/>
        <path d="M18.2308 6.46159L17.4039 14.0193L12.0769 15.0386V15.0386L18.2308 6.46159Z" fill="currentColor"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12.0769 4.13159V4.13159L7.84616 9.28466L12.0769 15.0386L17.4039 14.0193L18.2308 6.46159L12.0769 4.13159Z" fill="currentColor" fillOpacity="0.5"/>
      </svg>
    ),
  },
];

const Features = () => {
  return (
    <section id="technologies" className="section bg-gray-50">
      <div className="container">
        <AnimatedElement animation="slide-up" className="text-center mb-16">
          <span className="text-sm text-primary font-semibold uppercase tracking-wider">
            Our Tech Stack
          </span>
          <h2 className="mt-2 text-4xl font-bold">Technologies We Use</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage modern technologies to deliver high-quality digital solutions.
          </p>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureItems.map((feature, index) => (
            <AnimatedElement
              key={index}
              animation="scale-in"
              delay={0.15 * index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/5 text-primary rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
