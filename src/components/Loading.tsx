import { LoaderCircle } from 'lucide-react';
import { memo } from 'react';

const Loading = memo(() => {
  return (
    <div className="flex flex-col h-[200px] justify-center items-center space-y-3">
      <LoaderCircle
        size={60}
        className="text-primary animate-spin"
      />
      <p>Loading...</p>
    </div>
  );
});

Loading.displayName = 'Loading';
export default Loading;
