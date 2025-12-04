import React from 'react';
import { CERTIFICATES } from '../constants';
import { ThemeConfig } from '../types';
import { Award, CheckCircle } from 'lucide-react';

interface CertificatesProps {
  themeConfig: ThemeConfig;
}

const Certificates: React.FC<CertificatesProps> = ({ themeConfig }) => {
  return (
    <section id="certificates" className="py-24 bg-gray-50 dark:bg-slate-800/50 border-t border-gray-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">Certifications & Awards</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognized expertise validated by industry leaders. Continuous learning is at the core of my professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CERTIFICATES.map((cert) => (
            <div key={cert.id} className="relative group bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
              <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-${themeConfig.primaryColor}-500`}>
                 <Award size={80} />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-lg bg-gray-100 dark:bg-slate-800 mb-6 overflow-hidden">
                    <img src={cert.imageUrl} alt={cert.issuer} className="w-full h-full object-cover" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">{cert.issuer}</p>
                
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100 dark:border-slate-800">
                  <span className="text-xs text-gray-400 font-mono">Issued: {cert.date}</span>
                  <div className={`flex items-center gap-1 text-xs font-semibold text-${themeConfig.primaryColor}-600 dark:text-${themeConfig.primaryColor}-400`}>
                    <CheckCircle size={14} /> Verified
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;