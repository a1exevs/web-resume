import { IMAGE_ALTS_EN } from 'src/shared/model/lang/en/image-alts';
import { LABELS_EN } from 'src/shared/model/lang/en/labels';
import { LANGS_EN } from 'src/shared/model/lang/en/langs';
import { MESSAGES_EN } from 'src/shared/model/lang/en/messages';
import { SHORT_LANGS_EN } from 'src/shared/model/lang/en/short-langs';
import { languageCodes } from 'src/shared/model/lang/lang.consts';
import { ROUTES_EN } from 'src/shared/model/lang/routes';

export type LanguageCode = (typeof languageCodes)[number];

export type LanguageConstants = {
  labels: typeof LABELS_EN;
  messages: typeof MESSAGES_EN;
  imageAlts: typeof IMAGE_ALTS_EN;
  langs: typeof LANGS_EN;
  shortLangs: typeof SHORT_LANGS_EN;
  routes: typeof ROUTES_EN;
};

export type LocalizationData = Record<LanguageCode, LanguageConstants>;

export type LangContext = {
  langCode: LanguageCode;
  currentLang: LanguageConstants;
  setCurrentLang: (langCode: LanguageCode) => void;
};
