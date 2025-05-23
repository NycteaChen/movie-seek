import { memo } from 'react';
import Link from 'next/link';
import LazyImage from '@/components/LazyImage';
import Empty from '@/components/Empty';
import Loading from '@/components/Loading';

const MovieList = memo(({ list, loading }: { list: MovieDetailData[] | MovieItemData[]; loading?: boolean }) => {
  if (loading) return <Loading />;
  return (
    <>
      {list?.length ? (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {list.map((item, index) => (
            <li key={index}>
              <Link
                href={`/movie/${item.id}`}
                className="group"
              >
                <article>
                  <LazyImage
                    src={item.poster_path ? `${process.env.NEXT_PUBLIC_TMDB_IMG_PATH}w342${item.poster_path}` : ''}
                    alt={item.title}
                    width={420}
                    height={630}
                    className="aspect-2/3 rounded-md duration-300 border-solid border-transparent border-2 group-hover:scale-[1.02] group-hover:border-primary"
                  />
                  <h4 className="font-bold text-lg md:text-xl mt-2 md:mt-3 group-hover:text-primary duration-300">{item.title}</h4>
                  <h6 className="text-sm md:text-base text-muted">{item.release_date}</h6>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <Empty />
      )}
    </>
  );
});

MovieList.displayName = 'MovieList';
export default MovieList;
