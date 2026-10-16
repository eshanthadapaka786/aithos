import React, { useState } from 'react';
import { Shield, ArrowRight, CheckCircle2, Lock, Cpu, Eye, EyeOff, Layers, Scan } from 'lucide-react';
import { sound } from '../utils/sound';

interface Step3Props {
  onContinueToWhyImportant: () => void;
}

export const Step3AithosPreservingAI: React.FC<Step3Props> = ({ onContinueToWhyImportant }) => {
  const [phase, setPhase] = useState<'idle' | 'paused_workflow' | 'redacting' | 'completed'>('idle');
  const [isRedacted, setIsRedacted] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'cloud_view' | 'local_view'>('cloud_view');

  const handleStartAithos = () => {
    sound.playPop();
    setPhase('paused_workflow');

    // After 2.5 seconds of showing the workflow pause, begin the live redaction
    setTimeout(() => {
      sound.playReward();
      setPhase('redacting');
      setIsRedacted(true);

      // After 2.2 seconds of redaction, complete the task safely
      setTimeout(() => {
        sound.playReward();
        setPhase('completed');
      }, 2200);
    }, 2800);
  };

  const handleToggleView = () => {
    sound.playPop();
    setViewMode((prev) => (prev === 'cloud_view' ? 'local_view' : 'cloud_view'));
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
        padding: '1.5rem 2rem',
        overflowY: 'auto',
        position: 'relative',
      }}
    >
      <div className="clay-ambient-orb-1" />
      <div className="clay-ambient-orb-2" />

      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '820px', marginBottom: '1.25rem' }}>
        <div
          className="clay-pill"
          style={{
            marginBottom: '0.45rem',
            background: '#ecfdf5',
            color: '#065f46',
          }}
        >
          <Shield size={14} color="#10b981" />
          <span>STEP 2: THE AITHOS SOLUTION</span>
        </div>

        <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a' }}>
          Meet AITHOS: Privacy-Preserving AI
        </h2>
        <p style={{ color: '#64748b', fontSize: '0.95rem', marginTop: '0.25rem' }}>
          Using the <strong>exact same patient file and task for John Smith</strong>. Watch how AITHOS intervenes locally before a single byte leaves your computer.
        </p>
      </div>

      {/* AITHOS Pause & Workflow Card */}
      {phase === 'paused_workflow' && (
        <div
          className="clay-card animate-fade-up"
          style={{
            maxWidth: '860px',
            width: '100%',
            padding: '1.75rem 2rem',
            background: 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)',
            border: '2px solid #6366f1',
            marginBottom: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: '#4f46e5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Lock size={18} color="#ffffff" />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#312e81' }}>
              ⏸️ PAUSE: AITHOS is inspecting data locally before network transmission...
            </h3>
          </div>

          <p style={{ fontSize: '0.88rem', color: '#4338ca', lineHeight: 1.5, marginBottom: '1rem' }}>
            Before anything crosses the internet, AITHOS checks every field against zero-knowledge policies right in your device's memory in <strong>3.2 milliseconds</strong>:
          </p>

          {/* 3 Step Workflow Graphic */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
            }}
          >
            <div className="clay-card-sm" style={{ padding: '0.85rem 1rem', background: '#ffffff' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#4f46e5' }}>01. LOCAL INTERCEPT</div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginTop: '0.2rem' }}>
                DOM Node Capture
              </div>
              <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.2rem' }}>
                Stops transmission socket on client device.
              </p>
            </div>

            <div className="clay-card-sm" style={{ padding: '0.85rem 1rem', background: '#ffffff', border: '1.5px solid #10b981' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#10b981' }}>02. REDACT & TOKENIZE</div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginTop: '0.2rem' }}>
                DOM & Visual Perception
              </div>
              <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.2rem' }}>
                Replaces names & SSN with safe surrogate tokens.
              </p>
            </div>

            <div className="clay-card-sm" style={{ padding: '0.85rem 1rem', background: '#ffffff' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#4f46e5' }}>03. CLOUD INFERENCE</div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginTop: '0.2rem' }}>
                Zero-PII Payload
              </div>
              <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.2rem' }}>
                External AI computes using only safe tokens.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Document View with Live Redaction Simulation */}
      <div
        className="clay-card animate-fade-up"
        style={{
          maxWidth: '860px',
          width: '100%',
          padding: '1.5rem',
          marginBottom: '1.5rem',
          border: isRedacted ? '2.5px solid #10b981' : '1.5px solid rgba(255, 255, 255, 0.95)',
          boxShadow: isRedacted
            ? '0 0 28px rgba(16, 185, 129, 0.25), var(--clay-shadow-main)'
            : 'var(--clay-shadow-main)',
          transition: 'border 0.4s ease, box-shadow 0.4s ease',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Cpu size={18} color="#10b981" />
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>
              Hospital Record #MGH-88419 — John Smith
            </h4>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {isRedacted && (
              <button
                onClick={handleToggleView}
                className="clay-btn clay-btn-secondary"
                style={{
                  padding: '0.25rem 0.75rem',
                  fontSize: '0.74rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                {viewMode === 'cloud_view' ? (
                  <>
                    <Eye size={13} color="#4f46e5" />
                    <span>View Your Local Screen</span>
                  </>
                ) : (
                  <>
                    <EyeOff size={13} color="#10b981" />
                    <span>View What Cloud AI Sees</span>
                  </>
                )}
              </button>
            )}

            <div
              style={{
                fontSize: '0.72rem',
                fontWeight: 800,
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                background: isRedacted ? '#dcfce7' : '#fee2e2',
                color: isRedacted ? '#15803d' : '#b91c1c',
              }}
            >
              {isRedacted ? '🛡️ TOKENIZED VIA DOM + VISUAL PERCEPTION' : 'UNSHIELDED RAW STATE'}
            </div>
          </div>
        </div>

        {/* Live Redacting Document Box (Highlighted after redaction) */}
        <div
          className="clay-inset-panel font-mono"
          style={{
            padding: '1.25rem',
            marginBottom: '1.25rem',
            fontSize: '0.84rem',
            lineHeight: 1.8,
            border: isRedacted ? '1.5px solid #a7f3d0' : '1px solid rgba(255, 255, 255, 0.6)',
            background: isRedacted ? '#f0fdf4' : '#e9eef6',
            transition: 'all 0.4s ease',
          }}
        >
          {/* Patient Name */}
          <div>
            <strong>Patient Name:</strong>{' '}
            <span
              style={{
                background: isRedacted ? '#dcfce7' : '#fee2e2',
                color: isRedacted ? '#15803d' : '#b91c1c',
                padding: '0.1rem 0.45rem',
                borderRadius: '4px',
                fontWeight: 700,
                transition: 'all 0.3s ease',
              }}
            >
              {isRedacted
                ? viewMode === 'cloud_view'
                  ? '<AUTH_SUBJECT_TOKEN_0x89A>'
                  : 'John Smith (Decoded for You Only)'
                : 'John Smith'}
            </span>
          </div>

          {/* SSN */}
          <div>
            <strong>SSN:</strong>{' '}
            <span
              style={{
                background: isRedacted ? '#dcfce7' : '#fee2e2',
                color: isRedacted ? '#15803d' : '#b91c1c',
                padding: '0.1rem 0.45rem',
                borderRadius: '4px',
                fontWeight: 700,
                transition: 'all 0.3s ease',
              }}
            >
              {isRedacted
                ? viewMode === 'cloud_view'
                  ? '<GOV_ID_HASH_MASKED>'
                  : '123-45-6789 (Decoded for You Only)'
                : '123-45-6789'}
            </span>
          </div>

          {/* Address */}
          <div>
            <strong>Home Address:</strong>{' '}
            <span
              style={{
                background: isRedacted ? '#dcfce7' : '#fee2e2',
                color: isRedacted ? '#15803d' : '#b91c1c',
                padding: '0.1rem 0.45rem',
                borderRadius: '4px',
                fontWeight: 700,
                transition: 'all 0.3s ease',
              }}
            >
              {isRedacted
                ? viewMode === 'cloud_view'
                  ? '<GEO_REGION_NE_URBAN>'
                  : '42 Maple Street, Boston MA (Decoded for You Only)'
                : '42 Maple Street, Boston MA'}
            </span>
          </div>

          {/* Credit Card */}
          <div>
            <strong>Billing Visa Card:</strong>{' '}
            <span
              style={{
                background: isRedacted ? '#dcfce7' : '#fee2e2',
                color: isRedacted ? '#15803d' : '#b91c1c',
                padding: '0.1rem 0.45rem',
                borderRadius: '4px',
                fontWeight: 700,
                transition: 'all 0.3s ease',
              }}
            >
              {isRedacted
                ? viewMode === 'cloud_view'
                  ? '<PAYMENT_METHOD_TOKEN_VERIFIED>'
                  : '4532-••••-••••-8812 (Decoded for You Only)'
                : '4532-••••-••••-8812'}
            </span>
          </div>

          {/* Psychiatric Note */}
          <div>
            <strong>Doctor Note:</strong>{' '}
            <span
              style={{
                background: isRedacted ? '#f1f5f9' : '#fee2e2',
                color: isRedacted ? '#64748b' : '#b91c1c',
                padding: '0.1rem 0.45rem',
                borderRadius: '4px',
                fontWeight: 700,
                transition: 'all 0.3s ease',
              }}
            >
              {isRedacted ? '<REDACTED_IRRELEVANT_PSYCH_NOTE>' : 'Patient reports high anxiety regarding custody dispute.'}
            </span>
          </div>

          {/* Unaltered Task Relevant Context */}
          <div style={{ color: '#0369a1', fontWeight: 600, marginTop: '0.5rem' }}>
            <strong>Allergies (Task Relevant):</strong> Severe Anaphylaxis to Penicillin-G.
          </div>
          <div style={{ color: '#0369a1', fontWeight: 600 }}>
            <strong>Prescription Schedule (Task Relevant):</strong> Azithromycin 500mg Day 1, 250mg Days 2-5.
          </div>
        </div>

        {/* DOM & Visual Perception Explanation Callout (Appears after redaction) */}
        {isRedacted && (
          <div
            className="clay-card-sm animate-fade-up"
            style={{
              padding: '1.15rem 1.35rem',
              background: '#f8fafc',
              borderLeft: '4px solid #10b981',
              marginBottom: '1.25rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#059669', textTransform: 'uppercase' }}>
                🔍 HOW AITHOS SANITIZED THIS IN 3.2ms:
              </span>
            </div>

            <h5 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.45rem' }}>
              Multi-Modal Protection via DOM Inspection & Visual Perception
            </h5>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.5rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <Layers size={17} color="#4f46e5" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '0.82rem', color: '#1e293b' }}>1. DOM Structural Inspection:</strong>
                  <p style={{ fontSize: '0.76rem', color: '#64748b', lineHeight: 1.4, marginTop: '0.15rem' }}>
                    AITHOS parses the HTML/Document Object Model tree and input field nodes in memory to identify semantic PII tags before network serialization.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <Scan size={17} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '0.82rem', color: '#1e293b' }}>2. Visual Perception Models:</strong>
                  <p style={{ fontSize: '0.76rem', color: '#64748b', lineHeight: 1.4, marginTop: '0.15rem' }}>
                    Runs layout-aware spatial perception and bounding-box OCR to ensure no floating visual text, stamps, or rendered canvas elements bypass the filter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Button Strip */}
        {phase === 'idle' && (
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={handleStartAithos}
              className="clay-btn clay-btn-success"
              style={{ padding: '0.85rem 2.2rem', fontSize: '1rem' }}
            >
              <span>Run Task with AITHOS Shield</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}

        {/* Completed Safe Verdict Card */}
        {phase === 'completed' && (
          <div
            className="clay-card-sm animate-fade-up"
            style={{
              padding: '1.25rem 1.5rem',
              background: '#ecfdf5',
              border: '2px solid #10b981',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.35rem' }}>
              <CheckCircle2 size={22} color="#059669" />
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#065f46' }}>
                Task Complete: 100% Correct Answer with ZERO Leaks!
              </h4>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#047857', lineHeight: 1.5 }}>
              The AI calculated the allergy contraindications and dosage schedule flawlessly using only surrogate tokens. On your screen, AITHOS instantly unmasks the answer back to John Smith. The third-party cloud received <strong>0 bytes of John's personal identity</strong>.
            </p>

            <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
              <button
                onClick={() => {
                  sound.playReward();
                  onContinueToWhyImportant();
                }}
                className="clay-btn clay-btn-primary"
                style={{ padding: '0.75rem 2rem', fontSize: '0.96rem' }}
              >
                <span>Why is AITHOS Important?</span>
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
