'use client';
import { memo, Suspense } from 'react';
import ListArea from '@/components/pages/home/ListArea';
import { useGet } from '@/hooks/useApi';
import { useSearchParams } from 'next/navigation';
import Pagination from '@/components/Pagination';

const List = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || '';

  const { data, isLoading } = useGet<MovieList>(`/account/${process.env.NEXT_PUBLIC_ACCOUNT_ID}/watchlist/movies?page=${page || 1}`);

  return (
    <>
      <ListArea
        title="Watch List"
        list={data?.results || []}
        loading={isLoading}
        watchListStatus={false}
      />
      <Pagination totalPages={data?.total_pages || 1} />
    </>
  );
};

const BookmarkList = memo(() => {
  return (
    <Suspense>
      <List />
    </Suspense>
  );
});

BookmarkList.displayName = 'BookmarkList';
export default BookmarkList;
