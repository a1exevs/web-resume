import { languageCodes } from 'src/shared/model/lang/lang.consts';

export type LanguageCode = (typeof languageCodes)[number];

const enLabels = {
  LAST_UPDATE: 'Last update',
  STATUS: 'Status',
  LOCATION: 'Location',
  WORK_EXPERIENCE: 'Work experience',
  COMPANY: 'Company',
  WEBSITE: 'Website',
  PERIOD: 'Period',
  CAREER: 'Career',
  PROJECT_LIST: 'Project list',
  PROJECT: 'Project',
  ENVIRONMENT: 'Environment',
  RESPONSIBILITIES: 'Responsibilities',
  KEY_CONTRIBUTIONS: 'Key contributions',
  PROJECTS: 'Projects',
  LIVE_DEMO: 'Live demo',
  REPOSITORY: 'Repository',
  SKILLS_MATRIX: 'Skills matrix',
  SYSTEM_SKAN_COMPLETE: 'System scan complete',
  CONTINUOUS_LEARNING: 'Continuous learning',
  CONTACTS: 'Contacts',
};

const enMessages = {
  PROJECT_LIST_ORDER_MESSAGE: '(the most recent projects at the top)',
  SKILLS_DATA_UPDATE_MESSAGE: 'All skills up-to-date.',
  CONSTANTLY_SKILLS_UPGRADING_MESSAGE:
    'Constantly upgrading my skill set to stay ahead in the ever-evolving tech landscape.',
};

const enImageAlts = {
  AVATAR: 'Avatar',
};

export type LanguageConstants = {
  labels: typeof enLabels;
  messages: typeof enMessages;
  imageAlts: typeof enImageAlts;
};

export type LocalizationData = Record<LanguageCode, LanguageConstants>;

export const lang: LocalizationData = {
  en: {
    labels: enLabels,
    messages: enMessages,
    imageAlts: enImageAlts,
  },
};
