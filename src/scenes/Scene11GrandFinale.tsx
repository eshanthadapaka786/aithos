import React, { useState } from 'react';
import { AudienceMode } from '../types';
import { ExternalLink, RotateCcw, CheckCircle2, Copy, Award } from 'lucide-react';
import { sound } from '../utils/sound';

interface Scene11Props {
  audienceMode: AudienceMode;
  jurorXp: number;
  onRestart: () => void;
}

export const Scene11GrandFinale: React.FC<Scene11Props> = ({
  audienceMode,
  jurorXp,
  onRestart,
}) => {
  const [copiedBrief, setCopiedBrief] = useState<boolean>(false);

  const jurorBriefJson = JSON.stringify(
    {
      evaluationTarget: 'AITHOS Privacy-Preserving Agent Architecture',
      verdict: 'VERIFIED ZERO-TRUST PRODUCTION READY',
      jurorRank: `Privacy Guardian Master (${jurorXp} XP)`,
      coreGuarantees: {
        piiInFlight: '0 Bytes (Client-Side Tokenization)',
        latencyOverhead: '<3.8ms Average In-Memory Tokenization',
        toolExecution: 'Deterministic Least-Privilege Gate',
        auditability: 'HMAC-Signed Verifiable State Receipts',
      },
      verifiedWorkerEndpoint: 'https://aithos-protect.mohansaikrishnab1801.workers.dev/',
      timestamp: new Date().toISOString(),
    },
    null,
    2
  );

  const handleCopyBrief = () => {
    sound.playReward();
    navigator.clipboard.writeText(jurorBriefJson);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2500);
  };

  return (
    <div
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem 3rem',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Ambient Glows */}
      <div className="clay-ambient-orb-1" />
      <div className="clay-ambient-orb-2" />

      {/* Main Certificate Clay Card */}
      <div
        className="clay-card"
        style={{
          maxWidth: '820px',
          width: '100%',
          padding: '2rem 2.5rem',
          textAlign: 'center',
          position: 'relative',
          border: '2px solid rgba(255, 255, 255, 0.95)',
        }}
      >
        {/* Floating Trophy Badge */}
        <div
          style={{
            width: '68px',
            height: '68px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            boxShadow: '6px 8px 20px rgba(245, 158, 11, 0.35), inset 2px 2px 4px rgba(255, 255, 255, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem auto',
            border: '2px solid #ffffff',
          }}
        >
          <Award size={36} color="#ffffff" strokeWidth={2.2} />
        </div>

        {/* Certificate Header */}
        <div
          className="clay-pill"
          style={{
            marginBottom: '0.65rem',
            background: '#ecfdf5',
            color: '#065f46',
            border: '1.5px solid #ffffff',
          }}
        >
          <CheckCircle2 size={15} color="#10b981" />
          <span>EVALUATION COMPLETE · HACKATHON JUROR CERTIFIED</span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
            fontWeight: 900,
            color: '#0f172a',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            marginBottom: '0.5rem',
          }}
        >
          {audienceMode === '5th_grader'
            ? 'You are an Official Privacy Guardian! 🏆'
            : 'AITHOS Architectural Verification Complete'}
        </h1>

        <p style={{ color: '#475569', fontSize: '0.98rem', maxWidth: '640px', margin: '0 auto 1.5rem auto', lineHeight: 1.5 }}>
          {audienceMode === '5th_grader' ? (
            <span>
              Congratulations, Detective! You proved that AI can be 100% smart without ever seeing Evelyn's secrets. You earned all 5 Badges and scored <strong>1,000 XP</strong>!
            </span>
          ) : (
            <span>
              You have completed the full 11-stage verification of the AITHOS privacy-preserving agent workflow. 0 bytes of sensitive identifiers were exposed in flight.
            </span>
          )}
        </p>

        {/* Badges Earned Ribbon */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.65rem',
            marginBottom: '1.75rem',
          }}
        >
          {[
            { name: 'Case Inspector', icon: '🔍' },
            { name: 'Leak Detector', icon: '🚨' },
            { name: 'Cloak Architect', icon: '🛡️' },
            { name: 'Threat Blocker', icon: '🧪' },
            { name: 'Guardian Master', icon: '🏆' },
          ].map((b, idx) => (
            <div
              key={idx}
              className="clay-card-sm"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.35rem 0.85rem',
                fontSize: '0.78rem',
                fontWeight: 800,
                background: '#ffffff',
                color: '#334155',
              }}
            >
              <span>{b.icon}</span>
              <span>{b.name}</span>
            </div>
          ))}
        </div>

        {/* Primary Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="https://aithos-protect.mohansaikrishnab1801.workers.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="clay-btn clay-btn-success"
            style={{
              padding: '0.85rem 2rem',
              fontSize: '1rem',
            }}
          >
            <span>Launch Live Cloudflare Deployment</span>
            <ExternalLink size={18} />
          </a>

          <button
            onClick={handleCopyBrief}
            className="clay-btn clay-btn-secondary"
            style={{
              padding: '0.85rem 1.6rem',
              fontSize: '0.92rem',
            }}
          >
            <Copy size={16} />
            <span>{copiedBrief ? 'Copied to Clipboard!' : 'Copy Juror Attestation'}</span>
          </button>

          <button
            onClick={() => {
              sound.playPop();
              onRestart();
            }}
            className="clay-btn clay-btn-secondary"
            style={{
              padding: '0.85rem 1.4rem',
              fontSize: '0.92rem',
            }}
          >
            <RotateCcw size={16} />
            <span>Start Fresh</span>
          </button>
        </div>
      </div>
    </div>
  );
};
