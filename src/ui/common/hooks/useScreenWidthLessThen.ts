import { useLayoutEffect, useState } from 'react';

import { throttleTime } from 'src/common/helpers/interval.helper';

function useScreenWidthLessThen(screenWidth: number): boolean {
  const [isScreenLessThen, setScreenLessThen] = useState<boolean>(false);
  useLayoutEffect(() => {
    function updateState() {
      setScreenLessThen(window.innerWidth <= screenWidth);
    }

    window.addEventListener('resize', throttleTime(updateState));
    updateState();
    return () => window.removeEventListener('resize', throttleTime(updateState));
  }, [screenWidth]);
  return isScreenLessThen;
}

export default useScreenWidthLessThen;
