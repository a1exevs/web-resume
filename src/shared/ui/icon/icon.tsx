import { isEmpty, isUndefined } from '@alexevs/ts-guards';
import cn from 'classnames';
import React from 'react';

import icons from 'src/assets/icons/icons.svg';
import { ICON_DEFAULT_COLOR, IconSizesMap } from 'src/shared/ui/icon/icon.consts';
import classes from 'src/shared/ui/icon/icon.module.scss';
import { IconName } from 'src/shared/ui/icon/icon.names';
import { IconSize } from 'src/shared/ui/icon/icon.types';

type Props = {
  size?: IconSize;
  color?: string;
  width?: string;
  height?: string;
  className?: string;
  title?: string;
  icon: IconName;
};

const Icon: React.FC<Props> = ({
  size = IconSize.APP_FONT_SIZE,
  icon,
  color = ICON_DEFAULT_COLOR,
  width,
  height,
  className = '',
  title,
}) => {
  const getSizeClass = (sizeMap: Record<IconSize, string>): string => {
    if (!isUndefined(width) || !isUndefined(height)) {
      return '';
    }
    return sizeMap[size];
  };

  return (
    <svg
      className={cn(classes.Icon, getSizeClass(IconSizesMap), className)}
      fill={color}
      color={color}
      width={width}
      height={height}
    >
      {!isEmpty(title) && <title>{title}</title>}
      <use xlinkHref={`${icons}#${icon}`}></use>
    </svg>
  );
};

export default Icon;
