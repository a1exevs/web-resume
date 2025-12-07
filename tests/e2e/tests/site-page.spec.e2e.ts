import { expect } from '@playwright/test';

import { capitalizeLabel } from 'src/shared/model/helpers/strings';
import { defaultLang } from 'src/shared/model/lang/lang.consts';
import { e2eTest } from 'tests/e2e/config/context';

e2eTest.describe('Site page', () => {
  e2eTest('should have correct title', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(`${capitalizeLabel(defaultLang.labels.APP_NAME)} - ${defaultLang.routes.HOME}`);
  });
});
