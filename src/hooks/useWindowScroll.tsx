import { useCallback, useEffect, useState } from 'react';
import throttle from '@/utils/throttle';

const useWindowScroll = (timer = 500) => {
  const [scrollY, setScrollY] = useState(0);

  const onDelayScrollHandler = throttle(() => {
    setScrollY(window.pageYOffset);
  }, timer);

  const onScroll = useCallback(() => {
    onDelayScrollHandler();
  }, [onDelayScrollHandler]);

  useEffect(() => {
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);
  return { scrollY };
};

export default useWindowScroll;
