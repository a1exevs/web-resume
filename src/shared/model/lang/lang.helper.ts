import { Nullable } from '@alexevs/ts-guards';

import { lang } from 'src/shared/model/lang/lang';
import { CURRENT_LANG_KEY } from 'src/shared/model/lang/lang-context';
import { defaultLangCode } from 'src/shared/model/lang/lang.consts';
import { LanguageCode, LanguageConstants } from 'src/shared/model/lang/lang.types';

function splitLang(code: string): string {
  return (code || '').split('-')[0];
}

export function detectLangCode(): LanguageCode {
  if (process.env.ENV === 'tests') {
    console.log('test env');
    return defaultLangCode;
  }
  const saved = getUserLangCode();
  if (saved) {
    return saved as LanguageCode;
  }
  const nav = (navigator.languages && navigator.languages[0]) || navigator.language || defaultLangCode;
  return splitLang(nav) === 'ru' ? 'ru' : 'en';
}

export function getLangConstantsByCode(langCode: LanguageCode): LanguageConstants {
  return lang[langCode];
}

export function getCurrentLang(): LanguageConstants {
  return getLangConstantsByCode(detectLangCode());
}

export function getUserLangCode(): Nullable<LanguageCode> {
  return localStorage.getItem(CURRENT_LANG_KEY) as Nullable<LanguageCode>;
}

export function setUserLangCode(langCode: LanguageCode): void {
  return localStorage.setItem(CURRENT_LANG_KEY, langCode);
}
