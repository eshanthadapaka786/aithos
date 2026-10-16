import React, { useState, useEffect } from 'react';
import { PIPELINE_STAGES } from '../data/stages';
import { AudienceMode } from '../types';
import { Shield, ArrowRight, CheckCircle2, Cpu, Lock, Terminal, Search, ShieldAlert, Sparkles } from 'lucide-react';
import { sound } from '../utils/sound';

interface Scene6Props {
  audienceMode: AudienceMode;
  onContinue: () => void;
}

export const Scene6AithosReveal: React.FC<Scene6Props> = ({ audienceMode, onContinue }) => {
  const [activeStageId, setActiveStageId] = useState<number>(1);
  const [isAutoCycling, setIsAutoCycling] = useState<boolean>(true);

  useEffect(() => {
    if (!isAutoCycling) return;
    const interval = setInterval(() => {
      setActiveStageId((prev) => (prev >= 6 ? 1 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoCycling]);

  const activeStage = PIPELINE_STAGES.find((s) => s.id === activeStageId) || PIPELINE_STAGES[0];

  const getStageIcon = (name: string, color: string) => {
    switch (name) {
      case 'INSPECT':
        return <Search size={20} color={color} />;
      case 'DETECT':
        return <ShieldAlert size={20} color={color} />;
      case 'SANITIZE':
        return <Cpu size={20} color={color} />;
      case 'VALIDATE':
        return <Lock size={20} color={color} />;
      case 'EXECUTE':
        return <Terminal size={20} color={color} />;
      case 'VERIFY':
        return <CheckCircle2 size={20} color={color} />;
      default:
        return <Shield size={20} color={color} />;
    }
  };

  return (
    <div
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '1.25rem 2.5rem',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '1.25rem', maxWidth: '820px', margin: '0 auto 1.25rem auto' }}>
        <div
          className="clay-pill"
          style={{
            marginBottom: '0.45rem',
            background: '#e0e7ff',
            color: '#4338ca',
          }}
        >
          <Sparkles size={14} color="#4f46e5" />
          <span>THE SOLUTION: 6-STAGE ZERO-TRUST PIPELINE</span>
        </div>

        <h2 style={{ fontSize: 'clamp(1.75rem, 2.6vw, 2.3rem)', fontWeight: 800, color: '#0f172a' }}>
          {audienceMode === '5th_grader'
            ? 'Meet AITHOS: The 6-Step Secret Cloak! 🛡️✨'
            : 'The AITHOS Architectural Pipeline'}
        </h2>
        <p style={{ color: '#64748b', fontSize: '0.92rem', marginTop: '0.2rem' }}>
          {audienceMode === '5th_grader'
            ? '6 lightning-fast steps that run on your computer before any data touches the internet!'
            : 'Six deterministic stages executing in under 3 milliseconds on edge infrastructure.'}
        </p>
      </div>

      {/* 6 Stage Horizontal Navigator */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '0.75rem',
          maxWidth: '1150px',
          width: '100%',
          margin: '0 auto 1.25rem auto',
        }}
      >
        {PIPELINE_STAGES.map((stage) => {
          const isActive = stage.id === activeStageId;

          return (
            <button
              key={stage.id}
              onClick={() => {
                sound.playPop();
                setActiveStageId(stage.id);
                setIsAutoCycling(false);
              }}
              className="clay-card-sm clay-card-interactive"
              style={{
                padding: '0.85rem 0.65rem',
                textAlign: 'center',
                border: isActive ? '2px solid #6366f1' : '1.5px solid rgba(255, 255, 255, 0.9)',
                background: isActive ? 'linear-gradient(135deg, #ffffff 0%, #f5f3ff 100%)' : '#ffffff',
                transform: isActive ? 'translateY(-3px)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: isActive ? '#e0e7ff' : '#f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {getStageIcon(stage.name, isActive ? '#4f46e5' : '#64748b')}
              </div>
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#0f172a' }}>
                0{stage.id} {stage.name}
              </span>
              <span style={{ fontSize: '0.65rem', color: '#94a3b8' }}>
                {stage.latencyMs}ms
              </span>
            </button>
          );
        })}
      </div>

      {/* Deep Active Stage Showcase Clay Card */}
      <div
        className="clay-card"
        style={{
          maxWidth: '1150px',
          width: '100%',
          margin: '0 auto',
          flex: 1,
          padding: '1.5rem 2rem',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '2rem',
          minHeight: 0,
          overflowY: 'auto',
        }}
      >
        {/* Left Column: Stage Explanation */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 800,
                background: '#e0e7ff',
                color: '#4338ca',
                padding: '0.2rem 0.6rem',
                borderRadius: '9999px',
              }}
            >
              STAGE {activeStage.id} OF 6
            </span>
            <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 700 }}>
              ⏱️ Executed in {activeStage.latencyMs}ms
            </span>
          </div>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.35rem' }}>
            {audienceMode === '5th_grader' && activeStage.kidTagline
              ? activeStage.kidTagline
              : activeStage.tagline}
          </h3>

          <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            {audienceMode === '5th_grader' && activeStage.kidDescription
              ? activeStage.kidDescription
              : activeStage.description}
          </p>

          <div
            className="clay-card-sm"
            style={{
              padding: '0.85rem 1rem',
              background: '#f8fafc',
              borderLeft: '4px solid #4f46e5',
            }}
          >
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>
              TECHNICAL UNDER-THE-HOOD SPEC
            </span>
            <p style={{ fontSize: '0.82rem', color: '#334155', marginTop: '0.25rem', lineHeight: 1.5 }}>
              {activeStage.technicalDetails}
            </p>
          </div>
        </div>

        {/* Right Column: Input & Output Transformation View */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          {/* Sample Input */}
          <div className="clay-card-sm" style={{ padding: '1rem', background: '#fff1f2', border: '1px solid #fecdd3' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#e11d48', textTransform: 'uppercase' }}>
              RAW INGESTION (PRE-STAGE)
            </span>
            <div className="font-mono" style={{ fontSize: '0.82rem', color: '#be123c', marginTop: '0.35rem' }}>
              {activeStage.sampleInput}
            </div>
          </div>

          {/* Arrow Transformation */}
          <div style={{ textAlign: 'center' }}>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 800,
                background: '#e9eef6',
                color: '#64748b',
                padding: '0.2rem 0.75rem',
                borderRadius: '9999px',
              }}
            >
              TRANSFORMED IN {activeStage.latencyMs}ms ↓
            </span>
          </div>

          {/* Sample Output */}
          <div className="clay-card-sm" style={{ padding: '1rem', background: '#ecfdf5', border: '1px solid #a7f3d0' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#059669', textTransform: 'uppercase' }}>
              PROTECTED ATTESTATION (POST-STAGE)
            </span>
            <div className="font-mono" style={{ fontSize: '0.82rem', color: '#047857', marginTop: '0.35rem' }}>
              {activeStage.sampleOutput}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <button
          onClick={() => {
            sound.playReward();
            onContinue();
          }}
          className="clay-btn clay-btn-primary"
          style={{ padding: '0.75rem 2.2rem', fontSize: '0.98rem' }}
        >
          <span>Watch the Process Film (+50 XP)</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
