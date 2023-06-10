import cn from 'classnames';
import React from 'react';

import { dateToString } from 'src/common/helpers/date-helper';
import { HeaderData } from 'src/store/store.types';
import Field from 'src/ui/common/components/Field/Field';
import classes from 'src/ui/Header/Header.module.scss';

type Props = { data: HeaderData };

const Header: React.FC<Props> = ({ data }) => (
  <header className={classes.Header}>
    <div className={cn(classes.Header__Content, classes.Header__Content_fixedTopPosition)}>
      <label className="Title">Web-resume</label>
      <Field label={'Last update'} value={dateToString(data.lastUpdateDate)} orientation={'column'} />
    </div>
  </header>
);

export default Header;
