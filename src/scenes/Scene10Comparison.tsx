import React, { useState } from 'react';
import { COMPARISON_METRICS, ComparisonMetric } from '../data/comparison';
import { AudienceMode } from '../types';
import { ArrowRight, Check, X, Scale } from 'lucide-react';
import { sound } from '../utils/sound';

interface Scene10Props {
  audienceMode: AudienceMode;
  onContinue: () => void;
}

export const Scene10Comparison: React.FC<Scene10Props> = ({ audienceMode, onContinue }) => {
  const [selectedMetric, setSelectedMetric] = useState<ComparisonMetric>(COMPARISON_METRICS[0]);

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
          <Scale size={14} color="#4f46e5" />
          <span>CHAPTER 10: ARCHITECTURAL AUDIT SCORECARD</span>
        </div>

        <h2 style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a' }}>
          {audienceMode === '5th_grader'
            ? 'The Final Showdown: Regular AI ❌ vs AITHOS 🏆'
            : 'Conventional Agent vs. AITHOS Zero-Trust'}
        </h2>
        <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '0.2rem' }}>
          Side-by-side comparative evaluation across 5 core security dimensions based on documented OWASP LLM standards.
        </p>
      </div>

      {/* Main Grid: Left = 5 Dimensions Selector; Right = Side-by-Side Breakdown */}
      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1.6fr',
          gap: '1.25rem',
          maxWidth: '1150px',
          width: '100%',
          margin: '0 auto',
          minHeight: 0,
        }}
      >
        {/* Left Column: 5 Dimension Selection Clay Tabs */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.65rem',
            overflowY: 'auto',
            paddingRight: '0.35rem',
          }}
        >
          {COMPARISON_METRICS.map((metric) => {
            const isSelected = metric.dimension === selectedMetric.dimension;

            return (
              <div
                key={metric.dimension}
                onClick={() => {
                  sound.playPop();
                  setSelectedMetric(metric);
                }}
                className="clay-card-sm clay-card-interactive"
                style={{
                  padding: '1rem 1.25rem',
                  border: isSelected ? '2px solid #6366f1' : '1px solid rgba(226, 232, 240, 0.8)',
                  background: isSelected ? 'linear-gradient(135deg, #ffffff 0%, #f5f3ff 100%)' : '#ffffff',
                }}
              >
                <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>
                  {metric.category}
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f172a', marginTop: '0.2rem' }}>
                  {metric.dimension}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Side-by-Side Comparison Panels */}
        <div
          className="clay-card"
          style={{
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
          }}
        >
          <div style={{ marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>
              PILLAR COMPARISON
            </span>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginTop: '0.15rem' }}>
              {selectedMetric.dimension}
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
            {/* Conventional Side (Red Alert) */}
            <div
              className="clay-card-sm"
              style={{
                padding: '1rem',
                background: '#fff1f2',
                border: '1.5px solid #fecdd3',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: '#f43f5e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <X size={14} color="#ffffff" />
                </div>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#be123c' }}>
                  Conventional AI
                </span>
              </div>

              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>
                {selectedMetric.conventionalApproach.title}
              </h4>

              <p style={{ fontSize: '0.78rem', color: '#475569', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                {selectedMetric.conventionalApproach.description}
              </p>

              <div
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  color: '#9f1239',
                  background: '#fee2e2',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '6px',
                }}
              >
                Exposure: {selectedMetric.conventionalApproach.exposurePercentage}
              </div>
            </div>

            {/* AITHOS Side (Green Victory) */}
            <div
              className="clay-card-sm"
              style={{
                padding: '1rem',
                background: '#ecfdf5',
                border: '1.5px solid #a7f3d0',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Check size={14} color="#ffffff" />
                </div>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#047857' }}>
                  AITHOS Zero-Trust
                </span>
              </div>

              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>
                {selectedMetric.aithosApproach.title}
              </h4>

              <p style={{ fontSize: '0.78rem', color: '#475569', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                {selectedMetric.aithosApproach.description}
              </p>

              <div
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  color: '#065f46',
                  background: '#d1fae5',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '6px',
                }}
              >
                Guarantee: {selectedMetric.aithosApproach.reductionScore}
              </div>
            </div>
          </div>

          {/* Technical Evidence Tag */}
          <div
            className="clay-card-sm"
            style={{
              padding: '0.75rem 1rem',
              background: '#f8fafc',
              borderLeft: '4px solid #4f46e5',
              marginTop: 'auto',
            }}
          >
            <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>
              OWASP & RFC ARCHITECTURAL REFERENCE
            </span>
            <p style={{ fontSize: '0.78rem', color: '#334155', marginTop: '0.2rem', lineHeight: 1.4 }}>
              {selectedMetric.technicalEvidence}
            </p>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <button
          onClick={() => {
            sound.playReward();
            onContinue();
          }}
          className="clay-btn clay-btn-success"
          style={{ padding: '0.75rem 2.2rem', fontSize: '0.98rem' }}
        >
          <span>Claim Certificate & Open Portal (+150 XP)</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
