import React from 'react';
import { Shield, ExternalLink, RotateCcw, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/sound';

interface Step5Props {
  onRestart: () => void;
}

export const Step5PrototypePortal: React.FC<Step5Props> = ({ onRestart }) => {
  const targetUrl = 'https://aithos-protect.mohansaikrishnab1801.workers.dev/';

  const handleEnterPrototype = () => {
    sound.playReward();
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

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

      {/* Fade-Up Prototype Reveal Card */}
      <div
        className="clay-card animate-fade-up"
        style={{
          maxWidth: '680px',
          width: '100%',
          padding: '3rem 2.5rem',
          textAlign: 'center',
          border: '2px solid rgba(255, 255, 255, 0.95)',
        }}
      >
        {/* Tactile Shield Icon */}
        <div
          style={{
            width: '84px',
            height: '84px',
            borderRadius: '26px',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            boxShadow: 'var(--clay-shadow-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem auto',
            border: '2px solid #ffffff',
          }}
        >
          <Shield size={44} color="#ffffff" strokeWidth={2.4} />
        </div>

        <div
          className="clay-pill"
          style={{
            marginBottom: '0.85rem',
            background: '#ecfdf5',
            color: '#065f46',
            border: '1.5px solid #ffffff',
          }}
        >
          <CheckCircle2 size={15} color="#10b981" />
          <span>PRODUCTION CLOUDFLARE WORKER DEPLOYMENT</span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
            fontWeight: 900,
            color: '#0f172a',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            marginBottom: '0.85rem',
          }}
        >
          Enter the Real World AITHOS
        </h1>

        <p
          style={{
            fontSize: '1.05rem',
            color: '#475569',
            lineHeight: 1.6,
            maxWidth: '520px',
            margin: '0 auto 2rem auto',
          }}
        >
          You’ve seen the risk of standard AI and the power of local tokenization. Now experience our real-world live prototype deployed on Cloudflare edge workers.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={handleEnterPrototype}
            className="clay-btn clay-btn-success"
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1.05rem',
            }}
          >
            <span>Launch AITHOS Prototype</span>
            <ExternalLink size={20} />
          </button>

          <button
            onClick={() => {
              sound.playPop();
              onRestart();
            }}
            className="clay-btn clay-btn-secondary"
            style={{
              padding: '1rem 1.6rem',
              fontSize: '0.95rem',
            }}
          >
            <RotateCcw size={16} />
            <span>Replay Walkthrough</span>
          </button>
        </div>

        <div style={{ marginTop: '1.5rem', fontSize: '0.78rem', color: '#94a3b8' }}>
          Connects to: <code>aithos-protect.mohansaikrishnab1801.workers.dev</code>
        </div>
      </div>
    </div>
  );
};
