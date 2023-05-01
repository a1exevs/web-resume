import React from 'react';
import classes from 'src/ui/Content/TechnicalSkills/TechnicalSkills.module.scss';
import {TechnicalSkillsData} from 'src/store/store.types';
import RecordsList from '../../common/RecordsList/RecordsList';
import ArrayView from '../../common/ArrayView/ArrayView';
import SimpleList from '../../common/SimpleList/SimpleList';
import Field from '../../common/Field/Field';

type Props = TechnicalSkillsData;

const TechnicalSkills: React.FC<Props> = ({
                                            technicalAreas,
                                            languages,
                                            operatingSystems,
                                            networking,
                                            technologies,
                                            software,
                                          }) => {
  const getYearsInAreaLabel = (yearsCount: number): string => {
    return `${yearsCount} ${yearsCount === 1 ? 'year' : 'years'}`;
  };

  const listItems = technicalAreas.map(area => ({name: area.name, value: getYearsInAreaLabel(area.yearsCount)}));

  return (
    <div className={classes.TechnicalSkills}>
      <div className={classes.TechnicalSkills__AreasData}>
        <label className="IntermediateTitle IntermediateTitle_withCenterAlignment IntermediateTitle_withoutTopMargin">
          {'Extensive experience in following areas:'}
        </label>
        <RecordsList items={listItems}/>
      </div>
      <div className={classes.TechnicalSkills__LanguagesData}>
        <label className="IntermediateTitle IntermediateTitle_withCenterAlignment">{'Languages:'}</label>
        <ArrayView items={languages}/>
      </div>
      <div className={classes.TechnicalSkills__ListsBlock}>
        <div className={classes.TechnicalSkills__OperatingSystemsData}>
          <label className="IntermediateTitle IntermediateTitle_withCenterAlignment">{'Operating systems:'}</label>
          <SimpleList items={operatingSystems}/>
        </div>
        <div className={classes.TechnicalSkills__NetworkingData}>
          <label className="IntermediateTitle IntermediateTitle_withCenterAlignment">{'Networking:'}</label>
          <SimpleList items={networking}/>
        </div>
      </div>
      <div className={classes.TechnicalSkills__TechnologiesData}>
        <label className="IntermediateTitle IntermediateTitle_withCenterAlignment">{'Technologies:'}</label>
        {technologies.map((technology, index) => (
          <Field key={index} type={'block'} label={technology.language} value={technology.technologies.join(', ')}/>
        ))}
      </div>
      <div className={classes.TechnicalSkills__TechnologiesData}>
        <label className="IntermediateTitle IntermediateTitle_withCenterAlignment">{'Software:'}</label>
        {software.map(softwareItem => (
          <Field key={softwareItem.id} type={'block'} value={softwareItem.softList.join(', ')}/>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
