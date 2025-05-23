import { memo } from 'react';
import Image from 'next/image';
import MovieList from '@/components/MovieList';
import { cn } from '@/lib/utils';

interface ListAreaProps {
  title: string;
  iconName?: string;
  list: MovieItemData[];
  sectionClass?: string;
  loading?: boolean;
  watchListStatus?: boolean;
}

const ListArea = memo(({ title, iconName, list, sectionClass, loading, watchListStatus }: ListAreaProps) => {
  return (
    <section className={cn('section', sectionClass)}>
      <div className="container-sm">
        <h3 className="flex items-center gap-2 md:gap-3 text-xl md:text-3xl font-bold mb-2 md:mb-4">
          {iconName && (
            <Image
              src={`/icons/${iconName}.svg`}
              alt={`title-${iconName}`}
              width={0}
              height={0}
              className="w-6 h-6 md:w-10 md:h-10"
            />
          )}
          <span>{title}</span>
        </h3>
        <MovieList
          list={list}
          loading={loading}
          watchListStatus={watchListStatus}
        />
      </div>
    </section>
  );
});

ListArea.displayName = 'ListArea';
export default ListArea;
