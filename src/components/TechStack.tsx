
import React from 'react';
import AnimatedElement from './AnimatedElement';
import { Sparkles, Star } from 'lucide-react';

const techStacks = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", color: "from-blue-400 to-blue-600", popularity: 95 },
      { name: "Next.js", color: "from-gray-700 to-black", popularity: 90 },
      { name: "Vue.js", color: "from-green-400 to-green-600", popularity: 85 },
      { name: "TypeScript", color: "from-blue-500 to-blue-700", popularity: 92 }
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", color: "from-green-500 to-green-700", popularity: 94 },
      { name: "Python", color: "from-yellow-400 to-blue-500", popularity: 88 },
      { name: "Elixir", color: "from-purple-500 to-purple-700", popularity: 85 },
      { name: "Go", color: "from-cyan-400 to-blue-500", popularity: 82 }
    ]
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      { name: "AWS", color: "from-orange-400 to-orange-600", popularity: 96 },
      { name: "Docker", color: "from-blue-400 to-blue-600", popularity: 93 },
      { name: "Kubernetes", color: "from-blue-500 to-purple-600", popularity: 89 },
      { name: "Terraform", color: "from-purple-500 to-purple-700", popularity: 87 }
    ]
  },
  {
    category: "AI & ML",
    technologies: [
      { name: "TensorFlow", color: "from-orange-400 to-orange-600", popularity: 91 },
      { name: "PyTorch", color: "from-red-500 to-orange-500", popularity: 89 },
      { name: "OpenAI", color: "from-green-400 to-green-600", popularity: 95 },
      { name: "Hugging Face", color: "from-yellow-400 to-orange-500", popularity: 86 }
    ]
  }
];

const TechStack = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container relative z-10">
        {/* Header */}
        <AnimatedElement animation="slide-up" className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-primary font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Technology Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Cutting-Edge
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We leverage the latest technologies and frameworks to build robust, scalable, and future-proof solutions.
          </p>
        </AnimatedElement>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStacks.map((stack, stackIndex) => (
            <AnimatedElement
              key={stackIndex}
              animation="slide-up"
              delay={0.1 * stackIndex}
              className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{stack.category}</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>
              
              {/* Technologies */}
              <div className="space-y-4">
                {stack.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-700 group-hover:text-primary transition-colors">
                        {tech.name}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-500">{tech.popularity}%</span>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-2 bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${tech.popularity}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Bottom Stats */}
        <AnimatedElement animation="fade-in" delay={0.5} className="mt-20">
          <div className="bg-gradient-to-r from-primary via-secondary to-purple-600 rounded-3xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-sm opacity-90">Technologies Mastered</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">99%</div>
                <div className="text-sm opacity-90">Uptime Guaranteed</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">Technical Support</div>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default TechStack;
