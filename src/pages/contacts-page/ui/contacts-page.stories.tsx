import type { Meta } from '@storybook/react';

import ContactsPage from 'src/pages/contacts-page/ui/contacts-page';
import {
  buildDesktop4KStoryObj,
  buildDesktopStoryObj,
  buildMobileStoryObj,
  buildTabletStoryObj,
} from 'storybook-dir/helpers';

const storyTitle = 'Pages/ContactsPage';

const meta = {
  title: storyTitle,
  component: ContactsPage,
} satisfies Meta<typeof ContactsPage>;

export default meta;

export const Desktop4k = buildDesktop4KStoryObj<typeof meta>({});
export const Desktop = buildDesktopStoryObj<typeof meta>({});
export const Tablet = buildTabletStoryObj<typeof meta>({});
export const Mobile = buildMobileStoryObj<typeof meta>({});
