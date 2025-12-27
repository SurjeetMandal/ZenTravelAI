🌏 ZenTravel AI — Your Personal Travel Architect
ZenTravel AI is a high-performance web application that automates travel planning. By leveraging the Gemini 2.5 Flash API, it transforms simple user preferences into structured, visual, and ready-to-use 3-day itineraries in seconds.

🚀 The Mission
Planning a trip is often overwhelming. ZenTravel AI solves this by bridging the gap between raw AI intelligence and professional UI/UX design. It doesn't just give you text; it gives you a Visual Poster and a Structured Timeline for your next adventure.

✨ Key Features
AI-Powered Itineraries: Generates 3-day plans tailored to specific "Vibes" (Cyberpunk, Minimalist, Traditional, etc.).

Dynamic Poster Generation: Uses intelligent keyword mapping and cache-busting logic to fetch unique high-quality travel images for every search.

Modern Bento UI: A fully responsive, high-contrast dashboard inspired by the "Tokyo Tech" aesthetic.

One-Click Share/Save: Integrated Web Share API and Blob-based image downloading for instant use.

🛠️ Technical Stack
Frontend: React 18, TypeScript, Tailwind CSS.

AI Engine: Google Gemini 1.5 Flash.

Animations: Framer Motion.

Deployment: Netlify.

🧠 Engineering Highlights (Lessons Learned)
JSON Extraction: Implemented robust Regex patterns to parse structured data from AI responses, ensuring the app never crashes even if the AI adds extra conversational text.

Cache Management: Solved the "Static Image" bug by implementing a dynamic sig (signature) parameter in Unsplash/LoremFlickr URLs, forcing the browser to fetch fresh assets for every new destination.

Responsive Architecture: Designed a custom CSS grid system that reorders components for mobile users (Order: Narrative → Image → Stats → Stack) for optimal readability.

⚙️ Installation & Setup
Clone the Repo:

Bash

git clone https://github.com/SurjeetMandal/ZenTravelAI.git
Install Dependencies:

Bash

npm install
Environment Variables: Create a .env file in the root and add your Gemini API Key:

Plaintext

VITE_GEMINI_API_KEY=your_key_here
Run Locally:

Bash

npm run dev
Developer: Surjeet Mandal

Institution: Delhi Global Institute of Technology

Status: Final-Year B.Tech Student (2026 Grad)

Live Demo: zentravelai.netlify.app
