import React, { useState } from 'react';
import { Project, LayoutMode, ThemeConfig } from '../types';
import { PROJECTS } from '../constants';
import { LayoutGrid, List, MonitorPlay, ExternalLink, Github, Maximize2 } from 'lucide-react';

interface PortfolioProps {
  themeConfig: ThemeConfig;
}

const Portfolio: React.FC<PortfolioProps> = ({ themeConfig }) => {
  const [layout, setLayout] = useState<LayoutMode>(LayoutMode.GRID);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];
  const filteredProjects = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">Selected Work</h2>
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap
                    ${filter === cat 
                      ? `bg-${themeConfig.primaryColor}-100 text-${themeConfig.primaryColor}-800 dark:bg-${themeConfig.primaryColor}-900/30 dark:text-${themeConfig.primaryColor}-300`
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-slate-800 dark:text-gray-400 dark:hover:bg-slate-700'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex bg-gray-100 dark:bg-slate-800 p-1 rounded-lg">
            <button
              onClick={() => setLayout(LayoutMode.GRID)}
              className={`p-2 rounded-md transition-all ${layout === LayoutMode.GRID ? 'bg-white dark:bg-slate-700 shadow-sm text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}
              title="Grid View"
            >
              <LayoutGrid size={18} />
            </button>
            <button
              onClick={() => setLayout(LayoutMode.LIST)}
              className={`p-2 rounded-md transition-all ${layout === LayoutMode.LIST ? 'bg-white dark:bg-slate-700 shadow-sm text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}
              title="List View"
            >
              <List size={18} />
            </button>
            <button
              onClick={() => setLayout(LayoutMode.SHOWCASE)}
              className={`p-2 rounded-md transition-all ${layout === LayoutMode.SHOWCASE ? 'bg-white dark:bg-slate-700 shadow-sm text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}
              title="Showcase View"
            >
              <MonitorPlay size={18} />
            </button>
          </div>
        </div>

        {/* Content Renderers */}
        
        {/* GRID VIEW */}
        {layout === LayoutMode.GRID && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map(project => (
              <div 
                key={project.id} 
                className={`group relative rounded-2xl bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:-translate-y-2 hover:border-${themeConfig.primaryColor}-200 dark:hover:border-${themeConfig.primaryColor}-800 transition-all duration-300 ease-out`}
              >
                {/* Browser Frame */}
                <div className="border-b border-gray-200 dark:border-slate-700 bg-gray-100 dark:bg-slate-800 px-4 py-2 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  <div className="ml-2 text-xs text-gray-400 font-mono truncate opacity-60">localhost:3000/{project.title.toLowerCase().replace(/\s/g, '-')}</div>
                </div>
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                    <a href={project.demoUrl} className="p-3 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform shadow-lg"><ExternalLink size={20} /></a>
                    <a href={project.repoUrl} className="p-3 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform shadow-lg"><Github size={20} /></a>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-xs font-semibold px-2 py-1 rounded bg-${themeConfig.primaryColor}-100 text-${themeConfig.primaryColor}-700 dark:bg-${themeConfig.primaryColor}-900/30 dark:text-${themeConfig.primaryColor}-300`}>{project.category}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-${themeConfig.primaryColor}-600 dark:group-hover:text-${themeConfig.primaryColor}-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-slate-700 px-2 py-1 rounded border border-gray-200 dark:border-slate-600">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* LIST VIEW */}
        {layout === LayoutMode.LIST && (
          <div className="space-y-4">
            {filteredProjects.map(project => (
              <div 
                key={project.id} 
                className={`group flex flex-col md:flex-row items-center gap-6 p-4 rounded-xl bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1 hover:border-${themeConfig.primaryColor}-200 dark:hover:border-${themeConfig.primaryColor}-800 transition-all duration-300 ease-out`}
              >
                <div className="w-full md:w-48 aspect-video rounded-lg overflow-hidden flex-shrink-0 relative">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <a href={project.demoUrl} className="text-white hover:scale-110 transition-transform"><ExternalLink size={20} /></a>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className={`text-lg font-bold text-gray-900 dark:text-white group-hover:text-${themeConfig.primaryColor}-600 dark:group-hover:text-${themeConfig.primaryColor}-400 transition-colors`}>{project.title}</h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded bg-${themeConfig.primaryColor}-100 text-${themeConfig.primaryColor}-700 dark:bg-${themeConfig.primaryColor}-900/30 dark:text-${themeConfig.primaryColor}-300`}>{project.category}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded bg-gray-200 dark:bg-slate-700">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 self-start md:self-center">
                  <a href={project.demoUrl} className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full"><ExternalLink size={18} /></a>
                  <a href={project.repoUrl} className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full"><Github size={18} /></a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SHOWCASE VIEW */}
        {layout === LayoutMode.SHOWCASE && (
          <div className="space-y-24">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1 w-full group">
                  {/* High fidelity browser mockup */}
                  <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                    <div className="h-8 bg-gray-100 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 flex items-center px-4 space-x-2">
                       <div className="flex space-x-1.5">
                         <div className="w-3 h-3 rounded-full bg-red-400"></div>
                         <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                         <div className="w-3 h-3 rounded-full bg-green-400"></div>
                       </div>
                       <div className="flex-1 flex justify-center">
                         <div className="w-1/2 h-5 bg-gray-200 dark:bg-slate-700 rounded text-[10px] flex items-center justify-center text-gray-500 dark:text-gray-400 font-mono">
                           {project.title.toLowerCase()}.com
                         </div>
                       </div>
                    </div>
                    <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button className="px-6 py-2 bg-white text-black rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-105">
                           <Maximize2 size={16} /> Live Preview
                        </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-${themeConfig.primaryColor}-100 text-${themeConfig.primaryColor}-700 dark:bg-${themeConfig.primaryColor}-900/30 dark:text-${themeConfig.primaryColor}-300`}>
                    Featured Project
                  </div>
                  <h3 className="text-4xl font-display font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map(tag => (
                       <span key={tag} className="px-3 py-1 text-sm font-medium border border-gray-200 dark:border-slate-700 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                         {tag}
                       </span>
                    ))}
                  </div>

                  <div className="pt-4 flex gap-6">
                    <a href={project.demoUrl} className={`text-${themeConfig.primaryColor}-600 dark:text-${themeConfig.primaryColor}-400 font-semibold hover:underline flex items-center gap-2`}>
                      Visit Website <ExternalLink size={16} />
                    </a>
                    <a href={project.repoUrl} className="text-gray-500 dark:text-gray-400 font-semibold hover:text-gray-900 dark:hover:text-white flex items-center gap-2 transition-colors">
                      View Code <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;