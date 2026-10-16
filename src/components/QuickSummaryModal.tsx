import React from 'react';
import { X, Shield, AlertTriangle, CheckCircle2, ArrowRight, ExternalLink, Zap } from 'lucide-react';
import { sound } from '../utils/sound';

interface QuickSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartMission: () => void;
}

export const QuickSummaryModal: React.FC<QuickSummaryModalProps> = ({
  isOpen,
  onClose,
  onStartMission,
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.45)',
        backdropFilter: 'blur(8px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        className="clay-card"
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem 2.25rem',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            sound.playPop();
            onClose();
          }}
          className="clay-btn clay-btn-secondary"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '36px',
            height: '36px',
            padding: 0,
            borderRadius: '50%',
          }}
        >
          <X size={18} color="#64748b" />
        </button>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <div
            className="clay-pill"
            style={{
              background: '#e0e7ff',
              color: '#4338ca',
              marginBottom: '0.65rem',
            }}
          >
            <Zap size={15} color="#4f46e5" />
            <span>EXECUTIVE 60-SECOND BRIEFING</span>
          </div>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0f172a' }}>
            What is AITHOS in 3 Simple Steps?
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.95rem', marginTop: '0.35rem' }}>
            The fastest, clearest way to understand the AITHOS Zero-Trust Privacy Shield architecture.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
          {/* Step 1: The Problem */}
          <div
            className="clay-card-sm"
            style={{
              padding: '1.25rem 1.5rem',
              display: 'flex',
              gap: '1.25rem',
              alignItems: 'flex-start',
              borderLeft: '5px solid #f43f5e',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: '#ffe4e6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <AlertTriangle size={22} color="#e11d48" />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#e11d48', textTransform: 'uppercase' }}>
                1. The Trap: Everyday AI Leaks Your Secrets
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0.2rem 0' }}>
                78% to 92% of sent data is private and completely unnecessary
              </h4>
              <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.5 }}>
                When companies ask an AI to summarize a hospital record or analyze a business contract, standard AI dumps full legal names, Social Security Numbers, home addresses, and credit cards into third-party cloud servers.
              </p>
            </div>
          </div>

          {/* Step 2: The Solution */}
          <div
            className="clay-card-sm"
            style={{
              padding: '1.25rem 1.5rem',
              display: 'flex',
              gap: '1.25rem',
              alignItems: 'flex-start',
              borderLeft: '5px solid #4f46e5',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: '#e0e7ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Shield size={22} color="#4f46e5" />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#4f46e5', textTransform: 'uppercase' }}>
                2. The Shield: AITHOS Secret Spy Decoder
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0.2rem 0' }}>
                Client-Side Tokenization in Under 3 Milliseconds
              </h4>
              <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.5 }}>
                Before any packet crosses the internet boundary, AITHOS intercepts the document locally and swaps sensitive items with safe cryptographic tokens (e.g. <code>&lt;PATIENT_TOKEN_01&gt;</code>). The real identity never leaves your device.
              </p>
            </div>
          </div>

          {/* Step 3: The Result */}
          <div
            className="clay-card-sm"
            style={{
              padding: '1.25rem 1.5rem',
              display: 'flex',
              gap: '1.25rem',
              alignItems: 'flex-start',
              borderLeft: '5px solid #10b981',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: '#d1fae5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <CheckCircle2 size={22} color="#059669" />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#059669', textTransform: 'uppercase' }}>
                3. The Result: 100% Smart AI with Zero Leaks
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0.2rem 0' }}>
                Cryptographic Attestation & Verified Execution
              </h4>
              <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.5 }}>
                The AI reasons accurately on the sanitized tokens and returns the answer. AITHOS safely swaps the real name back on your private screen. Cloud servers retain 0 bytes of sensitive identity.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <a
            href="https://aithos-protect.mohansaikrishnab1801.workers.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="clay-btn clay-btn-secondary"
            style={{ fontSize: '0.86rem' }}
          >
            <ExternalLink size={16} />
            <span>Open Live Cloudflare Worker</span>
          </a>

          <button
            onClick={() => {
              sound.playPop();
              onStartMission();
            }}
            className="clay-btn clay-btn-primary"
            style={{ fontSize: '0.92rem', padding: '0.7rem 1.6rem' }}
          >
            <span>Play Interactive Mission</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </div>
  );
};
