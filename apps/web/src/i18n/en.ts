import type { Dict } from './types';

export const en: Dict = {
  profile: {
    name: 'Özge Büyüktorun',
    role: 'Senior Quality Assurance & Test Automation Engineer — SDET',
    location: 'Ankara, Türkiye · Remote',
    email: 'ozgebuyuktorun@outlook.com',
    linkedin: 'https://linkedin.com/in/ozgebuyuktorun1',
    heroLine: 'My analitical thinking strategy makes quality measurable and reliable.s',
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
      { label: 'Experience', value: '~13 yrs engineering · 7+ yrs QA' },
      { label: 'Based', value: 'Ankara, Türkiye · Remote' },
      { label: 'Focus', value: 'Playwright · TypeScript · CI/CD · Selenium ·Apache Jmeter ·Postman ·Graphana K6 ·AWS Microservices ·Confluence ·Jira ·Bitbucket ·VS Code ·LoadRunner ·RestAssured ·Cypress ·Katalon Studio' },
      { label: 'Languages', value: 'Turkish (Native) · English (B2–C1) · German (A2–B1)' },
    ],
  },

  metrics: [
    { value: '40% → 85%', context: 'Test coverage I rebuilt from the ground up at CyanGate.' },
    { value: '−60%', context: 'Critical defects, caught earlier through automation.' },
    { value: '500K', context: 'Concurrent users I load-tested with JMeter at Lotec for Certified project.' },
    { value: '~40%', context: 'Less time on repetitive scripting, with AI-assisted generation.' },
  ],

  skillGroups: [
    { heading: 'Test Automation', items: ['Playwright (Advanced)', 'Cypress (Intermediate)', 'Selenium WebDriver', 'Selenium Grid', 'Cucumber / Gherkin', 'PyTest', 'Robot Framework', 'QT Framework', 'Tkinter'] },
    { heading: 'API & Performance', items: ['RESTful API', 'GraphQL', 'WebSocket', 'Postman', 'SoapUI', 'JMeter', 'Grafana K6', 'RestAssured', 'Mockoon'] },
    { heading: 'AI-Assisted Quality', items: ['GitHub Copilot', 'Claude AI', 'ChatGPT', 'MCP Agents', 'Self-Healing Tests', 'Visual AI (Applitools)', 'Predictive Test Analytics', 'Prompt Engineering', 'Synthetic Data'] },
    { heading: 'Test Management & Methods', items: ['Jira', 'X-RAY', 'Confluence', 'BDD', 'Gherkin', 'Shift-Left Testing', 'UAT', 'Regression', 'Smoke', 'E2E', 'Load & Stress'] },
    { heading: 'Backend & Data', items: ['JavaScript (Advanced)', 'TypeScript', 'Node.js', 'Python', 'Java', 'NestJS', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'OracleDB', 'Apache Kafka'] },
    { heading: 'DevOps & Cloud', items: ['Jenkins', 'GitLab CI', 'Bitbucket Pipelines', 'Azure DevOps', 'Git', 'SVN', 'Docker', 'Kubernetes', 'AWS (CloudWatch, DynamoDB, IoT Core, S3, Cognito)'] },
  ],

  experience: [
    {
      period: 'August 2025 — Present',
      role: 'Senior Quality Assurance Automation Engineer',
      org: 'Toptal · Remote — Germany-based clients · Ankara, Türkiye',
      current: true,
      summary:
        'Architecting and delivering end-to-end automation strategies for large-scale international software, collaborating remotely with Germany-based engineering teams.',
      bullets: [
        'On a sensor- and hardware-driven product, owning the web and mobile automation, API tests, and the planning, building and maintenance of the regression and smoke suites.',
        'Working with MCP (Model Context Protocol) systems to run automated tests and testing agents, and to integrate automation agents and test processes into CI pipelines.',
        'Developing scalable test frameworks using Playwright and TypeScript for high-performance web applications.',
        'Providing technical consultancy on CI/CD integration and shift-left testing approaches.',
        'Spearheading the integration of AI-assisted testing tools to automate routine maintenance and enhance test coverage through intelligent synthetic data generation.',
      ],
      tags: ['Playwright', 'TypeScript', 'MCP', 'Web & Mobile', 'API', 'CI/CD', 'Shift-Left'],
    },
    {
      period: 'June 2025 — August 2025 (3 months)',
      role: 'Senior Quality Assurance Automation Engineer',
      org: 'BilgeAdam Technology · PTT Information Technologies · Ankara · Hybrid',
      bullets: [
        'Performed comprehensive manual and automation testing on the PTT Card (MYS) and TR Card projects.',
        'Wrote test automation scripts using BDD and Gherkin in Selenium and Java.',
        'Executed performance and load tests using JMeter; performed API integration tests using Postman.',
        'Managed and documented test processes using Jira and Confluence.',
        'Planned tests based on risk analysis and defect prioritization.',
      ],
      groups: [
        {
          label: 'AI-Powered Enhancements',
          items: [
            'Accelerated test scenario generation using GitHub Copilot and Claude AI, reducing repetitive script development time by ~40%.',
            'Used LLM-based prompt engineering to automatically generate test datasets and edge-case scenarios.',
            'Applied AI-powered log analysis to reduce false-positive rates in regression testing.',
          ],
        },
      ],
      tags: ['Selenium', 'Java', 'BDD / Gherkin', 'JMeter', 'Postman', 'Jira', 'Confluence'],
    },
    {
      period: 'October 2023 — March 2025 (1 year 6 months)',
      role: 'Senior Quality Assurance Automation Engineer',
      org: 'CyanGate · OneTeg Project (DAM & PIM Integrations) · Ankara · Hybrid',
      summary:
        'Contributed to the OneTeg Project as a QA engineer focused on web UI automation and API testing.',
      bullets: [
        'Analyzed requirements, designed and executed test cases, and managed defect reporting and regression testing.',
        'Developed and maintained automated test coverage using Playwright (Node.js / JavaScript); architected the test automation repository from scratch covering Smoke, Regression and E2E test suites, raising coverage from 40% to 85%.',
        'Conducted root cause analysis on Nightly Build reports for early bug detection; integrated HTML and Allure Reporting for comprehensive test visualization.',
        'Optimized execution speed through parallel execution and scalable test architecture.',
        'Designed CI/CD-integrated test automation frameworks (Jenkins, Bitbucket); configured mock API environments using Mockoon.',
        'Led POC initiatives for new technology integration; prepared traceability matrices and test documentation.',
      ],
      groups: [
        {
          label: 'AI-Powered Enhancements',
          items: [
            'Rapidly scaffolded Playwright test scenarios using AI-assisted tools (Copilot, Claude), significantly reducing automation development time.',
            'Integrated visual regression testing to automatically detect UI changes and minimize false-positive rates.',
            'Researched and implemented self-healing test locator strategies for automatic recovery on dynamic web elements.',
            'Worked on AI-driven synthetic test data generation and predictive test selection strategies.',
            'Accelerated bug report categorization and root cause analysis using LLM-based defect analysis.',
          ],
        },
      ],
      tags: ['Playwright', 'Node.js', 'JavaScript', 'Jenkins', 'Bitbucket', 'Allure', 'Mockoon'],
    },
    {
      period: 'April 2023 — August 2023 (5 months)',
      role: 'Quality Assurance Automation Engineer',
      org: 'Meva Avionics · Baykar Technology · Ankara · On-site',
      summary:
        "Part of the first team established at Baykar's startup; built the test architecture from scratch for UAV cockpit embedded software.",
      bullets: [
        'Designed automation tests for geographic positioning in UAV cockpit embedded software.',
        'Built test automation infrastructure using Python with QT and Tkinter frameworks.',
        'Actively used USB, Ethernet, RS232/422/485 and CAN communication protocols.',
        'Hands-on experience with STM32 (ARM Cortex-M) and TI AM6442 (Sitara) architectures; performed end-to-end system testing with UART, SPI and I2C data integrity analysis.',
        'Integrated test automation into GitLab CI/CD pipelines; managed version control with SVN and Git.',
      ],
      tags: ['Python', 'QT', 'Tkinter', 'CAN', 'RS232/422/485', 'STM32', 'TI AM6442', 'GitLab CI'],
    },
    {
      period: 'February 2022 — January 2023 (1 year)',
      role: 'Quality Assurance Automation Engineer',
      org: 'Lotec Company · Ankara · On-site',
      summary:
        'Projects: Home Farming Applications (Mobile), Remote-Controlled Street Lighting (DALI, IoT, Web), Braue Kajer Sensor Data Project (Web), Certified Student Exam System (Web).',
      bullets: [
        'Completed E2E, regression and smoke test automation with Selenium WebDriver (Python).',
        'Designed and implemented performance and load tests using Apache JMeter for 500,000 concurrent users.',
        'Performed REST API, GraphQL and WebSocket API tests; built API automation using Postman, RestAssured and Grafana K6.',
        'Extensively used AWS microservice architecture (CloudWatch, DynamoDB, IoT Core, S3).',
        'Wrote test scenarios using Gherkin syntax with a BDD approach.',
      ],
      tags: ['Selenium', 'Python', 'JMeter', 'REST', 'GraphQL', 'WebSocket', 'AWS', 'Grafana K6'],
    },
    {
      period: 'February 2020 — January 2022 (2 years)',
      role: 'Senior Medical Quality Assurance Specialist · Team Lead',
      org: 'Proted · Prosthetics and Orthotics · Ankara · On-site',
      bullets: [
        'Served as team lead for all Quality Engineers and Test Technicians.',
        'Ensured compliance with ISO 13485, MDR/745, ISO 9001 and ISO 14001 standards.',
        'Managed MDR technical file creation, risk analysis, clinical research and literature reviews.',
        'Managed medical device documentation and licensing on the Ministry of Health UTS System.',
      ],
      tags: ['ISO 13485', 'MDR/745', 'ISO 9001', 'ISO 14001', 'Risk Analysis', 'UTS'],
    },
    {
      period: 'January 2018 — February 2020 (2 years 2 months)',
      role: 'Career Break — Full-Time Parenting',
      org: 'Full-Time Parenting · Ankara',
      bullets: [
        'Took a conscious career break following the birth of my first son, Cihangir, to dedicate time to his early development.',
      ],
    },
    {
      period: 'September 2016 — January 2018 (1 year 5 months)',
      role: 'Electrical Safety Test and QA Specialist',
      org: 'ELDAS Test and Calibration Laboratory · Ankara · On-site',
      bullets: [
        'Conducted electrical safety tests (LVD) according to IEC 60601-1 and EN 61010-1 standards.',
        'Managed risk assessment and technical documentation in accordance with ISO 14971.',
        'Developed test procedures for medical devices and created comprehensive test reports (TRF).',
      ],
      tags: ['IEC 60601-1', 'EN 61010-1', 'ISO 14971', 'LVD', 'TRF'],
    },
    {
      period: 'August 2014 — August 2015 (1 year 1 month)',
      role: 'Technical Medical Device Products Specialist',
      org: 'Okuman Medical Systems Inc. · Ankara · On-site',
      bullets: [
        'Responsible for all processes including sales, tenders, demos and quality documentation for anesthesia and ICU product groups.',
      ],
      tags: ['Anesthesia', 'ICU Devices', 'Tenders', 'Product Demos'],
    },
  ],

  achievements: [
    { title: 'Test Automation Transformation', detail: 'Increased test coverage from 40% to 85% at CyanGate, reducing critical defects by 60%.' },
    { title: 'CI/CD Integration', detail: 'Integrated E2E, Smoke and Regression tests into Jenkins pipelines, accelerating bug-detection cycles.' },
    { title: 'API Test Framework', detail: 'Built a dynamic Mock API environment with Mockoon, doubling development speed.' },
    { title: 'International Collaboration', detail: 'Leading large-scale end-to-end automation remotely with Germany-based teams via Toptal.' },
    { title: 'Cross-functional Bridge', detail: 'Connected embedded and software teams at Baykar, optimizing test processes across disciplines.' },
  ],

  competencies: [
    'Strong analytical thinking and problem-solving',
    'Effective communication and cross-functional collaboration',
    'Leadership in managing QA teams and mentoring junior engineers',
    'Adaptability and rapid learning in fast-changing environments',
    'Proactive approach to process improvement and innovation',
    'High attention to detail and commitment to quality',
  ],

  industries: [
    { title: 'Enterprise IT', sub: 'DAM / PIM, public-sector platforms, large-scale web' },
    { title: 'Medical Devices', sub: 'ISO 13485 · MDR · IEC 60601' },
    { title: 'Defense & Avionics', sub: 'Baykar · embedded UAV systems' },
    { title: 'Cloud & IoT', sub: 'AWS · IoT Core · microservices' },
  ],

  education: [
    { title: 'B.Sc. — Biomedical Engineering', meta: 'Erciyes University, Kayseri · 2009–2013' },
    { title: 'High School Diploma — Science', meta: 'Kayseri Rahmi Kula Anatolian High School · 2004–2008' },

  ],

  certifications: [
    { title: 'Look all certifications https://www.linkedin.com/in/ozgebuyuktorun1/details/certifications/', meta: 'LinkedIn' },
    { title: 'Node.js Backend Development Bootcamp', meta: 'Patika.dev / NewMind · 2025' },
    { title: 'Test Automation with Playwright', meta: 'Udemy · 2024' },
    { title: 'AWS Cloud Practitioner Essentials', meta: '2023' },
    { title: 'Agile Testing Certification', meta: '2022' },
  ],

  ui: {
    nav: { about: 'About', impact: 'Impact', skills: 'Skills', work: 'Experience', achievements: 'Highlights', contact: 'Contact' },
    sections: {
      aboutEyebrow: 'About',
      aboutTitle: 'How I think about quality',
      impactEyebrow: 'Impact',
      impactTitle: 'Measurable results',
      skillsEyebrow: 'Toolkit',
      skillsTitle: 'What I work with',
      workEyebrow: 'Experience',
      workTitle: 'Where I’ve done it',
      achievementsEyebrow: 'Highlights',
      achievementsTitle: 'Achievements & strengths',
      achievementsLabel: 'Key achievements',
      competenciesLabel: 'Core competencies',
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