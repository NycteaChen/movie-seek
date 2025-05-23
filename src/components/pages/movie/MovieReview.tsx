'use client';
import { memo, useState, Suspense } from 'react';
import { useParams } from 'next/navigation';
import Loading from '@/components/Loading';
import Empty from '@/components/Empty';
import { useApi } from '@/hooks/useApi';
import Pagination from '@/components/Pagination';
// import { Button } from '@/components/ui/button';
// import { cn } from '@/lib/utils';

const MovieReview = memo(() => {
  const { id } = useParams();
  const [pageIndex, setPageIndex] = useState<number>(1);
  // const [detailList, setDetailList] = useState<MovieReviewItem['id'][]>([]);

  const { data, isLoading } = useApi<MovieReviewList>(`/movie/${id}/reviews?page=${pageIndex}`);

  // const showDetailHandler = (id: MovieReviewItem['id']) => {
  //   const list = [...detailList];
  //   list.push(id);
  //   setDetailList(list);
  // };
  if (isLoading) return <Loading />;
  return (
    <div>
      {data?.results?.length ? (
        <ul className="flex flex-col gap-4">
          {data?.results?.map((item: MovieReviewItem) => (
            <li key={item.id}>
              <article className="bg-black shadow-2xl rounded-2xl p-6 md:py-8 md:px-9">
                <h4 className="font-bold text-xl mb-4">{item.author}</h4>
                <p className="whitespace-pre-line">{item.content}</p>
                {/* <p className={cn('whitespace-pre-line', !detailList?.includes(item.id) && 'line-clamp-4')}>{item.content}</p> */}
                {/* {!detailList?.includes(item.id) && (
                  <Button
                    variant="link"
                    className="p-0 mt-3"
                    onClick={() => showDetailHandler(item.id)}
                  >
                    Read the rest
                  </Button>
                )} */}
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <Empty />
      )}
      <Suspense>
        <Pagination
          totalPages={5}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
        />
      </Suspense>
    </div>
  );
});

MovieReview.displayName = 'MovieReview';
export default MovieReview;
