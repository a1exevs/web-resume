import React from 'react';

import { dateToString } from 'src/common/helpers/date-helper';
import { MainInfoData } from 'src/store/store.types';
import Field from 'src/ui/common/components/Field/Field';
import classes from 'src/ui/CommonInfo/CommonInfo.module.scss';

type Props = { data: MainInfoData };

const CommonInfo: React.FC<Props> = ({ data }) => (
  <div className={classes.CommonInfo}>
    <img alt="" className={classes.CommonInfo__Photo} src={data.photoPath} />
    <div className={classes.CommonInfo__Main}>
      <Field label={'Full name'} value={data.fullName} />
      <Field label={'Birthday'} value={dateToString(data.birthday)} />
      <Field label={'City'} value={data.city} />
      <Field label={'Work at'} value={data.workAt} />
    </div>
    <div className={classes.CommonInfo__Summary}>
      <Field label={'Summary'} value={data.summary} orientation={'column'} />
    </div>
  </div>
);

export default CommonInfo;
