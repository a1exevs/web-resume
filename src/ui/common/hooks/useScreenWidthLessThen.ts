import { useLayoutEffect, useState } from 'react';

import { throttleTime } from 'src/common/helpers/interval.helper';

function useScreenWidthLessThen(screenWidth: number): boolean {
  const [isScreenLessThen, setScreenLessThen] = useState<boolean>(false);
  useLayoutEffect(() => {
    function updateState() {
      setScreenLessThen(window.innerWidth <= screenWidth);
    }
    const throttledUpdateStateFn = throttleTime(updateState);

    window.addEventListener('resize', throttledUpdateStateFn);
    updateState();
    return () => window.removeEventListener('resize', throttledUpdateStateFn);
  }, [screenWidth]);
  return isScreenLessThen;
}

export default useScreenWidthLessThen;
