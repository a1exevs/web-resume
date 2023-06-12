import React from 'react';

import { TechnicalSkillsData } from 'src/store/store.types';
import Block from 'src/ui/common/components/Block/Block';
import Chip from 'src/ui/common/components/Chip/Chip';
import Field from 'src/ui/common/components/Field/Field';
import RecordsList from 'src/ui/common/components/RecordsList/RecordsList';
import SimpleList from 'src/ui/common/components/SimpleList/SimpleList';
import classes from 'src/ui/Content/TechnicalSkills/TechnicalSkills.module.scss';

type Props = TechnicalSkillsData;

const TechnicalSkills: React.FC<Props> = ({
  technicalAreas,
  languages,
  operatingSystems,
  networking,
  technologies,
  software,
}) => {
  const getYearsInAreaLabel = (yearsCount: number): string => `${yearsCount} ${yearsCount === 1 ? 'year' : 'years'}`;

  const listItems = technicalAreas.map(area => ({ name: area.name, value: getYearsInAreaLabel(area.yearsCount) }));
  const mainLanguages = languages.filter(_ => _.isMain);
  const additionalLanguages = languages.filter(_ => !_.isMain);

  return (
    <div className={classes.TechnicalSkills}>
      <div className={classes.TechnicalSkills__AreasData}>
        <label className="IntermediateTitle IntermediateTitle_withCenterAlignment IntermediateTitle_withoutTopMargin">
          {'Extensive experience in following areas:'}
        </label>
        <RecordsList items={listItems} />
      </div>
      <div className={classes.TechnicalSkills__LanguagesData}>
        <label className="IntermediateTitle IntermediateTitle_withCenterAlignment">{'Languages:'}</label>
        <div className={classes.TechnicalSkills__Languages}>
          <Block inline>
            <label className="Label">{'Main:'}</label>
            {mainLanguages.map((language, index) => (
              <Chip key={index} text={language.name} />
            ))}
          </Block>
          <Block inline>
            <label className="Label">{'Also worked with:'}</label>
            {additionalLanguages.map((language, index) => (
              <Chip key={index} text={language.name} />
            ))}
          </Block>
        </div>
      </div>
      <div className={classes.TechnicalSkills__ListsBlock}>
        <div className={classes.TechnicalSkills__OperatingSystemsData}>
          <label className="IntermediateTitle IntermediateTitle_withCenterAlignment">{'Operating systems:'}</label>
          <SimpleList items={operatingSystems} />
        </div>
        <div className={classes.TechnicalSkills__NetworkingData}>
          <label className="IntermediateTitle IntermediateTitle_withCenterAlignment">{'Networking:'}</label>
          <SimpleList items={networking} />
        </div>
      </div>
      <div className={classes.TechnicalSkills__TechnologiesData}>
        <label className="IntermediateTitle IntermediateTitle_withCenterAlignment">{'Technologies:'}</label>
        {technologies.map((technology, index) => (
          <Field
            key={index}
            orientation={'column'}
            label={technology.language}
            value={technology.technologies.join(', ')}
          />
        ))}
      </div>
      <div className={classes.TechnicalSkills__TechnologiesData}>
        <label className="IntermediateTitle IntermediateTitle_withCenterAlignment">{'Software:'}</label>
        {software.map(softwareItem => (
          <Field key={softwareItem.id} orientation={'column'} value={softwareItem.softList.join(', ')} />
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
