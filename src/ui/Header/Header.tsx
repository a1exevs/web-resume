import React from 'react';
import classes from './Header.module.scss';
import {HeaderData} from '../../store/store.types';
import Field from '../common/Field/Field';

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
