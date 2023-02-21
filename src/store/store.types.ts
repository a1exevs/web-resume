export type HeaderData = {
  lastUpdateDate: string,
}

export type CommonInfoData = {
  photoPath: string,
  fullName: string,
  birthday: string,
  city: string
  workAt: string
  summary: string
}

export enum ContentTabNames {
  TECHNICAL_SKILLS = 'Technical skills',
  CAREER_HISTORY = 'Career history',
  PERSONAL_INFORMATION = 'Personal information'
}

export type TechArea = {
  name: string,
  yearsCount: number
}

export type TechnologySet = {
  language: string,
  technologies: string[]
}

export type SoftwareCategory = {
  id: number,
  softList: string[]
}

export type TechnicalSkillsData = {
  technicalAreas: TechArea[],
  languages: string[],
  operatingSystems: string[],
  technologies: TechnologySet[],
  software: SoftwareCategory[],
  networking: string[],
}

export type ContentData = {
  tabs: ContentTabNames[],
  technicalSkills: TechnicalSkillsData,
}

export type FooterData = {}

export type Store = {
  header: HeaderData,
  commonInfo: CommonInfoData,
  content: ContentData,
  footer: FooterData,
}
