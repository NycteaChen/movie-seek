import { memo } from 'react';
import Link from 'next/link';
import { Link as LinkIcon } from 'lucide-react';
import Empty from '@/components/Empty';
import MovieCast from './MovieCast';

interface MovieInfoProps {
  detailData: MovieDetailData;
  castList: MovieCastData[];
  trailerData?: MovieVideoItem;
}

const infoList: { title: string; value: keyof MovieDetailData }[] = [
  {
    title: 'Homepage',
    value: 'homepage'
  },
  {
    title: 'Original Title',
    value: 'original_title'
  },
  {
    title: 'Origin Country',
    value: 'origin_country'
  },
  {
    title: 'Languages',
    value: 'spoken_languages'
  },
  {
    title: 'Companies',
    value: 'production_companies'
  },
  {
    title: 'Status',
    value: 'status'
  },
  {
    title: 'Budget',
    value: 'budget'
  },
  {
    title: 'Revenue',
    value: 'revenue'
  }
];

const formatValue = (value: unknown): string => {
  if (Array.isArray(value)) {
    return value.map((v) => (typeof v === 'object' ? v.name : v)).join(', ');
  } else if (typeof value === 'number' && value) {
    return `$${value.toLocaleString()}`;
  }
  return String(value || '-');
};

const MovieInfo = memo(({ detailData, castList, trailerData }: MovieInfoProps) => {
  return (
    <div className="space-y-10">
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 pb-10 border-b border-solid border-muted md:gap-8">
        {infoList.map((item) => (
          <li key={item.title}>
            <h4 className="font-bold text-lg md:text-xl mb-4">{item.title}</h4>
            {item.title === 'Homepage' && String(detailData[item.value])?.trim() ? (
              <div className="inline-flex">
                <Link
                  href={String(detailData[item.value])}
                  target="_blank"
                  className="duration-300 hover:opacity-50"
                >
                  <LinkIcon />
                </Link>
              </div>
            ) : (
              <p>{formatValue(detailData[item.value])}</p>
            )}
          </li>
        ))}
      </ul>
      <div className="pb-10 border-b border-solid border-muted">
        <h3 className="font-bold text-xl md:text-3xl mb-4">Trailer</h3>
        {trailerData ? (
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${trailerData.key}`}
              title={trailerData.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        ) : (
          <Empty />
        )}
      </div>
      <div className="pb-10">
        <h3 className="font-bold text-xl md:text-3xl mb-4">Cast</h3>
        <MovieCast castList={castList} />
      </div>
    </div>
  );
});

MovieInfo.displayName = 'MovieInfo';
export default MovieInfo;
