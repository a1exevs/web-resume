import { LanguageCode } from 'src/shared';
import { lang } from 'src/shared/model/lang/lang';
import { LanguageConstants } from 'src/shared/model/lang/lang.types';

export const languageCodes = ['en', 'ru'] as const;

export const defaultLangCode: LanguageCode = 'en';

export const defaultLang: LanguageConstants = lang[defaultLangCode];
