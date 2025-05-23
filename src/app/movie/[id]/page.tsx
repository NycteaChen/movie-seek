// import Loading from '@/components/Loading';

interface ParamsType {
  params: Promise<{ id: string }>;
}

const MovieDetail = async ({ params }: ParamsType) => {
  const param = await params;
  const { id } = param;
  return (
    <div className="pt-20">
      <section>
        <div className="container">Movie{id}</div>
      </section>
    </div>
  );
};

export default MovieDetail;
