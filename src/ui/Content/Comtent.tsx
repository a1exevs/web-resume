import React, {useState} from 'react';
import {ContentData, ContentTabNames} from 'src/store/store.types';
import Tabs from 'src/ui/common/Tabs/Tabs';
import TechnicalSkills from './TechnicalSkills/TechnicalSkills';
import CareerHistory from './CareerHistory/CareerHistory';
import PersonalInformation from './PersonalInformation/PersonalInformation';

type Props = ContentData;

const Content: React.FC<Props> = ({tabs, technicalSkills, careerHistory}) => {
  const [activeTab, setActiveTab] = useState<ContentTabNames>(tabs[0]);
  const changeActiveTab = (tabName: ContentTabNames) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <Tabs tabs={tabs} activeTabChanged={changeActiveTab}/>
      {activeTab === ContentTabNames.TECHNICAL_SKILLS && <TechnicalSkills {...technicalSkills} />}
      {activeTab === ContentTabNames.CAREER_HISTORY && <CareerHistory {...careerHistory} />}
      {activeTab === ContentTabNames.PERSONAL_INFORMATION && <PersonalInformation/>}
    </div>
  );
};

export default Content;
