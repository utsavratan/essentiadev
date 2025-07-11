
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedElement from '../components/AnimatedElement';
import { Shield, Lock, Eye, Database, Users, Settings } from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      icon: Eye,
      title: "1. Introduction",
      content: "At Essentia Softserv LLP, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights."
    },
    {
      icon: Database,
      title: "2. Information We Collect", 
      content: "We may collect, use, store and transfer different kinds of personal data about you including: Identity Data (first name, last name, username), Contact Data (email address, phone number), Technical Data (IP address, browser type and version, time zone setting), and Usage Data (information about how you use our website and services)."
    },
    {
      icon: Settings,
      title: "3. How We Use Your Information",
      content: "We use your personal data only for legitimate business purposes, including: To provide and maintain our services, To notify you about changes to our services, To respond to your inquiries and provide customer support, and To improve our website and services."
    },
    {
      icon: Lock,
      title: "4. Data Security",
      content: "We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way."
    },
    {
      icon: Users,
      title: "5. Your Rights", 
      content: "Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to access, correct, erase, restrict, or object to processing of your personal data."
    },
    {
      icon: Shield,
      title: "6. Changes to Privacy Policy",
      content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <Header />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/5 w-36 h-36 bg-emerald-200/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/6 w-32 h-32 bg-teal-300/20 rounded-full animate-bounce" style={{ animationDuration: '3.5s' }}></div>
      </div>

      <div className="pt-32 pb-16 relative">
        <div className="container mx-auto px-4">
          <AnimatedElement animation="slide-up">
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-lg text-gray-600 mb-4">Last updated: June 2, 2025</p>
            </div>
          </AnimatedElement>
          
          <div className="max-w-4xl mx-auto">
            {sections.map((section, index) => (
              <AnimatedElement key={index} animation="slide-up" delay={index * 0.1}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl p-8 mb-8 transition-all duration-300 hover:scale-[1.02]">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                      <section.icon className="w-4 h-4 text-emerald-600" />
                    </div>
                    {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {section.content}
                  </p>
                </div>
              </AnimatedElement>
            ))}
            
            <AnimatedElement animation="slide-up" delay={0.7}>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl p-8 transition-all duration-300 hover:scale-[1.02]">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-emerald-600" />
                  </div>
                  7. Contact Us
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:privacy@essentia.dev" className="text-emerald-600 hover:underline font-medium">
                    privacy@essentia.dev
                  </a>
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
