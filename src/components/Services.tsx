
import React from 'react';
import AnimatedElement from './AnimatedElement';
import { Code2, Palette, BarChart3, Settings, Sparkles } from 'lucide-react';

const serviceItems = [
  {
    title: "Development",
    description: "Build scalable applications with modern technologies and best practices for optimal performance and user experience.",
    icon: Code2,
    gradient: "from-blue-500 to-cyan-500",
    features: []
  },
  {
    title: "Design",
    description: "Create user-friendly and intuitive software solutions that deliver an exceptional user experience.",
    icon: Palette,
    gradient: "from-purple-500 to-pink-500",
    features: []
  },
  {
    title: "Data",
    description: "Transform data into strategic advantage with our expertise in data engineering, machine learning, and AI.",
    icon: BarChart3,
    gradient: "from-green-500 to-emerald-500",
    features: []
  },
  {
    title: "DevOps",
    description: "Streamline software development processes with automation and continuous integration and delivery.",
    icon: Settings,
    gradient: "from-orange-500 to-red-500",
    features: []
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/30"></div>
      
      <div className="container relative z-10">
        {/* Header */}
        <AnimatedElement animation="slide-up" className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Services That Drive
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide comprehensive solutions that help businesses thrive in the digital landscape.
          </p>
        </AnimatedElement>

        {/* Services Grid - Equal Height Containers */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {serviceItems.map((service, index) => (
            <AnimatedElement
              key={index}
              animation="scale-in"
              delay={0.1 * (index + 1)}
            >
              <div className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full flex flex-col">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative w-16 h-16 mb-6 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content - Flex grow to fill space */}
                <div className="relative flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-50 group-hover:scale-150 group-hover:opacity-20 transition-all duration-500"></div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
