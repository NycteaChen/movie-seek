import { memo } from 'react';
import LazyImage from './LazyImage';
import Link from 'next/link';

const imgPath = 'https://image.tmdb.org/t/p/';

const MovieList = memo(({ list }: { list: MovieData[] }) => {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
      {list.map((item, index) => (
        <li key={index}>
          <Link
            href={`/movie/${item.id}`}
            className="group"
          >
            <article>
              <LazyImage
                src={item.backdrop_path ? `${imgPath}original${item.backdrop_path}` : ''}
                alt={item.title as string}
                width={2000}
                height={3000}
                className="aspect-2/3 rounded-md duration-300 border-solid border-transparent border-2 group-hover:scale-[1.02] group-hover:border-primary"
              />
              <h4 className="font-bold md:text-lg mt-2 md:mt-3 group-hover:text-primary duration-300">{item.title}</h4>
              <h6 className="text-sm text-muted">{item.release_date}</h6>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
});

MovieList.displayName = 'MovieList';
export default MovieList;
