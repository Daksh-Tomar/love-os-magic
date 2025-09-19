import React from 'react';
import LoveOSFeature from '@/components/LoveOSFeature';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Desktop Background with Magical Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-love-pink/20 via-love-purple/20 to-love-blue/20"></div>
      
      {/* Desktop Content Area */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="text-center font-kawaii">
          <h1 className="mb-4 text-6xl font-bold text-gradient-magical animate-gentle-float">
            ✨ Love OS ✨
          </h1>
          <p className="text-xl text-love-purple font-semibold mb-8 animate-gentle-float">
            A magical desktop experience 💖
          </p>
          <div className="text-sm text-gray-600 font-kawaii">
            Look for the flying butterfly... 🦋
          </div>
        </div>
      </div>
      
      {/* Love OS Magical Feature */}
      <LoveOSFeature 
        whatsappNumber="1234567890"
        whatsappMessage="Hi! I got your magical surprise! 💖✨ This Love OS is amazing!"
      />
    </div>
  );
};

export default Index;
