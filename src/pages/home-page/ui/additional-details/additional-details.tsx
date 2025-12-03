import React from 'react';

import classes from 'src/pages/home-page/ui/additional-details/additional-details.module.scss';
import { capitalizeLabel, GlitchText, toUnderscore } from 'src/shared';

type Props = {
  title: string;
  items: { label: string; value: string; isLink?: boolean; linkPrefix?: string; linkDisplayValue?: string }[];
};

const AdditionalDetails: React.FC<Props> = ({ title, items }) => {
  return (
    <div className={classes.AdditionalDetails}>
      <GlitchText variant="h3" className={classes.AdditionalDetails__Title}>
        {toUnderscore(capitalizeLabel(title))}
      </GlitchText>
      <div className={classes.AdditionalDetails__List}>
        {items.map(({ label, value, isLink, linkPrefix, linkDisplayValue }) => (
          <p key={label} className={classes.AdditionalDetails__Item}>
            <span className={classes.AdditionalDetails__Label}>{toUnderscore(label)}</span>{' '}
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
