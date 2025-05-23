import { Suspense } from 'react';
import SearchBar from '@/components/pages/home/SearchBar';
import SearchList from '@/components/pages/search/SearchList';

const Search = () => {
  return (
    <Suspense>
      <section className="!pb-0">
        <div className="container-sm">
          <SearchBar />
        </div>
      </section>
      <SearchList />
    </Suspense>
  );
};

export default Search;
