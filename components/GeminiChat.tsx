import React, { useState, useRef, useEffect } from 'react';
import { ThemeConfig, ChatMessage } from '../types';
import { createChatSession, sendMessageStream } from '../services/gemini';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { GenerateContentResponse } from '@google/genai';

interface GeminiChatProps {
  themeConfig: ThemeConfig;
}

const GeminiChat: React.FC<GeminiChatProps> = ({ themeConfig }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm the AI portfolio assistant. Ask me anything about this developer's skills or projects.", timestamp: Date.now() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<any>(null); // Keep session persistent

  useEffect(() => {
    // Initialize session on mount
    try {
        if (!chatSessionRef.current) {
            chatSessionRef.current = createChatSession();
        }
    } catch (e) {
        console.error("Failed to init chat", e);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
        if (!chatSessionRef.current) {
             chatSessionRef.current = createChatSession();
        }

        const streamResult = await sendMessageStream(chatSessionRef.current, userMsg.text);
        
        let fullResponse = '';
        // Add a placeholder message for the model response
        setMessages(prev => [...prev, { role: 'model', text: '', timestamp: Date.now() }]);

        for await (const chunk of streamResult) {
            const c = chunk as GenerateContentResponse;
            const text = c.text;
            if (text) {
                fullResponse += text;
                // Update the last message with the accumulated text
                setMessages(prev => {
                    const newArr = [...prev];
                    newArr[newArr.length - 1] = { 
                        ...newArr[newArr.length - 1], 
                        text: fullResponse 
                    };
                    return newArr;
                });
            }
        }
    } catch (error) {
        console.error("Chat Error:", error);
        setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting right now.", timestamp: Date.now() }]);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-2
          ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}
          bg-${themeConfig.primaryColor}-600 text-white`}
      >
        <Sparkles size={24} />
        <span className="font-medium pr-1">Ask AI</span>
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 z-50 w-full max-w-sm bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700 overflow-hidden flex flex-col transition-all duration-500 origin-bottom-right
        ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none'}`}
        style={{ height: '500px', maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className={`p-4 bg-${themeConfig.primaryColor}-600 flex justify-between items-center text-white`}>
          <div className="flex items-center gap-2">
            <Bot size={20} />
            <h3 className="font-bold">Portfolio Assistant</h3>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-slate-950">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 
                ${msg.role === 'user' ? 'bg-gray-200 dark:bg-slate-700' : `bg-${themeConfig.primaryColor}-100 text-${themeConfig.primaryColor}-600`}`}>
                {msg.role === 'user' ? <User size={16} className="text-gray-600 dark:text-gray-300" /> : <Bot size={16} />}
              </div>
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed
                ${msg.role === 'user' 
                  ? `bg-${themeConfig.primaryColor}-600 text-white rounded-br-none` 
                  : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 border border-gray-100 dark:border-slate-700 rounded-bl-none shadow-sm'
                }`}>
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about my skills..."
              className="w-full bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white rounded-full py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all focus:ring-blue-500"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className={`absolute right-1 p-2 rounded-full transition-all 
                ${input.trim() ? `bg-${themeConfig.primaryColor}-600 text-white hover:bg-${themeConfig.primaryColor}-700` : 'bg-transparent text-gray-400'}`}
            >
              <Send size={18} />
            </button>
          </div>
          <div className="text-center mt-2">
            <span className="text-[10px] text-gray-400">Powered by Gemini 2.5 Flash</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeminiChat;