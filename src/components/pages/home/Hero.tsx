import { memo } from 'react';
import Image from 'next/image';

const Hero = memo(() => {
  return (
    <div className="relative w-full aspect-1920/1080 min-h-[60dvh] max-h-[90dvh]">
      <Image
        src="/home/hero.jpg"
        alt="home-hero"
        width={3000}
        height={2001}
        className="w-full h-full max-h-[1080px] object-cover opacity-50 absolute top-0 left-0"
      />
    </div>
  );
});

Hero.displayName = 'Hero';
export default Hero;
