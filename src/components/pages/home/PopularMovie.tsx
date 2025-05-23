'use client';

import { memo } from 'react';
import ListArea from '@/components/pages/home/ListArea';
import { useGet } from '@/hooks/useApi';

const PopularMovie = memo(() => {
  const { data, isLoading } = useGet<MovieList>('/movie/popular');

  return (
    <ListArea
      title="Hot"
      iconName="hot"
      loading={isLoading}
      list={data?.results?.slice(0, 10) || []}
    />
  );
});

PopularMovie.displayName = 'PopularMovie';
export default PopularMovie;
