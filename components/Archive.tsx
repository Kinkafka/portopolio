import React from 'react';
import { PROJECTS } from '../constants';
import { ThemeConfig } from '../types';
import { ArrowUpRight, Github } from 'lucide-react';

interface ArchiveProps {
  themeConfig: ThemeConfig;
}

const Archive: React.FC<ArchiveProps> = ({ themeConfig }) => {
  return (
    <section id="archive" className="py-24 bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">Project Archive</h2>
          <p className="text-gray-600 dark:text-gray-400">
            A comprehensive list of all things I’ve built, deployed, or experimented with.
          </p>
        </div>

        <div className="relative overflow-x-auto rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 dark:bg-slate-800/50 text-gray-500 dark:text-gray-400 font-medium">
              <tr>
                <th className="px-6 py-4 w-24">Year</th>
                <th className="px-6 py-4">Project</th>
                <th className="px-6 py-4 hidden md:table-cell">Category</th>
                <th className="px-6 py-4 hidden lg:table-cell">Built with</th>
                <th className="px-6 py-4 w-32">Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
              {PROJECTS.map((project) => (
                <tr 
                  key={project.id} 
                  className="group hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400 font-mono">
                    {project.year}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300 hidden md:table-cell">
                    {project.category}
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className={`px-2 py-0.5 rounded-full text-xs font-medium bg-${themeConfig.primaryColor}-50 text-${themeConfig.primaryColor}-700 dark:bg-${themeConfig.primaryColor}-900/20 dark:text-${themeConfig.primaryColor}-300`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                          aria-label="External Link"
                        >
                          <ArrowUpRight size={18} />
                        </a>
                      )}
                      {project.repoUrl && (
                         <a 
                          href={project.repoUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                          aria-label="GitHub Link"
                        >
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Archive;