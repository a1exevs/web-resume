import React from 'react';

import ContactLink from 'src/pages/contacts-page/ui/contact-link/contact-link';
import { ContactLinkCodeIconMap } from 'src/pages/contacts-page/ui/contacts-page.consts';
import classes from 'src/pages/contacts-page/ui/contacts-page.module.scss';
import { ContactsData } from 'src/store/store.types';

type Props = ContactsData;

const ContactsPage: React.FC<Props> = ({ contactLinks }) => {
  return (
    <div className={classes.ContactsPage}>
      <h2 className={classes.ContactsPage__Title + ' glitch'}>Contacts</h2>
      <div className={classes.ContactsPage__Items}>
        {contactLinks.map(contact => {
          const IconComponent = ContactLinkCodeIconMap[contact.code];
          return <ContactLink key={contact.href} href={contact.href} label={contact.label} Icon={IconComponent} />;
        })}
      </div>
    </div>
  );
};

export default ContactsPage;
