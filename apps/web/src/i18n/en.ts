import type { Dict } from './types';

export const en: Dict = {
  profile: {
    name: 'Özge Büyüktorun',
    role: 'Senior QA & Test Automation Engineer — SDET',
    location: 'Ankara, Türkiye · Remote',
    email: 'ozgebuyuktorun@outlook.com',
    linkedin: 'https://linkedin.com/in/ozgebuyuktorun1',
    heroLine: 'I make quality something you can measure — and trust.',
    heroSub:
      'For nearly ten years I’ve built the automation that lets engineering teams move fast without breaking what already works. Today I do that remotely for Germany-based teams through Toptal.',
    availability: 'Open to senior SDET & QA-architecture roles',
  },

  about: {
    paragraphs: [
      'I came into software from biomedical engineering, where a defect isn’t a ticket — it’s a risk to someone’s safety. That lens still shapes how I test: I look for where a system is most likely to fail, and I measure my way there instead of guessing.',
      'Over six-plus years in QA I’ve built test architecture from scratch across very different worlds — enterprise web platforms, medical devices under ISO 13485 / MDR, and embedded defense systems at Baykar. The domains change; the discipline doesn’t.',
      'Lately my focus is AI-assisted testing: using LLMs and MCP-based agents to generate scenarios, heal flaky locators, and analyze failures — so the suite gets faster and people spend their time on the hard cases.',
    ],
    facts: [
      { label: 'Experience', value: '~10 yrs engineering · 6+ yrs QA' },
      { label: 'Based', value: 'Ankara, Türkiye · Remote' },
      { label: 'Focus', value: 'Playwright · TypeScript · CI/CD' },
      { label: 'Languages', value: 'Turkish (native) · English (B2–C1)' },
    ],
  },

  metrics: [
    { value: '40% → 85%', context: 'Test coverage I rebuilt from the ground up at CyanGate.' },
    { value: '−60%', context: 'Critical defects, caught earlier through automation.' },
    { value: '500K', context: 'Concurrent users I load-tested with JMeter at Lotec.' },
    { value: '~40%', context: 'Less time on repetitive scripting, with AI-assisted generation.' },
  ],

  skillGroups: [
    { heading: 'Test Automation', items: ['Playwright', 'TypeScript', 'Cypress', 'Selenium WebDriver', 'Cucumber / BDD', 'PyTest', 'Robot Framework', 'Selenium Grid'] },
    { heading: 'API & Performance', items: ['REST', 'GraphQL', 'WebSocket', 'Postman', 'JMeter', 'Grafana K6', 'RestAssured', 'SoapUI'] },
    { heading: 'AI-Assisted Quality', items: ['GitHub Copilot', 'Claude', 'MCP Agents', 'Self-Healing Tests', 'Visual AI (Applitools)', 'Prompt Engineering', 'Synthetic Data'] },
    { heading: 'Backend & Data', items: ['Node.js', 'NestJS', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'OracleDB', 'Apache Kafka'] },
    { heading: 'DevOps & Cloud', items: ['Jenkins', 'GitLab CI', 'Azure DevOps', 'Bitbucket', 'Docker', 'Kubernetes', 'AWS'] },
  ],

  experience: [
    {
      period: 'Aug 2025 — Present',
      role: 'Senior QA Automation Engineer',
      org: 'Toptal · remote, Germany-based clients',
      current: true,
      bullets: [
        'I architect and deliver end-to-end automation for large-scale international software, working remotely with Germany-based teams.',
        'On a sensor- and hardware-driven product I own the web and mobile automation, API tests, and the regression and smoke suites.',
        'I run tests and testing agents in CI through MCP (Model Context Protocol) systems, and advise on CI/CD and shift-left strategy.',
      ],
    },
    {
      period: 'Jun 2025 — Aug 2025',
      role: 'Senior QA Automation Engineer',
      org: 'BilgeAdam Technology · PTT Information Technologies',
      bullets: [
        'Manual and automation testing on the PTT Card (MYS) and TR Card projects, scripting in Selenium + Java with BDD / Gherkin.',
        'Performance and load testing with JMeter; API integration with Postman; processes documented in Jira and Confluence.',
        'Cut repetitive scripting time ~40% with Copilot and Claude, and reduced regression false-positives with AI-based log analysis.',
      ],
    },
    {
      period: 'Oct 2023 — Mar 2025',
      role: 'Senior QA Automation Engineer',
      org: 'CyanGate · OneTeg (DAM & PIM)',
      bullets: [
        'I built the Playwright (Node.js) automation repository from scratch — Smoke, Regression and E2E — and raised coverage from 40% to 85%.',
        'Wired it into CI/CD (Jenkins, Bitbucket) with Allure reporting and Mockoon mock APIs, and optimized speed through parallel execution.',
        'Added visual-regression checks and self-healing locators to keep a fast, low-noise suite.',
      ],
    },
    {
      period: 'Apr 2023 — Aug 2023',
      role: 'QA Automation Engineer',
      org: 'Meva Avionics · Baykar Technology',
      bullets: [
        'Part of the founding test team; built the test architecture from scratch for UAV cockpit embedded software.',
        'Python with QT / Tkinter; USB, Ethernet, RS232/422/485 and CAN protocols.',
        'End-to-end system testing on STM32 (ARM Cortex-M) and TI Sitara (AM6442) with UART / SPI / I2C integrity analysis.',
      ],
    },
    {
      period: 'Feb 2022 — Jan 2023',
      role: 'QA Automation Engineer',
      org: 'Lotec',
      bullets: [
        'E2E, regression and smoke automation with Selenium WebDriver (Python) across IoT, smart-lighting (DALI) and exam-system projects.',
        'Designed JMeter load tests for 500,000 concurrent users.',
        'REST, GraphQL and WebSocket API testing on AWS microservices (CloudWatch, DynamoDB, IoT Core, S3).',
      ],
    },
    {
      period: 'Feb 2020 — Jan 2022',
      role: 'Senior Medical QA Specialist · Team Lead',
      org: 'Proted · Prosthetics & Orthotics',
      bullets: [
        'Led all quality engineers and test technicians.',
        'Ensured compliance with ISO 13485, MDR/745, ISO 9001 and ISO 14001.',
        'Owned MDR technical files, risk analysis and device licensing on the Ministry of Health UTS system.',
      ],
    },
    {
      period: '2014 — 2018',
      role: 'Medical Device QA & Product Specialist',
      org: 'ELDAS · Okuman Medical',
      bullets: [
        'Electrical-safety testing to IEC 60601-1 and EN 61010-1, with ISO 14971 risk files and test reports.',
        'Earlier product-specialist work across anesthesia and ICU device groups — the start of my medical-device foundation.',
      ],
    },
  ],

  industries: [
    { title: 'Enterprise IT', sub: 'DAM / PIM, public-sector platforms, large-scale web' },
    { title: 'Medical Devices', sub: 'ISO 13485 · MDR · IEC 60601' },
    { title: 'Defense & Avionics', sub: 'Baykar · embedded UAV systems' },
    { title: 'Cloud & IoT', sub: 'AWS · IoT Core · microservices' },
  ],

  education: [
    { title: 'B.Sc. — Biomedical Engineering', meta: 'Erciyes University, Kayseri · 2009–2013' },
  ],

  certifications: [
    { title: 'Node.js Backend Development Bootcamp', meta: 'Patika.dev / NewMind · 2025' },
    { title: 'Test Automation with Playwright', meta: 'Udemy · 2024' },
    { title: 'AWS Cloud Practitioner Essentials', meta: '2023' },
    { title: 'Agile Testing Certification', meta: '2022' },
  ],

  ui: {
    nav: { about: 'About', impact: 'Impact', skills: 'Skills', work: 'Experience', contact: 'Contact' },
    sections: {
      aboutEyebrow: 'About',
      aboutTitle: 'How I think about quality',
      impactEyebrow: 'Impact',
      impactTitle: 'Measurable results',
      skillsEyebrow: 'Toolkit',
      skillsTitle: 'What I work with',
      workEyebrow: 'Experience',
      workTitle: 'Where I’ve done it',
      industriesEyebrow: 'Domains',
      industriesTitle: 'Tested across industries',
      educationEyebrow: 'Foundations',
      educationTitle: 'Education & certifications',
      educationLabel: 'Education',
      certsLabel: 'Certifications',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s talk',
      titleAccent: 'quality.',
      sub: 'I’m open to senior SDET and QA-architecture roles — remote or Ankara-based. Tell me what you’re building and where quality hurts.',
      name: 'Your name',
      namePlaceholder: 'Jane Doe',
      email: 'Email',
      emailPlaceholder: 'you@company.com',
      message: 'Message',
      messagePlaceholder: 'What are you building, and where does quality hurt?',
      send: 'Send message',
      sending: 'Sending…',
      success: 'Thanks — your message reached me. I’ll reply soon.',
      errorPrefix: 'Couldn’t send right now. You can email me directly at',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      current: 'Current',
    },
    footer: 'Designed & built by Özge Büyüktorun',
    switchTo: 'TR',
  },
};
