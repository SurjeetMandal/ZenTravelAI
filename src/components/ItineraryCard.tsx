import { CheckCircle2 } from 'lucide-react';

interface ItineraryCardProps {
  day: number;
  activities: string[];
}

const ItineraryCard = ({ day, activities }: ItineraryCardProps) => {
  return (
    <div className="relative pl-8 border-l border-zinc-800 group hover:border-blue-500 transition-all duration-300">
      {/* Connector Dot */}
      <div className="absolute -left-1.5 top-0 w-3 h-3 bg-zinc-950 border border-zinc-800 rounded-full group-hover:border-blue-500 group-hover:bg-blue-500 transition-all shadow-[0_0_15px_rgba(59,130,246,0)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"></div>
      
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-4">Day {day}</h3>
        <div className="grid gap-3">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-4 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl hover:bg-zinc-900/80 hover:border-zinc-700 transition-all group/item"
            >
              <div className="mt-1 text-zinc-600 group-hover/item:text-blue-500 transition-colors">
                <CheckCircle2 size={16} />
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed group-hover/item:text-zinc-200 transition-colors">
                {activity}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItineraryCard;