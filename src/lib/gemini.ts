import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// Using the most widely compatible model name
// If gemini-1.5-flash still fails, 'gemini-pro' is the universal backup
export const model = genAI.getGenerativeModel({ 
  model: "gemini-2.5-flash",
});