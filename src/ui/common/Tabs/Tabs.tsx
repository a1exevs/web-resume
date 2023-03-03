import React, {useState} from "react";
import classes from "src/ui/common/Tabs/Tabs.module.scss"
import Tab from "src/ui/common/Tabs/Tab/Tab";
import {ContentTabNames} from "src/store/store.types";

type Props = {
  tabs: ContentTabNames[],
  active?: ContentTabNames,
  activeTabChanged: (tabName: ContentTabNames) => void
}

const Tabs: React.FC<Props> = ({tabs, active, activeTabChanged}) => {
  const [activeTab, setActiveTab] = useState<ContentTabNames>(active ?? tabs[0])
  const changeActiveTab = (tabName: ContentTabNames) => {
    setActiveTab(tabName)
    activeTabChanged(tabName)
  }
  return (
    <div className={classes.Tabs}>
      {tabs.length && tabs.map(
        (tab, index) =>
          <Tab key={index}
               tabName={tab}
               activeTabChanged={changeActiveTab}
               active={tab === activeTab}/>
      )}
    </div>
  )
}

export default Tabs;
