'use client';

import { useSearchParams } from 'next/navigation';

const Search = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  return (
    <div className="pt-20">
      <section>
        <div className="container">關鍵字搜尋：{query}</div>
      </section>
    </div>
  );
};

export default Search;
