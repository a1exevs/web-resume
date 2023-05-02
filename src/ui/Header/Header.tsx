import React from 'react';
import classes from 'src/ui/Header/Header.module.scss';
import {HeaderData} from 'src/store/store.types';
import Field from 'src/ui/common/Field/Field';

type Props = HeaderData;

const Header: React.FC<Props> = props => {
  return (
    <header className={classes.Header}>
      <label className="Title">Resume of Alexander Olegovich Evstafiadi</label>
      <Field label={'Last update'} value={props.lastUpdateDate} type={'block'}/>
    </header>
  );
};

export default Header;
