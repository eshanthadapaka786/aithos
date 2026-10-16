import { EvidenceItem } from '../types';

export const EVIDENCE_REPORTS: EvidenceItem[] = [
  {
    id: 'samsung-leak',
    title: 'Enterprise Source Code & Meeting Audio Uploaded to Public LLMs',
    organization: 'Reuters & Bloomberg Technology Investigations',
    date: 'Documented 2023 / Industry Benchmark Case',
    type: 'Breach Incident',
    summary: 'Engineers pasted proprietary semiconductor database measurement code and confidential executive meeting notes into ChatGPT to optimize scripts, inadvertently transmitting proprietary intellectual property to third-party model servers.',
    impactQuote: 'Data entered into public AI prompts becomes part of server-side inference history, vector caches, and potentially future model retraining without client-side cryptographic isolation.',
    verifiedUrl: 'https://www.reuters.com/technology/samsung-electronics-limits-use-generative-ai-after-internal-leak-2023-05-02/',
    tags: ['Source Code Leak', 'Third-Party LLM Ingestion', 'Prompt Retention']
  },
  {
    id: 'owasp-llm-top10',
    title: 'OWASP Top 10 for LLM Applications — LLM02 & LLM06',
    organization: 'Open Worldwide Application Security Project (OWASP)',
    date: 'Current 2025/2026 Security Standard',
    type: 'Industry Framework',
    summary: 'Identifies LLM02 (Sensitive Information Disclosure) and LLM06 (Excessive Agency) as critical architectural vulnerabilities when autonomous agents process unrestricted client inputs and execute unvalidated system tools.',
    impactQuote: 'Applications that do not sanitize inputs prior to inference or enforce deterministic, least-privilege action validation expose sensitive enterprise payloads to prompt injection, data exfiltration, and unintended autonomous tool execution.',
    verifiedUrl: 'https://genai.owasp.org/llmrisk/llm02-sensitive-information-disclosure/',
    tags: ['OWASP LLM02', 'OWASP LLM06', 'Excessive Agency', 'Least Privilege']
  },
  {
    id: 'ftc-ai-privacy',
    title: 'FTC Enforcement: Commercial Deception in AI Data Usage and Retraining',
    organization: 'US Federal Trade Commission (Bureau of Consumer Protection)',
    date: 'Official Enforcement Policy Statement',
    type: 'Regulatory Action',
    summary: 'The FTC warns that companies deploying AI tools that quietly expose consumer data, breach promises of privacy, or feed proprietary records into shared model architectures face strict enforcement under Section 5 of the FTC Act.',
    impactQuote: 'Technological convenience cannot excuse failing to minimize data exposure. If an AI tool collects more context than strictly necessary to fulfill the requested task, it introduces unlawful data compromise.',
    verifiedUrl: 'https://www.ftc.gov/business-guidance/blog/2023/02/keep-your-ai-claims-check',
    tags: ['FTC Act § 5', 'Data Minimization', 'Regulatory Liability']
  },
  {
    id: 'ncsc-secure-ai',
    title: 'Guidelines for Secure AI System Development & Agentic Execution',
    organization: 'UK National Cyber Security Centre (NCSC) & US CISA Joint Advisory',
    date: 'International Cybersecurity Guidance',
    type: 'Security Advisory',
    summary: 'Co-signed by 18 international agencies. Mandates that AI agents operating with autonomous tools must enforce strict data boundaries, sanitize all inputs locally, and implement independent verification before executing system actions.',
    impactQuote: 'Autonomous agents must never be granted unrestricted authority to read data stores and invoke APIs in a single untrusted loop without an external deterministic policy gate.',
    verifiedUrl: 'https://www.ncsc.gov.uk/collection/guidelines-secure-ai-system-development',
    tags: ['NCSC / CISA', 'Secure AI Architecture', 'Deterministic Verification']
  }
];
