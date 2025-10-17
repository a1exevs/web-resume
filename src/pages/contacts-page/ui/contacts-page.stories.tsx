import type { Meta } from '@storybook/react';

import ContactsPage from 'src/pages/contacts-page/ui/contacts-page';
import store from 'src/store/store';
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

const args = { contactLinks: store.contactsData.contactLinks };

export const Desktop4k = buildDesktop4KStoryObj<typeof meta>({ args });
export const Desktop = buildDesktopStoryObj<typeof meta>({ args });
export const Tablet = buildTabletStoryObj<typeof meta>({ args });
export const Mobile = buildMobileStoryObj<typeof meta>({ args });
