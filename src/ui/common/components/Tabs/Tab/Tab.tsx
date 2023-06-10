import cn from 'classnames';
import React from 'react';

import { Icon, IconName } from 'src/ui/common/components/Icon/Icon';
import classes from 'src/ui/common/components/Tabs/Tab/Tab.module.scss';

type Props = {
  tabId: string;
  tabName: string;
  tabIcon?: IconName;
  withRightBorder?: boolean;
  active?: boolean;
  activeTabChanged: (tabId: string) => void;
};

const Tab: React.FC<Props> = ({
  tabId,
  tabName,
  tabIcon,
  withRightBorder = false,
  active = true,
  activeTabChanged,
}) => {
  const onActiveTabChange = () => {
    activeTabChanged(tabId);
  };

  return (
    <div
      className={cn(classes.Tab, {
        [classes.Tab_withRightBorder]: withRightBorder,
        [classes.Tab_active]: active,
      })}
      onClick={onActiveTabChange}
    >
      <label
        className={cn(classes.Tab__Name, {
          [classes.Tab__Name_active]: active,
        })}
      >
        {tabIcon && <Icon name={tabIcon} />}
        <span className={classes.Tab__NameText}>{tabName}</span>
      </label>
    </div>
  );
};

export default Tab;
