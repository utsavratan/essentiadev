
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedElement from '../components/AnimatedElement';
import { Briefcase, Users, Zap, Heart, Globe, TrendingUp } from 'lucide-react';

const Careers = () => {
  const benefits = [
    { icon: Users, title: "Collaborative Environment", description: "Work in a supportive team" },
    { icon: Zap, title: "Cutting-edge Tech", description: "Use the latest technologies and frameworks" },
    { icon: Heart, title: "Work-Life Balance", description: "Flexible arrangements that work for you" },
    { icon: Globe, title: "Remote Friendly", description: "Work from anywhere in the world" },
    { icon: TrendingUp, title: "Growth Opportunities", description: "Continuous learning and career advancement" },
    { icon: Briefcase, title: "Competitive Benefits", description: "Great comprehensive benefits" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Header />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-36 h-36 bg-green-200/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-44 h-44 bg-blue-300/20 rounded-full animate-bounce" style={{ animationDuration: '3.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-28 h-28 bg-purple-200/30 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto pt-32 px-4 pb-16 relative">
        <AnimatedElement animation="slide-up">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Careers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join our talented team and help us build the future of technology. Be part of something extraordinary.
            </p>
          </div>
        </AnimatedElement>
        
        <AnimatedElement animation="slide-up" delay={0.2}>
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 mb-16 hover:shadow-3xl transition-all duration-300">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Why Work With Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <AnimatedElement key={index} animation="scale-in" delay={index * 0.1}>
                  <div className="group p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </AnimatedElement>
        
        <AnimatedElement animation="slide-up" delay={0.4}>
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Open Positions</h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 hover:shadow-3xl transition-all duration-300">
              <div className="max-w-2xl mx-auto">
                <Briefcase className="w-16 h-16 text-primary mx-auto mb-6" />
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  We're always looking for talented individuals to join our team. Check back soon for open positions or send your resume to get on our radar.
                </p>
                <a 
                  href="mailto:hr@essentia.dev" 
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                >
                  <Briefcase className="w-5 h-5" />
                  hr@essentia.dev
                </a>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
