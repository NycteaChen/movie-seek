import { memo, Suspense } from 'react';
import Image from 'next/image';
import SearchBar from './SearchBar';

const Hero = memo(() => {
  return (
    <div className="relative w-full aspect-1920/1080 min-h-[90dvh] md:min-h-[60dvh] md:max-h-[90dvh] flex justify-center items-center">
      <Image
        src="/home/hero.jpg"
        alt="home-hero"
        width={3000}
        height={2001}
        className="w-full h-full max-h-full object-cover opacity-40 absolute top-0 left-0"
        loading="lazy"
      />
      <section className="!py-20">
        <div className="container z-[1] relative flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl font-bold text-primary">Find Your Next Favorite Movie</h2>
          <p className="text-2xl font-bold mt-4 mb-8">Explore Now</p>
          <Suspense>
            <SearchBar />
          </Suspense>
        </div>
      </section>
    </div>
  );
});

Hero.displayName = 'Hero';
export default Hero;
