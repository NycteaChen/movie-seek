'use client';
import { memo } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Bookmark from '@/components/Bookmark';

const renderMovieTime = (time: number) => {
  const hour = Math.floor(time / 60);
  const min = time - hour * 60;
  return `${hour} h ${min} m`;
};

interface MovieIntroProps {
  detailData?: MovieDetailData;
  creditsData?: MovieCreditsData;
  className?: string;
}

const MovieIntro = memo(({ detailData, creditsData, className }: MovieIntroProps) => {
  return (
    <div className={cn('flex w-full flex-col gap-5', className)}>
      <div className="space-y-3">
        <h2 className="text-4xl font-bold mb-3">
          {detailData?.title} <span className="text-foreground/70 font-normal">({String(detailData?.release_date)?.split('-')?.[0] || '-'})</span>
        </h2>
        <div className="flex items-start gap-2 mb-3">
          <Image
            src="/icons/star.svg"
            alt="star"
            width={20}
            height={20}
          />
          <span>{detailData?.vote_average || '-'}</span>
        </div>
        <div className="flex gap-2 items-center mb-3">
          <span>{detailData?.release_date || '-'}</span>
          <span>•</span>
          <span>{renderMovieTime(Number(detailData?.runtime) || 0)}</span>
        </div>
        <ul className="flex items-center gap-2 flex-wrap">
          {detailData?.genres?.map((item) => (
            <li
              key={item.name}
              className="py-1 px-3 border border-solid border-foreground rounded-3xl"
            >
              {item.name}
            </li>
          ))}
        </ul>
        <Bookmark
          movieId={detailData?.id}
          className="!mt-5 w-12 h-12"
        />
      </div>
      <div className="space-y-5">
        {detailData?.tagline ? <p className="opacity-70 italic">{detailData?.tagline}</p> : ''}
        <div>
          <h4 className="font-bold text-lg md:text-xl mb-2">Overview</h4>
          <p className="whitespace-pre-line break-all leading-[1.6] tracking-wider">{detailData?.overview || '-'}</p>
        </div>
        <div>
          <h4 className="font-bold text-lg md:text-xl mb-2">Director</h4>
          <p>{creditsData?.crew?.find((item) => item.job?.toLowerCase() === 'director')?.name || '-'}</p>
        </div>
      </div>
    </div>
  );
});

MovieIntro.displayName = 'MovieIntro';
export default MovieIntro;
