import { memo } from 'react';
import Logo from '@/components/Logo';

const Footer = memo(() => {
  return (
    <footer className="bg-black">
      <section className="section">
        <div className="container-sm flex flex-col justify-center items-center">
          <Logo />
          <p className="mt-5 pt-5 border-t border-solid border-background w-full text-center text-xs">Copyright © 2025 Movie Seek. All rights reserved.</p>
        </div>
      </section>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
