import { memo } from 'react';
import Loading from '@/components/Loading';
import Empty from '@/components/Empty';
// import { Button } from '@/components/ui/button';
// import { cn } from '@/lib/utils';

interface MovieReviewProps {
  movieId: MovieData['id'];
}

const mockReviews = {
  id: 552524,
  page: 1,
  results: [],
  total_pages: 1,
  total_results: 0
};

const MovieReview = memo(({ movieId }: MovieReviewProps) => {
  // const [detailList, setDetailList] = useState<MovieReviewItem['id'][]>([]);
  console.log('review movieId:>> ', movieId);

  // const showDetailHandler = (id: MovieReviewItem['id']) => {
  //   const list = [...detailList];
  //   list.push(id);
  //   setDetailList(list);
  // };
  const loading = false;
  if (loading) return <Loading />;
  return (
    <div>
      {mockReviews?.results?.length ? (
        <ul className="flex flex-col gap-4">
          {mockReviews?.results?.map((item: MovieReviewItem) => (
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
    </div>
  );
});

MovieReview.displayName = 'MovieReview';
export default MovieReview;
