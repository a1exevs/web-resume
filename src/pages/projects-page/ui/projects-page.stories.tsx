import type { Meta } from '@storybook/react';

import ProjectsPage from 'src/pages/projects-page/ui/projects-page';
import {
  buildDesktop4KStoryObj,
  buildDesktopStoryObj,
  buildMobileStoryObj,
  buildTabletStoryObj,
} from 'storybook-dir/helpers';

const storyTitle = 'Pages/ProjectsPage';

const meta = {
  title: storyTitle,
  component: ProjectsPage,
} satisfies Meta<typeof ProjectsPage>;

export default meta;

export const Desktop4k = buildDesktop4KStoryObj<typeof meta>({});
export const Desktop = buildDesktopStoryObj<typeof meta>({});
export const Tablet = buildTabletStoryObj<typeof meta>({});
export const Mobile = buildMobileStoryObj<typeof meta>({});
