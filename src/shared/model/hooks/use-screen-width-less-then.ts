import { useLayoutEffect, useState } from 'react';

function useScreenWidthLessThen(screenWidth: number): boolean {
  const [isScreenLessThen, setScreenLessThen] = useState<boolean>(false);
  useLayoutEffect(() => {
    function updateState() {
      setScreenLessThen(window.innerWidth <= screenWidth);
    }

    window.addEventListener('resize', updateState);
    updateState();
    return () => window.removeEventListener('resize', updateState);
  }, [screenWidth]);
  return isScreenLessThen;
}

export default useScreenWidthLessThen;
