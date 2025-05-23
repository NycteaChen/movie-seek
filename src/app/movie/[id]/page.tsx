'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LazyImage from '@/components/LazyImage';
import MovieIntro from '@/components/pages/movie/MovieIntro';
import MovieInfo from '@/components/pages/movie/MovieInfo';
import MovieReview from '@/components/pages/movie/MovieReview';
import { useGet } from '@/hooks/useApi';
import Loading from '@/components/Loading';
import Empty from '@/components/Empty';

const MovieDetail = () => {
  const { id } = useParams();

  const { data: detailData, error: detailError, isLoading: detailLoading } = useGet<MovieDetailData>(`/movie/${id}`);
  const { data: creditsData, error: creditsError, isLoading: creditsLoading } = useGet<MovieCreditsData>(`/movie/${id}/credits`);
  const { data: videoData, error: videoError, isLoading: videoLoading } = useGet<MovieVideoList>(`/movie/${id}/videos`);

  if (detailLoading) return <Loading />;

  if (detailError || creditsError || videoError) return <Empty msg="Oops! Something wrong!" />;

  const coverImage = detailData?.backdrop_path || detailData?.poster_path;

  return (
    <div>
      <div className="relative w-full min-h-[360px] flex justify-center items-center">
        <Image
          src={coverImage ? `${process.env.NEXT_PUBLIC_TMDB_IMG_PATH}original${coverImage}` : ''}
          alt={`${detailData?.title}-cover`}
          width={3840}
          height={2160}
          className="w-full h-full object-cover opacity-20 absolute top-0 left-0"
          loading="lazy"
        />
        <section className="w-full h-full z-[1] relative">
          <div className="container-sm h-full flex gap-12 justify-center md:justify-start">
            <LazyImage
              src={detailData?.poster_path ? `${process.env.NEXT_PUBLIC_TMDB_IMG_PATH}w500${detailData?.poster_path}` : ''}
              alt={`${detailData?.title}-post`}
              width={320}
              height={480}
              className="aspect-2/3 rounded-md h-full w-full max-w-[200px] md:max-w-[320px]"
              containerClass="w-auto"
            />
            <MovieIntro
              detailData={detailData}
              creditsData={creditsData}
              className="hidden md:flex md:justify-between md:py-5"
            />
          </div>
        </section>
      </div>
      <section>
        <div className="container-sm">
          <MovieIntro
            detailData={detailData}
            creditsData={creditsData}
            className="pb-10 border-b border-solid border-muted mb-10 md:hidden"
          />
          <Tabs defaultValue="info">
            <TabsList className="grid w-full grid-cols-2 md:w-3/5 md:max-w-[400px] mb-3 md:mb-5">
              <TabsTrigger value="info">Info</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="info">
              <MovieInfo
                detailData={detailData}
                castList={creditsData?.cast || []}
                castLoading={creditsLoading}
                trailerData={videoData?.results?.filter((item) => item.type.toLowerCase() === 'trailer' && item.official && item.site.toLowerCase() === 'youtube')?.[0]}
                videoLoading={videoLoading}
              />
            </TabsContent>
            <TabsContent value="reviews">
              <MovieReview />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default MovieDetail;
