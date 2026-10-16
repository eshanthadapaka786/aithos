import React, { useState } from 'react';
import { EVIDENCE_REPORTS } from '../data/evidence';
import { EvidenceItem, AudienceMode } from '../types';
import { ExternalLink, ArrowRight, Newspaper } from 'lucide-react';
import { sound } from '../utils/sound';

interface Scene5Props {
  audienceMode: AudienceMode;
  onContinue: () => void;
}

export const Scene5RealEvidence: React.FC<Scene5Props> = ({ audienceMode, onContinue }) => {
  const [selectedItem, setSelectedItem] = useState<EvidenceItem>(EVIDENCE_REPORTS[0]);

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
            marginBottom: '0.5rem',
            background: '#e0e7ff',
            color: '#4338ca',
          }}
        >
          <Newspaper size={14} color="#4f46e5" />
          <span>REAL-WORLD EVIDENCE & OFFICIAL PRECEDENTS</span>
        </div>

        <h2 style={{ fontSize: 'clamp(1.65rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a' }}>
          {audienceMode === '5th_grader'
            ? 'True Crime Files: When AI Leaked Real Secrets! 📰'
            : 'Verified Industry Breaches & Official Standards'}
        </h2>
        <p style={{ color: '#64748b', fontSize: '0.92rem', marginTop: '0.25rem' }}>
          Real-world consequences of unmediated AI agent execution. Documented industry cases and regulatory rulings.
        </p>
      </div>

      {/* Main Grid: Left = 4 Selectable Evidence Cards; Right = Dossier */}
      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1.15fr 1.25fr',
          gap: '1.25rem',
          maxWidth: '1150px',
          width: '100%',
          margin: '0 auto',
          minHeight: 0,
        }}
      >
        {/* Left: Selectable Evidence Cards */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            overflowY: 'auto',
            paddingRight: '0.35rem',
          }}
        >
          {EVIDENCE_REPORTS.map((item) => {
            const isSelected = item.id === selectedItem.id;

            return (
              <div
                key={item.id}
                onClick={() => {
                  sound.playPop();
                  setSelectedItem(item);
                }}
                className="clay-card-sm clay-card-interactive"
                style={{
                  padding: '1rem 1.25rem',
                  border: isSelected ? '2px solid #6366f1' : '1px solid rgba(226, 232, 240, 0.8)',
                  background: isSelected ? 'linear-gradient(135deg, #ffffff 0%, #f5f3ff 100%)' : '#ffffff',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      color: item.type === 'Breach Incident' ? '#e11d48' : '#4f46e5',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.type}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{item.date}</span>
                </div>

                <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.25rem' }}>
                  {item.title}
                </h4>

                <p
                  style={{
                    fontSize: '0.8rem',
                    color: '#64748b',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {item.summary}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right: Deep Dossier View */}
        <div
          className="clay-card"
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '1.5rem',
            overflowY: 'auto',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 800,
                padding: '0.2rem 0.6rem',
                borderRadius: '9999px',
                background: '#fee2e2',
                color: '#b91c1c',
              }}
            >
              {selectedItem.organization}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{selectedItem.date}</span>
          </div>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
            {selectedItem.title}
          </h3>

          <p style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            {selectedItem.summary}
          </p>

          {/* Impact Quote Box */}
          <div
            className="clay-card-sm"
            style={{
              padding: '1rem 1.25rem',
              marginBottom: '1.25rem',
              background: '#f8fafc',
              borderLeft: '4px solid #6366f1',
            }}
          >
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>
              OFFICIAL VERDICT / FINDING
            </span>
            <blockquote
              style={{
                fontSize: '0.85rem',
                color: '#1e293b',
                fontStyle: 'italic',
                marginTop: '0.35rem',
                lineHeight: 1.5,
              }}
            >
              "{selectedItem.impactQuote}"
            </blockquote>
          </div>

          {/* Verified URL Link */}
          <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <a
              href={selectedItem.verifiedUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#4f46e5',
                textDecoration: 'none',
              }}
            >
              <span>View Official Case File</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Continue Action */}
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <button
          onClick={() => {
            sound.playReward();
            onContinue();
          }}
          className="clay-btn clay-btn-primary"
          style={{ padding: '0.75rem 2.2rem', fontSize: '0.98rem' }}
        >
          <span>Meet the AITHOS Privacy Shield (+50 XP)</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
