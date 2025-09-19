import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface LoveLetterProps {
  isVisible: boolean;
  onMoreClick: () => void;
}

const LoveLetter: React.FC<LoveLetterProps> = ({ isVisible, onMoreClick }) => {
  const [showLetter, setShowLetter] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showButton, setShowButton] = useState(false);
  
  const loveMessage = `My Dearest Love,

Every moment with you feels like magic ✨
Your smile lights up my entire world 💖
I fall in love with you more each day...

You are my sunshine, my moonlight,
And all the stars in between 🌟

Forever yours,
Your Secret Admirer 💕`;

  useEffect(() => {
    if (isVisible) {
      setShowLetter(true);
      
      // Typing animation
      let currentIndex = 0;
      const typeInterval = setInterval(() => {
        if (currentIndex < loveMessage.length) {
          setTypedText(loveMessage.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setShowButton(true), 1000);
        }
      }, 50); // Typing speed
      
      return () => clearInterval(typeInterval);
    } else {
      setShowLetter(false);
      setTypedText('');
      setShowButton(false);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-30 bg-black/30 backdrop-blur-sm">
      {showLetter && (
        <div className="animate-magical-bounce">
          {/* Love Letter */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-lg shadow-magical max-w-md mx-4 border-2 border-love-pink/30">
            <div className="mb-4">
              <h2 className="font-romantic text-3xl text-love-purple text-center mb-6">
                💌 A Love Letter 💌
              </h2>
            </div>
            
            <div className="font-romantic text-lg text-gray-700 leading-relaxed whitespace-pre-line min-h-[300px]">
              {typedText}
              <span className="animate-pulse">|</span>
            </div>
            
            {showButton && (
              <div className="text-center mt-6 animate-magical-bounce">
                <Button 
                  onClick={onMoreClick}
                  className="bg-gradient-to-r from-love-pink to-love-purple hover:from-love-purple hover:to-love-pink text-white font-kawaii font-semibold px-8 py-3 rounded-full shadow-magical hover:shadow-sparkle animate-love-pulse transition-all duration-300"
                >
                  Wait, there's more... ✨
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoveLetter;