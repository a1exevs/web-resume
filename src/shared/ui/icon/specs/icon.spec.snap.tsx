import { render } from '@testing-library/react';
import React from 'react';

import Icon from 'src/shared/ui/icon/icon';
import { IconName } from 'src/shared/ui/icon/icon.names';
import { IconSize } from 'src/shared/ui/icon/icon.types';

describe('Icon component', () => {
  it('default rendering.', () => {
    const { asFragment } = render(<Icon icon={IconName.RECT} />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('"color" prop', () => {
    it('prop "color" has a value', () => {
      const { asFragment } = render(<Icon icon={IconName.RECT} color="red" />);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('"size" prop', () => {
    it('"size" prop has value = "Small"', () => {
      const { asFragment } = render(<Icon icon={IconName.RECT} size={IconSize.SMALL} />);
      expect(asFragment()).toMatchSnapshot();
    });
    it('"size" prop has value = "Normal"', () => {
      const { asFragment } = render(<Icon icon={IconName.RECT} size={IconSize.NORMAL} />);
      expect(asFragment()).toMatchSnapshot();
    });
    it('"size" prop has value = "Large"', () => {
      const { asFragment } = render(<Icon icon={IconName.RECT} size={IconSize.LARGE} />);
      expect(asFragment()).toMatchSnapshot();
    });
    it('"size" prop has value = "SuperGiant"', () => {
      const { asFragment } = render(<Icon icon={IconName.RECT} size={IconSize.SUPER_GIANT} />);
      expect(asFragment()).toMatchSnapshot();
    });
    it('"size" prop has value = "AppFontSize"', () => {
      const { asFragment } = render(<Icon icon={IconName.RECT} size={IconSize.APP_FONT_SIZE} />);
      expect(asFragment()).toMatchSnapshot();
    });
    it('"size" prop has value = "ParentFontSize"', () => {
      const { asFragment } = render(<Icon icon={IconName.RECT} size={IconSize.PARENT_FONT_SIZE} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('"width" and "height" props', () => {
    it('"width" and "height" props have some values', () => {
      const { asFragment } = render(<Icon icon={IconName.RECT} width="'24px'" height="24px" />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
