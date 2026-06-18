export type Locale = 'tr' | 'en';

export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  linkedin: string;
  /** Big first-person thesis line in the hero. */
  heroLine: string;
  /** Supporting sentence under the hero line. */
  heroSub: string;
  /** Short availability note shown as a badge. */
  availability: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface Metric {
  value: string;
  context: string;
}

export interface SkillGroup {
  heading: string;
  items: string[];
}

export interface Job {
  period: string;
  role: string;
  org: string;
  current?: boolean;
  bullets: string[];
}

export interface Industry {
  title: string;
  sub: string;
}

export interface NamedEntry {
  title: string;
  meta: string;
}

export interface UIStrings {
  nav: { about: string; impact: string; skills: string; work: string; contact: string };
  sections: {
    aboutEyebrow: string;
    aboutTitle: string;
    impactEyebrow: string;
    impactTitle: string;
    skillsEyebrow: string;
    skillsTitle: string;
    workEyebrow: string;
    workTitle: string;
    industriesEyebrow: string;
    industriesTitle: string;
    educationEyebrow: string;
    educationTitle: string;
    educationLabel: string;
    certsLabel: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    sub: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    errorPrefix: string;
    emailLabel: string;
    linkedinLabel: string;
    current: string;
  };
  footer: string;
  switchTo: string;
}

export interface Dict {
  profile: Profile;
  about: { paragraphs: string[]; facts: Fact[] };
  metrics: Metric[];
  skillGroups: SkillGroup[];
  experience: Job[];
  industries: Industry[];
  education: NamedEntry[];
  certifications: NamedEntry[];
  ui: UIStrings;
}

export interface ContactInput {
  name: string;
  email: string;
  message: string;
  locale?: Locale;
  company?: string; // honeypot
}
