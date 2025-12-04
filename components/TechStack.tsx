import React from 'react';
import { SKILLS } from '../constants';
import { ThemeConfig } from '../types';

interface TechStackProps {
  themeConfig: ThemeConfig;
}

const TechStack: React.FC<TechStackProps> = ({ themeConfig }) => {
  // Duplicate array to ensure smooth seamless loop
  const displaySkills = [...SKILLS, ...SKILLS, ...SKILLS];

  return (
    <div className="py-12 bg-white dark:bg-slate-900 border-y border-gray-100 dark:border-slate-800 overflow-hidden">
        <div className="text-center mb-8">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Technologies & Tools</span>
        </div>
        
        {/* Row 1 - Left */}
        <div className="relative flex overflow-hidden group">
            <div className="animate-scroll flex gap-8 whitespace-nowrap py-4">
                {displaySkills.map((skill, index) => (
                    <div 
                        key={`r1-${index}`}
                        className={`text-xl md:text-2xl font-display font-bold text-gray-300 dark:text-slate-700 hover:text-${themeConfig.primaryColor}-500 dark:hover:text-${themeConfig.primaryColor}-400 transition-colors cursor-default`}
                    >
                        {skill}
                    </div>
                ))}
            </div>
             <div className="absolute top-0 animate-scroll flex gap-8 whitespace-nowrap py-4" aria-hidden="true">
                {displaySkills.map((skill, index) => (
                    <div 
                        key={`r1-duplicate-${index}`}
                        className={`text-xl md:text-2xl font-display font-bold text-gray-300 dark:text-slate-700 hover:text-${themeConfig.primaryColor}-500 dark:hover:text-${themeConfig.primaryColor}-400 transition-colors cursor-default`}
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </div>

        {/* Row 2 - Right (Reverse) */}
        <div className="relative flex overflow-hidden group mt-2">
            <div className="animate-scroll-reverse flex gap-8 whitespace-nowrap py-4">
                {displaySkills.reverse().map((skill, index) => (
                     <div 
                        key={`r2-${index}`}
                        className={`text-xl md:text-2xl font-display font-bold text-gray-300 dark:text-slate-700 hover:text-${themeConfig.primaryColor}-500 dark:hover:text-${themeConfig.primaryColor}-400 transition-colors cursor-default`}
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default TechStack;