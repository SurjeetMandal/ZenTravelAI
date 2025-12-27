export type TravelVibe = 'Cyberpunk' | 'Minimalist' | 'Vintage' | 'Traditional';

export interface ItineraryDay {
  day: number;
  activities: string[];
}

export interface TravelPlan {
  destination: string;
  vibe: TravelVibe;
  itinerary: ItineraryDay[];
  posterPrompt: string;
}

export interface AIResponse {
  plan: TravelPlan | null;
  image: string | null; // Base64 image string from Nano Banana
  loading: boolean;
  error: string | null;
}