import { memo } from 'react';
import LazyImage from './LazyImage';

const imgPath = 'https://image.tmdb.org/t/p/';

const MovieList = memo(({ list }: { list: MovieData[] }) => {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
      {list.map((item, index) => (
        <li key={index}>
          <article>
            <LazyImage
              src={`${imgPath}original${item.backdrop_path}`}
              alt={item.title as string}
              width={2000}
              height={3000}
              className="aspect-2/3"
            />
            {item.title}
          </article>
        </li>
      ))}
    </ul>
  );
});

MovieList.displayName = 'MovieList';
export default MovieList;
