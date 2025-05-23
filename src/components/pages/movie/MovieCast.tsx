import { memo } from 'react';
import LazyImage from '@/components/LazyImage';
import Loading from '@/components/Loading';
import Empty from '@/components/Empty';

interface MovieCastProps {
  castList: MovieCastData[];
  loading?: boolean;
}

const imgPath = 'https://image.tmdb.org/t/p/';

const MovieCast = memo(({ castList, loading }: MovieCastProps) => {
  if (loading) return <Loading />;
  return (
    <>
      {castList?.length ? (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {castList.map((item) => (
            <li key={item.id}>
              <article>
                <LazyImage
                  src={item.profile_path ? `${imgPath}original${item.profile_path}` : ''}
                  alt={`${item.name}-profile`}
                  width={1625}
                  height={2438}
                  className="aspect-2/3 rounded-md"
                />
                <h4 className="font-bold text-lg md:text-xl mt-2 md:mt-3 group-hover:text-primary duration-300">{item.name}</h4>
                <h6 className="text-sm md:text-base text-muted">{item.character}</h6>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <Empty />
      )}
    </>
  );
});

MovieCast.displayName = 'MovieCast';
export default MovieCast;
