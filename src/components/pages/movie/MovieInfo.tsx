import { memo } from 'react';

interface MovieInfoProps {
  detailData: MovieDetailData;
  creditsData: MovieCreditsData;
  videoData: MovieVideoData;
}

const MovieInfo = memo(({ detailData, creditsData, videoData }: MovieInfoProps) => {
  console.log(detailData, creditsData, videoData);
  return <div>info</div>;
});

MovieInfo.displayName = 'MovieInfo';
export default MovieInfo;
