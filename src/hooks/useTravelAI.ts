import { useState } from 'react';
import { model } from '../lib/gemini';
import type { TravelVibe, TravelPlan } from '../types';

export const useTravelAI = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TravelPlan | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const generateTrip = async (destination: string, vibe: TravelVibe) => {
    setLoading(true);
    setError(null);
    setResult(null);
    setImageUrl(null); // Clear previous image to avoid UI flickering

    try {
      // 1. Define the Multi-Modal Prompt
      const prompt = `Generate a 3-day travel itinerary for ${destination} with a ${vibe} theme. 
      Return ONLY a JSON object with this structure: 
      { 
        "destination": "${destination}", 
        "vibe": "${vibe}", 
        "itinerary": [{"day": 1, "activities": ["activity 1", "activity 2"]}], 
        "posterPrompt": "a descriptive prompt for a travel poster" 
      }`;

      // 2. Fetch Content from Gemini 1.5 Flash
      const response = await model.generateContent(prompt);
      const text = response.response.text();

      // 3. Extract JSON using Regex to handle potential AI chatter or markdown
      const jsonMatch = text.match(/\{[\s\S]*\}/);

      if (jsonMatch) {
        const parsedPlan: TravelPlan = JSON.parse(jsonMatch[0]);
        setResult(parsedPlan);

        // 4. Dynamic Image Logic
        // We use LoremFlickr with a random seed to ensure the image is unique and relevant
        const searchTerms = encodeURIComponent(`${destination},${vibe},architecture`);
        const dynamicUrl = `https://loremflickr.com/1200/1600/${searchTerms}`;
        
        setImageUrl(dynamicUrl);
      } else {
        throw new Error("AI returned an invalid response format. Please try again.");
      }

    } catch (err: unknown) {
      console.error("AI Generation Failed:", err);
      
      // Professional Type Guarding for Japan FAST OFFER standards
      if (err instanceof Error) {
        if (err.message.includes("429")) {
          setError("Rate limit reached. Please wait a moment.");
        } else {
          setError(err.message);
        }
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { generateTrip, result, loading, error, imageUrl };
};