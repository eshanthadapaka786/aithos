import React from 'react';
import { Shield, Sparkles, ArrowRight, Zap, CheckCircle2, Lock } from 'lucide-react';
import { AudienceMode } from '../types';
import { sound } from '../utils/sound';

interface Scene1Props {
  audienceMode: AudienceMode;
  onEnter: () => void;
  onOpenQuickSummary: () => void;
}

export const Scene1Opening: React.FC<Scene1Props> = ({
  audienceMode,
  onEnter,
  onOpenQuickSummary,
}) => {
  return (
    <div
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        overflow: 'hidden',
      }}
    >
      {/* Ambient Clay Glow Elements */}
      <div className="clay-ambient-orb-1" />
      <div className="clay-ambient-orb-2" />

      {/* Center Tactile Clay Shield Hero Icon */}
      <div
        className="animate-float"
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.75rem',
        }}
      >
        {/* Clay Outer Ring */}
        <div
          style={{
            width: '130px',
            height: '130px',
            borderRadius: '36px',
            background: 'linear-gradient(135deg, #ffffff 0%, #eef2ff 100%)',
            boxShadow: '14px 18px 36px rgba(160, 175, 202, 0.4), -12px -12px 28px #ffffff, inset 3px 3px 6px #ffffff, inset -3px -3px 6px rgba(160, 175, 202, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(255, 255, 255, 0.9)',
          }}
        >
          <div
            style={{
              width: '84px',
              height: '84px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
              boxShadow: '6px 8px 18px rgba(79, 70, 229, 0.35), inset 2px 2px 4px rgba(255, 255, 255, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #ffffff',
            }}
          >
            <Shield size={46} color="#ffffff" strokeWidth={2.4} />
          </div>
        </div>

        {/* Floating Mini Badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '-10px',
            right: '-10px',
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: '#10b981',
            boxShadow: '4px 6px 14px rgba(16, 185, 129, 0.35), inset 2px 2px 3px rgba(255, 255, 255, 0.5)',
            border: '2px solid #ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Sparkles size={20} color="#ffffff" />
        </div>
      </div>

      {/* Main Pitch & Title */}
      <div style={{ textAlign: 'center', maxWidth: '720px', zIndex: 10 }}>
        <div
          className="clay-pill animate-pulse-pill"
          style={{
            marginBottom: '1rem',
            background: '#e0e7ff',
            color: '#4338ca',
            border: '1.5px solid #ffffff',
          }}
        >
          <Sparkles size={14} color="#4f46e5" />
          <span>HACKATHON JURY INTERACTIVE EXPERIENCE</span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
            fontWeight: 900,
            color: '#0f172a',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: '0.85rem',
          }}
        >
          AITHOS Privacy Shield
        </h1>

        <p
          style={{
            fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
            color: '#475569',
            lineHeight: 1.6,
            maxWidth: '640px',
            margin: '0 auto 1.85rem auto',
          }}
        >
          {audienceMode === '5th_grader' ? (
            <span>
              👋 <strong>Hey there, Juror Detective!</strong> Did you know regular AI accidentally sends people's secret passwords and doctor notes to the cloud? Let's stop the leaks with our magical secret spy code shield! 🕵️‍♂️✨
            </span>
          ) : (
            <span>
              The client-side Zero-Knowledge privacy shield that intercepts and anonymizes confidential records in <strong>under 3 milliseconds</strong> before any data crosses the external AI inference boundary.
            </span>
          )}
        </p>

        {/* 3 Core Value Clay Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.85rem',
            marginBottom: '2rem',
          }}
        >
          <div className="clay-pill" style={{ background: '#ecfdf5', color: '#065f46' }}>
            <CheckCircle2 size={16} color="#10b981" />
            <span>0 Bytes PII Sent to Cloud</span>
          </div>
          <div className="clay-pill" style={{ background: '#eff6ff', color: '#1e40af' }}>
            <Zap size={16} color="#3b82f6" />
            <span>&lt;3ms Local Tokenization</span>
          </div>
          <div className="clay-pill" style={{ background: '#f5f3ff', color: '#5b21b6' }}>
            <Lock size={16} color="#8b5cf6" />
            <span>Zero-Knowledge Vault</span>
          </div>
        </div>

        {/* Tactile Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <button
            onClick={() => {
              sound.playReward();
              onEnter();
            }}
            className="clay-btn clay-btn-primary"
            style={{
              padding: '0.85rem 2.2rem',
              fontSize: '1.05rem',
            }}
          >
            <span>Start Juror Mission (+50 XP)</span>
            <ArrowRight size={20} />
          </button>

          <button
            onClick={() => {
              sound.playPop();
              onOpenQuickSummary();
            }}
            className="clay-btn clay-btn-secondary"
            style={{
              padding: '0.85rem 1.6rem',
              fontSize: '0.95rem',
            }}
          >
            <Zap size={18} color="#4f46e5" />
            <span>60s Speed Run</span>
          </button>
        </div>
      </div>
    </div>
  );
};
