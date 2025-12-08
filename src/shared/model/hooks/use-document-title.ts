import { useEffect } from 'react';

import { capitalizeLabel } from 'src/shared';

const useDocumentTitle = ({ appName, pageName }: { appName: string; pageName?: string }) => {
  useEffect(() => {
    document.title = `${capitalizeLabel(appName)}` + (pageName ? ` - ${pageName}` : '');
  }, [appName, pageName]);
};

export default useDocumentTitle;
