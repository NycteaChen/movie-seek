interface SearchParamsType {
  searchParams: Promise<{ query: string }>;
}

const Search = async ({ searchParams }: SearchParamsType) => {
  const params = await searchParams;
  const { query } = params;
  return (
    <div className="pt-20">
      <section>
        <div className="container">關鍵字搜尋：{query}</div>
      </section>
    </div>
  );
};

export default Search;
