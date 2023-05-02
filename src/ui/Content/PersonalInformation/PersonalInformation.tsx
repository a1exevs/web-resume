import React from 'react';
import classes from 'src/ui/Content/PersonalInformation/PersonalInformation.module.scss';
import {PersonalInformationData} from 'src/store/store.types';
import Card from 'src/ui/common/Card/Card';
import Field from 'src/ui/common/Field/Field';
import Block from 'src/ui/common/Block/Block';

type Props = PersonalInformationData;

const PersonalInformation: React.FC<Props> = ({contacts, education}) => {
  return (
    <div className={classes.PersonalInformation}>
      <Card>
        <label className="IntermediateTitle IntermediateTitle_withoutTopMargin">{'Education:'}</label>
        {education.map(educationItem => (
          <Block withoutSpaces>
            <Field label={'University:'} value={educationItem.name}/>
            <Field label={'Degree:'} value={educationItem.degree}/>
            <Field label={'Field of study:'} value={educationItem.fieldOfStudy}/>
            <Field label={'Study period::'} value={educationItem.studyPeriod}/>
            <Field label={'Website:'} value={educationItem.website} isLink/>
          </Block>
        ))}
      </Card>
      <Card>
        <label className="IntermediateTitle IntermediateTitle_withoutTopMargin">{'Contacts:'}</label>
        {contacts.map(contactItem => (
          <Field label={contactItem.name} value={contactItem.address} isLink={contactItem.isLink}/>
        ))}
      </Card>
    </div>
  );
};

export default PersonalInformation;
