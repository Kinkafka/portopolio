import React, { useState } from 'react';
import { ThemeConfig } from '../types';
import { Moon, Sun, Monitor, Palette, Menu, X } from 'lucide-react';

interface NavBarProps {
  themeConfig: ThemeConfig;
  setThemeConfig: React.Dispatch<React.SetStateAction<ThemeConfig>>;
}

const COLORS = ['blue', 'emerald', 'violet', 'rose', 'amber'];

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => (
  <a 
      href={href} 
      onClick={onClick}
      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
      {children}
  </a>
);

const NavBar: React.FC<NavBarProps> = ({ themeConfig, setThemeConfig }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const toggleDark = () => {
    setThemeConfig(prev => {
      const isDark = !prev.isDark;
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return { ...prev, isDark };
    });
  };

  const setColor = (color: string) => {
    setThemeConfig(prev => ({ ...prev, primaryColor: color }));
  };

  const handleNavClick = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 dark:bg-slate-900/80 border-b border-gray-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-display font-bold text-2xl tracking-tight">
            <span className={`text-${themeConfig.primaryColor}-600 dark:text-${themeConfig.primaryColor}-400`}>Dev</span>
            <span className="text-gray-900 dark:text-white">Portfolio</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#home" onClick={handleNavClick}>Home</NavLink>
              <NavLink href="#experience" onClick={handleNavClick}>Experience</NavLink>
              <NavLink href="#projects" onClick={handleNavClick}>Projects</NavLink>
              <NavLink href="#certificates" onClick={handleNavClick}>Certificates</NavLink>
              <NavLink href="#archive" onClick={handleNavClick}>Archive</NavLink>
              <NavLink href="#contact" onClick={handleNavClick}>Contact</NavLink>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button 
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Theme Settings"
              >
                <Palette size={20} className="text-gray-600 dark:text-gray-300" />
              </button>
              
              {showSettings && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-gray-100 dark:border-slate-700 py-2 animate-fade-in">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase">Accent Color</div>
                  <div className="flex px-4 py-2 gap-2 flex-wrap">
                    {COLORS.map(c => (
                      <button
                        key={c}
                        onClick={() => setColor(c)}
                        className={`w-6 h-6 rounded-full bg-${c}-500 hover:ring-2 ring-offset-2 dark:ring-offset-slate-800 ring-${c}-400 transition-all ${themeConfig.primaryColor === c ? 'ring-2' : ''}`}
                      />
                    ))}
                  </div>
                  <div className="border-t border-gray-100 dark:border-slate-700 my-2"></div>
                  <button 
                    onClick={toggleDark}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-slate-700 flex items-center gap-2"
                  >
                    {themeConfig.isDark ? <Sun size={16} /> : <Moon size={16} />}
                    {themeConfig.isDark ? 'Light Mode' : 'Dark Mode'}
                  </button>
                </div>
              )}
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600 dark:text-gray-300">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
             <NavLink href="#home" onClick={handleNavClick}>Home</NavLink>
             <NavLink href="#experience" onClick={handleNavClick}>Experience</NavLink>
             <NavLink href="#projects" onClick={handleNavClick}>Projects</NavLink>
             <NavLink href="#certificates" onClick={handleNavClick}>Certificates</NavLink>
             <NavLink href="#archive" onClick={handleNavClick}>Archive</NavLink>
             <NavLink href="#contact" onClick={handleNavClick}>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;