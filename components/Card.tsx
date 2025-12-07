import React, { useState, useEffect } from 'react';
import { TarotCard } from '../types';
import { Sparkles, Hexagon, ImageOff } from 'lucide-react';

interface CardProps {
  card: TarotCard | null;
  isFlipped: boolean;
}

const Card: React.FC<CardProps> = ({ card, isFlipped }) => {
  const [imgError, setImgError] = useState(false);

  // Reset error state when card changes
  useEffect(() => {
    setImgError(false);
  }, [card]);

  return (
    <div className="group perspective-1000 w-64 h-96 sm:w-72 sm:h-[450px] cursor-default">
      <div
        className={`relative w-full h-full duration-1000 transition-all transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* --- Card Back (The "Cover") --- */}
        <div className="absolute w-full h-full backface-hidden rounded-2xl shadow-2xl overflow-hidden border border-indigo-500/50 bg-slate-900/90 backdrop-blur-sm">
          <div className="w-full h-full relative flex items-center justify-center">
            {/* Mystic Pattern Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/50 via-slate-900 to-black/80"></div>
            
            {/* Geometric Pattern Overlay */}
            <div className="absolute inset-0 opacity-20" 
                 style={{backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '24px 24px'}}>
            </div>

            {/* Central Symbol */}
            <div className="relative z-10 flex flex-col items-center animate-float">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500 blur-xl opacity-20 rounded-full animate-pulse"></div>
                <Hexagon className="w-24 h-24 text-purple-300 opacity-80 stroke-[1.5]" />
                <Sparkles className="w-10 h-10 text-yellow-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <p className="mt-6 font-serif text-purple-200/80 tracking-[0.2em] text-sm uppercase">Mystic Vibe</p>
            </div>

            {/* Decorative Borders */}
            <div className="absolute inset-3 border border-purple-500/20 rounded-xl"></div>
            <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-purple-400/60 rounded-tl-lg"></div>
            <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-purple-400/60 rounded-tr-lg"></div>
            <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-purple-400/60 rounded-bl-lg"></div>
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-purple-400/60 rounded-br-lg"></div>
          </div>
        </div>

        {/* --- Card Front (The Reveal) --- */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl shadow-2xl overflow-hidden bg-slate-800 border border-yellow-500/30">
          {card ? (
            <div className="w-full h-full flex flex-col relative">
              {/* Image Area */}
              <div className="h-[75%] w-full relative overflow-hidden bg-slate-900 group-hover:brightness-110 transition-all duration-700">
                {/* Fallback Gradient Background (visible while loading or if error) */}
                <div className={`absolute inset-0 bg-gradient-to-b ${card.gradient} opacity-40`}></div>
                
                {/* Image or Fallback */}
                {!imgError ? (
                  <img 
                    src={card.image} 
                    alt={card.name}
                    className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                    onError={() => setImgError(true)}
                    loading="eager"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-50">
                    <ImageOff className="w-12 h-12 text-white mb-2" />
                    <span className="text-xs text-white/50">Image Error</span>
                  </div>
                )}
                
                {/* Overlay Vignette - 調整透明度從 0.8 降到 0.4，避免圖片太暗 */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40 pointer-events-none"></div>
                
                {/* Card Number Watermark */}
                <div className="absolute top-3 right-3 font-serif text-white/60 text-xl font-bold tracking-widest drop-shadow-md z-10 bg-black/20 px-2 py-1 rounded backdrop-blur-sm">
                   {['I','II','III','IV','V','VI','VII','VIII','IX','X'][card.id - 1] || card.id}
                </div>
              </div>

              {/* Text Area */}
              <div className="flex-1 bg-slate-900 relative flex flex-col items-center justify-start pt-3 text-center border-t border-yellow-500/20">
                 {/* Decorative top line */}
                 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-1 bg-yellow-600/80 rounded-full shadow-[0_0_10px_rgba(202,138,4,0.5)]"></div>
                 
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 font-serif text-2xl font-bold tracking-wider mb-1">
                  {card.name}
                </h3>
                <p className="text-purple-300/60 font-serif text-[10px] uppercase tracking-[0.25em]">
                  {card.nameEn}
                </p>
              </div>
            </div>
          ) : (
             <div className="w-full h-full bg-slate-800 flex items-center justify-center">
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;