import useDocumentTitle from 'src/shared/model/hooks/use-document-title';
import usePrevious from 'src/shared/model/hooks/use-previous';
import useScreenWidthLessThen from 'src/shared/model/hooks/use-screen-width-less-then';
import useWindowSize from 'src/shared/model/hooks/use-window-size';
import LangProvider from 'src/shared/model/lang/lang-provider';
import useLangContext from 'src/shared/model/lang/use-lang-context';

// consts
export {
  DESKTOP_4K_SCREEN_WIDTH_PX,
  TABLET_SCREEN_WIDTH_PX,
  DESKTOP_SCREEN_WIDTH_PX,
  MOBILE_SCREEN_WIDTH_PX,
  APP_MIN_WIDTH,
  SM_PX,
} from 'src/shared/model/consts/common';

// routes
export { RoutePath } from 'src/shared/model/routes/routes';

// lang
export type { LanguageCode } from 'src/shared/model/lang/lang.types';
export { languageCodes, defaultLang } from 'src/shared/model/lang/lang.consts';
export { LangProvider, useLangContext };

// helpers
export { capitalize, capitalizeLabel, toUnderscore } from 'src/shared/model/helpers/strings';

// hooks
export { usePrevious, useDocumentTitle, useWindowSize, useScreenWidthLessThen };
