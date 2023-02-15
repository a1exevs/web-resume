import React, {useState} from "react";
import {ContentData, ContentTabNames} from "src/store/store.types";
import Tabs from "src/ui/common/Tabs/Tabs";

type Props = ContentData

const Content: React.FC<Props> = ({tabs}) => {
  const [activeTab, setActiveTab] = useState<ContentTabNames>(tabs[0])
  const changeActiveTab = (tabName: ContentTabNames) => {
    setActiveTab(tabName)
  }

  return (
    <div>
      <Tabs tabs={tabs} activeTabChanged={changeActiveTab}/>
      {activeTab === ContentTabNames.TECHNICAL_SKILLS && <div>{'TECHNICAL_SKILLS'}</div>}
      {activeTab === ContentTabNames.CAREER_HISTORY && <div>{'CAREER_HISTORY'}</div>}
      {activeTab === ContentTabNames.PERSONAL_INFORMATION && <div>{'PERSONAL_INFORMATION'}</div>}
    </div>
  )
}

export default Content;
