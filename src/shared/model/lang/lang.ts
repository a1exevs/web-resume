import { IMAGE_ALTS_EN } from 'src/shared/model/lang/en/image-alts';
import { LABELS_EN } from 'src/shared/model/lang/en/labels';
import { LANGS_EN } from 'src/shared/model/lang/en/langs';
import { MESSAGES_EN } from 'src/shared/model/lang/en/messages';
import { SHORT_LANGS_EN } from 'src/shared/model/lang/en/short-langs';
import { LocalizationData } from 'src/shared/model/lang/lang.types';
import { ROUTES_EN } from 'src/shared/model/lang/routes';
import { IMAGE_ALTS_RU } from 'src/shared/model/lang/ru/image-alts';
import { LABELS_RU } from 'src/shared/model/lang/ru/labels';
import { LANGS_RU } from 'src/shared/model/lang/ru/langs';
import { MESSAGES_RU } from 'src/shared/model/lang/ru/messages';
import { ROUTES_RU } from 'src/shared/model/lang/ru/routes';
import { SHORT_LANGS_RU } from 'src/shared/model/lang/ru/short-langs';

export const lang: LocalizationData = {
  en: {
    labels: LABELS_EN,
    messages: MESSAGES_EN,
    imageAlts: IMAGE_ALTS_EN,
    langs: LANGS_EN,
    shortLangs: SHORT_LANGS_EN,
    routes: ROUTES_EN,
  },
  ru: {
    labels: LABELS_RU,
    messages: MESSAGES_RU,
    imageAlts: IMAGE_ALTS_RU,
    langs: LANGS_RU,
    shortLangs: SHORT_LANGS_RU,
    routes: ROUTES_RU,
  },
};
