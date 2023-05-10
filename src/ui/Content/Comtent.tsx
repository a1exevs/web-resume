import React, {useState} from 'react';
import {ContentData, ContentTabNames} from 'src/store/store.types';
import Tabs from 'src/ui/common/Tabs/Tabs';
import TechnicalSkills from 'src/ui/Content/TechnicalSkills/TechnicalSkills';
import CareerHistory from 'src/ui/Content/CareerHistory/CareerHistory';
import PersonalInformation from 'src/ui/Content/PersonalInformation/PersonalInformation';

type Props = { data: ContentData };

const Content: React.FC<Props> = ({data}) => {
  const {tabs, technicalSkills, careerHistory, personalInformation} = data;
  const [activeTab, setActiveTab] = useState<ContentTabNames>(tabs[0]);
  const changeActiveTab = (tabName: ContentTabNames) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <Tabs tabs={tabs} activeTabChanged={changeActiveTab}/>
      {activeTab === ContentTabNames.TECHNICAL_SKILLS && <TechnicalSkills {...technicalSkills} />}
      {activeTab === ContentTabNames.CAREER_HISTORY && <CareerHistory {...careerHistory} />}
      {activeTab === ContentTabNames.PERSONAL_INFORMATION && <PersonalInformation {...personalInformation} />}
    </div>
  );
};

export default Content;
