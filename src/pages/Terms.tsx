
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedElement from '../components/AnimatedElement';
import { FileText, Shield, Info } from 'lucide-react';

const Terms = () => {
  const sections = [
    {
      title: "1. Introduction",
      content: "Welcome to Essentia Softserv LLP. These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms."
    },
    {
      title: "2. Use of Services", 
      content: "You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website."
    },
    {
      title: "3. Intellectual Property",
      content: "All content included on this website, such as text, graphics, logos, images, and software, is the property of Essentia Softserv LLP or its content suppliers and is protected by international copyright laws."
    },
    {
      title: "4. Privacy Policy",
      content: "Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices."
    },
    {
      title: "5. Limitation of Liability", 
      content: "Essentia Softserv LLP shall not be liable for any direct, indirect, incidental, special, consequential or punitive damages resulting from your use or inability to use the service."
    },
    {
      title: "6. Changes to Terms",
      content: "We reserve the right to modify these terms at any time. We will provide notice of any material changes by posting the new Terms on the website."
    },
    {
title: "7. Contact Us",
content: (
  <>
    If you have any questions about these Terms, please contact us at{" "}
    <a href="mailto:info@essentia.dev" className="text-blue-600 underline hover:text-blue-800">
      info@essentia.dev
    </a>
    .
  </>
)
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-32 h-32 bg-slate-200/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/5 w-40 h-40 bg-blue-300/20 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
      </div>

      <div className="pt-32 pb-16 relative">
        <div className="container mx-auto px-4">
          <AnimatedElement animation="slide-up">
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-lg text-gray-600 mb-4">Last updated: June 2, 2025</p>
            </div>
          </AnimatedElement>
          
          <div className="max-w-4xl mx-auto">
            {sections.map((section, index) => (
              <AnimatedElement key={index} animation="slide-up" delay={index * 0.1}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl p-8 mb-8 transition-all duration-300 hover:scale-[1.02]">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      {index < 3 ? <Info className="w-4 h-4 text-primary" /> : <Shield className="w-4 h-4 text-primary" />}
                    </div>
                    {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {section.content}
                  </p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
