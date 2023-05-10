import React from 'react';
import {FooterData} from 'src/store/store.types';
import classes from 'src/ui/Footer/Footer.module.scss';
import cn from 'classnames';

type Props = { data: FooterData };

const Footer: React.FC<Props> = ({data}) => {
  return (
    <footer className={classes.Footer}>
      <label className={cn(classes.Footer__CopyrightLabel, 'Label')} title={data.copyrightLabel}>
        {data.copyrightLabel}
      </label>
    </footer>
  );
};

export default Footer;
