import React, { useState } from 'react';
import { ThemeConfig } from '../types';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

interface ContactProps {
  themeConfig: ThemeConfig;
}

const Contact: React.FC<ContactProps> = ({ themeConfig }) => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-6">Let's Work Together</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              I'm always open to discussing product design work or partnership opportunities. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <div className={`p-3 rounded-full bg-${themeConfig.primaryColor}-100 dark:bg-${themeConfig.primaryColor}-900/20 text-${themeConfig.primaryColor}-600 dark:text-${themeConfig.primaryColor}-400`}>
                  <Mail size={20} />
                </div>
                <span>hello@portfolio.dev</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <div className={`p-3 rounded-full bg-${themeConfig.primaryColor}-100 dark:bg-${themeConfig.primaryColor}-900/20 text-${themeConfig.primaryColor}-600 dark:text-${themeConfig.primaryColor}-400`}>
                  <MapPin size={20} />
                </div>
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                 <div className={`p-3 rounded-full bg-${themeConfig.primaryColor}-100 dark:bg-${themeConfig.primaryColor}-900/20 text-${themeConfig.primaryColor}-600 dark:text-${themeConfig.primaryColor}-400`}>
                  <Phone size={20} />
                </div>
                <span>+1 (555) 000-0000</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="p-3 bg-gray-100 dark:bg-slate-800 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors text-gray-600 dark:text-gray-300"><Github size={20}/></a>
              <a href="#" className="p-3 bg-gray-100 dark:bg-slate-800 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors text-gray-600 dark:text-gray-300"><Linkedin size={20}/></a>
              <a href="#" className="p-3 bg-gray-100 dark:bg-slate-800 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors text-gray-600 dark:text-gray-300"><Twitter size={20}/></a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-gray-100 dark:border-slate-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2
                  ${status === 'success' ? 'bg-green-500' : `bg-${themeConfig.primaryColor}-600 hover:bg-${themeConfig.primaryColor}-700 shadow-lg hover:shadow-xl`}
                `}
              >
                {status === 'submitting' ? (
                   <span className="animate-pulse">Sending...</span>
                ) : status === 'success' ? (
                   <span>Message Sent!</span>
                ) : (
                   <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;