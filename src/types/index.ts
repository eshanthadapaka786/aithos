export type SceneId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export type AudienceMode = '5th_grader' | 'pro_spec';

export interface BadgeInfo {
  id: string;
  name: string;
  icon: string;
  description: string;
  unlockedAtXp: number;
}

export interface MissionOption {
  id: string;
  category: string;
  badge: string;
  title: string;
  taskQuery: string;
  documentTitle: string;
  documentType: string;
  // 5th grader friendly explanation
  kidAnalogy?: string;
  kidDangerWarning?: string;
  rawPayload: {
    id: string;
    label: string;
    value: string;
    isSensitive: boolean;
    sensitivityReason?: string;
    tokenReplacement?: string;
    kidWhyDangerous?: string;
  }[];
  conventionalLeakSummary: string;
  aithosSanitizedSummary: string;
  riskScore: number; // 0 - 100
}

export interface EvidenceItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  type: 'Breach Incident' | 'Industry Framework' | 'Regulatory Action' | 'Security Advisory';
  summary: string;
  kidSummary?: string;
  impactQuote: string;
  verifiedUrl: string;
  tags: string[];
}

export interface PipelineStage {
  id: number;
  name: string;
  code: string;
  tagline: string;
  kidTagline?: string;
  description: string;
  kidDescription?: string;
  technicalDetails: string;
  iconName: string;
  accentColor: string;
  sampleInput: string;
  sampleOutput: string;
  latencyMs: number;
}

export interface ExecutionConfig {
  missionId: string;
  policyMode: 'balanced' | 'strict_zero_trust' | 'permissive_audit';
  simulateViolation: boolean;
  executionMode: 'simulation' | 'live_probe';
}

export interface ExecutionLogItem {
  stage: string;
  timestamp: string;
  status: 'passed' | 'sanitized' | 'blocked' | 'verified';
  detail: string;
  token?: string;
}
