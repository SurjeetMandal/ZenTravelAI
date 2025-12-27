import { Calendar, CheckCircle2, Clock } from 'lucide-react';
import type { TravelPlan } from '../types';

interface Props {
  plan: TravelPlan;
}

const ItineraryDisplay = ({ plan }: Props) => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight">{plan.destination}</h2>
          <p className="text-blue-400 font-mono text-xs uppercase tracking-widest mt-1">{plan.vibe} Experience</p>
        </div>
        <div className="bg-zinc-900 px-4 py-2 rounded-lg border border-zinc-800">
          <span className="text-zinc-500 text-[10px] font-bold uppercase block">Duration</span>
          <span className="text-white font-mono">3 Days / 2 Nights</span>
        </div>
      </div>

      <div className="grid gap-6">
        {plan.itinerary.map((item) => (
          <div key={item.day} className="relative pl-8 border-l border-zinc-800 group hover:border-blue-500 transition-colors">
            {/* Timeline Dot */}
            <div className="absolute -left-1.5 top-0 w-3 h-3 bg-zinc-900 border border-zinc-700 rounded-full group-hover:border-blue-500 group-hover:bg-blue-500 transition-all shadow-[0_0_10px_rgba(59,130,246,0)] group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Calendar size={18} className="text-zinc-500" /> Day {item.day}
              </h3>
            </div>

            <div className="grid gap-3">
              {item.activities.map((activity, idx) => (
                <div 
                  key={idx} 
                  className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-xl flex items-start gap-3 hover:bg-zinc-800/40 transition-colors"
                >
                  <div className="mt-1 text-blue-500">
                    <CheckCircle2 size={16} />
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* AI Metadata Footer */}
      <div className="pt-8 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
        <Clock size={12} /> Architected by Gemini 2.5 Flash
      </div>
    </div>
  );
};

export default ItineraryDisplay;