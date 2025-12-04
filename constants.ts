import { Project, Certificate, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Dashboard Pro',
    description: 'A comprehensive analytics dashboard for online retailers featuring real-time sales tracking, inventory management, and AI-driven revenue forecasting.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Recharts'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
    category: 'Web',
    year: '2024',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: '2',
    title: 'FinTech Mobile App',
    description: 'Secure mobile banking application with biometric authentication, instant peer-to-peer transfers, and spending visualization.',
    tags: ['React Native', 'Firebase', 'Node.js'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
    category: 'Mobile',
    year: '2023',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: '3',
    title: 'AI Content Generator',
    description: 'SaaS platform utilizing Large Language Models to help marketers generate blog posts, social media captions, and ad copy in seconds.',
    tags: ['Next.js', 'Gemini API', 'Stripe'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    category: 'AI',
    year: '2024',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: '4',
    title: 'Modern Portfolio Template',
    description: 'A highly customizable, dark-mode first portfolio template designed for creative professionals and photographers.',
    tags: ['Vue', 'Nuxt', 'GSAP'],
    imageUrl: 'https://picsum.photos/800/600?random=4',
    category: 'Design',
    year: '2022',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: '5',
    title: 'HealthTrack Wearable',
    description: 'Companion app for smart fitness trackers, visualizing heart rate, sleep tracking, and workout intensity zones.',
    tags: ['Flutter', 'Dart', 'Bluetooth API'],
    imageUrl: 'https://picsum.photos/800/600?random=5',
    category: 'Mobile',
    year: '2023',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: '6',
    title: 'Crypto Exchange UI',
    description: 'High-frequency trading interface with low-latency websockets updates and advanced charting library integrations.',
    tags: ['React', 'Redux', 'WebSockets'],
    imageUrl: 'https://picsum.photos/800/600?random=6',
    category: 'Web',
    year: '2022',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: '7',
    title: 'Restaurant Booking System',
    description: 'Full-stack reservation management system with floor plan editor and automated SMS reminders.',
    tags: ['Node.js', 'PostgreSQL', 'Twilio'],
    imageUrl: 'https://picsum.photos/800/600?random=7',
    category: 'Web',
    year: '2021',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: '8',
    title: 'Spotify Clone',
    description: 'Pixel-perfect recreation of the Spotify web player using their public API for music metadata playback controls.',
    tags: ['React', 'Styled Components', 'API'],
    imageUrl: 'https://picsum.photos/800/600?random=8',
    category: 'Design',
    year: '2020',
    demoUrl: '#',
    repoUrl: '#'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'c1',
    title: 'Professional Cloud Architect',
    issuer: 'Google Cloud',
    date: 'Aug 2024',
    imageUrl: 'https://picsum.photos/400/300?random=10'
  },
  {
    id: 'c2',
    title: 'Meta Frontend Developer',
    issuer: 'Coursera / Meta',
    date: 'Jan 2024',
    imageUrl: 'https://picsum.photos/400/300?random=11'
  },
  {
    id: 'c3',
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Nov 2023',
    imageUrl: 'https://picsum.photos/400/300?random=12'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'e1',
    role: 'Senior Frontend Engineer',
    company: 'TechFlow Solutions',
    period: '2022 - Present',
    type: 'Full-time',
    description: 'Spearheaded the migration of legacy monoliths to micro-frontends using Module Federation. Improved Core Web Vitals by 40% and mentored a team of 5 junior developers.'
  },
  {
    id: 'e2',
    role: 'Frontend Developer',
    company: 'Creative Digital Agency',
    period: '2020 - 2022',
    type: 'Full-time',
    description: 'Developed award-winning immersive web experiences for Fortune 500 clients using WebGL and React. Integrated headless CMS solutions for dynamic content management.'
  },
  {
    id: 'e3',
    role: 'Full Stack Developer',
    company: 'StartupX',
    period: '2018 - 2020',
    type: 'Contract',
    description: 'Built the MVP for a logistics SaaS platform from scratch. Handled both React frontend and Node.js backend services, integrating Stripe for payments and Google Maps API.'
  }
];

export const SKILLS = [
  "React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS", "Google Gemini API", "Docker", "AWS", "Figma", "GraphQL", "PostgreSQL", "Redis", "Three.js", "Python"
];