import type { Meta } from '@storybook/react';

import HomePage from 'src/pages/home-page/ui/home-page';
import store from 'src/store/store';
import {
  buildDesktop4KStoryObj,
  buildDesktopStoryObj,
  buildMobileStoryObj,
  buildTabletStoryObj,
} from 'storybook-dir/helpers';

const storyTitle = 'Pages/HomePage';

const meta = {
  title: storyTitle,
  component: HomePage,
} satisfies Meta<typeof HomePage>;

export default meta;

const args = { mainInfoData: store.mainInfo };

export const Desktop4k = buildDesktop4KStoryObj<typeof meta>({ args });
export const Desktop = buildDesktopStoryObj<typeof meta>({ args });
export const Tablet = buildTabletStoryObj<typeof meta>({ args });
export const Mobile = buildMobileStoryObj<typeof meta>({ args });
