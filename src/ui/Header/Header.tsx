import React from 'react';

import { HeaderData } from 'src/store/store.types';
import Field from 'src/ui/common/Field/Field';
import classes from 'src/ui/Header/Header.module.scss';

type Props = { data: HeaderData };

const Header: React.FC<Props> = ({ data }) => (
  <header className={classes.Header}>
    <label className="Title">Resume of Alexander Olegovich Evstafiadi</label>
    <Field label={'Last update'} value={data.lastUpdateDate} type={'block'} />
  </header>
);

export default Header;
