import React from 'react';

import { CommonInfoData } from 'src/store/store.types';
import Field from 'src/ui/common/Field/Field';
import classes from 'src/ui/CommonInfo/CommonInfo.module.scss';

type Props = { data: CommonInfoData };

const CommonInfo: React.FC<Props> = ({ data }) => (
  <div className={classes.CommonInfo}>
    <img alt="" className={classes.CommonInfo__Photo} src={data.photoPath} />
    <div className={classes.CommonInfo__Main}>
      <Field label={'Full name'} value={data.fullName} />
      <Field label={'BirthDate'} value={data.birthday} />
      <Field label={'City'} value={data.city} />
      <Field label={'Work at'} value={data.workAt} />
    </div>
    <div className={classes.CommonInfo__Summary}>
      <Field label={'Summary'} value={data.summary} type="block" />
    </div>
  </div>
);

export default CommonInfo;
