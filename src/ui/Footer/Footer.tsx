import React from 'react';
import {FooterData} from 'src/store/store.types';
import classes from 'src/ui/Footer/Footer.module.scss'
import cn from 'classnames';

type Props = FooterData;

const Footer: React.FC<Props> = ({copyrightLabel}) => {
  return (
    <footer className={classes.Footer}>
      <label className={cn(classes.Footer__CopyrightLabel, 'Label')} title={copyrightLabel}>{copyrightLabel}</label>
    </footer>
  );
};

export default Footer;
