import SearchBar from '@/components/pages/home/SearchBar';
import SearchList from '@/components/pages/search/SearchList';

const Search = () => {
  return (
    <>
      <section className="section !pb-0">
        <div className="container-sm">
          <SearchBar />
        </div>
      </section>
      <SearchList />
    </>
  );
};

export default Search;
