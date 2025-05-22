import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo = memo(({ width = 133, height = 43 }: LogoProps) => {
  return (
    <Link href="/">
      <h1 className="indent-[101%] overflow-hidden whitespace-nowrap absolute">MOVIE SEEK</h1>
      <Image
        src={`/logo.svg`}
        alt="MOVIE SEEK logo"
        width={width}
        height={height}
        priority
      />
    </Link>
  );
});

Logo.displayName = 'Logo';
export default Logo;
