import { ImageIcon, Download, Share2 } from "lucide-react";

interface PosterProps {
  imageUrl: string | null;
  loading: boolean;
  destination: string;
}

const PosterDisplay = ({ imageUrl, loading, destination }: PosterProps) => {
  const handleDownload = async () => {
    if (!imageUrl) return;

    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${destination.replace(/\s+/g, "_")}_Travel_Poster.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed", error);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `My Trip to ${destination}`,
          text: `Check out my AI-generated itinerary for ${destination}!`,
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing", error);
      }
    } else {
      // Fallback: Copy to clipboard if Share API isn't supported
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="w-full aspect-3/4 md:aspect-square bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden relative group">
      {loading ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-zinc-950">
          <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
            Painting Destination...
          </p>
        </div>
      ) : imageUrl ? (
        <>
          <img
            src={imageUrl}
            alt={`Travel poster for ${destination}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <div className="flex gap-3 w-full">
              <button 
                onClick={handleDownload} 
                className="flex-1 bg-white text-black text-[10px] font-bold py-2 rounded flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors">
                  <Download size={14} /> SAVE POSTER
              </button>
              <button 
                onClick={handleShare} 
                className="p-2 bg-zinc-800 text-white rounded hover:bg-zinc-700 transition-colors">
                  <Share2 size={14} />
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-800 space-y-2">
          <ImageIcon size={48} strokeWidth={1} />
          <p className="text-[10px] font-mono uppercase">Visual Preview Area</p>
        </div>
      )}
    </div>
  );
};

export default PosterDisplay;
