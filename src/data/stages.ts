import { PipelineStage } from '../types';

export const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: 1,
    name: 'INSPECT',
    code: 'STG_01_INSPECT',
    tagline: 'AST & Structured Payload Ingestion',
    kidTagline: 'Catch the Letter Before it Mails 📬',
    description: 'Intercepts incoming requests, parses raw payloads into typed abstract syntax trees, and maps schema hierarchies before data touches any inference pathway.',
    kidDescription: 'AITHOS grabs the document the moment you press send, catching it right on your device before a single byte escapes onto the internet.',
    technicalDetails: 'Parses JSON, FHIR, SQL, and unstructured text into canonical node trees. Establishes immutable session boundaries and cryptographic origin tags.',
    iconName: 'Search',
    accentColor: '#38BDF8', // Cyan-Blue
    sampleInput: 'Raw user request + 9-field patient EHR document payload',
    sampleOutput: 'Normalized Syntax Tree with 42 parsed metadata attributes',
    latencyMs: 1.4
  },
  {
    id: 2,
    name: 'DETECT',
    code: 'STG_02_DETECT',
    tagline: 'Local Multi-Model Entity & PII Recognition',
    kidTagline: 'The Secret Detective Sniffer 🐶🔎',
    description: 'Runs high-speed local NER (Named Entity Recognition), regex heuristics, and semantic classifier models to flag PII, MNPI, credentials, and sensitive private tokens.',
    kidDescription: 'Super-fast scanners sniff out private names, passwords, home addresses, and bank cards in 3 milliseconds — without calling any cloud servers!',
    technicalDetails: 'Detects 18 HIPAA Safe Harbor classes, PCI-DSS card patterns, RFC 5322 emails, SSNs, financial values, and custom regex policies in memory without network calls.',
    iconName: 'ShieldAlert',
    accentColor: '#F59E0B', // Amber
    sampleInput: '742 Evergreen Terr, Evelyn Vance, SSN 942-08-3319',
    sampleOutput: 'Flagged 7 sensitive identifiers (Risk Score: 0.94)',
    latencyMs: 3.8
  },
  {
    id: 3,
    name: 'SANITIZE',
    code: 'STG_03_SANITIZE',
    tagline: 'Cryptographic Deterministic Tokenization',
    kidTagline: 'The Secret Spy Code Ring 🕵️‍♂️✨',
    description: 'Replaces all detected sensitive entities with structured, reversible cryptographic tokens stored exclusively in the client-side vault.',
    kidDescription: 'Magically swaps out the real secret words with safe spy code names (like replacing "Evelyn" with "<SECRET_AGENT_#1>"). The secret key stays on your computer!',
    technicalDetails: 'Generates consistent deterministic tokens (e.g. <AUTH_SUBJECT_0x89A>). Anonymized payload retains syntactic grammatical coherence so the LLM reasons flawlessly without ever receiving true data.',
    iconName: 'Cpu',
    accentColor: '#4F46E5', // Clay Indigo
    sampleInput: 'Diagnosed Evelyn Vance (SSN: 942-08-3319) with Penicillin allergy',
    sampleOutput: 'Diagnosed <AUTH_SUBJECT_0x89A> (ID: <GOV_ID_MASKED>) with Penicillin allergy',
    latencyMs: 2.1
  },
  {
    id: 4,
    name: 'VALIDATE',
    code: 'STG_04_VALIDATE',
    tagline: 'Deterministic Policy Engine & Least-Privilege Gate',
    kidTagline: 'The Castle Gate Bouncer 🏰🛡️',
    description: 'Before any agent action or external tool call is dispatched, the proposed action is evaluated against mathematical allowlists and least-privilege security policies.',
    kidDescription: 'Checks if anyone is trying a sneaky hacker trick (like asking the AI to steal files). If it looks fishy, the bouncer slams the gate shut!',
    technicalDetails: 'Validates against JSON Schema policies. Prohibits destructive writes (DROP, UPDATE without WHERE, unauthorized egress), strictly enforcing read-only or authorized write scopes.',
    iconName: 'Lock',
    accentColor: '#10B981', // Emerald
    sampleInput: 'Proposed Action: tool_call = "read_allergy_contraindications(patient_token)"',
    sampleOutput: 'VERDICT: ALLOWED (Policy Rule 14: Read-Only Clinical Safety Query)',
    latencyMs: 1.9
  },
  {
    id: 5,
    name: 'EXECUTE',
    code: 'STG_05_EXECUTE',
    tagline: 'Isolated Sandboxed Execution Chamber',
    kidTagline: 'The Safe Robot Workshop 🤖🎡',
    description: 'Executes the validated action within an ephemeral sandbox, routing only sanitized tokens to third-party model inference or designated tools.',
    kidDescription: 'The AI robot does its homework using only the spy code names. It gets 100% the right answer without ever knowing Evelyn\'s real name or secrets!',
    technicalDetails: 'Inference returns a sanitized response referencing surrogate tokens. The local client layer de-tokenizes the output on the fly for authorized end-users.',
    iconName: 'Terminal',
    accentColor: '#0EA5E9', // Sky Blue
    sampleInput: 'Sanitized prompt payload sent to Cloudflare Workers / LLM',
    sampleOutput: 'Safe structured response returned in 184ms with 0% data exposure',
    latencyMs: 184.2
  },
  {
    id: 6,
    name: 'VERIFY',
    code: 'STG_06_VERIFY',
    tagline: 'Outcome Audit & Cryptographic Attestation',
    kidTagline: 'The Golden Stamp of Approval 🏅🔐',
    description: 'Inspects execution results against post-conditions, calculates SHA-256 state hashes, and logs a tamper-evident audit record to ensure full accountability.',
    kidDescription: 'AITHOS secretly unmasks the spy code back to Evelyn on your screen only, and stamps an official tamper-proof wax seal on the answer!',
    technicalDetails: 'Generates non-repudiation cryptographic receipts. Confirms that no unauthorized state mutations took place and that privacy preservation guarantees were upheld.',
    iconName: 'CheckCircle2',
    accentColor: '#8B5CF6', // Purple Glow
    sampleInput: 'Output payload + Pre/Post system state delta',
    sampleOutput: 'Audit Receipt #AITHOS-ATTEST-2026-981F4 signed with HMAC-SHA256',
    latencyMs: 1.6
  }
];
