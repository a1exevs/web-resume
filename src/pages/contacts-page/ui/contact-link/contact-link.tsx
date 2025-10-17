import React from 'react';

import classes from 'src/pages/contacts-page/ui/contact-link/contact-link.module.scss';

type Props = { href: string; label: string; Icon: React.FC<{ className: string }> };

const ContactLink: React.FC<Props> = ({ href, label, Icon }) => (
  <a className={classes.ContactLink} href={href} target="_blank" rel="noopener noreferrer">
    <Icon className={classes.ContactLink__Icon} />
    <span className={classes.ContactLink__Label}>{label}</span>
  </a>
);

export default ContactLink;
