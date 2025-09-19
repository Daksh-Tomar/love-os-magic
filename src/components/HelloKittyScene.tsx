import React, { useState, useEffect } from 'react';

interface HelloKittySceneProps {
  isVisible: boolean;
  onComplete: () => void;
}

const HelloKittyScene: React.FC<HelloKittySceneProps> = ({ isVisible, onComplete }) => {
  const [showKitty, setShowKitty] = useState(false);
  const [showText, setShowText] = useState(false);
  const [isWaving, setIsWaving] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Show Hello Kitty with bounce
      setTimeout(() => setShowKitty(true), 200);
      // Show text after Kitty appears
      setTimeout(() => setShowText(true), 800);
      // Start waving animation
      setTimeout(() => setIsWaving(true), 1200);
      // Start fade out sequence
      setTimeout(() => {
        setIsWaving(false);
        setShowText(false);
        setTimeout(() => {
          setShowKitty(false);
          setTimeout(onComplete, 600);
        }, 400);
      }, 3000);
    }
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-40 bg-black/20">
      {/* Hello Kitty */}
      <div className="text-center">
        {showKitty && (
          <div className={`animate-magical-bounce ${isWaving ? 'animate-pulse' : ''}`}>
            <img
              src="/hello-kitty.png"
              alt="Hello Kitty"
              className={`w-32 h-32 mx-auto mb-4 transition-transform duration-500 ${
                isWaving ? 'animate-bounce' : ''
              }`}
            />
          </div>
        )}
        
        {/* Animated Text */}
        {showText && (
          <div className="font-kawaii text-2xl text-love-pink font-bold animate-magical-bounce">
            <span className="inline-block animate-gentle-float">
              Hello 💖 I have something for you!
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HelloKittyScene;