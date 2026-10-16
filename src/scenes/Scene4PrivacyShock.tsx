import React from 'react';
import { MissionOption, AudienceMode } from '../types';
import { ShieldAlert, ArrowRight, AlertTriangle } from 'lucide-react';
import { sound } from '../utils/sound';

interface Scene4Props {
  mission: MissionOption;
  audienceMode: AudienceMode;
  onContinue: () => void;
}

export const Scene4PrivacyShock: React.FC<Scene4Props> = ({
  mission,
  audienceMode,
  onContinue,
}) => {
  const totalFields = mission.rawPayload.length;
  const sensitiveFields = mission.rawPayload.filter((f) => f.isSensitive).length;
  const unnecessaryPercentage = Math.round((sensitiveFields / totalFields) * 100);

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
      {/* Chapter Subheader */}
      <div style={{ textAlign: 'center', maxWidth: '820px', marginBottom: '1.75rem' }}>
        <div
          className="clay-pill"
          style={{
            marginBottom: '0.65rem',
            background: '#fee2e2',
            color: '#b91c1c',
          }}
        >
          <ShieldAlert size={14} color="#e11d48" />
          <span>DATA ANATOMY: THE PRIVACY SHOCK</span>
        </div>

        <h2
          style={{
            fontSize: 'clamp(1.8rem, 2.7vw, 2.4rem)',
            fontWeight: 800,
            color: '#0f172a',
            letterSpacing: '-0.02em',
          }}
        >
          {audienceMode === '5th_grader'
            ? 'The Pizza Delivery Analogy 🍕'
            : 'The 78% Exposure Paradox'}
        </h2>

        <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '0.35rem', lineHeight: 1.5 }}>
          {audienceMode === '5th_grader' ? (
            <span>
              When you order a pizza, you only need to tell the chef <em>"one cheese pizza please"</em>. You would <strong>NEVER</strong> give the pizza cook your secret diary and bank password! Yet standard AI sends all of it!
            </span>
          ) : (
            <span>
              Across enterprise workloads, <strong>{unnecessaryPercentage}% of ingested tokens</strong> consist of high-risk PII that provides zero computational value toward solving the prompt.
            </span>
          )}
        </p>
      </div>

      {/* 3 Large Tactile Metric Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          maxWidth: '1050px',
          width: '100%',
          marginBottom: '2rem',
        }}
      >
        {/* Metric 1 */}
        <div
          className="clay-card"
          style={{
            padding: '1.75rem 1.5rem',
            textAlign: 'center',
            borderTop: '5px solid #f43f5e',
          }}
        >
          <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#e11d48', lineHeight: 1 }}>
            {unnecessaryPercentage}%
          </div>
          <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.25rem 0' }}>
            Unnecessary Exposure
          </div>
          <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.4 }}>
            {sensitiveFields} out of {totalFields} fields transmitted across the open network are hazardous PII.
          </p>
        </div>

        {/* Metric 2 */}
        <div
          className="clay-card"
          style={{
            padding: '1.75rem 1.5rem',
            textAlign: 'center',
            borderTop: '5px solid #10b981',
          }}
        >
          <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#059669', lineHeight: 1 }}>
            {totalFields - sensitiveFields} Fields
          </div>
          <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.25rem 0' }}>
            Actually Needed
          </div>
          <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.4 }}>
            Only task-relevant parameters are needed for the AI to reason and generate the correct answer.
          </p>
        </div>

        {/* Metric 3 */}
        <div
          className="clay-card"
          style={{
            padding: '1.75rem 1.5rem',
            textAlign: 'center',
            borderTop: '5px solid #6366f1',
          }}
        >
          <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#4f46e5', lineHeight: 1 }}>
            0 Bytes
          </div>
          <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.25rem 0' }}>
            Leaked with AITHOS
          </div>
          <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.4 }}>
            Cryptographic surrogate tokens ensure the external AI model never sees true identities.
          </p>
        </div>
      </div>

      {/* Visual Comparison Strip */}
      <div
        className="clay-card-sm"
        style={{
          maxWidth: '1050px',
          width: '100%',
          padding: '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '2rem',
          background: '#f8fafc',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <AlertTriangle size={20} color="#e11d48" />
          <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155' }}>
            Conventional Approach: Retained in 3rd-Party Training & Log Archives
          </span>
        </div>
        <div
          style={{
            fontSize: '0.75rem',
            fontWeight: 800,
            background: '#fee2e2',
            color: '#b91c1c',
            padding: '0.25rem 0.75rem',
            borderRadius: '9999px',
          }}
        >
          OWASP LLM06 VIOLATION
        </div>
      </div>

      {/* Continue Action */}
      <button
        onClick={() => {
          sound.playReward();
          onContinue();
        }}
        className="clay-btn clay-btn-primary"
        style={{ padding: '0.8rem 2.2rem', fontSize: '1rem' }}
      >
        <span>Examine Real-World Evidence (+50 XP)</span>
        <ArrowRight size={18} />
      </button>
    </div>
  );
};
