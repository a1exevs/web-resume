import type { Meta } from '@storybook/react';

import SkillsPage from 'src/pages/skills-page/ui/skills-page';
import store from 'src/store/store';
import {
  buildDesktop4KStoryObj,
  buildDesktopStoryObj,
  buildMobileStoryObj,
  buildTabletStoryObj,
} from 'storybook-dir/helpers';

const storyTitle = 'Pages/SkillsPage';

const meta = {
  title: storyTitle,
  component: SkillsPage,
} satisfies Meta<typeof SkillsPage>;

export default meta;

const args = { skills: store.skillsData.skills };

export const Desktop4k = buildDesktop4KStoryObj<typeof meta>({ args });
export const Desktop = buildDesktopStoryObj<typeof meta>({ args });
export const Tablet = buildTabletStoryObj<typeof meta>({ args });
export const Mobile = buildMobileStoryObj<typeof meta>({ args });
