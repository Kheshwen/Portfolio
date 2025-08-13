import React from 'react';
import { Heart, Coffee, Palette } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-cream-50 to-lavender-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-sage-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="aspect-square bg-gradient-to-br from-sage-200 to-lavender-200 rounded-3xl shadow-soft flex items-center justify-center">
                  <div className="w-4/5 h-4/5 bg-white rounded-2xl flex items-center justify-center">
                    <span className="text-8xl">👨‍💻</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-lavender-300 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-sage-300 rounded-full opacity-40"></div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-700">
                Passionate about creating beautiful, functional experiences
              </h3>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                I'm a creative developer with over 5 years of experience in crafting digital experiences 
                that blend aesthetics with functionality. My work is inspired by the tranquil beauty of 
                Japanese design principles and modern web technologies.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new design trends, practicing digital 
                illustration, or enjoying a peaceful cup of tea while sketching ideas for my next project.
              </p>

              {/* Interest cards */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-white/50 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <Heart className="w-8 h-8 text-lavender-500 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-600">Design</p>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <Coffee className="w-8 h-8 text-sage-500 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-600">Coffee</p>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <Palette className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-600">Art</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
