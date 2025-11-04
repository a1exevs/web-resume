type AdditionalDetails = {
  title: string;
  items: { label: string; value: string; isLink?: boolean; linkPrefix?: string; linkDisplayValue?: string }[];
};

export type MainInfoData = {
  photoPath: string;
  fullName: string;
  position: string;
  status: string;
  location: string;
  resumeLastUpdateDate: string;
  additionalDetails: AdditionalDetails[];
};

export type ProjectData = {
  projectDescription: string;
  workPeriod: string;
  environment: string[];
  responsibilities: string[];
  keyContributions: string[];
};

export type CompanyExperience = {
  workPeriod: string;
  companyName: string;
  website: string;
  career: string;
  projectList: ProjectData[];
};

export type ExperienceData = {
  companyExperiences: CompanyExperience[];
};

export type ContactLinkData = {
  href: string;
  label: string;
  code: ContactLinkCode;
};

export type ContactsData = {
  contactLinks: ContactLinkData[];
};

export type Store = {
  mainInfo: MainInfoData;
  experienceData: ExperienceData;
  skillsData: SkillsData;
  projectsData: ProjectsData;
  contactsData: ContactsData;
};

export enum ContactLinkCode {
  GITHUB = 'GITHUB',
  HEAD_HUNTER = 'HEAD_HUNTER',
  LINKEDIN = 'LINKEDIN',
  GOOGLE_EMAIL = 'GOOGLE_EMAIL',
  YANDEX_EMAIL = 'YANDEX_EMAIL',
  YOUTUBE = 'YOUTUBE',
  LEETCODE = 'LEETCODE',
  INSTAGRAM = 'INSTAGRAM',
  WHATSAPP = 'WHATSAPP',
  TELEGRAM = 'TELEGRAM',
}

export type SkillSet = { title: string; items: string[] };

export type SkillsData = {
  skills: SkillSet[];
};

export type ProjectItemData = {
  logo: string;
  title: string;
  description: string;
  stack: string[];
  links: { live?: string; repo?: string };
};

export type ProjectsData = {
  projects: ProjectItemData[];
};
