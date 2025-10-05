import type { Meta } from '@storybook/react';

import SkillsPage from 'src/pages/skills-page/ui/skills-page';
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

export const Desktop4k = buildDesktop4KStoryObj<typeof meta>({});
export const Desktop = buildDesktopStoryObj<typeof meta>({});
export const Tablet = buildTabletStoryObj<typeof meta>({});
export const Mobile = buildMobileStoryObj<typeof meta>({});
