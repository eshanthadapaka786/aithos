import { MISSIONS } from '../data/missions';
import { AudienceMode } from '../types';
import { CheckCircle2, ArrowRight, Activity, DollarSign, UserCheck, Sparkles } from 'lucide-react';
import { sound } from '../utils/sound';

interface Scene2Props {
  selectedMissionId: string;
  audienceMode: AudienceMode;
  onSelectMission: (missionId: string) => void;
  onContinue: () => void;
}

export const Scene2MissionSelect: React.FC<Scene2Props> = ({
  selectedMissionId,
  audienceMode,
  onSelectMission,
  onContinue,
}) => {

  const getMissionIcon = (id: string) => {
    switch (id) {
      case 'health-records':
        return <Activity size={24} color="#0284c7" />;
      case 'finance-deal':
        return <DollarSign size={24} color="#d97706" />;
      case 'customer-identity':
        return <UserCheck size={24} color="#059669" />;
      default:
        return <Sparkles size={24} color="#4f46e5" />;
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
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem 2.5rem',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '1.75rem', maxWidth: '780px' }}>
        <div
          className="clay-pill"
          style={{
            marginBottom: '0.65rem',
            background: '#e0e7ff',
            color: '#4338ca',
          }}
        >
          <Sparkles size={14} color="#4f46e5" />
          <span>LEVEL 1: CHOOSE YOUR CASE FILE</span>
        </div>

        <h2
          style={{
            fontSize: 'clamp(1.75rem, 2.5vw, 2.3rem)',
            fontWeight: 800,
            color: '#0f172a',
            letterSpacing: '-0.02em',
          }}
        >
          {audienceMode === '5th_grader'
            ? 'Pick a Secret Mission to Protect!'
            : 'Select Confidential Enterprise Scenario'}
        </h2>

        <p style={{ color: '#64748b', fontSize: '0.95rem', marginTop: '0.35rem' }}>
          {audienceMode === '5th_grader'
            ? 'Choose which confidential case you want to shield from leaky AI robots. Click any file to select!'
            : 'Each scenario contains real-world data schemas with sensitive identifiers mixed with task-relevant context.'}
        </p>
      </div>

      {/* 3 Tactile Mission Clay Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          maxWidth: '1150px',
          width: '100%',
          marginBottom: '2rem',
        }}
      >
        {MISSIONS.map((m) => {
          const isSelected = m.id === selectedMissionId;

          return (
            <div
              key={m.id}
              onClick={() => {
                sound.playPop();
                onSelectMission(m.id);
              }}
              className="clay-card clay-card-interactive"
              style={{
                padding: '1.6rem 1.4rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                border: isSelected ? '2px solid #6366f1' : '1.5px solid rgba(255, 255, 255, 0.9)',
                background: isSelected ? 'linear-gradient(135deg, #ffffff 0%, #f5f3ff 100%)' : '#ffffff',
                transform: isSelected ? 'translateY(-4px)' : 'none',
              }}
            >
              {/* Selected Badge */}
              {isSelected && (
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    background: '#dcfce7',
                    color: '#15803d',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                  }}
                >
                  <CheckCircle2 size={13} color="#15803d" />
                  <span>ACTIVE</span>
                </div>
              )}

              <div>
                {/* Category & Icon */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '14px',
                      background: '#f1f5f9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'var(--clay-shadow-sm)',
                    }}
                  >
                    {getMissionIcon(m.id)}
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: '#64748b',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {m.category}
                    </span>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginTop: '0.1rem' }}>
                      {m.badge}
                    </h3>
                  </div>
                </div>

                <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.5, marginBottom: '1rem' }}>
                  {audienceMode === '5th_grader' && m.kidAnalogy ? m.kidAnalogy : m.title}
                </p>
              </div>

              {/* Card Footer: Risk Pill & Field Count */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '0.85rem',
                  borderTop: '1px solid #e2e8f0',
                  marginTop: '0.5rem',
                }}
              >
                <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>
                  {m.rawPayload.length} Total Data Fields
                </span>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '0.2rem 0.55rem',
                    borderRadius: '9999px',
                    background: '#fee2e2',
                    color: '#b91c1c',
                  }}
                >
                  {m.riskScore}% Leak Risk
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Continue Action */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button
          onClick={() => {
            sound.playReward();
            onContinue();
          }}
          className="clay-btn clay-btn-primary"
          style={{
            padding: '0.8rem 2.2rem',
            fontSize: '1rem',
          }}
        >
          <span>Investigate This File (+25 XP)</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
