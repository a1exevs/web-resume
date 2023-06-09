import cn from 'classnames';
import React, { CSSProperties, useState } from 'react';

import { isUndefined } from 'src/common/helpers/type-guards.helper';
import { Tab } from 'src/store/store.types';
import TabComponent from 'src/ui/common/Tabs/Tab/Tab';
import classes from 'src/ui/common/Tabs/Tabs.module.scss';

type Props = {
  tabs: Tab[];
  active?: number;
  activeTabChanged: (_: string) => void;
};

const activeTabIndexKey = '--active-tab-index';
const tabsCountKey = '--tabs-count';

const Tabs: React.FC<Props> = ({ tabs, active, activeTabChanged }) => {
  const [activeTab, setActiveTab] = useState<number>(!isUndefined(active) && !isUndefined(tabs[active]) ? active : 0);
  const changeActiveTab = (tabId: string) => {
    setActiveTab(tabs.findIndex(_ => _.tabId === tabId));
    activeTabChanged(tabId);
  };
  const getActiveTabDisplayName = (): string => {
    return tabs[activeTab].displayName;
  };

  return (
    <React.Fragment>
      <div className={classes.Tabs}>
        {tabs.length &&
          tabs.map(({ tabId, displayName, tabIcon }, index) => (
            <TabComponent
              key={index}
              tabId={tabId}
              tabName={displayName}
              tabIcon={tabIcon}
              activeTabChanged={changeActiveTab}
              active={index === activeTab}
            />
          ))}
        <span
          style={
            {
              [activeTabIndexKey]: `${activeTab}`,
              [tabsCountKey]: tabs.length,
            } as CSSProperties
          }
          className={classes.Tabs__ActiveTabUnderline}
        ></span>
      </div>
      <div className={cn(classes.ActiveTabLabel)}>
        <label>{getActiveTabDisplayName()}</label>
      </div>
    </React.Fragment>
  );
};

export default Tabs;
