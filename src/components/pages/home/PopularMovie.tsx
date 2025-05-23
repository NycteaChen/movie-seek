'use client';

import { memo } from 'react';
import ListArea from '@/components/pages/home/ListArea';
import { useApi } from '@/hooks/useApi';

const PopularMovie = memo(() => {
  const { data, isLoading } = useApi('/movie/popular');

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
