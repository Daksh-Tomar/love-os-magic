import React, { useState } from 'react';
import ButterflyAnimation from './ButterflyAnimation';
import HelloKittyScene from './HelloKittyScene';
import EnvelopeInteraction from './EnvelopeInteraction';
import LoveLetter from './LoveLetter';
import SurpriseReveal from './SurpriseReveal';

interface LoveOSFeatureProps {
  whatsappNumber?: string;
  whatsappMessage?: string;
}

const LoveOSFeature: React.FC<LoveOSFeatureProps> = ({
  whatsappNumber = "1234567890", // Default number - configure this!
  whatsappMessage = "Hi! I got your surprise message! 💖 Thank you for this magical experience! ✨"
}) => {
  const [currentStep, setCurrentStep] = useState<'butterfly' | 'hello-kitty' | 'envelope' | 'letter' | 'surprise'>('butterfly');

  const handleButterflyClick = () => {
    setCurrentStep('hello-kitty');
  };

  const handleKittyComplete = () => {
    setCurrentStep('envelope');
  };

  const handleEnvelopeClick = () => {
    setCurrentStep('letter');
  };

  const handleMoreClick = () => {
    setCurrentStep('surprise');
  };

  const resetToButterfly = () => {
    setCurrentStep('butterfly');
  };

  return (
    <>
      {/* Butterfly always flies (Step 1) */}
      {currentStep === 'butterfly' && (
        <ButterflyAnimation onButterflyClick={handleButterflyClick} />
      )}

      {/* Hello Kitty appears (Step 2) */}
      <HelloKittyScene 
        isVisible={currentStep === 'hello-kitty'} 
        onComplete={handleKittyComplete} 
      />

      {/* Envelope interaction (Step 3) */}
      <EnvelopeInteraction 
        isVisible={currentStep === 'envelope'} 
        onEnvelopeClick={handleEnvelopeClick} 
      />

      {/* Love letter (Step 4) */}
      <LoveLetter 
        isVisible={currentStep === 'letter'} 
        onMoreClick={handleMoreClick} 
      />

      {/* Surprise reveal (Step 5) */}
      <SurpriseReveal 
        isVisible={currentStep === 'surprise'} 
        whatsappNumber={whatsappNumber}
        whatsappMessage={whatsappMessage}
      />

      {/* Debug button to reset (remove in production) */}
      {currentStep !== 'butterfly' && (
        <button
          onClick={resetToButterfly}
          className="fixed bottom-4 left-4 z-50 bg-love-pink text-white px-4 py-2 rounded-full font-kawaii text-sm opacity-50 hover:opacity-100 transition-opacity"
        >
          ↻ Reset
        </button>
      )}
    </>
  );
};

export default LoveOSFeature;