import React, { useState, useCallback } from 'react';
import { Navbar, FlowStep } from './components/Navbar';
import { sound } from './utils/sound';

// Streamlined Step Scenes
import { Step1WelcomeCountdown } from './scenes/Step1WelcomeCountdown';
import { Step2StandardAISimulation } from './scenes/Step2StandardAISimulation';
import { Step3AithosPreservingAI } from './scenes/Step3AithosPreservingAI';
import { Step4WhyImportantNews } from './scenes/Step4WhyImportantNews';
import { Step5PrototypePortal } from './scenes/Step5PrototypePortal';

export const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<FlowStep>('welcome');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  const handleToggleSound = useCallback(() => {
    setSoundEnabled((prev) => {
      const next = !prev;
      sound.enabled = next;
      return next;
    });
  }, []);

  const handleRestart = useCallback(() => {
    setCurrentStep('welcome');
  }, []);

  return (
    <div className="viewport-frame">
      {/* Top Minimal Navigation Bar */}
      <Navbar
        currentStep={currentStep}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onRestart={handleRestart}
      />

      {/* Main Viewport Content */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 10,
        }}
      >
        {/* Step 1: Understand Project & 3s Countdown */}
        {currentStep === 'welcome' && (
          <Step1WelcomeCountdown
            onCountdownComplete={() => setCurrentStep('standard_ai')}
          />
        )}

        {/* Step 2: Standard AI Simulation (Sample Fake Website + Task + Hazard Sign) */}
        {currentStep === 'standard_ai' && (
          <Step2StandardAISimulation
            onContinueToAithos={() => setCurrentStep('aithos_intro')}
          />
        )}

        {/* Step 3: AITHOS Solution (Pause, Workflow & Live Redaction Simulation) */}
        {currentStep === 'aithos_intro' && (
          <Step3AithosPreservingAI
            onContinueToWhyImportant={() => setCurrentStep('why_important')}
          />
        )}

        {/* Step 4: Why AITHOS is Important + Real News Articles */}
        {currentStep === 'why_important' && (
          <Step4WhyImportantNews
            onContinueToPortal={() => setCurrentStep('prototype_portal')}
          />
        )}

        {/* Step 5: Fade-Up Card to Enter the Real World AITHOS Prototype */}
        {currentStep === 'prototype_portal' && (
          <Step5PrototypePortal onRestart={handleRestart} />
        )}
      </main>
    </div>
  );
};

export default App;
