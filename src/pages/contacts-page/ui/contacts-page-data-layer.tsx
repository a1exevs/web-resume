import React from 'react';

import ContactsPage from 'src/pages/contacts-page/ui/contacts-page';
import { useDocumentTitle, useLangContext } from 'src/shared';
import store from 'src/store/store';

const ContactsPageDataLayer: React.FC = () => {
  const { currentLang, langCode } = useLangContext();
  const contactsData = store[langCode].contactsData;

  useDocumentTitle({
    appName: currentLang.labels.APP_NAME,
    pageName: currentLang.routes.CONTACTS,
  });

  return <ContactsPage currentLang={currentLang} contactsData={contactsData} />;
};

export default ContactsPageDataLayer;
