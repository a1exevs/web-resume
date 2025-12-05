import { test } from '@playwright/test';

import { LanguageCode } from 'src/shared';
import { defaultLangCode } from 'src/shared/model/lang/lang.consts';

type E2ETest = {
  locale: LanguageCode;
};

export const e2eTest = test.extend<E2ETest>({
  locale: defaultLangCode,
  headless: false,
});
