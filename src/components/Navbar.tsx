import React from 'react';
import { Shield, Volume2, VolumeX, RotateCcw } from 'lucide-react';
import { sound } from '../utils/sound';

export type FlowStep = 'welcome' | 'standard_ai' | 'aithos_intro' | 'why_important' | 'prototype_portal';

interface NavbarProps {
  currentStep: FlowStep;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onRestart: () => void;
}

const STEP_LABELS: Record<FlowStep, string> = {
  welcome: 'Start',
  standard_ai: '1. Standard AI Risk',
  aithos_intro: '2. AITHOS Solution',
  why_important: '3. Real News & Impact',
  prototype_portal: '4. Live Prototype',
};

export const Navbar: React.FC<NavbarProps> = ({
  currentStep,
  soundEnabled,
  onToggleSound,
  onRestart,
}) => {
  return (
    <header
      style={{
        width: '100%',
        height: '64px',
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 50,
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1.5px solid rgba(226, 232, 240, 0.8)',
      }}
    >
      {/* Brand */}
      <button
        onClick={() => {
          sound.playPop();
          onRestart();
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
        }}
        title="Restart Experience"
      >
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '11px',
            background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--clay-shadow-sm)',
            border: '1.5px solid #ffffff',
          }}
        >
          <Shield size={20} color="#ffffff" strokeWidth={2.4} />
        </div>

        <span
          style={{
            fontWeight: 800,
            fontSize: '1.15rem',
            letterSpacing: '-0.02em',
            color: '#0f172a',
          }}
        >
          AITHOS
        </span>
      </button>

      {/* Step Indicator (When active) */}
      {currentStep !== 'welcome' && (
        <div
          className="clay-pill"
          style={{
            background: '#ffffff',
            border: '1.5px solid #e2e8f0',
            fontSize: '0.8rem',
            color: '#334155',
            fontWeight: 700,
          }}
        >
          {STEP_LABELS[currentStep]}
        </div>
      )}

      {/* Right Controls: Restart & Sound */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
        {currentStep !== 'welcome' && (
          <button
            onClick={() => {
              sound.playPop();
              onRestart();
            }}
            className="clay-btn clay-btn-secondary"
            style={{
              padding: '0.35rem 0.85rem',
              fontSize: '0.78rem',
            }}
            title="Restart Experience"
          >
            <RotateCcw size={14} />
            <span>Restart</span>
          </button>
        )}

        <button
          onClick={() => {
            onToggleSound();
            sound.playPop();
          }}
          className="clay-btn clay-btn-secondary"
          style={{
            width: '36px',
            height: '36px',
            padding: 0,
            borderRadius: '50%',
          }}
          title={soundEnabled ? 'Mute sound' : 'Enable sound'}
        >
          {soundEnabled ? (
            <Volume2 size={16} color="#475569" />
          ) : (
            <VolumeX size={16} color="#94a3b8" />
          )}
        </button>
      </div>
    </header>
  );
};
