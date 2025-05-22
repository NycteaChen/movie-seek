import { memo } from 'react';
import Logo from '@/components/Logo';

const Header = memo(() => {
  return (
    <header className="fixed top-0 z-20 w-full border-b border-b-foreground flex items-center bg-gradient-to-b from-background to-transparent">
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
