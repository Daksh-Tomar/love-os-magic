import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface SurpriseRevealProps {
  isVisible: boolean;
  whatsappNumber?: string;
  whatsappMessage?: string;
}

const SurpriseReveal: React.FC<SurpriseRevealProps> = ({ 
  isVisible, 
  whatsappNumber = "1234567890",
  whatsappMessage = "Hi! I got your surprise message! 💖"
}) => {
  const [showKitty, setShowKitty] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setShowKitty(true), 300);
      setTimeout(() => setShowText(true), 800);
      setTimeout(() => setShowSparkles(true), 1200);
    } else {
      setShowKitty(false);
      setShowText(false);
      setShowSparkles(false);
    }
  }, [isVisible]);

  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-40 bg-gradient-to-br from-love-pink/20 to-love-purple/20 backdrop-blur-sm">
      <div className="text-center relative">
        {/* Hello Kitty with Sparkles */}
        {showKitty && (
          <div className="animate-magical-bounce relative">
            <img
              src="/hello-kitty.png"
              alt="Hello Kitty surprise"
              className="w-40 h-40 mx-auto mb-6 animate-gentle-float"
            />
            
            {/* Floating Sparkles */}
            {showSparkles && (
              <>
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-3 h-3 bg-magic-sparkle rounded-full animate-sparkle`}
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${i * 200}ms`,
                    }}
                  >
                    ✨
                  </div>
                ))}
              </>
            )}
          </div>
        )}
        
        {/* Surprise Message */}
        {showText && (
          <div className="animate-magical-bounce space-y-4">
            <h2 className="font-romantic text-4xl text-love-purple mb-4">
              Surprise! 🎁
            </h2>
            
            <p className="font-kawaii text-xl text-love-pink font-semibold mb-6">
              There's a surprise for you 🎁<br />
              Check your WhatsApp!
            </p>
            
            <Button 
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-kawaii font-bold px-8 py-4 rounded-full shadow-magical hover:shadow-sparkle animate-love-pulse transition-all duration-300 text-lg"
            >
              💬 Open WhatsApp ✨
            </Button>
            
            <p className="font-kawaii text-sm text-gray-600 mt-4">
              (Number: {whatsappNumber})
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SurpriseReveal;