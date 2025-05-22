import { memo } from 'react';
import Logo from '@/components/Logo';

const Header = memo(() => {
  return (
    <header className="fixed w-full border-b border-b-foreground px-4 py-3 flex items-center top-0 z-20 bg-gradient-to-b from-background to-transparent">
      <div className="container">
        <Logo />
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
