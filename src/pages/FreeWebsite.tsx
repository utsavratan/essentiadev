
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import AnimatedElement from '../components/AnimatedElement';
import { CheckCircle, Gift, DollarSign, Heart, Star } from 'lucide-react';

const FreeWebsite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-secondary/5 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-purple-300/10 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto pt-32 px-4 pb-16 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedElement animation="slide-right">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                The Free Website Development Program
              </h1>
              <div>
                <a href="https://cal.com/essentia-sales" target="_blank" rel="noopener noreferrer">
                  <Button className="text-white bg-primary hover:bg-primary/90 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                    Get in touch
                  </Button>
                </a>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-left">
            <div className="space-y-8">
              {[
                "Websites usually take anywhere between INR 1 Lakh to over 10 lakhs to develop depending upon how much thought, effort, time, energy is required to bring ideas to life.",
                "More often than not, organizations starting up need to be frugal and want a decently good looking website that just works.",
                "After some time when the org has more financial freedom to dream big and invest in more features and custom tailored design."
              ].map((text, index) => (
                <AnimatedElement key={index} animation="slide-up" delay={index * 0.2}>
                  <div className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="bg-green-500 rounded-full p-2 mt-1 flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">{text}</p>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </AnimatedElement>
        </div>

        {/* What is Free Section */}
        <AnimatedElement animation="slide-up" className="mt-20">
          <div className="bg-white/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Gift className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-4xl font-bold mb-4 text-gray-800">What is Free</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Complete website development",
                "Responsive design for all devices",
                "Basic SEO optimization",
                "Content management system",
                "Domain setup assistance",
                "Initial hosting on our servers"
              ].map((item, index) => (
                <AnimatedElement key={index} animation="scale-in" delay={index * 0.1}>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* What You Will Have to Pay For Section */}
        <AnimatedElement animation="slide-up" className="mt-16">
          <div className="bg-white/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-orange-600" />
              </div>
              <h2 className="text-4xl font-bold mb-4 text-gray-800">What You Will Have to Pay For</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Custom advanced features beyond basic functionality",
                "Premium third-party integrations",
                "Advanced e-commerce capabilities",
                "Custom design modifications after delivery",
                "Premium hosting and performance optimization",
                "Ongoing maintenance and updates (optional)"
              ].map((item, index) => (
                <AnimatedElement key={index} animation="slide-right" delay={index * 0.1}>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors">
                    <DollarSign className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Our Promise Section */}
        <AnimatedElement animation="slide-up" className="mt-16">
          <div className="bg-white/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Promise</h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                "We deliver fully functional, professional websites that meet industry standards",
                "No hidden costs or surprise charges - what's free stays free",
                "Complete ownership of your website and all its components",
                "Professional support during the development process",
                "Transparent communication throughout the project timeline",
                "Quality assurance and testing before delivery"
              ].map((promise, index) => (
                <AnimatedElement key={index} animation="slide-left" delay={index * 0.1}>
                  <div className="flex items-start gap-4 p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700 text-lg">{promise}</p>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Why We Do It For Free Section */}
        <AnimatedElement animation="slide-up" className="mt-16">
          <div className="bg-white/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Why We Do It For Free</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Building Relationships",
                    description: "We believe in fostering long-term partnerships. Today's startup could be tomorrow's enterprise client."
                  },
                  {
                    title: "Community Impact",
                    description: "Supporting emerging businesses and entrepreneurs helps build a stronger tech ecosystem."
                  },
                  {
                    title: "Showcase Our Expertise",
                    description: "Free projects allow us to demonstrate our capabilities and attract potential clients."
                  },
                  {
                    title: "Giving Back",
                    description: "We understand the challenges of starting a business and want to remove barriers to digital presence."
                  }
                ].map((reason, index) => (
                  <AnimatedElement key={index} animation="scale-in" delay={index * 0.2}>
                    <div className="p-6 rounded-xl bg-red-50 hover:bg-red-100 transition-colors">
                      <h3 className="text-xl font-bold mb-3 text-gray-800">{reason.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{reason.description}</p>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Support Plan Section */}
        <AnimatedElement animation="slide-up" className="mt-20">
          <div className="bg-white/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Support Plan</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  "You are under no obligation to hire us for maintenance.",
                  "Normally the site will just function without needing any intervention.",
                  "We will host it freely on our servers."
                ].map((item, index) => (
                  <AnimatedElement key={index} animation="slide-right" delay={index * 0.1}>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700 text-lg">{item}</p>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
              <div className="space-y-6">
                {[
                  "However, starting at an affordable monthly retainer of INR 15,000 we can be available 24x7 we can take complete ownership of the websites maintenance and uptime.",
                  "PS: This plan does not cover any modification to existing features or new development."
                ].map((item, index) => (
                  <AnimatedElement key={index} animation="slide-left" delay={index * 0.1}>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700 text-lg">{item}</p>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
      <Footer />
    </div>
  );
};

export default FreeWebsite;
