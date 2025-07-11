
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedElement from '../components/AnimatedElement';
import { Shield, Lock, Eye, Database, Users, Settings, Cookie, Contact, Link } from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: (
        <>
          <ul className="list-disc pl-6 mt-2 text-base space-y-1">
            <li>Name and contact information, including email address</li>
            <li>Demographic information, such as postcode, preferences and interests</li>
            <li>Other information relevant to customer surveys and/or offers</li>
          </ul>
        </>
      ),
    },
    {
      icon: Settings,
      title: "What we do with the information we gather",
      content: (
        <ul className="list-disc pl-6 mt-2 text-base space-y-1">
          <li>Internal record keeping</li>
          <li>Improving our products and services</li>
          <li>Sending promotional emails about new products, special offers, or other information</li>
          <li>Contacting you for market research purposes</li>
          <li>We may contact you by email, phone, or mail</li>
        </ul>
      ),
    },
    {
      icon: Lock,
      title: "Security",
      content: (
        <p>
          We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.
        </p>
      ),
    },
    {
      icon: Cookie,
      title: "How we use cookies",
      content: (
        <div className="space-y-6">
          <p>
            A cookie is a small file which asks permission to be placed on your computer’s hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes, and dislikes by gathering and remembering information about your preferences.
          </p>
          <p>
            We use traffic log cookies to identify which pages are being used. This helps us analyze data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
          </p>
          <p>
            Overall, cookies help us provide you with a better website by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
          </p>
          <p>
            You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
          </p>
        </div>
      ),
    },
    {
      icon: Link,
      title: "Links to other websites",
      content: (
        <p>
          Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites, and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.
        </p>
      ),
    },
    {
      icon: Shield,
      title: "Controlling your personal information",
      content: (
        <div className="space-y-6">
          <p>
            You may choose to restrict the collection or use of your personal information in the following ways:
          </p>
          <ul className="list-disc pl-6 mt-2 text-base space-y-1">
            <li>Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes</li>
            <li>If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at <a href="mailto:info@essentia.dev" className="text-emerald-600 hover:underline font-medium">info@essentia.dev</a>.</li>
          </ul>
        <p>We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.</p>

          <p>If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible at the above address. We will promptly correct any information found to be incorrect.</p>
        </div>
      ),
    },
    {
      icon: Shield,
      title: "Changes to this privacy policy",
      content: (
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices or to comply with new laws or regulations. We will indicate at the top of this page when the Privacy Policy was last updated. Please check this page periodically to review any changes.
        </p>
      ),
    },
    {
      icon: Contact,
      title: "Contact Us",
      content: (
        <p>
          If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at :{" "}
          <a href="mailto:info@essentia.dev" className="text-emerald-600 hover:underline font-medium">info@essentia.dev</a>
        </p>
      ),
    },
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
              <p className="text-lg text-gray-600 mb-4">Last updated: June 30, 2025</p>
              <AnimatedElement animation="slide-up" delay={0.05} children={''}></AnimatedElement>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl p-8 mb-8 transition-all duration-300 hover:scale-[1.02] max-w-4xl mx-auto">
                  <p className="text-xl text-gray-600 leading-relaxed">
                    This privacy policy sets out how we, Essentia Softserv LLP, collect, use, and protect any personal information that you provide to us when you use our website{" "}
                    <a href="https://essentia.dev" className="text-emerald-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                      https://essentia.dev
                    </a>
                    . We are committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, you can be assured that it will only be used in accordance with this privacy statement.
                  </p>
                </div>
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
