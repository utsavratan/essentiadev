
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedElement from '../components/AnimatedElement';
import { Target, Eye, Award, Lightbulb, Shield, Heart } from 'lucide-react';

const About = () => {
  const values = [
    { icon: Award, title: "Excellence", description: "We strive for excellence in everything we do, always aiming to exceed expectations." },
    { icon: Lightbulb, title: "Innovation", description: "We embrace new ideas and technologies to create forward-thinking solutions." },
    { icon: Shield, title: "Integrity", description: "We conduct business with honesty, transparency, and ethical principles." },
    { icon: Heart, title: "Passion", description: "We're passionate about technology and helping our clients succeed." },
    { icon: Target, title: "Focus", description: "We maintain laser focus on delivering results that matter." },
    { icon: Eye, title: "Vision", description: "We see beyond the present to build solutions for the future." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/5 left-1/6 w-32 h-32 bg-indigo-200/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-40 h-40 bg-purple-300/20 rounded-full animate-bounce" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-24 h-24 bg-blue-200/30 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto pt-32 px-4 pb-16 relative">
        <AnimatedElement animation="slide-up">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              About Us
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Welcome to Essentia.dev, a software services firm that is committed to helping businesses and organizations achieve their goals through innovative and cutting-edge software solutions. Our company culture is centered around nurturing creativity and encouraging our team members to think outside the box to deliver exceptional results.
            </p>
          </div>
        </AnimatedElement>
        
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <AnimatedElement animation="slide-right">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 hover:shadow-3xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To leverage technology to solve real-world problems and help businesses achieve their goals through innovative digital solutions that make a lasting impact.
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-left">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 hover:shadow-3xl transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be a leading force in digital transformation, empowering organizations to thrive in the ever-evolving technological landscape of tomorrow.
              </p>
            </div>
          </AnimatedElement>
        </div>
        
        <AnimatedElement animation="slide-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Our Values</h2>
            <p className="text-xl text-gray-600 mt-4">The principles that guide everything we do</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedElement key={index} animation="scale-in" delay={index * 0.1}>
                <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </AnimatedElement>
      </div>
      <Footer />
    </div>
  );
};

export default About;
