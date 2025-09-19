import React, { useEffect, useState } from 'react';

interface ButterflyAnimationProps {
  onButterflyClick: () => void;
}

const ButterflyAnimation: React.FC<ButterflyAnimationProps> = ({ onButterflyClick }) => {
  const [isFlying, setIsFlying] = useState(true);
  const [position, setPosition] = useState({ x: -100, y: 50 });

  useEffect(() => {
    const restartAnimation = () => {
      setPosition({ x: -100, y: Math.random() * 60 + 20 });
      setIsFlying(true);
      
      // Reset animation after it completes
      setTimeout(() => {
        setIsFlying(false);
        setTimeout(restartAnimation, 2000); // 2 second pause between flights
      }, 15000); // 15 seconds animation duration
    };

    restartAnimation();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <div
        className={`absolute pointer-events-auto cursor-pointer transition-all duration-1000 ${
          isFlying ? 'animate-butterfly-fly' : ''
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}vh`,
        }}
        onClick={onButterflyClick}
      >
        <img
          src="/butterfly.png"
          alt="Magic butterfly"
          className="w-16 h-16 animate-flutter hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default ButterflyAnimation;