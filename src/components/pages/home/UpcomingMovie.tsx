'use client';

import { memo } from 'react';
import ListArea from '@/components/pages/home/ListArea';
import { useApi } from '@/hooks/useApi';

const UpcomingMovie = memo(() => {
  const { data, isLoading } = useApi<MovieList>('/movie/upcoming');

  return (
    <ListArea
      title="Coming Soon"
      iconName="calendar"
      loading={isLoading}
      list={data?.results?.slice(0, 10) || []}
    />
  );
});

UpcomingMovie.displayName = 'UpcomingMovie';
export default UpcomingMovie;
