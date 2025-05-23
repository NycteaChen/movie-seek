'use client';
import { memo, useMemo } from 'react';
import Image from 'next/image';
import Logo from '@/components/Logo';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import useWindowScroll from '@/hooks/useWindowScroll';
import { Button } from '../ui/button';

const Header = memo(({ isFixed }: { isFixed?: boolean }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { scrollY } = useWindowScroll(0);

  const renderHeaderStatus = useMemo(() => {
    if (isFixed) {
      return `border-0 duration-300 top-0 left-0 bg-black fixed ${scrollY > 60 ? 'translate-y-0' : '-translate-y-[100%]'}`;
    }
    return '';
  }, [isFixed, scrollY]);

  return (
    <header className={cn('z-20 w-full', pathname === '/' ? 'absolute top-0 bg-gradient-to-b from-background to-transparent border-b border-b-foreground' : 'relative bg-black', renderHeaderStatus)}>
      <section className="section !py-3">
        <div className="container flex justify-between items-center">
          <Logo />
          <div className="space-x-3">
            <Button
              className="flex-shrink-0 rounded-full p-2"
              onClick={() => router.push('/search')}
              variant="ghost"
              size="icon"
            >
              <Image
                src="/icons/search.svg"
                alt="search"
                width={24}
                height={24}
              />
            </Button>
            <Button
              className="flex-shrink-0 rounded-full p-2"
              onClick={() => router.push('/watch-list')}
              variant="ghost"
              size="icon"
            >
              <Image
                src="/icons/bookmark-stroke.svg"
                alt="bookmark"
                width={24}
                height={24}
              />
            </Button>
          </div>
        </div>
      </section>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
