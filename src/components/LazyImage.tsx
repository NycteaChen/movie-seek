'use client';

import Image, { ImageProps } from 'next/image';
import { useMemo, useState, memo } from 'react';

const LazyImage = memo((props: ImageProps & { containerClass?: string }) => {
  const [loaded, setLoaded] = useState(false);

  const imageProps = useMemo(() => {
    const { containerClass, className, src, alt, ...imageProps } = props;
    return imageProps;
  }, [props]);

  return (
    <div className={`relative overflow-hidden flex-shrink-0 ${props.containerClass}`}>
      {!loaded && <div className="absolute inset-0 bg-muted animate-pulse z-0" />}
      {props.src && (
        <Image
          src={props.src}
          alt={props.alt}
          {...imageProps}
          onLoad={() => setLoaded(true)}
          className={`object-cover transition-all duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'} ${props.className}`}
        />
      )}
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

export default LazyImage;
