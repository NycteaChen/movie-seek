'use client';
import { memo } from 'react';
import Logo from '@/components/Logo';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Header = memo(() => {
  const pathname = usePathname();
  return (
    <header className={cn('z-20 w-full', pathname === '/' ? 'absolute top-0 bg-gradient-to-b from-background to-transparent border-b border-b-foreground' : 'relative bg-black')}>
      <section className="!py-3">
        <div className="container flex justify-between">
          <Logo />
        </div>
      </section>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
