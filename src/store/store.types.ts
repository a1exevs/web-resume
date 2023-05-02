export type HeaderData = {
  lastUpdateDate: string;
};

export type CommonInfoData = {
  photoPath: string;
  fullName: string;
  birthday: string;
  city: string;
  workAt: string;
  summary: string;
};

export enum ContentTabNames {
  TECHNICAL_SKILLS = 'Technical skills',
  CAREER_HISTORY = 'Career history',
  PERSONAL_INFORMATION = 'Personal information',
}

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

export type TechnicalSkillsData = {
  technicalAreas: TechArea[];
  languages: string[];
  operatingSystems: string[];
  technologies: TechnologySet[];
  software: SoftwareCategory[];
  networking: string[];
};

export type ProjectData = {
  projectDescription: string;
  environment: string[];
  responsibilities: string[];
};

export type CompanyExperience = {
  workPeriod: string;
  companyName: string;
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
  tabs: ContentTabNames[];
  technicalSkills: TechnicalSkillsData;
  careerHistory: CareerHistoryData;
  personalInformation: PersonalInformationData;
};

export type FooterData = {};

export type Store = {
  header: HeaderData;
  commonInfo: CommonInfoData;
  content: ContentData;
  footer: FooterData;
};
