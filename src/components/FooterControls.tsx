import React from 'react';
import { SceneId } from '../types';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { sound } from '../utils/sound';

interface FooterControlsProps {
  currentScene: SceneId;
  totalScenes: number;
  onNext: () => void;
  onPrev: () => void;
  onJumpToScene: (scene: SceneId) => void;
  onRestart: () => void;
}

export const FooterControls: React.FC<FooterControlsProps> = ({
  currentScene,
  totalScenes,
  onNext,
  onPrev,
  onJumpToScene,
  onRestart,
}) => {
  const isFirst = currentScene === 1;
  const isLast = currentScene === totalScenes;

  const scenesList = Array.from({ length: totalScenes }, (_, i) => (i + 1) as SceneId);

  return (
    <footer
      style={{
        width: '100%',
        height: '62px',
        padding: '0 1.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 50,
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(16px)',
        borderTop: '1.5px solid rgba(226, 232, 240, 0.8)',
        boxShadow: '0 -4px 20px rgba(160, 175, 202, 0.12)',
      }}
    >
      {/* Left: Previous and Restart Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
        <button
          onClick={() => {
            sound.playPop();
            onPrev();
          }}
          disabled={isFirst}
          className="clay-btn clay-btn-secondary"
          style={{
            padding: '0.45rem 1rem',
            fontSize: '0.82rem',
            opacity: isFirst ? 0.4 : 1,
            cursor: isFirst ? 'not-allowed' : 'pointer',
          }}
          title="Previous Chapter (← / P)"
        >
          <ChevronLeft size={16} />
          <span>Back</span>
        </button>

        <button
          onClick={() => {
            sound.playPop();
            onRestart();
          }}
          className="clay-btn clay-btn-secondary"
          style={{
            padding: '0.45rem 0.85rem',
            fontSize: '0.82rem',
          }}
          title="Restart Journey (R / Home)"
        >
          <RotateCcw size={14} />
          <span>Restart</span>
        </button>
      </div>

      {/* Center: Tactile Clay Step Indicators */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
          background: '#e9eef6',
          padding: '0.35rem 0.75rem',
          borderRadius: '9999px',
          boxShadow: 'var(--clay-shadow-inset)',
        }}
      >
        {scenesList.map((s) => {
          const isActive = s === currentScene;
          const isCompleted = s < currentScene;

          return (
            <button
              key={s}
              onClick={() => {
                sound.playPop();
                onJumpToScene(s);
              }}
              style={{
                width: isActive ? '28px' : '10px',
                height: '10px',
                borderRadius: '9999px',
                border: 'none',
                background: isActive
                  ? 'linear-gradient(135deg, #6366f1, #4f46e5)'
                  : isCompleted
                  ? '#10b981'
                  : '#cbd5e1',
                boxShadow: isActive
                  ? '0 2px 8px rgba(79, 70, 229, 0.4)'
                  : 'inset 1px 1px 2px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                padding: 0,
              }}
              title={`Jump to Scene ${s}`}
            />
          );
        })}
      </div>

      {/* Right: Next Chapter Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
        {!isLast ? (
          <button
            onClick={() => {
              sound.playPop();
              onNext();
            }}
            className="clay-btn clay-btn-primary"
            style={{
              padding: '0.48rem 1.35rem',
              fontSize: '0.86rem',
            }}
            title="Next Chapter (Space / → / N)"
          >
            <span>Next Step</span>
            <ChevronRight size={17} />
          </button>
        ) : (
          <button
            onClick={() => {
              sound.playPop();
              onRestart();
            }}
            className="clay-btn clay-btn-success"
            style={{
              padding: '0.48rem 1.35rem',
              fontSize: '0.86rem',
            }}
          >
            <span>Restart Journey</span>
            <RotateCcw size={15} />
          </button>
        )}
      </div>
    </footer>
  );
};
