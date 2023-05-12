import cn from 'classnames';
import React from 'react';

import { ContentTabNames } from 'src/store/store.types';
import classes from 'src/ui/common/Tabs/Tab/Tab.module.scss';

type Props = {
  tabName: ContentTabNames;
  withRightBorder?: boolean;
  active?: boolean;
  activeTabChanged: (tabName: ContentTabNames) => void;
};

const Tab: React.FC<Props> = ({ tabName, withRightBorder = false, active = true, activeTabChanged }) => {
  const onActiveTabChange = () => {
    activeTabChanged(tabName);
  };

  return (
    <div
      className={cn(classes.Tab, {
        [classes.Tab_withRightBorder]: withRightBorder,
        [classes.Tab_active]: active,
      })}
    >
      <label
        className={cn(classes.Tab__Name, {
          [classes.Tab__Name_active]: active,
        })}
        onClick={onActiveTabChange}
      >
        {tabName}
      </label>
    </div>
  );
};

export default Tab;
