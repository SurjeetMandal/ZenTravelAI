import InputForm from "./components/InputForm";
import ItineraryDisplay from "./components/ItineraryDisplay";
import PosterDisplay from "./components/PosterDisplay";
import { useTravelAI } from "./hooks/useTravelAI";
import { Globe } from "lucide-react";

function App() {
  const { generateTrip, result, loading, imageUrl } = useTravelAI();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-blue-500/30">
      {/* Subtle background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-125 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <main className="container mx-auto px-6 py-20 relative z-10">
        {/* Header */}
        <header className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
            <Globe size={12} className="text-blue-500" /> AI-Driven Trip
            Architecture
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
            ZenTravel <span className="text-blue-500 font-mono italic">AI</span>
          </h1>
          <p className="max-w-md mx-auto text-zinc-500 text-sm leading-relaxed">
            Generate stunning, aesthetic travel itineraries using high-speed
            multi-modal intelligence.
          </p>
        </header>

        {/* Action Section */}
        <InputForm onGenerate={generateTrip} loading={loading} />

        {/* Results Section */}
        {result && !loading && (
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Visuals */}
            <div className="lg:col-span-5 md:sticky md:top-24">
              <PosterDisplay
                imageUrl={imageUrl}
                loading={loading}
                destination={result.destination}
              />
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7">
              <ItineraryDisplay plan={result} />
            </div>
          </div>
        )}

        {/* Empty State / Loading Shimmer can go here */}
      </main>
    </div>
  );
}

export default App;
