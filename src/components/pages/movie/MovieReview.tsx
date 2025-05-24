'use client';
import { memo, useState } from 'react';
import { useParams } from 'next/navigation';
import Loading from '@/components/Loading';
import Empty from '@/components/Empty';
import { useGet } from '@/hooks/useApi';
import Pagination from '@/components/Pagination';

const MovieReview = memo(() => {
  const { id } = useParams();
  const [pageIndex, setPageIndex] = useState<number>(1);

  const { data, isLoading } = useGet<MovieReviewList>(`/movie/${id}/reviews?page=${pageIndex}`);

  if (isLoading) return <Loading />;
  return (
    <div>
      {data?.results?.length ? (
        <ul className="flex flex-col gap-4">
          {data?.results?.map((item: MovieReviewItem) => (
            <li key={item.id}>
              <article className="bg-black shadow-2xl rounded-2xl p-6 md:py-8 md:px-9">
                <h4 className="font-bold text-xl mb-4">{item.author}</h4>
                <p className="whitespace-pre-line break-all leading-[1.6] tracking-wider">{item.content}</p>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <Empty />
      )}
      <Pagination
        totalPages={data?.total_pages || 1}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
      />
    </div>
  );
});

MovieReview.displayName = 'MovieReview';
export default MovieReview;
