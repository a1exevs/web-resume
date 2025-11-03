import { languageCodes } from 'src/shared/model/lang/lang.consts';

export type LanguageCode = (typeof languageCodes)[number];

const enLabels = {
  LAST_UPDATE: 'Last update',
  STATUS: 'Status',
  LOCATION: 'Location',
};

const enMessages = {};

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
