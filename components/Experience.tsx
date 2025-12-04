import React from 'react';
import { EXPERIENCE } from '../constants';
import { ThemeConfig } from '../types';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceProps {
  themeConfig: ThemeConfig;
}

const Experience: React.FC<ExperienceProps> = ({ themeConfig }) => {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-slate-800/50 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <p className="text-gray-600 dark:text-gray-400">
            A timeline of my professional journey and key contributions.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-slate-700 transform md:-translate-x-1/2`}></div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={exp.id} className={`relative flex flex-col md:flex-row ${isLeft ? 'md:flex-row-reverse' : ''} items-center justify-between`}>
                  
                  {/* Spacer for desktop alignment */}
                  <div className="hidden md:block w-1/2" />

                  {/* Dot */}
                  <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 bg-${themeConfig.primaryColor}-500 transform -translate-x-1/2 z-10 shadow-sm`}></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 hover:shadow-md transition-shadow">
                      <div className={`flex items-center gap-2 mb-2 text-${themeConfig.primaryColor}-600 dark:text-${themeConfig.primaryColor}-400 font-semibold text-sm ${isLeft ? 'md:justify-end' : ''}`}>
                         <Briefcase size={16} />
                         <span>{exp.type}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                      <h4 className="text-lg text-gray-700 dark:text-gray-200 mb-4">{exp.company}</h4>
                      
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className={`flex items-center gap-2 text-xs text-gray-400 font-mono ${isLeft ? 'md:justify-end' : ''}`}>
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;