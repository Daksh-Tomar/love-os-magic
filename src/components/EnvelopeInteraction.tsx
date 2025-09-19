import React, { useState, useEffect } from 'react';

interface EnvelopeInteractionProps {
  isVisible: boolean;
  onEnvelopeClick: () => void;
}

const EnvelopeInteraction: React.FC<EnvelopeInteractionProps> = ({ 
  isVisible, 
  onEnvelopeClick 
}) => {
  const [showEnvelope, setShowEnvelope] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setShowEnvelope(true), 300);
      setTimeout(() => setShowPrompt(true), 800);
    } else {
      setShowEnvelope(false);
      setShowPrompt(false);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-30 bg-black/10">
      <div className="text-center">
        {/* Floating Envelope */}
        {showEnvelope && (
          <div className="mb-6">
            <img
              src="/envelope.png"
              alt="Magic envelope"
              className="w-24 h-24 mx-auto cursor-pointer animate-gentle-float hover:scale-110 transition-all duration-300 shadow-magical hover:shadow-sparkle"
              onClick={onEnvelopeClick}
            />
          </div>
        )}
        
        {/* Glowing Prompt */}
        {showPrompt && (
          <div className="font-kawaii text-xl text-love-purple font-semibold animate-love-pulse">
            <span className="inline-block px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-gentle">
              Click on the envelope to open it 💌
            </span>
          </div>
        )}
        
        {/* Sparkle Effects */}
        {showEnvelope && (
          <>
            <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-magic-sparkle rounded-full animate-sparkle"></div>
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-love-pink rounded-full animate-sparkle delay-300"></div>
            <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-love-blue rounded-full animate-sparkle delay-700"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default EnvelopeInteraction;