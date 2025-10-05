import { Controls, Description, Primary, Subtitle, Title } from '@storybook/blocks';
import type { Preview } from '@storybook/react';

import 'src/index.scss';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['App', 'Pages', 'Common'],
        locales: '',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          {/* <Stories /> */}
        </>
      ),
    },
  },
};

export default preview;
