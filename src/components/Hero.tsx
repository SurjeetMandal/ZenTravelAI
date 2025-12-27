import { Globe, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <header className="text-center mb-16 space-y-6 animate-in fade-in slide-in-from-top-4 duration-1000">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-full text-[10px] font-bold text-zinc-500 uppercase tracking-widest backdrop-blur-md">
        <Globe size={12} className="text-blue-500 animate-pulse" /> 
        Next-Gen Travel Architecture
      </div>
      
      <div className="space-y-2">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
          ZenTravel <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500 font-mono italic">AI</span>
        </h1>
        <p className="max-w-md mx-auto text-zinc-500 text-sm md:text-base leading-relaxed">
          Transform your destination ideas into structured, aesthetic itineraries using 
          <span className="text-zinc-300"> Gemini 2.0 Flash</span>.
        </p>
      </div>

      <div className="flex justify-center gap-4">
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-600 uppercase">
          <Sparkles size={10} className="text-yellow-500/50" /> Multi-Modal
        </div>
        <div className="w-1 h-1 rounded-full bg-zinc-800 self-center"></div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-600 uppercase">
          Zero-Latency
        </div>
      </div>
    </header>
  );
};

export default Hero;