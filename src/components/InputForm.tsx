import React, { useState } from 'react';
import { Send, MapPin, Sparkles } from 'lucide-react';
import type { TravelVibe } from '../types';

interface InputFormProps {
  onGenerate: (dest: string, vibe: TravelVibe) => void;
  loading: boolean;
}

const InputForm = ({ onGenerate, loading }: InputFormProps) => {
  const [destination, setDestination] = useState('');
  const [vibe, setVibe] = useState<TravelVibe>('Minimalist');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (destination.trim()) onGenerate(destination, vibe);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl backdrop-blur-xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2">
            <MapPin size={14} /> Destination
          </label>
          <input 
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="e.g. Kyoto, Japan"
            className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2">
            <Sparkles size={14} /> Aesthetic Vibe
          </label>
          <select 
            value={vibe}
            onChange={(e) => setVibe(e.target.value as TravelVibe)}
            className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none"
          >
            <option value="Cyberpunk">Cyberpunk</option>
            <option value="Minimalist">Minimalist</option>
            <option value="Vintage">Vintage</option>
            <option value="Traditional">Traditional</option>
          </select>
        </div>

        <button 
          type="submit"
          disabled={loading || !destination}
          className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>GENERATE ARCHITECTURE <Send size={18} className="group-hover:translate-x-1 transition-transform" /></>
          )}
        </button>
      </form>
    </div>
  );
};

export default InputForm;