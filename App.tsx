import React, { useState } from 'react';
import { TarotCard, GameState } from './types';
import { TAROT_DECK } from './constants';
import StarryBackground from './components/StarryBackground';
import Card from './components/Card';
import { Sparkles, RefreshCcw } from 'lucide-react';

export default function App() {
  const [currentCard, setCurrentCard] = useState<TarotCard | null>(null);
  const [gameState, setGameState] = useState<GameState>(GameState.IDLE);
  const [fadeText, setFadeText] = useState(false);

  const handleDraw = () => {
    if (gameState === GameState.ANIMATING) return;

    if (gameState === GameState.REVEALED) {
      setFadeText(false);
      setGameState(GameState.IDLE); 
      
      setTimeout(() => {
        drawRandomCard();
      }, 600);
    } else {
      drawRandomCard();
    }
  };

  const drawRandomCard = () => {
    setGameState(GameState.ANIMATING);
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * TAROT_DECK.length);
      const selected = TAROT_DECK[randomIndex];
      
      if (currentCard && currentCard.id === selected.id && TAROT_DECK.length > 1) {
         drawRandomCard();
         return;
      }

      setCurrentCard(selected);
      
      requestAnimationFrame(() => {
        setGameState(GameState.REVEALED);
        setTimeout(() => setFadeText(true), 800);
      });

    }, 300);
  };

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center p-6 font-sans overflow-hidden">
      <StarryBackground />

      {/* Main Content Container */}
      <div className="z-10 w-full max-w-md flex flex-col items-center gap-6 md:gap-8">
        
        {/* Header */}
        <header className="text-center space-y-2 animate-[float_4s_ease-in-out_infinite]">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-purple-900/20 border border-purple-400/20 backdrop-blur-md mb-2 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <Sparkles className="w-3 h-3 text-yellow-300 mr-2" />
            <span className="text-purple-200 text-[10px] font-bold tracking-[0.2em] uppercase">Daily Fortune</span>
          </div>
          <h1 className="text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-indigo-200 drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]">
            Mystic Vibe
          </h1>
          <p className="text-indigo-200/60 text-sm font-light tracking-wide">
            探索今日宇宙為你準備的指引
          </p>
        </header>

        {/* Card Area */}
        <div className="py-2 perspective-1000">
          <Card 
            card={currentCard} 
            isFlipped={gameState === GameState.REVEALED} 
          />
        </div>

        {/* Interaction & Result Area */}
        <div className="w-full flex flex-col items-center gap-6 min-h-[180px]">
          
          {/* Action Button */}
          <button
            onClick={handleDraw}
            disabled={gameState === GameState.ANIMATING}
            className={`
              group relative px-10 py-4 rounded-full 
              bg-gradient-to-r from-violet-600/90 to-indigo-600/90 backdrop-blur-md
              text-white font-bold tracking-widest uppercase text-xs
              shadow-[0_0_20px_rgba(139,92,246,0.3)] 
              border border-white/10
              hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] 
              hover:scale-105 active:scale-95 
              transition-all duration-300 ease-out
              disabled:opacity-50 disabled:cursor-not-allowed
              overflow-hidden
            `}
          >
            <span className="relative z-10 flex items-center gap-3">
              {gameState === GameState.IDLE ? (
                <>
                  <Sparkles className="w-4 h-4" /> 抽取今日運勢
                </>
              ) : gameState === GameState.REVEALED ? (
                <>
                  <RefreshCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" /> 重新抽取
                </>
              ) : (
                "洗牌中..."
              )}
            </span>
            {/* Button Shine Effect */}
            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
          </button>

          {/* Description Box (Glassmorphism) */}
          <div 
            className={`
              w-full bg-slate-900/40 backdrop-blur-xl border border-white/10 
              rounded-2xl p-6 text-center transition-all duration-1000 transform
              shadow-[0_4px_30px_rgba(0,0,0,0.1)]
              ${fadeText && currentCard ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}
            `}
          >
            {currentCard && (
              <>
                <h4 className="text-yellow-400/90 font-serif text-lg mb-3 flex items-center justify-center gap-3">
                  <span className="h-[1px] w-6 bg-gradient-to-r from-transparent to-yellow-500/50"></span>
                  運勢解讀
                  <span className="h-[1px] w-6 bg-gradient-to-l from-transparent to-yellow-500/50"></span>
                </h4>
                <p className="text-indigo-100/90 leading-relaxed font-sans text-sm md:text-base font-light tracking-wide">
                  {currentCard.desc}
                </p>
              </>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}