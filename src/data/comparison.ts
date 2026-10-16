export interface ComparisonMetric {
  dimension: string;
  category: string;
  conventionalApproach: {
    title: string;
    description: string;
    riskLevel: 'HIGH_RISK' | 'CRITICAL_RISK' | 'UNCONTROLLED';
    exposurePercentage: string;
  };
  aithosApproach: {
    title: string;
    description: string;
    safetyLevel: 'ZERO_EXPOSURE' | 'CRYPTOGRAPHIC_TOKEN' | 'DETERMINISTIC_GATE';
    reductionScore: string;
  };
  technicalEvidence: string;
}

export const COMPARISON_METRICS: ComparisonMetric[] = [
  {
    dimension: 'Data Minimization & Ingestion',
    category: 'Input Privacy',
    conventionalApproach: {
      title: 'Full Context Window Dumping',
      description: 'Ingests entire documents, database dumps, and conversational history directly into the LLM context without entity isolation.',
      riskLevel: 'CRITICAL_RISK',
      exposurePercentage: '100% of payload transmitted'
    },
    aithosApproach: {
      title: 'Local AST Pruning & Tokenization',
      description: 'Prunes irrelevant nodes and replaces sensitive entities with isolated tokens before any packet crosses the network boundary.',
      safetyLevel: 'ZERO_EXPOSURE',
      reductionScore: '92% payload reduction'
    },
    technicalEvidence: 'RFC 6973 Privacy Considerations: Minimization occurs client-side prior to network socket serialization.'
  },
  {
    dimension: 'Sensitive Information Exposure',
    category: 'Server & Log Storage',
    conventionalApproach: {
      title: 'Persistent Cloud Logging & Retraining Risk',
      description: 'PII, SSNs, and trade secrets persist in external cloud inference logs, vector database caches, and telemetry pipelines.',
      riskLevel: 'CRITICAL_RISK',
      exposurePercentage: 'Raw PII retained indefinitely in 3rd-party logs'
    },
    aithosApproach: {
      title: 'Zero-Knowledge Tokenized Context',
      description: 'Third-party models only ever see surrogate tokens (<TOKEN_A>). De-anonymization lookup table stays strictly in client RAM.',
      safetyLevel: 'CRYPTOGRAPHIC_TOKEN',
      reductionScore: '0 Sensitive Identifiers Exposed'
    },
    technicalEvidence: 'Zero-Knowledge architecture ensures third-party cloud compromises cannot reconstruct patient or enterprise identities.'
  },
  {
    dimension: 'Autonomous Action Governance',
    category: 'Execution Safety',
    conventionalApproach: {
      title: 'Unrestricted LLM Function Calling',
      description: 'The LLM directly decides and invokes system tools, database queries, and API endpoints with probabilistic hallucination risk.',
      riskLevel: 'HIGH_RISK',
      exposurePercentage: 'Unrestricted tool invocation surface'
    },
    aithosApproach: {
      title: 'Deterministic Policy Gate (Least Privilege)',
      description: 'Every tool invocation must pass strict mathematical allowlists. Write operations require explicit multi-factor verification.',
      safetyLevel: 'DETERMINISTIC_GATE',
      reductionScore: '100% of actions policy-evaluated'
    },
    technicalEvidence: 'Enforces OWASP LLM06 Excessive Agency controls via JSON Schema policy validator.'
  },
  {
    dimension: 'Reversibility & User Fidelity',
    category: 'Client Usability',
    conventionalApproach: {
      title: 'Lossy Permanent Redaction or Plaintext',
      description: 'Either leaves text unprotected, or irreversibly blacks out text with [REDACTED], destroying grammatical and relational reasoning.',
      riskLevel: 'UNCONTROLLED',
      exposurePercentage: 'Destroys context or leaves exposed'
    },
    aithosApproach: {
      title: 'Bidirectional Reversible Tokenization',
      description: 'Maintains syntactic and grammatical consistency for model reasoning, then seamlessly re-hydrates tokens for the verified user.',
      safetyLevel: 'CRYPTOGRAPHIC_TOKEN',
      reductionScore: '100% semantic fidelity preserved'
    },
    technicalEvidence: 'Surrogate token mapping is bijective and preserved across complex multi-step reasoning chains.'
  },
  {
    dimension: 'Cryptographic Auditability',
    category: 'Governance & Compliance',
    conventionalApproach: {
      title: 'Fragmented Unsigned Application Logs',
      description: 'Standard console.log or ephemeral container logging. Vulnerable to modification and difficult to verify for regulatory audits.',
      riskLevel: 'UNCONTROLLED',
      exposurePercentage: 'No cryptographic attestation'
    },
    aithosApproach: {
      title: 'HMAC-Signed Immutable Event Ledger',
      description: 'Generates verifiable cryptographic receipts for every inspection, sanitization, policy check, and tool execution event.',
      safetyLevel: 'DETERMINISTIC_GATE',
      reductionScore: 'Cryptographically verifiable non-repudiation'
    },
    technicalEvidence: 'Produces deterministic SHA-256 state receipts compatible with SOC2 Type II, HIPAA, and GDPR audit standards.'
  }
];
