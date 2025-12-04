import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import TechStack from './components/TechStack';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import GeminiChat from './components/GeminiChat';
import Archive from './components/Archive';
import { ThemeConfig } from './types';

function App() {
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>({
    primaryColor: 'blue',
    isDark: false
  });

  // Check system preference on load
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setThemeConfig(prev => ({ ...prev, isDark: true }));
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300 selection:bg-${themeConfig.primaryColor}-200 dark:selection:bg-${themeConfig.primaryColor}-900`}>
      <NavBar themeConfig={themeConfig} setThemeConfig={setThemeConfig} />
      <main>
        <Hero themeConfig={themeConfig} />
        <TechStack themeConfig={themeConfig} />
        <Experience themeConfig={themeConfig} />
        <Portfolio themeConfig={themeConfig} />
        <Certificates themeConfig={themeConfig} />
        <Archive themeConfig={themeConfig} />
        <Contact themeConfig={themeConfig} />
      </main>
      
      <footer className="bg-white dark:bg-slate-950 py-12 border-t border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              © {new Date().getFullYear()} Senior Frontend Engineer Portfolio. Built with React & Tailwind.
            </p>
        </div>
      </footer>

      <GeminiChat themeConfig={themeConfig} />
    </div>
  );
}

export default App;