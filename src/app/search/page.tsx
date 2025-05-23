import SearchBar from '@/components/pages/home/SearchBar';
import SearchList from '@/components/pages/search/SearchList';

const Search = () => {
  const loading = false;
  return (
    <div>
      <section className="!pb-0">
        <div className="container-sm">
          <SearchBar />
        </div>
      </section>
      <SearchList />
    </div>
  );
};

export default Search;
