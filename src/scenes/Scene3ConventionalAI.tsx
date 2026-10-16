import React, { useState } from 'react';
import { MissionOption, AudienceMode } from '../types';
import { ArrowRight, ShieldAlert, CheckCircle2, Eye } from 'lucide-react';
import { sound } from '../utils/sound';

interface Scene3Props {
  mission: MissionOption;
  audienceMode: AudienceMode;
  onAwardXp: (amount: number) => void;
  onContinue: () => void;
}

export const Scene3ConventionalAI: React.FC<Scene3Props> = ({
  mission,
  audienceMode,
  onAwardXp,
  onContinue,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'sensitive' | 'required'>('all');
  const [inspectedFieldId, setInspectedFieldId] = useState<string | null>(mission.rawPayload[0].id);
  const [foundLeaks, setFoundLeaks] = useState<Set<string>>(new Set());

  const sensitiveCount = mission.rawPayload.filter((f) => f.isSensitive).length;
  const requiredCount = mission.rawPayload.filter((f) => !f.isSensitive).length;

  const handleFieldClick = (field: typeof mission.rawPayload[0]) => {
    sound.playPop();
    setInspectedFieldId(field.id);

    if (field.isSensitive && !foundLeaks.has(field.id)) {
      sound.playReward();
      const updated = new Set(foundLeaks);
      updated.add(field.id);
      setFoundLeaks(updated);
      onAwardXp(25);
    }
  };

  const filteredPayload = mission.rawPayload.filter((f) => {
    if (filterMode === 'sensitive') return f.isSensitive;
    if (filterMode === 'required') return !f.isSensitive;
    return true;
  });

  const inspectedField = mission.rawPayload.find((f) => f.id === inspectedFieldId) || mission.rawPayload[0];

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
      {/* Top Gamification Banner: Catch the Leaks! */}
      <div
        className="clay-card-sm"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.65rem 1.25rem',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #fff1f2 0%, #fee2e2 100%)',
          border: '1.5px solid #ffffff',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: '#f43f5e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ShieldAlert size={18} color="#ffffff" />
          </div>
          <div>
            <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#9f1239' }}>
              {audienceMode === '5th_grader'
                ? `🎮 MINI-GAME: Spot the 7 Leaks! (Found: ${foundLeaks.size}/${sensitiveCount})`
                : `CONVENTIONAL AI AUDIT: Unmediated Ingestion (${sensitiveCount} Sensitive Fields In Flight)`}
            </div>
            <div style={{ fontSize: '0.74rem', color: '#be123c' }}>
              {audienceMode === '5th_grader'
                ? 'Click on the fields below to catch secrets that standard AI recklessly sends to third-party clouds!'
                : 'Educational simulation demonstrating unfiltered payload transmission to external LLM providers.'}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              background: '#ffffff',
              color: '#e11d48',
              padding: '0.25rem 0.65rem',
              borderRadius: '9999px',
              boxShadow: 'var(--clay-shadow-sm)',
            }}
          >
            +{foundLeaks.size * 25} XP Earned
          </span>
        </div>
      </div>

      {/* Main Split Grid */}
      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1.25fr 1fr',
          gap: '1.25rem',
          minHeight: 0,
        }}
      >
        {/* Left Column: Interactive Raw Document Fields */}
        <div
          className="clay-card"
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '1.25rem 1.5rem',
            overflow: 'hidden',
          }}
        >
          {/* Header & Filter Pills */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.85rem',
              paddingBottom: '0.65rem',
              borderBottom: '1px solid #e2e8f0',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a' }}>
                {mission.documentTitle}
              </h3>
              <p style={{ fontSize: '0.75rem', color: '#64748b' }}>
                Task Query: <em>"{mission.taskQuery}"</em>
              </p>
            </div>

            {/* Filter Tabs */}
            <div
              style={{
                display: 'flex',
                background: '#e9eef6',
                borderRadius: '9999px',
                padding: '0.2rem',
                boxShadow: 'var(--clay-shadow-inset)',
              }}
            >
              <button
                onClick={() => setFilterMode('all')}
                style={{
                  padding: '0.25rem 0.65rem',
                  borderRadius: '9999px',
                  border: 'none',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  background: filterMode === 'all' ? '#ffffff' : 'transparent',
                  color: filterMode === 'all' ? '#0f172a' : '#64748b',
                  boxShadow: filterMode === 'all' ? '0 2px 6px rgba(0,0,0,0.1)' : 'none',
                }}
              >
                All ({mission.rawPayload.length})
              </button>
              <button
                onClick={() => setFilterMode('sensitive')}
                style={{
                  padding: '0.25rem 0.65rem',
                  borderRadius: '9999px',
                  border: 'none',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  background: filterMode === 'sensitive' ? '#fee2e2' : 'transparent',
                  color: filterMode === 'sensitive' ? '#b91c1c' : '#64748b',
                  boxShadow: filterMode === 'sensitive' ? '0 2px 6px rgba(0,0,0,0.1)' : 'none',
                }}
              >
                Leaks ({sensitiveCount})
              </button>
              <button
                onClick={() => setFilterMode('required')}
                style={{
                  padding: '0.25rem 0.65rem',
                  borderRadius: '9999px',
                  border: 'none',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  background: filterMode === 'required' ? '#dcfce7' : 'transparent',
                  color: filterMode === 'required' ? '#15803d' : '#64748b',
                  boxShadow: filterMode === 'required' ? '0 2px 6px rgba(0,0,0,0.1)' : 'none',
                }}
              >
                Safe Context ({requiredCount})
              </button>
            </div>
          </div>

          {/* Scrollable Field List */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              paddingRight: '0.35rem',
            }}
          >
            {filteredPayload.map((field) => {
              const isSelected = field.id === inspectedFieldId;
              const isFound = foundLeaks.has(field.id);

              return (
                <div
                  key={field.id}
                  onClick={() => handleFieldClick(field)}
                  className="clay-card-sm clay-card-interactive"
                  style={{
                    padding: '0.75rem 1rem',
                    border: isSelected
                      ? '2px solid #6366f1'
                      : field.isSensitive
                      ? '1px solid #fecdd3'
                      : '1px solid #bbf7d0',
                    background: field.isSensitive ? '#fffafb' : '#f0fdf4',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0, paddingRight: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.2rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155' }}>
                        {field.label}
                      </span>
                      {field.isSensitive ? (
                        <span
                          style={{
                            fontSize: '0.65rem',
                            fontWeight: 800,
                            padding: '0.1rem 0.45rem',
                            borderRadius: '9999px',
                            background: isFound ? '#f43f5e' : '#fee2e2',
                            color: isFound ? '#ffffff' : '#e11d48',
                          }}
                        >
                          {isFound ? 'CAUGHT LEAK!' : 'LEAK HAZARD'}
                        </span>
                      ) : (
                        <span
                          style={{
                            fontSize: '0.65rem',
                            fontWeight: 800,
                            padding: '0.1rem 0.45rem',
                            borderRadius: '9999px',
                            background: '#dcfce7',
                            color: '#15803d',
                          }}
                        >
                          TASK RELEVANT
                        </span>
                      )}
                    </div>
                    <div
                      className="font-mono"
                      style={{
                        fontSize: '0.8rem',
                        color: field.isSensitive ? '#be123c' : '#15803d',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {field.value}
                    </div>
                  </div>

                  <div style={{ flexShrink: 0 }}>
                    <Eye size={16} color={isSelected ? '#4f46e5' : '#94a3b8'} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detailed Field Inspector & AI Exposure Impact */}
        <div
          className="clay-card"
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '1.25rem 1.5rem',
            overflowY: 'auto',
          }}
        >
          <div style={{ marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.65rem' }}>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 800,
                color: '#64748b',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              FIELD INSPECTOR
            </span>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginTop: '0.15rem' }}>
              {inspectedField.label}
            </h3>
          </div>

          {/* Raw Value Box */}
          <div style={{ marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569' }}>Transmitted Value:</span>
            <div
              className="clay-inset-panel font-mono"
              style={{
                padding: '0.75rem 1rem',
                marginTop: '0.35rem',
                fontSize: '0.86rem',
                color: inspectedField.isSensitive ? '#e11d48' : '#15803d',
                fontWeight: 600,
                wordBreak: 'break-all',
              }}
            >
              {inspectedField.value}
            </div>
          </div>

          {/* Hazard / Privacy Analysis */}
          <div
            className="clay-card-sm"
            style={{
              padding: '1rem',
              marginBottom: '1.25rem',
              background: inspectedField.isSensitive ? '#fff1f2' : '#f0fdf4',
              border: inspectedField.isSensitive ? '1px solid #fecdd3' : '1px solid #bbf7d0',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem' }}>
              {inspectedField.isSensitive ? (
                <ShieldAlert size={18} color="#e11d48" />
              ) : (
                <CheckCircle2 size={18} color="#16a34a" />
              )}
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  color: inspectedField.isSensitive ? '#9f1239' : '#166534',
                }}
              >
                {inspectedField.isSensitive ? 'Privacy Risk Analysis' : 'Legitimate Task Context'}
              </span>
            </div>

            <p style={{ fontSize: '0.84rem', color: '#334155', lineHeight: 1.5 }}>
              {audienceMode === '5th_grader' && inspectedField.kidWhyDangerous
                ? inspectedField.kidWhyDangerous
                : inspectedField.sensitivityReason || 'Required by AI model to answer the user query.'}
            </p>
          </div>

          {/* AITHOS Token Replacement Preview */}
          {inspectedField.tokenReplacement && (
            <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #e2e8f0' }}>
              <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#64748b' }}>
                How AITHOS Protects This in Milliseconds:
              </span>
              <div
                className="font-mono"
                style={{
                  padding: '0.55rem 0.85rem',
                  borderRadius: '8px',
                  background: '#e0e7ff',
                  color: '#4338ca',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  marginTop: '0.35rem',
                }}
              >
                {inspectedField.tokenReplacement}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Navigation */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '1rem',
          paddingTop: '0.5rem',
        }}
      >
        <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
          Conventional AI sends 100% of this unshielded payload to external cloud providers.
        </span>

        <button
          onClick={() => {
            sound.playReward();
            onContinue();
          }}
          className="clay-btn clay-btn-primary"
          style={{ padding: '0.65rem 1.8rem', fontSize: '0.92rem' }}
        >
          <span>See The Privacy Shock (+50 XP)</span>
          <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
};
