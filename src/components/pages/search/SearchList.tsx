'use client';
import { memo, Suspense } from 'react';
import ListArea from '../home/ListArea';
import { useGet } from '@/hooks/useApi';
import { useSearchParams } from 'next/navigation';
import Pagination from '@/components/Pagination';

const List = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const page = searchParams.get('page') || '';

  const { data, isLoading } = useGet<MovieList>(`/search/movie?query=${query}&page=${page || 1}`);

  return (
    <>
      <ListArea
        title={`${data?.total_results !== undefined ? `${data?.total_results} ` : '-- '}Search Results`}
        list={data?.results || []}
        loading={isLoading}
      />
      <Pagination totalPages={data?.total_pages || 1} />
    </>
  );
};

const SearchList = memo(() => {
  return (
    <Suspense>
      <List />
    </Suspense>
  );
});

SearchList.displayName = 'SearchList';
export default SearchList;
