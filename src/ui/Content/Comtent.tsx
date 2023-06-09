import React, { useState } from 'react';

import { ContentData, ContentTabName } from 'src/store/store.types';
import Tabs from 'src/ui/common/Tabs/Tabs';
import CareerHistory from 'src/ui/Content/CareerHistory/CareerHistory';
import classes from 'src/ui/Content/Content.module.scss';
import PersonalInformation from 'src/ui/Content/PersonalInformation/PersonalInformation';
import TechnicalSkills from 'src/ui/Content/TechnicalSkills/TechnicalSkills';

type Props = { data: ContentData };

const Content: React.FC<Props> = ({ data }) => {
  const { tabs, technicalSkills, careerHistory, personalInformation } = data;
  const [activeTab, setActiveTab] = useState<ContentTabName>(tabs[0].tabId);
  const changeActiveTab = (tabId: string) => {
    setActiveTab(tabId as ContentTabName);
  };

  return (
    <div className={classes.Content}>
      <Tabs tabs={tabs} activeTabChanged={changeActiveTab} />
      {activeTab === ContentTabName.TECHNICAL_SKILLS && <TechnicalSkills {...technicalSkills} />}
      {activeTab === ContentTabName.CAREER_HISTORY && <CareerHistory {...careerHistory} />}
      {activeTab === ContentTabName.PERSONAL_INFORMATION && <PersonalInformation {...personalInformation} />}
    </div>
  );
};

export default Content;
