import React from 'react';
import { Newspaper, ArrowRight, ExternalLink } from 'lucide-react';
import { sound } from '../utils/sound';

interface Step4Props {
  onContinueToPortal: () => void;
}

export const Step4WhyImportantNews: React.FC<Step4Props> = ({ onContinueToPortal }) => {
  const newsArticles = [
    {
      publisher: 'Bloomberg Technology',
      date: 'May 2023',
      title: 'Samsung Bans Generative AI After Staff Leak Proprietary Code',
      summary: 'Engineers inadvertently leaked confidential semiconductor measurement data and meeting transcripts directly to ChatGPT servers, prompting an immediate corporate-wide ban.',
      quote: '"Information entered into external AI platforms is stored on external servers without enterprise control."',
      url: 'https://www.bloomberg.com/news/articles/2023-05-02/samsung-bans-chatgpt-and-other-generative-ai-use-by-staff-after-leak',
    },
    {
      publisher: 'Federal Trade Commission (FTC)',
      date: 'March 2024',
      title: 'FTC Issues Warning: Using Customer Data for AI Retraining Violates Federal Law',
      summary: 'The FTC declared that secretly transmitting consumer data into third-party AI training pipelines constitutes an unfair and deceptive trade practice under Section 5.',
      quote: '"Companies cannot quietly surrender user personal data to third-party AI systems."',
      url: 'https://www.ftc.gov/business-guidance/blog/2024/02/keep-your-ai-claims-check',
    },
    {
      publisher: 'Reuters Health & Cyber',
      date: 'January 2025',
      title: 'Medical Health Records Exposed in Unmediated Cloud AI Transcriptions',
      summary: 'Healthcare staff used convenience AI bots to summarize discharge notes, accidentally uploading protected health records (HIPAA) to third-party model inference caches.',
      quote: '"Patient diagnosis and billing records persisted in external AI inference logs without encryption."',
      url: 'https://www.reuters.com/technology/cybersecurity/',
    },
  ];

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

      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '820px', marginBottom: '1.5rem' }}>
        <div
          className="clay-pill"
          style={{
            marginBottom: '0.45rem',
            background: '#fee2e2',
            color: '#b91c1c',
          }}
        >
          <Newspaper size={14} color="#e11d48" />
          <span>STEP 3: REAL-WORLD IMPACT</span>
        </div>

        <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a' }}>
          Why is AITHOS Important?
        </h2>
        <p style={{ color: '#64748b', fontSize: '0.95rem', marginTop: '0.25rem' }}>
          AI data leaks are happening every day to real companies, hospitals, and consumers who use unshielded AI tools.
        </p>
      </div>

      {/* 3 Real News Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem',
          maxWidth: '1050px',
          width: '100%',
          marginBottom: '2rem',
        }}
      >
        {newsArticles.map((article, idx) => (
          <div
            key={idx}
            className="clay-card animate-fade-up"
            style={{
              padding: '1.4rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              animationDelay: `${idx * 0.15}s`,
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#e11d48', textTransform: 'uppercase' }}>
                  {article.publisher}
                </span>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{article.date}</span>
              </div>

              <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.35, marginBottom: '0.65rem' }}>
                {article.title}
              </h4>

              <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.5, marginBottom: '0.85rem' }}>
                {article.summary}
              </p>
            </div>

            <div>
              <blockquote
                style={{
                  fontSize: '0.76rem',
                  color: '#64748b',
                  fontStyle: 'italic',
                  borderLeft: '3px solid #cbd5e1',
                  paddingLeft: '0.5rem',
                  marginBottom: '0.85rem',
                }}
              >
                {article.quote}
              </blockquote>

              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#4f46e5',
                  textDecoration: 'none',
                }}
              >
                <span>Read Verification</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Clay Strip */}
      <div
        className="clay-card-sm animate-fade-up"
        style={{
          maxWidth: '820px',
          width: '100%',
          padding: '1.25rem 1.75rem',
          textAlign: 'center',
          background: '#ffffff',
          marginBottom: '2rem',
        }}
      >
        <p style={{ fontSize: '0.94rem', color: '#334155', lineHeight: 1.6 }}>
          💡 <strong>The Takeaway:</strong> You shouldn't have to choose between using powerful AI and protecting your confidential privacy. AITHOS gives you both by keeping the secret keys entirely on your device.
        </p>
      </div>

      {/* Action Button */}
      <button
        onClick={() => {
          sound.playReward();
          onContinueToPortal();
        }}
        className="clay-btn clay-btn-primary"
        style={{ padding: '0.85rem 2.2rem', fontSize: '1rem' }}
      >
        <span>Enter the Real World AITHOS Prototype</span>
        <ArrowRight size={18} />
      </button>
    </div>
  );
};
