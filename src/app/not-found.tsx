import Link from 'next/link';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <section>
      <div className="container-sm h-[300px] flex items-center justify-center flex-col gap-5">
        <h2 className="text-4xl font-bold mb-3">Not Found</h2>
        <Button>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
