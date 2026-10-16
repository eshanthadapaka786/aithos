import React, { useState } from 'react';
import { AlertTriangle, ArrowRight, Check, FileText } from 'lucide-react';
import { sound } from '../utils/sound';

interface Step2Props {
  onContinueToAithos: () => void;
}

export const Step2StandardAISimulation: React.FC<Step2Props> = ({ onContinueToAithos }) => {
  const [simulationState, setSimulationState] = useState<'idle' | 'running' | 'completed'>('idle');

  const handleRunTask = () => {
    sound.playPop();
    setSimulationState('running');

    setTimeout(() => {
      sound.playShieldBlock();
      setSimulationState('completed');
    }, 1800);
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

      {/* Narrative Intro */}
      <div style={{ textAlign: 'center', maxWidth: '780px', marginBottom: '1.25rem' }}>
        <div
          className="clay-pill"
          style={{
            marginBottom: '0.45rem',
            background: '#fee2e2',
            color: '#b91c1c',
          }}
        >
          <AlertTriangle size={14} color="#e11d48" />
          <span>STEP 1: THE STANDARD AI AGENT</span>
        </div>

        <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a' }}>
          This is how a standard AI agent works
        </h2>
        <p style={{ color: '#64748b', fontSize: '0.95rem', marginTop: '0.25rem' }}>
          You upload a document and ask the AI a simple question. Watch what happens behind the scenes.
        </p>
      </div>

      {/* Fake Website Mockup Card */}
      <div
        className="clay-card animate-fade-up"
        style={{
          maxWidth: '860px',
          width: '100%',
          padding: 0,
          overflow: 'hidden',
          marginBottom: '1.5rem',
        }}
      >
        {/* Fake Browser Window Header */}
        <div
          style={{
            background: '#e2e8f0',
            padding: '0.65rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            borderBottom: '1px solid #cbd5e1',
          }}
        >
          <div style={{ display: 'flex', gap: '6px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f87171' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fbbf24' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#34d399' }} />
          </div>

          <div
            className="font-mono"
            style={{
              flex: 1,
              maxWidth: '380px',
              margin: '0 auto',
              background: '#ffffff',
              borderRadius: '6px',
              padding: '0.2rem 0.75rem',
              fontSize: '0.74rem',
              color: '#64748b',
              textAlign: 'center',
            }}
          >
            https://cloud-ai-assistant.com/doctor-summary
          </div>
        </div>

        {/* Fake Website Body */}
        <div style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <FileText size={18} color="#4f46e5" />
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>
              Hospital Record #MGH-88419: John Smith
            </h4>
          </div>

          {/* Document Content Box */}
          <div
            className="clay-inset-panel"
            style={{
              padding: '1rem 1.25rem',
              marginBottom: '1.25rem',
              fontSize: '0.82rem',
              color: '#334155',
              lineHeight: 1.6,
            }}
          >
            <div><strong>Patient Name:</strong> John Smith</div>
            <div><strong>SSN:</strong> 123-45-6789 · <strong>DOB:</strong> 1985-06-14 (Age 39)</div>
            <div><strong>Home Address:</strong> 42 Maple Street, Boston MA 02108</div>
            <div><strong>Billing Card:</strong> BlueCross BC-881920 / Visa: 4532-••••-••••-8812</div>
            <div><strong>Psychiatric Note:</strong> Patient reports high anxiety regarding ongoing family custody dispute.</div>
            <div style={{ color: '#0369a1', fontWeight: 600, marginTop: '0.35rem' }}>
              <strong>Allergies:</strong> Severe Anaphylaxis to Penicillin-G.
            </div>
            <div style={{ color: '#0369a1', fontWeight: 600 }}>
              <strong>Prescription:</strong> Azithromycin 500mg Day 1, 250mg Days 2-5 PO daily.
            </div>
          </div>

          {/* Task Action Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#f8fafc',
              padding: '0.85rem 1.25rem',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
            }}
          >
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0f172a' }}>
                Select Task to Complete:
              </div>
              <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                <em>"Summarize John's allergies & prescription schedule"</em>
              </div>
            </div>

            {simulationState === 'idle' && (
              <button
                onClick={handleRunTask}
                className="clay-btn clay-btn-primary"
                style={{ padding: '0.65rem 1.5rem', fontSize: '0.9rem' }}
              >
                <span>Run Task with Standard AI</span>
              </button>
            )}

            {simulationState === 'running' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4f46e5', fontWeight: 700, fontSize: '0.88rem' }}>
                <span>Standard AI is uploading & processing...</span>
              </div>
            )}

            {simulationState === 'completed' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#15803d', fontWeight: 700, fontSize: '0.88rem' }}>
                <Check size={16} />
                <span>Task Completed!</span>
              </div>
            )}
          </div>

          {/* AI Output (When Completed) */}
          {simulationState === 'completed' && (
            <div
              className="clay-card-sm animate-fade-in"
              style={{
                marginTop: '1rem',
                padding: '1rem 1.25rem',
                background: '#f0fdf4',
                border: '1.5px solid #86efac',
              }}
            >
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#166534', marginBottom: '0.25rem' }}>
                AI OUTPUT:
              </div>
              <p style={{ fontSize: '0.88rem', color: '#14532d', lineHeight: 1.5 }}>
                Patient John Smith is severely allergic to <strong>Penicillin-G</strong>. Prescribed outpatient schedule: <strong>Azithromycin 500mg Day 1, followed by 250mg on Days 2-5</strong>.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* THE PROMINENT HAZARD / LEAK SIGN */}
      {simulationState === 'completed' && (
        <div
          className="clay-card animate-fade-up"
          style={{
            maxWidth: '860px',
            width: '100%',
            padding: '1.75rem 2rem',
            background: 'linear-gradient(135deg, #fff1f2 0%, #fee2e2 100%)',
            border: '2px solid #f43f5e',
            marginBottom: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: '#f43f5e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 4px 12px rgba(244, 63, 94, 0.35)',
              }}
            >
              <AlertTriangle size={26} color="#ffffff" />
            </div>

            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#9f1239', lineHeight: 1.2 }}>
                ⚠️ Your work is done... BUT YOUR PRIVATE DATA WAS LEAKED TO THE CLOUD!
              </h3>
              <p style={{ color: '#be123c', fontSize: '0.92rem', marginTop: '0.35rem', lineHeight: 1.5 }}>
                The AI answered your question, but standard AI sent all of John's personal secrets straight into third-party cloud servers and permanent training logs:
              </p>

              {/* Leaked Data Highlights */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.65rem',
                  marginTop: '0.85rem',
                }}
              >
                <div className="font-mono" style={{ background: '#ffffff', padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.78rem', color: '#be123c', border: '1px solid #fecdd3' }}>
                  ❌ SSN: 123-45-6789 <em>(Identity Theft Risk)</em>
                </div>
                <div className="font-mono" style={{ background: '#ffffff', padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.78rem', color: '#be123c', border: '1px solid #fecdd3' }}>
                  ❌ Address: 42 Maple Street <em>(Stalking/Burglary)</em>
                </div>
                <div className="font-mono" style={{ background: '#ffffff', padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.78rem', color: '#be123c', border: '1px solid #fecdd3' }}>
                  ❌ Visa Card: 4532-••••-••••-8812 <em>(Financial Fraud)</em>
                </div>
                <div className="font-mono" style={{ background: '#ffffff', padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.78rem', color: '#be123c', border: '1px solid #fecdd3' }}>
                  ❌ Psychiatric Notes: Family Dispute <em>(Confidential)</em>
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <button
              onClick={() => {
                sound.playReward();
                onContinueToAithos();
              }}
              className="clay-btn clay-btn-primary"
              style={{ padding: '0.85rem 2.2rem', fontSize: '1rem' }}
            >
              <span>See How AITHOS Fixes This</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
