'use client';

import { memo, useCallback } from 'react';
import Image from 'next/image';

const GoTop = memo(() => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <button
      className="fixed right-3 bottom-5 md:right-10 md:bottom-10 cursor-pointer duration-300 hover:opacity-70"
      aria-label="Go to top"
      onClick={() => scrollToTop()}
    >
      <Image
        src="/icons/up.svg"
        alt="up"
        width={36}
        height={36}
      />
    </button>
  );
});

GoTop.displayName = 'GoTop';

export default GoTop;
