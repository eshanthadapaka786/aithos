import { MissionOption } from '../types';

export const MISSIONS: MissionOption[] = [
  {
    id: 'health-records',
    category: 'Healthcare & HIPAA',
    badge: 'Clinical Hospital Case',
    title: 'Summarize Patient Diagnostic & Billing Records',
    taskQuery: 'Extract the diagnosed allergy contraindications and prescribed dosage schedule for outpatient recovery.',
    documentTitle: 'Metropolitan General Hospital — Discharge Summary & Billing Ledger #MGH-88419',
    documentType: 'Clinical Health Record (HL7 / FHIR Ingestion)',
    kidAnalogy: "🏥 Case File: Evelyn's Doctor Note. We only need the AI to check what medicine Evelyn needs to get better. But regular AI dumps her home address, secret bank card, and diary notes into a public cloud server!",
    kidDangerWarning: '🚨 7 super secret items are about to be leaked to strangers!',
    rawPayload: [
      {
        id: 'f1',
        label: 'Patient Full Legal Name',
        value: 'Evelyn Marie Vance-Montgomery',
        isSensitive: true,
        sensitivityReason: 'Direct HIPAA PII Identifier (18 Safe Harbor Fields § 164.514)',
        tokenReplacement: '<AUTH_SUBJECT_TOKEN_0x89A>',
        kidWhyDangerous: "Reveals Evelyn's real private identity to external servers!"
      },
      {
        id: 'f2',
        label: 'Social Security Number',
        value: '942-08-3319',
        isSensitive: true,
        sensitivityReason: 'Critical Government PII — Severe Identity Theft Risk',
        tokenReplacement: '<GOV_ID_HASH_MASKED>',
        kidWhyDangerous: 'A thief could steal her identity and open credit cards in her name!'
      },
      {
        id: 'f3',
        label: 'Medical Record Number (MRN)',
        value: 'MRN-773091-B',
        isSensitive: true,
        sensitivityReason: 'Institutional Patient Health Identifier',
        tokenReplacement: '<CLINICAL_REF_ID_TOKEN>',
        kidWhyDangerous: 'Private hospital barcode linked to all her health history.'
      },
      {
        id: 'f4',
        label: 'Date of Birth & Age',
        value: '1979-04-12 (Age 45)',
        isSensitive: true,
        sensitivityReason: 'HIPAA Date Element (Exact DOB prohibited)',
        tokenReplacement: '<AGE_BAND_TOKEN_40_49>',
        kidWhyDangerous: 'Her exact birthday is a secret password key for banks!'
      },
      {
        id: 'f5',
        label: 'Residential Address',
        value: '742 Evergreen Terrace, Apt 4B, Boston MA 02108',
        isSensitive: true,
        sensitivityReason: 'Geographic Identifiers smaller than state',
        tokenReplacement: '<GEO_REGION_NE_URBAN>',
        kidWhyDangerous: 'Shows strangers exactly where she and her family sleep at night.'
      },
      {
        id: 'f6',
        label: 'Private Insurance ID & Visa Billing',
        value: 'BlueCross BC-881920 / CC: 4532-••••-••••-8812',
        isSensitive: true,
        sensitivityReason: 'PCI-DSS Cardholder Data & Insurer ID',
        tokenReplacement: '<PAYMENT_METHOD_TOKEN_VERIFIED>',
        kidWhyDangerous: 'Bank payment cards must NEVER be sent to an AI chatbot!'
      },
      {
        id: 'f7',
        label: 'Attending Physician Notes',
        value: 'Patient reports high anxiety regarding ongoing family custody dispute.',
        isSensitive: true,
        sensitivityReason: 'Sensitive Psychiatric Observation (HIPAA Extra Protection)',
        tokenReplacement: '<REDACTED_IRRELEVANT_PSYCH_NOTE>',
        kidWhyDangerous: 'Private personal family worries that have nothing to do with pills.'
      },
      {
        id: 'f8',
        label: 'Diagnosed Drug Allergies',
        value: 'Severe Anaphylaxis to Penicillin-G and Cephalosporins. Mild rash to Sulfa drugs.',
        isSensitive: false, // Task relevant!
        tokenReplacement: 'Severe Anaphylaxis to Penicillin-G and Cephalosporins. Mild rash to Sulfa drugs.',
        kidWhyDangerous: 'Safe to share! The AI genuinely needs this to avoid giving dangerous pills.'
      },
      {
        id: 'f9',
        label: 'Discharge Prescription Schedule',
        value: 'Azithromycin 500mg Day 1, 250mg Days 2-5 PO daily. Acetaminophen 500mg q6h PRN pain.',
        isSensitive: false, // Task relevant!
        tokenReplacement: 'Azithromycin 500mg Day 1, 250mg Days 2-5 PO daily. Acetaminophen 500mg q6h PRN pain.',
        kidWhyDangerous: 'Safe to share! This is the exact task we asked the AI helper to organize.'
      }
    ],
    conventionalLeakSummary: 'Conventional AI sends all 9 raw fields (including SSN, full name, address, credit card, and psychiatric notes) straight into the external model context window and provider logs.',
    aithosSanitizedSummary: 'AITHOS detects and replaces 7 sensitive identifying fields with reversible cryptographically isolated tokens. Only the 2 clinical medication fields reach the model context.',
    riskScore: 94
  },
  {
    id: 'finance-deal',
    category: 'Corporate Finance & M&A',
    badge: 'Confidential Deal Room',
    title: 'Analyze Enterprise M&A Deal Memorandum & Valuation',
    taskQuery: 'Extract the antitrust regulatory review timeline and EBITDA multiple covenants for transaction closing.',
    documentTitle: 'Project Falcon — Strictly Confidential Acquisition Memorandum & Syndicate Term Sheet',
    documentType: 'Securities & SEC Restrained Financial Data',
    kidAnalogy: "💼 Case File: The Super-Secret $4 Billion Company Buyout. Two huge companies want to join together in secret. If regular AI leaks the price, hackers will game the stock market!",
    kidDangerWarning: '🚨 Secret bank account routing and stock deal prices exposed!',
    rawPayload: [
      {
        id: 'f1',
        label: 'Target Enterprise Name',
        value: 'Novasphere Telecommunications AG (SIX: NOVT)',
        isSensitive: true,
        sensitivityReason: 'Material Non-Public Information (MNPI) / SEC Insider Trading Risk',
        tokenReplacement: '<ENTITY_TARGET_CORP_SIGMA>',
        kidWhyDangerous: 'If people find out early, illegal stock trading happens!'
      },
      {
        id: 'f2',
        label: 'Acquiring Consortium & Chairman',
        value: 'Apex Global Holdings (Lead: Sir Arthur Sterling)',
        isSensitive: true,
        sensitivityReason: 'Confidential Bidding Party Identity',
        tokenReplacement: '<ENTITY_BIDDER_CONSORTIUM>',
        kidWhyDangerous: 'Reveals who is secretly buying the company.'
      },
      {
        id: 'f3',
        label: 'Proprietary Tender Offer Price',
        value: '$4.85 Billion USD ($48.50/share at 38% premium)',
        isSensitive: true,
        sensitivityReason: 'Strict Unannounced Transaction Pricing',
        tokenReplacement: '<VALUATION_BAND_TOKEN_TIER_A>',
        kidWhyDangerous: 'Huge trade secret: how many billions of dollars are on the table.'
      },
      {
        id: 'f4',
        label: 'Escrow Wire Account & Routing',
        value: 'JPMorgan Chase NYC / ABA: 021000021 / Acct: 9948201948',
        isSensitive: true,
        sensitivityReason: 'Critical Corporate Banking Infrastructure',
        tokenReplacement: '<ESCROW_ACCOUNT_TOKEN_VAULT>',
        kidWhyDangerous: 'Real bank routing numbers that could be targeted by wire fraudsters!'
      },
      {
        id: 'f5',
        label: 'Internal Board Dissent Notes',
        value: 'CFO Warns of undetected supply chain liabilities in European subsidiary.',
        isSensitive: true,
        sensitivityReason: 'Privileged Internal Deliberation & Liability Disclosure',
        tokenReplacement: '<PRIVILEGED_INTERNAL_MEMO_EXCLUDED>',
        kidWhyDangerous: 'Secret board arguments that shouldn’t be leaked.'
      },
      {
        id: 'f6',
        label: 'Regulatory Review Window',
        value: 'FTC & European Commission Phase 2 Review window estimated at 180 calendar days.',
        isSensitive: false,
        tokenReplacement: 'FTC & European Commission Phase 2 Review window estimated at 180 calendar days.',
        kidWhyDangerous: 'Safe to share! Standard legal timeline rules.'
      },
      {
        id: 'f7',
        label: 'Transaction Financial Covenant Terms',
        value: 'Consolidated Senior Secured Leverage Ratio shall not exceed 3.75x trailing twelve-month adjusted EBITDA.',
        isSensitive: false,
        tokenReplacement: 'Consolidated Senior Secured Leverage Ratio shall not exceed 3.75x trailing twelve-month adjusted EBITDA.',
        kidWhyDangerous: 'Safe to share! Math rules the AI needs to check.'
      }
    ],
    conventionalLeakSummary: 'Conventional AI sends target company names, insider valuation multiples, and JPMorgan wire transfer coordinates straight into external LLM servers.',
    aithosSanitizedSummary: 'AITHOS masks entity names, tender pricing, and bank accounts into cryptographically protected placeholders while letting the AI calculate covenants with 100% mathematical precision.',
    riskScore: 91
  },
  {
    id: 'customer-identity',
    category: 'FinTech & Consumer Banking',
    badge: 'Fraud Resolution Dossier',
    title: 'Resolve Stolen Identity Dispute & Reissue Account',
    taskQuery: 'Check transaction dispute codes and verify whether chargeback arbitration qualifies under NACHA Regulation E.',
    documentTitle: 'Titan Bank Global — Customer Dispute Dossier & KYC Verification #TB-9021-X',
    documentType: 'Gramm-Leach-Bliley Act (GLBA) Financial Consumer Data',
    kidAnalogy: "💳 Case File: Stolen Bank Card Dispute. A customer had their card stolen at a pizza shop. We need the AI to check the refund rules, but regular AI transmits their full passport and PIN numbers!",
    kidDangerWarning: '🚨 Live passport scans and bank login passwords at risk!',
    rawPayload: [
      {
        id: 'f1',
        label: 'Account Holder Full Name',
        value: 'Marcus Alexander Sterling-Chen',
        isSensitive: true,
        sensitivityReason: 'Customer PII Identifier',
        tokenReplacement: '<ACCOUNT_HOLDER_SURROGATE>',
        kidWhyDangerous: 'The customer’s real full name.'
      },
      {
        id: 'f2',
        label: 'National Passport & ID Number',
        value: 'US Passport #A91028471 (Exp: 2031)',
        isSensitive: true,
        sensitivityReason: 'Biometric & Government Travel Credential',
        tokenReplacement: '<PASSPORT_HASH_PROTECTED>',
        kidWhyDangerous: 'A real passport number could let someone travel under your name!'
      },
      {
        id: 'f3',
        label: 'Primary Debit Card Number & CVV',
        value: 'Visa Debit: 4111-••••-••••-9012 / CVV: 891',
        isSensitive: true,
        sensitivityReason: 'PCI-DSS Direct Cardholder Security Credential',
        tokenReplacement: '<PAYMENT_CARD_TOKEN_INTERNAL>',
        kidWhyDangerous: 'CVV security code! Anyone with this can buy things online!'
      },
      {
        id: 'f4',
        label: 'Mobile Phone & 2FA Recovery SMS',
        value: '+1 (555) 891-2304 (Carrier: Verizon US)',
        isSensitive: true,
        sensitivityReason: '2FA Channel Egress Target / SIM Swap Risk',
        tokenReplacement: '<COMM_CHANNEL_HASH_MASK>',
        kidWhyDangerous: 'Hackers use phone numbers to steal text message login codes!'
      },
      {
        id: 'f5',
        label: 'Disputed Transaction Description',
        value: 'Fraudulent wire transaction of $3,450.00 to merchant "LUXURY_CRYPTO_EXCHANGE" at 03:14 UTC.',
        isSensitive: false,
        tokenReplacement: 'Disputed transaction of $3,450.00 to merchant "LUXURY_CRYPTO_EXCHANGE" at 03:14 UTC.',
        kidWhyDangerous: 'Safe to share! The AI needs this to check if the charge was fake.'
      },
      {
        id: 'f6',
        label: 'Dispute Reason Code & Regulation',
        value: 'Claim Code 10.4: Unauthorized Card-Not-Present Remote Charge under NACHA Reg E 10-day provisional credit.',
        isSensitive: false,
        tokenReplacement: 'Claim Code 10.4: Unauthorized Card-Not-Present Remote Charge under NACHA Reg E 10-day provisional credit.',
        kidWhyDangerous: 'Safe to share! The legal refund rulebook.'
      }
    ],
    conventionalLeakSummary: 'Conventional AI uploads live passport numbers, debit cards, security CVVs, and 2FA telephone numbers directly into third-party cloud data centers.',
    aithosSanitizedSummary: 'AITHOS strips passport credentials, card numbers, and contact channels using zero-knowledge client tokenization. Only the dispute code and transaction rules reach the AI.',
    riskScore: 96
  }
];
