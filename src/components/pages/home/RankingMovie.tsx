'use client';

import { memo } from 'react';
import ListArea from '@/components/pages/home/ListArea';
import { useGet } from '@/hooks/useApi';

const RankingMovie = memo(() => {
  const { data, isLoading } = useGet<MovieList>('/movie/top_rated');

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
