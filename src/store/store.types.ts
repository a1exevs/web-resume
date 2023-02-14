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

export type ContentData = {}

export type FooterData = {}

export type Store = {
  header: HeaderData,
  commonInfo: CommonInfoData,
  content: ContentData,
  footer: FooterData,
}
