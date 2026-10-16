import React, { useState, useEffect } from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { sound } from '../utils/sound';

interface Step1Props {
  onCountdownComplete: () => void;
}

export const Step1WelcomeCountdown: React.FC<Step1Props> = ({ onCountdownComplete }) => {
  const [isCounting, setIsCounting] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(3);

  const handleStart = () => {
    sound.playPop();
    setIsCounting(true);
  };

  useEffect(() => {
    if (!isCounting) return;

    if (countdown > 0) {
      sound.playPop();
      const timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      sound.playReward();
      onCountdownComplete();
    }
  }, [isCounting, countdown, onCountdownComplete]);

  return (
    <div
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        position: 'relative',
      }}
    >
      <div className="clay-ambient-orb-1" />
      <div className="clay-ambient-orb-2" />

      {!isCounting ? (
        <div
          className="clay-card animate-fade-up"
          style={{
            maxWidth: '620px',
            width: '100%',
            padding: '3rem 2.5rem',
            textAlign: 'center',
          }}
        >
          {/* Minimal Clay Logo */}
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
              boxShadow: 'var(--clay-shadow-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.75rem auto',
              border: '2px solid #ffffff',
            }}
          >
            <Shield size={40} color="#ffffff" strokeWidth={2.4} />
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              marginBottom: '0.85rem',
              lineHeight: 1.2,
            }}
          >
            AITHOS Privacy Shield
          </h1>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#475569',
              lineHeight: 1.6,
              maxWidth: '480px',
              margin: '0 auto 2.25rem auto',
            }}
          >
            Standard AI assistants secretly upload your confidential documents and personal identity to external clouds. See the risk, then see how AITHOS protects you.
          </p>

          <button
            onClick={handleStart}
            className="clay-btn clay-btn-primary"
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              borderRadius: '9999px',
            }}
          >
            <span>Understand Our Project</span>
            <ArrowRight size={20} />
          </button>

          <p
            style={{
              fontSize: '0.82rem',
              color: '#64748b',
              marginTop: '1.25rem',
              lineHeight: 1.5,
            }}
          >
            <span style={{ fontWeight: 700, color: '#475569' }}>Note:</span> You will be redirected to the actual live AITHOS Project after this short explanation of our project.
          </p>
        </div>
      ) : (
        /* Clean 3-Second Countdown Card */
        <div
          className="clay-card animate-fade-up"
          style={{
            maxWidth: '440px',
            width: '100%',
            padding: '3.5rem 2rem',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#6366f1', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Preparing Simulation
          </div>

          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: '#eef2ff',
              boxShadow: 'var(--clay-shadow-inset)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
              border: '2px solid #ffffff',
            }}
          >
            <span
              key={countdown}
              className="animate-fade-in"
              style={{
                fontSize: '4.5rem',
                fontWeight: 900,
                color: '#4f46e5',
                lineHeight: 1,
              }}
            >
              {countdown > 0 ? countdown : 'Go!'}
            </span>
          </div>

          <p style={{ fontSize: '0.95rem', color: '#64748b' }}>
            Launching standard AI agent environment...
          </p>
        </div>
      )}
    </div>
  );
};
