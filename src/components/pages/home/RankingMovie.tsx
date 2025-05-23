'use client';

import { memo } from 'react';
import ListArea from '@/components/pages/home/ListArea';
import { useApi } from '@/hooks/useApi';

const RankingMovie = memo(() => {
  const { data, isLoading } = useApi<MovieList>('/movie/top_rated');

  return (
    <ListArea
      sectionClass="bg-foreground/10"
      title="Ranking"
      iconName="star"
      loading={isLoading}
      list={data?.results?.slice(0, 10) || []}
    />
  );
});

RankingMovie.displayName = 'RankingMovie';
export default RankingMovie;
