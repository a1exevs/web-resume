import React from 'react';

import { PersonalInformationData } from 'src/store/store.types';
import Block from 'src/ui/common/Block/Block';
import Card from 'src/ui/common/Card/Card';
import Field from 'src/ui/common/Field/Field';
import classes from 'src/ui/Content/PersonalInformation/PersonalInformation.module.scss';

type Props = PersonalInformationData;

const PersonalInformation: React.FC<Props> = ({ contacts, education }) => (
  <div className={classes.PersonalInformation}>
    <Card>
      <label className="IntermediateTitle IntermediateTitle_withoutTopMargin">{'Education:'}</label>
      {education.map((educationItem, index) => (
        <Block key={index} withoutSpaces>
          <Field label={'University:'} value={educationItem.name} />
          <Field label={'Degree:'} value={educationItem.degree} />
          <Field label={'Field of study:'} value={educationItem.fieldOfStudy} />
          <Field label={'Study period::'} value={educationItem.studyPeriod} />
          <Field label={'Website:'} value={educationItem.website} isLink />
        </Block>
      ))}
    </Card>
    <Card>
      <label className="IntermediateTitle IntermediateTitle_withoutTopMargin">{'Contacts:'}</label>
      {contacts.map((contactItem, index) => (
        <Field key={index} label={contactItem.name} value={contactItem.address} isLink={contactItem.isLink} />
      ))}
    </Card>
  </div>
);

export default PersonalInformation;
