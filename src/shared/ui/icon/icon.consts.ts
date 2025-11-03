import classes from 'src/shared/ui/icon/icon.module.scss';
import { IconSize } from 'src/shared/ui/icon/icon.types';

export const ICON_DEFAULT_COLOR = 'currentColor';

export const IconSizesMap: Record<IconSize, string> = {
  [IconSize.APP_FONT_SIZE]: classes.Icon_appFontSize,
  [IconSize.PARENT_FONT_SIZE]: classes.Icon_parentFontSize,
  [IconSize.SMALL]: classes.Icon_smallSize,
  [IconSize.NORMAL]: classes.Icon_normalSize,
  [IconSize.MEDIUM]: classes.Icon_mediumSize,
  [IconSize.LARGE]: classes.Icon_LargeSize,
  [IconSize.SUPER_GIANT]: classes.Icon_superGiantSize,
};
