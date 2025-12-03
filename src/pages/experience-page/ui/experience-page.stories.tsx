import type { Meta } from '@storybook/react';

import ExperiencePage from 'src/pages/experience-page/ui/experience-page';
import store from 'src/store/store';
import {
  buildDesktop4KStoryObj,
  buildDesktopStoryObj,
  buildMobileStoryObj,
  buildTabletStoryObj,
} from 'storybook-dir/helpers';

const storyTitle = 'Pages/ExperiencePage';

const meta = {
  title: storyTitle,
  component: ExperiencePage,
} satisfies Meta<typeof ExperiencePage>;

export default meta;

const args = { experienceData: store.experienceData };

export const Desktop4k = buildDesktop4KStoryObj<typeof meta>({ args });
export const Desktop = buildDesktopStoryObj<typeof meta>({ args });
export const Tablet = buildTabletStoryObj<typeof meta>({ args });
export const Mobile = buildMobileStoryObj<typeof meta>({ args });
