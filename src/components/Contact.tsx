
import React from 'react';
import { Button } from '@/components/ui/button';
import AnimatedElement from './AnimatedElement';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const { error } = await supabase
      .from('contact_messages')
      .insert([{
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string
      }]);

    if (error) {
      console.error('Error submitting contact form:', error);
      alert('Error sending message. Please try again.');
    } else {
      alert('Message sent successfully!');
      e.currentTarget.reset();
    }
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <AnimatedElement animation="slide-up" className="text-center mb-16">
          <span className="text-sm text-primary font-semibold uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="mt-2 text-4xl font-bold">Contact Us</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear about it. Let's work together to create something amazing.
          </p>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedElement animation="slide-right" className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Send Us A Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Tell us about your project"
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </AnimatedElement>

          <AnimatedElement animation="slide-left" className="flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <p className="text-gray-600 mb-8">
                  Ready to start your next project? Contact us today and let's build something great together.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5H21V19H3V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 5L12 14L21 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <a href="mailto:info@essentia.dev" className="text-primary hover:underline">info@essentia.dev</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Location</h4>
                  <p className="text-gray-600">New Delhi, India</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22 20.4704 21.7893 20.9983 21.4142 21.3734C21.0391 21.7485 20.5113 21.9592 19.96 21.96C16.4223 21.6323 13.0428 20.346 10.16 18.23C7.51172 16.3163 5.33257 13.9503 3.78 11.17C1.76 8.09296 0.520502 4.74412 0.24 1.00003C0.227568 0.451589 0.435866 0.920913 0.804898 0.545883C1.17393 0.170854 1.69872 -0.0414224 2.24 0.00603255H5.24C6.24479 -0.0344057 7.1056 0.731663 7.24 1.73003C7.38 3.16003 7.7 4.56003 8.2 5.90003C8.45181 6.57106 8.29499 7.31601 7.79 7.77003L6.24 9.32003C7.67336 12.0855 9.91446 14.3266 12.68 15.76L14.23 14.21C14.6823 13.7143 15.4197 13.5567 16.09 13.8C17.43 14.3 18.83 14.62 20.26 14.76C21.2756 14.895 22.0507 15.7575 22 16.77V16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Phone</h4>
                  <a href="tel:+91 XXXXXXXXXX" className="text-primary hover:underline">+91 XXXXXXXXXX</a>
                </div>
              </div>
              
              <div className="pt-6">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/company/essentia-dev/" className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://twitter.com/essentia_dev" className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="https://github.com/essentiasoftserv" className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Contact;
