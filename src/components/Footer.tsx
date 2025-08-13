import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
            <p className="text-slate-300 max-w-md mx-auto">
              Crafting beautiful digital experiences with passion and precision.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-slate-700 mb-8"></div>

          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-400 mb-4 md:mb-0">
              © {currentYear} Alex Developer. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-2 text-slate-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>and lots of</span>
              <span className="text-sage-400">🍵</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
