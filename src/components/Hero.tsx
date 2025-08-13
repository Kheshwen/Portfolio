import React from 'react';
import FloatingParticles from './FloatingParticles';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-lavender-100 via-cream-50 to-sage-100"></div>
      
      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="inline-block mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-sage-200 to-lavender-200 rounded-full flex items-center justify-center shadow-soft">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <span className="text-3xl">🌸</span>
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-slate-700 mb-6 leading-tight">
          Hello, I'm <span className="text-sage-600">Alex</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-500 mb-8 max-w-2xl mx-auto leading-relaxed">
          Creative Developer & Designer crafting beautiful digital experiences with a touch of serenity
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-sage-500 hover:bg-sage-600 text-white rounded-full font-medium transition-all duration-300 shadow-soft hover:shadow-lg hover:scale-105"
          >
            View My Work
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-sage-300 text-sage-600 hover:bg-sage-50 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>
      
      {/* Decorative clouds */}
      <div className="absolute top-20 left-10 opacity-20">
        <div className="w-20 h-12 bg-white rounded-full blur-sm"></div>
      </div>
      <div className="absolute top-32 right-20 opacity-15">
        <div className="w-16 h-8 bg-lavender-200 rounded-full blur-sm"></div>
      </div>
      <div className="absolute bottom-32 left-1/4 opacity-10">
        <div className="w-24 h-14 bg-sage-200 rounded-full blur-sm"></div>
      </div>
    </section>
  );
};

export default Hero;
