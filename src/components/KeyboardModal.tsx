import React from 'react';
import { X, Keyboard } from 'lucide-react';
import { sound } from '../utils/sound';

interface KeyboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KeyboardModal: React.FC<KeyboardModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const shortcuts = [
    { key: '→ / Space / N', action: 'Advance to next scene' },
    { key: '← / P', action: 'Return to previous scene' },
    { key: '1 – 9, 0', action: 'Jump directly to scenes 1 through 10' },
    { key: 'R / Home', action: 'Restart experience from Scene 1' },
    { key: 'End', action: 'Jump directly to Scene 11 (Final Portal)' },
    { key: '?', action: 'Toggle this keyboard shortcut guide' },
    { key: 'Esc', action: 'Close dialogs and overlays' },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(15, 23, 42, 0.4)',
        backdropFilter: 'blur(8px)',
      }}
      onClick={onClose}
    >
      <div
        className="clay-card"
        style={{
          width: '90%',
          maxWidth: '520px',
          borderRadius: '24px',
          padding: '1.75rem',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.25rem',
            borderBottom: '1px solid #e2e8f0',
            paddingBottom: '0.75rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: '#e0e7ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Keyboard size={18} color="#4f46e5" />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>
              Keyboard Navigation
            </h3>
          </div>

          <button
            onClick={() => {
              sound.playPop();
              onClose();
            }}
            className="clay-btn clay-btn-secondary"
            style={{
              width: '32px',
              height: '32px',
              padding: 0,
              borderRadius: '50%',
            }}
          >
            <X size={16} color="#64748b" />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          {shortcuts.map((s, idx) => (
            <div
              key={idx}
              className="clay-card-sm"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.6rem 0.85rem',
                fontSize: '0.85rem',
                background: '#f8fafc',
              }}
            >
              <span style={{ color: '#475569', fontWeight: 500 }}>{s.action}</span>
              <kbd
                className="font-mono"
                style={{
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  padding: '0.2rem 0.5rem',
                  fontSize: '0.75rem',
                  color: '#4f46e5',
                  fontWeight: 700,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                }}
              >
                {s.key}
              </kbd>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
          <button
            onClick={() => {
              sound.playPop();
              onClose();
            }}
            className="clay-btn clay-btn-primary"
            style={{
              padding: '0.45rem 1.5rem',
              fontSize: '0.84rem',
            }}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};
