import { IconName } from 'src/ui/common/components/Icon/Icon';

export type HeaderData = {
  photoPath: string;
  lastUpdateDate: string;
};

export type CommonInfoData = {
  photoPath: string;
  fullName: string;
  birthday: Date;
  city: string;
  workAt: string;
  summary: string;
};

export enum ContentTabName {
  TECHNICAL_SKILLS = 'TECHNICAL_SKILLS',
  CAREER_HISTORY = 'CAREER_HISTORY',
  PERSONAL_INFORMATION = 'PERSONAL_INFORMATION',
}

export type Tab = {
  tabId: ContentTabName;
  displayName: string;
  tabIcon?: IconName;
};

export type TechArea = {
  name: string;
  yearsCount: number;
};

export type TechnologySet = {
  language: string;
  technologies: string[];
};

export type SoftwareCategory = {
  id: number;
  softList: string[];
};

export type LanguageData = {
  name: string;
  link?: string;
  isMain: boolean;
};

export type TechnicalSkillsData = {
  technicalAreas: TechArea[];
  languages: LanguageData[];
  operatingSystems: string[];
  technologies: TechnologySet[];
  software: SoftwareCategory[];
  networking: string[];
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

export type ContactData = {
  name: string;
  address: string;
  isLink: boolean;
};

export type EducationData = {
  name: string;
  degree: string;
  fieldOfStudy: string;
  studyPeriod: string;
  website: string;
};

export type CareerHistoryData = {
  companyExperiences: CompanyExperience[];
};

export type PersonalInformationData = {
  contacts: ContactData[];
  education: EducationData[];
};

export type ContentData = {
  tabs: Tab[];
  technicalSkills: TechnicalSkillsData;
  careerHistory: CareerHistoryData;
  personalInformation: PersonalInformationData;
};

export type FooterData = {
  copyrightLabel: string;
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
  header: HeaderData;
  commonInfo: CommonInfoData;
  content: ContentData;
  footer: FooterData;
  contactsData: ContactsData;
  skillsData: SkillsData;
  projectsData: ProjectsData;
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
