import React from 'react';
import { ThemeConfig } from '../types';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  themeConfig: ThemeConfig;
}

const Hero: React.FC<HeroProps> = ({ themeConfig }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Blobs */}
      <div className={`absolute top-20 left-10 w-72 h-72 bg-${themeConfig.primaryColor}-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:mix-blend-screen dark:opacity-20`}></div>
      <div className={`absolute top-20 right-10 w-72 h-72 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 dark:mix-blend-screen dark:opacity-20`}></div>
      <div className={`absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 dark:mix-blend-screen dark:opacity-20`}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm mb-8 animate-fade-in">
          <span className={`flex h-2 w-2 rounded-full bg-${themeConfig.primaryColor}-500 mr-2`}></span>
          <span className="text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wide">Available for Hire</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 dark:text-white mb-6 leading-tight animate-fade-in">
          Building Digital <br />
          <span className={`text-transparent bg-clip-text bg-gradient-to-r from-${themeConfig.primaryColor}-600 to-purple-600 dark:from-${themeConfig.primaryColor}-400 dark:to-purple-400`}>
            Experiences
          </span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed animate-fade-in">
          Senior Frontend Engineer specializing in high-performance React applications, 
          immersive UI/UX, and generative AI integration.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <a href="#projects" className={`px-8 py-3.5 rounded-full bg-${themeConfig.primaryColor}-600 hover:bg-${themeConfig.primaryColor}-700 text-white font-medium transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2`}>
            View Projects <ArrowRight size={18} />
          </a>
          <div className="flex gap-4 items-center justify-center">
             <button className="p-3.5 rounded-full border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors text-gray-600 dark:text-gray-300">
                <Github size={20} />
             </button>
             <button className="p-3.5 rounded-full border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors text-gray-600 dark:text-gray-300">
                <Linkedin size={20} />
             </button>
             <button className="p-3.5 rounded-full border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors text-gray-600 dark:text-gray-300">
                <Mail size={20} />
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;