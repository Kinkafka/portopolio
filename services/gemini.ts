import { GoogleGenAI, ChatSession, GenerateContentStreamResult } from "@google/genai";
import { PROJECTS, CERTIFICATES, SKILLS, EXPERIENCE } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Construct a system prompt based on the portfolio data
const SYSTEM_INSTRUCTION = `
You are "Portfolio Bot", an intelligent AI assistant for a Senior Frontend Engineer's portfolio website.
Your goal is to answer visitor questions about the developer's experience, projects, and skills professionally and concisely.

Context about the developer:
- Skills: ${SKILLS.join(', ')}
- Work Experience: ${EXPERIENCE.map(e => `${e.role} at ${e.company} (${e.period}): ${e.description}`).join('; ')}
- Projects: ${PROJECTS.map(p => `${p.title} (${p.category}, ${p.year}): ${p.description}`).join('; ')}
- Certificates: ${CERTIFICATES.map(c => `${c.title} from ${c.issuer}`).join('; ')}

Tone: Professional, enthusiastic, and helpful. 
If asked about contact info, suggest they use the contact form or email (mock email: dev@example.com).
Keep answers relatively short (under 100 words) unless asked for details.
`;

export const createChatSession = (): ChatSession => {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageStream = async (chat: ChatSession, message: string): Promise<GenerateContentStreamResult> => {
  return await chat.sendMessageStream({ message });
};