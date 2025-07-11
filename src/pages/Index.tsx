
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CallToAction from '../components/CallToAction';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import ClientCarousel from '../components/ClientCarousel';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackgroundAnimation from '../components/BackgroundAnimation';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white relative">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Header />
        <Hero />
        <CallToAction />
        <Services />
        <ClientCarousel />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
