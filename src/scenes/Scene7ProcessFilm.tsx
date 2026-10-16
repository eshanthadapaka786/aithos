import React, { useState, useEffect } from 'react';
import { MissionOption, AudienceMode } from '../types';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { sound } from '../utils/sound';

interface Scene7Props {
  mission: MissionOption;
  audienceMode: AudienceMode;
  onContinue: () => void;
}

interface FilmStep {
  step: number;
  title: string;
  stageName: string;
  caption: string;
  kidCaption: string;
  visualState: 'inspect' | 'detect' | 'tokenize' | 'inference' | 'policy' | 'execution' | 'verify';
}

const FILM_STEPS: FilmStep[] = [
  {
    step: 1,
    title: 'Data Ingestion & AST Tree Decomposition',
    stageName: 'INSPECT',
    caption: 'Incoming EHR & financial payloads are parsed into abstract syntax nodes. Session boundaries and origin hash tags are established.',
    kidCaption: 'Step 1: The document arrives! AITHOS catches it right on your desk before it can escape.',
    visualState: 'inspect',
  },
  {
    step: 2,
    title: 'Local Entity & Pattern Classification',
    stageName: 'DETECT',
    caption: 'In-memory NER scanners detect 7 identifying fields (names, SSN, MRN, phone, address) without making external network calls.',
    kidCaption: 'Step 2: Sniffer dog mode! AITHOS highlights Evelyn\'s name, SSN, and bank card in red.',
    visualState: 'detect',
  },
  {
    step: 3,
    title: 'Deterministic Surrogate Token Generation',
    stageName: 'SANITIZE',
    caption: 'Sensitive strings are replaced with consistent cryptographic tokens (<AUTH_SUBJECT_0x89A>). Grammar is preserved so the LLM reasons normally.',
    kidCaption: 'Step 3: Magic Spy Code Ring! Real secrets are swapped with code names like <SECRET_PATIENT_#1>.',
    visualState: 'tokenize',
  },
  {
    step: 4,
    title: 'Zero-PII Inference Transport',
    stageName: 'INFERENCE',
    caption: 'Only sanitized tokens and task-relevant query logic are transmitted across the network to the Cloudflare Worker and AI model.',
    kidCaption: 'Step 4: Flying through the cloud! The AI model only receives the spy codes. Zero secrets in the sky.',
    visualState: 'inference',
  },
  {
    step: 5,
    title: 'Deterministic Policy Gate Evaluation',
    stageName: 'VALIDATE',
    caption: 'Proposed tool invocation is evaluated against least-privilege security policies. Destructive write access is strictly prohibited.',
    kidCaption: 'Step 5: Castle Bouncer! AITHOS makes sure no hackers sneak in malicious commands.',
    visualState: 'policy',
  },
  {
    step: 6,
    title: 'Sandboxed Tool Execution & De-Tokenization',
    stageName: 'EXECUTE',
    caption: 'Safe read action is executed in an ephemeral worker. Results are de-tokenized locally for the authenticated client only.',
    kidCaption: 'Step 6: Mission accomplished! The answer is decoded on your private screen only. You\'re 100% safe!',
    visualState: 'execution',
  },
];

export const Scene7ProcessFilm: React.FC<Scene7Props> = ({
  mission,
  audienceMode,
  onContinue,
}) => {
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStepIdx((prev) => (prev >= FILM_STEPS.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentStep = FILM_STEPS[currentStepIdx];

  const handleNextStep = () => {
    sound.playPop();
    setIsPlaying(false);
    setCurrentStepIdx((prev) => (prev >= FILM_STEPS.length - 1 ? 0 : prev + 1));
  };

  const handlePrevStep = () => {
    sound.playPop();
    setIsPlaying(false);
    setCurrentStepIdx((prev) => (prev <= 0 ? FILM_STEPS.length - 1 : prev - 1));
  };

  const handleTogglePlay = () => {
    sound.playPop();
    setIsPlaying(!isPlaying);
  };

  const handleRestartFilm = () => {
    sound.playPop();
    setCurrentStepIdx(0);
    setIsPlaying(true);
  };

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
      <div style={{ textAlign: 'center', marginBottom: '1rem', maxWidth: '820px', margin: '0 auto 1rem auto' }}>
        <div
          className="clay-pill"
          style={{
            marginBottom: '0.45rem',
            background: '#e0e7ff',
            color: '#4338ca',
          }}
        >
          <Sparkles size={14} color="#4f46e5" />
          <span>INTERACTIVE TECHNICAL PROCESS FILM</span>
        </div>

        <h2 style={{ fontSize: 'clamp(1.65rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a' }}>
          {audienceMode === '5th_grader'
            ? 'The Spy Decoder in Action! 🎬'
            : 'Synchronized Architectural Data Flow'}
        </h2>
        <p style={{ color: '#64748b', fontSize: '0.88rem', marginTop: '0.2rem' }}>
          Simulating data transformation pipeline for <strong>{mission.badge}</strong> ({mission.documentType}).
        </p>
      </div>

      {/* Main Video-Player Style Clay Container */}
      <div
        className="clay-card"
        style={{
          maxWidth: '1050px',
          width: '100%',
          margin: '0 auto',
          flex: 1,
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: 0,
        }}
      >
        {/* Stage Progress Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.5rem',
            marginBottom: '1rem',
          }}
        >
          {FILM_STEPS.map((s, idx) => {
            const isActive = idx === currentStepIdx;
            const isPast = idx < currentStepIdx;

            return (
              <div
                key={s.step}
                onClick={() => {
                  sound.playPop();
                  setCurrentStepIdx(idx);
                  setIsPlaying(false);
                }}
                style={{
                  flex: 1,
                  padding: '0.4rem 0.5rem',
                  borderRadius: '10px',
                  textAlign: 'center',
                  background: isActive ? '#4f46e5' : isPast ? '#dcfce7' : '#f1f5f9',
                  color: isActive ? '#ffffff' : isPast ? '#166534' : '#64748b',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  boxShadow: isActive ? '0 4px 10px rgba(79, 70, 229, 0.35)' : 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                {s.step}. {s.stageName}
              </div>
            );
          })}
        </div>

        {/* Film Dynamic Visual Stage Chamber */}
        <div
          className="clay-inset-panel"
          style={{
            flex: 1,
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 0,
            overflowY: 'auto',
          }}
        >
          <div
            style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              color: '#4f46e5',
              background: '#ffffff',
              padding: '0.2rem 0.75rem',
              borderRadius: '9999px',
              marginBottom: '0.65rem',
              boxShadow: 'var(--clay-shadow-sm)',
            }}
          >
            STAGE {currentStep.step} / 6: {currentStep.stageName}
          </div>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
            {currentStep.title}
          </h3>

          <p
            style={{
              fontSize: '0.92rem',
              color: '#475569',
              textAlign: 'center',
              maxWidth: '680px',
              lineHeight: 1.6,
              marginBottom: '1rem',
            }}
          >
            {audienceMode === '5th_grader' ? currentStep.kidCaption : currentStep.caption}
          </p>

          {/* Interactive Token Transformation Showcase */}
          <div
            className="clay-card-sm"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.75rem 1.25rem',
              background: '#ffffff',
            }}
          >
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#e11d48' }}>ORIGINAL INPUT</span>
              <div className="font-mono" style={{ fontSize: '0.8rem', color: '#be123c', fontWeight: 600 }}>
                Evelyn Vance (SSN: 942-08-3319)
              </div>
            </div>

            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: '#e0e7ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ArrowRight size={14} color="#4f46e5" />
            </div>

            <div>
              <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#10b981' }}>PROTECTED TOKEN</span>
              <div className="font-mono" style={{ fontSize: '0.8rem', color: '#047857', fontWeight: 700 }}>
                &lt;AUTH_SUBJECT_0x89A&gt; (&lt;GOV_ID_MASKED&gt;)
              </div>
            </div>
          </div>
        </div>

        {/* Film Player Controls (Play, Pause, Steps, Scrubber) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '1rem',
            paddingTop: '0.75rem',
            borderTop: '1px solid #e2e8f0',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={handleTogglePlay}
              className="clay-btn clay-btn-primary"
              style={{
                width: '38px',
                height: '38px',
                padding: 0,
                borderRadius: '50%',
              }}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>

            <button
              onClick={handlePrevStep}
              className="clay-btn clay-btn-secondary"
              style={{ width: '36px', height: '36px', padding: 0, borderRadius: '50%' }}
            >
              <ChevronLeft size={16} />
            </button>

            <button
              onClick={handleNextStep}
              className="clay-btn clay-btn-secondary"
              style={{ width: '36px', height: '36px', padding: 0, borderRadius: '50%' }}
            >
              <ChevronRight size={16} />
            </button>

            <button
              onClick={handleRestartFilm}
              className="clay-btn clay-btn-secondary"
              style={{ width: '36px', height: '36px', padding: 0, borderRadius: '50%' }}
              title="Restart Film"
            >
              <RotateCcw size={14} />
            </button>
          </div>

          <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>
            Playback: {isPlaying ? 'Auto-Advancing (4.5s)' : 'Paused'}
          </div>

          <button
            onClick={() => {
              sound.playReward();
              onContinue();
            }}
            className="clay-btn clay-btn-primary"
            style={{ padding: '0.55rem 1.6rem', fontSize: '0.88rem' }}
          >
            <span>Take Juror Control (+50 XP)</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
