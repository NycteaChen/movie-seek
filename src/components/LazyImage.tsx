'use client';

import Image, { ImageProps } from 'next/image';
import { useMemo, useState, memo } from 'react';
import { cn } from '@/lib/utils';

const LazyImage = memo((props: ImageProps & { containerClass?: string }) => {
  const [loaded, setLoaded] = useState(false);

  const imageProps = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { containerClass, className, src, alt, ...imageProps } = props;
    return imageProps;
  }, [props]);

  return (
    <div className={cn('w-full h-full relative flex-shrink-0', props.containerClass)}>
      {!loaded && <div className={cn('absolute inset-0 bg-muted animate-pulse z-0', props.className)} />}
      {props.src ? (
        <Image
          src={props.src}
          alt={props.alt}
          {...imageProps}
          onLoad={() => {
            setLoaded(true);
          }}
          className={cn('object-cover transition-all duration-500 ease-in-out', loaded ? 'opacity-100' : 'opacity-0', props.className)}
        />
      ) : (
        <div className={cn('flex items-center justify-center bg-foreground/20', props.className)}>
          <Image
            src="/icons/not-found.svg"
            alt="not-found"
            {...imageProps}
            width={80}
            height={80}
            onLoad={() => setLoaded(true)}
          />
        </div>
      )}
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

export default LazyImage;
