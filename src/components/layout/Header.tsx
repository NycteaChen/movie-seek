import { memo } from 'react';
import Logo from '@/components/Logo';

const Header = memo(() => {
  return (
    <header className="fixed w-full border-b border-b-foreground flex items-center top-0 z-20 bg-gradient-to-b from-background to-transparent">
      <section className="!py-3 w-full">
        <div className="container">
          <Logo />
        </div>
      </section>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
