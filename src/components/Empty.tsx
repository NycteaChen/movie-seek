import { memo } from 'react';
import Image from 'next/image';

const Empty = memo(({ msg = 'No Data' }: { msg?: string }) => {
  return (
    <div className="flex flex-col h-[200px] justify-center items-center text-muted-foreground space-y-3">
      <Image
        src="/icons/not-found.svg"
        alt="not-found"
        width={80}
        height={80}
      />
      <p>{msg}</p>
    </div>
  );
});

Empty.displayName = 'Empty';
export default Empty;
