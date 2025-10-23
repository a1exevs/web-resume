import type { Meta } from '@storybook/react';

import ProjectsPage from 'src/pages/projects-page/ui/projects-page';
import store from 'src/store/store';
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

const args = { projects: store.projectsData.projects };

export const Desktop4k = buildDesktop4KStoryObj<typeof meta>({ args });
export const Desktop = buildDesktopStoryObj<typeof meta>({ args });
export const Tablet = buildTabletStoryObj<typeof meta>({ args });
export const Mobile = buildMobileStoryObj<typeof meta>({ args });
