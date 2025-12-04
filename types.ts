export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
  category: 'Web' | 'Mobile' | 'AI' | 'Design';
  year: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  credentialUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'Full-time' | 'Contract' | 'Freelance';
}

export enum LayoutMode {
  GRID = 'GRID',
  LIST = 'LIST',
  SHOWCASE = 'SHOWCASE'
}

export interface ThemeConfig {
  primaryColor: string; // Tailwind color name e.g. 'blue', 'purple'
  isDark: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}