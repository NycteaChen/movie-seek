'use client';
import { memo, useCallback, useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const SearchBar = memo(() => {
  const [keyword, setKeyword] = useState<string>('');
  const router = useRouter();

  const redirectToSearch = useCallback(() => {
    router.push(`/search?query=${keyword}`);
  }, [keyword]);

  return (
    <div className="flex items-center space-x-5 w-full max-w-[500px] bg-primary/80 rounded-[25px] px-2 py-1.5">
      <Input
        className="border-0 rounded-[20px] !bg-foreground !text-background"
        placeholder="Search for a movie"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            redirectToSearch();
          }
        }}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />
      <Button
        className="flex-shrink-0 rounded-full p-2"
        onClick={() => redirectToSearch()}
        variant="black"
      >
        <Image
          src="/icons/search.svg"
          alt="search"
          width={24}
          height={24}
        />
      </Button>
    </div>
  );
});

SearchBar.displayName = 'SearchBar';
export default SearchBar;
