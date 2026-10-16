import React, { useState, useEffect } from 'react';
import { ExecutionConfig, AudienceMode } from '../types';
import { MISSIONS } from '../data/missions';
import { ArrowRight, Eye, EyeOff, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';
import { sound } from '../utils/sound';

interface Scene9Props {
  config: ExecutionConfig;
  audienceMode: AudienceMode;
  onContinue: () => void;
  onReconfigure: () => void;
}

export const Scene9ExecutionWatch: React.FC<Scene9Props> = ({
  config,
  audienceMode,
  onContinue,
  onReconfigure,
}) => {
  const mission = MISSIONS.find((m) => m.id === config.missionId) || MISSIONS[0];
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [showDeAnonymized, setShowDeAnonymized] = useState<boolean>(false);

  const isViolation = config.simulateViolation;

  const executionSteps = [
    {
      stage: '01_INSPECT',
      title: 'Payload Interception',
      log: `Ingested "${mission.documentTitle}" (${mission.rawPayload.length} attributes). Session origin tokenized.`,
      status: 'passed',
    },
    {
      stage: '02_DETECT',
      title: 'Local Entity Recognition',
      log: `Detected ${mission.rawPayload.filter((f) => f.isSensitive).length} sensitive fields. Classification confidence: 99.4%.`,
      status: 'passed',
    },
    {
      stage: '03_SANITIZE',
      title: 'Cryptographic Surrogate Mapping',
      log: config.policyMode === 'permissive_audit'
        ? 'Permissive Audit Mode active: Surrogate tokenization bypassed. Payloads logged in audit queue.'
        : `Replaced sensitive strings with deterministic tokens (<AUTH_SUBJECT_0x89A> etc). 0 PII exposed.`,
      status: config.policyMode === 'permissive_audit' ? 'warning' : 'passed',
    },
    {
      stage: '04_VALIDATE',
      title: 'Deterministic Policy Evaluation',
      log: isViolation
        ? 'CRITICAL ALERT: Proposed tool action violated security policy! Rule: PROHIBIT_UNAUTHORIZED_MUTATION. Tool call dropped.'
        : 'Action verified against JSON Schema policy: Rule ALLOW_READ_ONLY_ACCESS. Verdict: ALLOWED.',
      status: isViolation ? 'blocked' : 'passed',
    },
    {
      stage: '05_EXECUTE',
      title: 'Sandboxed Inference',
      log: isViolation
        ? 'Execution aborted by security supervisor. Zero mutation occurred.'
        : 'Worker returned structured clinical answer in 184ms with zero sensitive data in flight.',
      status: isViolation ? 'blocked' : 'passed',
    },
    {
      stage: '06_VERIFY',
      title: 'Cryptographic Attestation',
      log: isViolation
        ? 'Violation tamper receipt generated: #ATTEST-VIOLATION-DENIED-991A'
        : 'Receipt signed with HMAC-SHA256: #ATTEST-SAFE-VERIFIED-441F. Local de-tokenization complete.',
      status: isViolation ? 'blocked' : 'verified',
    },
  ];

  // Auto-advance telemetry steps
  useEffect(() => {
    if (currentStepIndex < executionSteps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStepIndex((prev) => prev + 1);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [currentStepIndex, executionSteps.length]);

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
          <span>LIVE EXECUTION TELEMETRY CHAMBER</span>
        </div>

        <h2 style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a' }}>
          {isViolation
            ? 'Threat Intercepted & Blocked! 🛡️'
            : 'Zero-Knowledge Execution Verified ✅'}
        </h2>
        <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '0.2rem' }}>
          {audienceMode === '5th_grader'
            ? 'Watch the step-by-step logs as AITHOS verifies every byte of data!'
            : 'Deterministic state-machine transitions executing across edge workers with HMAC attestation.'}
        </p>
      </div>

      {/* Main Grid: Left = Telemetry Feed; Right = Token Mapping & Receipt */}
      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1.15fr 1.2fr',
          gap: '1.25rem',
          maxWidth: '1150px',
          width: '100%',
          margin: '0 auto',
          minHeight: 0,
        }}
      >
        {/* Left Column: Telemetry Feed */}
        <div
          className="clay-card"
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '1.25rem 1.5rem',
            overflowY: 'auto',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>
              REAL-TIME EDGE TELEMETRY LOG
            </span>
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                color: '#15803d',
                background: '#dcfce7',
                padding: '0.15rem 0.5rem',
                borderRadius: '9999px',
              }}
            >
              ACTIVE STREAM
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {executionSteps.slice(0, currentStepIndex + 1).map((step, idx) => {
              const isBlocked = step.status === 'blocked';
              const isWarning = step.status === 'warning';

              return (
                <div
                  key={idx}
                  className="clay-card-sm"
                  style={{
                    padding: '0.75rem 1rem',
                    background: isBlocked ? '#fff1f2' : isWarning ? '#fffbeb' : '#f8fafc',
                    borderLeft: isBlocked ? '4px solid #f43f5e' : isWarning ? '4px solid #f59e0b' : '4px solid #10b981',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span className="font-mono" style={{ fontSize: '0.72rem', fontWeight: 800, color: '#4f46e5' }}>
                      {step.stage}
                    </span>
                    <span
                      style={{
                        fontSize: '0.65rem',
                        fontWeight: 800,
                        color: isBlocked ? '#e11d48' : '#15803d',
                      }}
                    >
                      {step.status.toUpperCase()}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#0f172a', margin: '0.2rem 0' }}>
                    {step.title}
                  </div>

                  <div className="font-mono" style={{ fontSize: '0.76rem', color: '#475569', lineHeight: 1.4 }}>
                    {step.log}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Client Token Mapping & Cryptographic Receipt */}
        <div
          className="clay-card"
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '1.25rem 1.5rem',
            overflowY: 'auto',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>
              CLIENT-SIDE VAULT LOOKUP
            </span>

            <button
              onClick={() => {
                sound.playPop();
                setShowDeAnonymized(!showDeAnonymized);
              }}
              className="clay-btn clay-btn-secondary"
              style={{
                padding: '0.25rem 0.65rem',
                fontSize: '0.72rem',
              }}
            >
              {showDeAnonymized ? (
                <>
                  <EyeOff size={13} />
                  <span>Show Masked Tokens</span>
                </>
              ) : (
                <>
                  <Eye size={13} />
                  <span>Reveal Local Plaintext</span>
                </>
              )}
            </button>
          </div>

          {/* Token Mapping Table */}
          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {mission.rawPayload.filter((f) => f.isSensitive).map((field) => (
              <div
                key={field.id}
                className="clay-card-sm font-mono"
                style={{
                  padding: '0.65rem 0.85rem',
                  fontSize: '0.76rem',
                  background: '#f8fafc',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ color: '#4f46e5', fontWeight: 700 }}>
                  {field.tokenReplacement}
                </div>
                <div style={{ color: showDeAnonymized ? '#e11d48' : '#94a3b8', fontWeight: 600 }}>
                  {showDeAnonymized ? field.value : '••••••••••••••••'}
                </div>
              </div>
            ))}
          </div>

          {/* Verification Box */}
          <div
            className="clay-card-sm"
            style={{
              padding: '0.85rem 1rem',
              marginTop: '1rem',
              background: '#ecfdf5',
              border: '1.5px solid #a7f3d0',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <ShieldCheck size={18} color="#059669" />
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#065f46' }}>
                Cryptographic Attestation Receipt #AITHOS-ATTEST-2026-981F4
              </span>
            </div>
            <p style={{ fontSize: '0.74rem', color: '#047857', lineHeight: 1.4 }}>
              HMAC-SHA256 signature verified against public key. In-transit PII exposure: 0.00%. Zero cloud leakage guarantee maintained.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '1rem',
        }}
      >
        <button
          onClick={() => {
            sound.playPop();
            onReconfigure();
          }}
          className="clay-btn clay-btn-secondary"
          style={{ padding: '0.65rem 1.4rem', fontSize: '0.88rem' }}
        >
          <RotateCcw size={15} />
          <span>Re-run Simulation</span>
        </button>

        <button
          onClick={() => {
            sound.playReward();
            onContinue();
          }}
          className="clay-btn clay-btn-primary"
          style={{ padding: '0.65rem 1.8rem', fontSize: '0.92rem' }}
        >
          <span>Compare Scorecard (+50 XP)</span>
          <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
};
