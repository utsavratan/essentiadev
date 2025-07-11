
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Send, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface NavigationItem {
  path: string;
  keywords: string[];
  external?: boolean;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage("Hello! I'm Essentia Bot, I can help you navigate our website...");
    }
  }, [isOpen]);

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: true,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const navigationKeywords: Record<string, NavigationItem> = {
    // Services related
    services: { path: '/#services', keywords: ['service', 'services', 'what you do', 'offerings', 'solutions', 'development', 'web dev', 'app development', 'software', 'what do you offer', 'your services', 'what we offer'] },
    
    // Contact related
    contact: { path: '/#contact', keywords: ['contact', 'reach', 'email', 'phone', 'get in touch', 'talk', 'discuss', 'connect', 'location', 'address', 'where are you', 'office'] },
    
    // About related
    about: { path: '/about', keywords: ['about', 'who are you', 'company', 'team', 'story', 'mission', 'vision', 'founders'] },
    
    // Career related
    careers: { path: '/careers', keywords: ['career', 'careers', 'job', 'jobs', 'hiring', 'work', 'employment', 'opportunities', 'join'] },
    
    // Blog related
    blog: { path: '/blog', keywords: ['blog', 'articles', 'posts', 'news', 'updates', 'insights', 'content'] },
    
    // Free website related
    freeWebsite: { path: '/free-website', keywords: ['free', 'free website', 'no cost', 'complimentary', 'gratis', 'trial', 'website'] },
    
    // Home related
    home: { path: '/', keywords: ['home', 'main', 'start', 'beginning', 'homepage'] },
    
    // Clientele related - scroll to client carousel
    clientele: { path: '/#ClientCarousel', keywords: ['clientele', 'clients', 'client', 'companies', 'organizations', 'partners','clientcarousel','carousel'] },
    
    // Testimonials/Feedback related - scroll to testimonials
    testimonials: { path: '/#testimonials', keywords: ['testimonial', 'testimonials', 'review', 'reviews', 'feedback', 'feedbacks', 'customers', 'what clients say'] },
    
    // Privacy/Terms
    privacy: { path: '/privacy', keywords: ['privacy', 'privacy policy', 'data protection'] },
    terms: { path: '/terms', keywords: ['terms', 'terms of service', 'conditions', 'agreement', 'legal'] },
    
    // External links
    vaaak: { path: 'https://vaaak.com', keywords: ['vaaak', 'vaaak.com'], external: true },
    bharatocr: { path: 'https://bharatocr.org', keywords: ['bharat ocr', 'bharatocr', 'ocr'], external: true },
    getInTouch: { path: 'https://cal.com/essentia-sales', keywords: ['get in touch', 'schedule', 'book', 'appointment', 'call', 'meeting'], external: true },
  };

  const findBestMatch = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    for (const [key, data] of Object.entries(navigationKeywords)) {
      if (data.keywords.some(keyword => input.includes(keyword))) {
        return { key, ...data };
      }
    }
    
    return null;
  };

  const generateResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    // Handle greetings
    if (input.includes('hi') || input.includes('hello') || input.includes('hey') || input.includes('good morning') || input.includes('good afternoon') || input.includes('good evening')) {
      return "Hello there! 👋 Welcome to Essentia! I'm here to help you navigate our website. You can ask me about our services, contact info, careers, and more!";
    }

    // Handle how are you
    if (input.includes('how are you') || input.includes('how do you do')) {
      return "I'm doing great, thank you for asking! 😊 I'm ready to help you explore Essentia's website. What would you like to know about?";
    }

    // Handle thank you
    if (input.includes('thank') || input.includes('thanks')) {
      return "You're very welcome! 😊 Is there anything else I can help you with today?";
    }

    // Handle goodbye
    if (input.includes('bye') || input.includes('goodbye') || input.includes('see you')) {
      return "Goodbye! 👋 Feel free to reach out anytime you need help navigating our website. Have a great day!";
    }

    // Handle location specifically
    if (input.includes('location') || input.includes('address') || input.includes('where are you') || input.includes('office')) {
      setTimeout(() => {
        const element = document.querySelector('#contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1000);
      return "Our office is located in New Delhi, India! 📍 Let me take you to our contact section where you can find our other contact details.";
    }

    const match = findBestMatch(userInput);
    
    if (match) {
      setTimeout(() => {
        if (match.external) {
          window.open(match.path, '_blank');
        } else if (match.path.includes('#')) {
          const sectionId = match.path.split('#')[1];
          if (sectionId === 'ClientCarousel') {
            // Navigate to home first, then scroll to client carousel
            if (window.location.pathname !== '/') {
              navigate('/');
              setTimeout(() => {
                const sections = document.querySelectorAll('section');
                const clientSection = Array.from(sections).find(section => 
                  section.textContent?.includes('Clientele') || section.textContent?.includes('You\'ll be in good company')
                );
                if (clientSection) {
                  clientSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 500);
            } else {
              const sections = document.querySelectorAll('section');
              const clientSection = Array.from(sections).find(section => 
                section.textContent?.includes('Clientele') || section.textContent?.includes('You\'ll be in good company')
              );
              if (clientSection) {
                clientSection.scrollIntoView({ behavior: 'smooth' });
              }
            }
          } else {
            // For other sections, navigate to home first if needed
            if (window.location.pathname !== '/') {
              navigate('/');
              setTimeout(() => {
                const element = document.querySelector(`#${sectionId}`);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }, 500);
            } else {
              const element = document.querySelector(`#${sectionId}`);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }
        } else {
          navigate(match.path);
        }
      }, 1000);
      
      switch (match.key) {
        case 'services':
          return "Great! Let me show you our services. We offer web development, mobile app development, AI solutions, and more. Navigating there now! 🚀";
        case 'contact':
          return "I'll take you to our contact section where you can find our email, phone, and location details.";
        case 'about':
          return "Let me show you more about Essentia and our amazing team. You'll learn about our mission and story! 👥";
        case 'careers':
          return "Exciting! Let me take you to our careers page where you can see open positions and join our team! 💼";
        case 'blog':
          return "Taking you to our blog where you can read our latest insights and articles! 📝";
        case 'freeWebsite':
          return "Perfect! Let me show you our free website offering. See what's included and how to get started! 🎁";
        case 'clientele':
          return "Let me show you our amazing clientele! You'll see all the great companies we've worked with. Scrolling to our client showcase now! 🏢";
        case 'testimonials':
          return "Let me show you what our clients say about us! Here are their testimonials and feedback. Scrolling to reviews now! ⭐";
        case 'privacy':
          return "Taking you to our privacy policy page! 🔒";
        case 'terms':
          return "Navigating to our terms of service page! 📋";
        case 'vaaak':
          return "Opening Vaaak website in a new tab! This is one of our featured projects. 🚀";
        case 'bharatocr':
          return "Opening Bharat OCR website in a new tab! Check out our OCR solution. 📄";
        case 'getInTouch':
          return "Opening our scheduling page in a new tab! You can book a meeting with our sales team. 📅";
        default:
          return "Taking you to the homepage! 🏠";
      }
    }
    
    // Default responses for common queries
    if (input.includes('help')) {
      return "I'm here to help! You can ask me about:\n• Our services and solutions\n• Contact information (we're in New Delhi!)\n• Career opportunities\n• About our company\n• Free website offering\n• Blog and articles\n• Our clientele and partners\n• Client testimonials and feedback\n• External projects (Vaaak, Bharat OCR)\n• Schedule a meeting\n\nJust tell me what you're looking for! 😊";
    }
    
    if (input.includes('price') || input.includes('cost')) {
      return "For pricing information, I recommend contacting our team directly. Let me take you to the contact section where you can discuss your specific needs! 💰";
    }

    // Handle technology questions
    if (input.includes('technology') || input.includes('tech') || input.includes('stack')) {
      return "We work with cutting-edge technologies including React, Node.js, Python, AI/ML, mobile development, and more! Check out our services section to learn about our technical expertise. 💻";
    }

    // Handle company size questions
    if (input.includes('team size') || input.includes('how many') || input.includes('employees')) {
      return "We're a growing team of passionate developers and designers! Visit our About page to learn more about our team and company culture. 👥";
    }
    
    return "I'm not sure about that specific request, but I can help you navigate to different sections of our website.";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    addUserMessage(inputValue);
    setIsTyping(true);
    
    setTimeout(() => {
      const response = generateResponse(inputValue);
      addBotMessage(response);
      setIsTyping(false);
    }, 1000);
    
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 ${
            isOpen ? 'scale-90' : 'scale-100 animate-bounce'
          }`}
          style={{ animationDuration: '2s' }}
        >
          {!isOpen ? (
            <img 
              src="/lovable-uploads/26b05377-1cda-40bf-9c86-3c77bbffd2d0.png" 
              alt="Essentia Bot" 
              className="w-10 h-10 object-contain"
            />
          ) : (
            <X className="w-6 h-6" />
          )}
          
          {/* Notification pulse */}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200/50 z-40 overflow-hidden animate-scale-in h-[500px] flex flex-col">
          {/* Fixed Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white relative overflow-hidden flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80"></div>
            <div className="absolute inset-0 chatbot-pattern opacity-30"></div>
            <div className="relative z-10 flex items-center gap-3">
              <img 
                src="/lovable-uploads/26b05377-1cda-40bf-9c86-3c77bbffd2d0.png" 
                alt="Essentia Bot" 
                className="w-8 h-8 object-contain"
              />
              <div>
                <h3 className="font-semibold">Essentia Bot</h3>
                <p className="text-xs opacity-90">Website Navigation Assistant</p>
              </div>
            </div>
          </div>

          {/* Scrollable Messages Container with Fixed Logo */}
          <div className="flex-1 relative overflow-hidden">
            {/* Fixed Logo watermark - increased opacity to 40% */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <img 
                src="/lovable-uploads/672f3eb2-28f8-4226-b22d-8babdd079bd9.png" 
                alt="Essentia Logo" 
                className="w-72 h-72 object-contain opacity-40 fixed"
              />
            </div>
            
            {/* Scrollable messages area */}
            <div className="h-full overflow-y-auto bg-gradient-to-br from-gray-50/90 to-blue-50/50 backdrop-blur-sm relative z-10">
              {/* Background pattern */}
              <div className="absolute inset-0 chatbot-dots opacity-50"></div>
              
              <div className="relative z-10 p-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`mb-3 ${message.isBot ? 'text-left' : 'text-right'}`}
                  >
                    <div
                      className={`inline-block max-w-[80%] p-3 rounded-2xl backdrop-blur-sm ${
                        message.isBot
                          ? 'bg-white/90 text-gray-800 shadow-sm border border-gray-200/50'
                          : 'bg-gradient-to-r from-primary/90 to-secondary/90 text-white shadow-sm'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="text-left mb-3">
                    <div className="inline-block bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-sm border border-gray-200/50">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </div>
          </div>

          {/* Fixed Input */}
          <div className="p-4 border-t border-gray-200/50 bg-white/95 backdrop-blur-sm relative overflow-hidden flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
            <div className="relative z-10 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 border border-gray-300/50 rounded-full focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-white/90 backdrop-blur-sm placeholder:text-gray-500"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 p-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Background overlay when chat is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/10 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default ChatBot;
