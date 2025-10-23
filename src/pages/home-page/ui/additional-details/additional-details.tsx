import React from 'react';

import classes from 'src/pages/home-page/ui/additional-details/additional-details.module.scss';

type Props = {
  title: string;
  items: { label: string; value: string; isLink?: boolean; linkPrefix?: string; linkDisplayValue?: string }[];
};

const AdditionalDetails: React.FC<Props> = ({ title, items }) => {
  return (
    <div className={classes.AdditionalDetails}>
      <h3 className={`${classes.AdditionalDetails__Title} glitch`}>{title}</h3>
      <div className={classes.AdditionalDetails__List}>
        {items.map(({ label, value, isLink, linkPrefix, linkDisplayValue }) => (
          <p key={label} className={classes.AdditionalDetails__Item}>
            <span className={classes.AdditionalDetails__Label}>{label}</span>{' '}
            <span className={classes.AdditionalDetails__Value}>
              :{' '}
              {isLink ? (
                <a
                  href={`${linkPrefix ?? ''}${value}`}
                  className={classes.AdditionalDetails__Link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {linkDisplayValue ?? value}
                </a>
              ) : (
                value
              )}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default AdditionalDetails;
