'use client';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface BookmarkProps {
  movieId?: number;
  className?: string;
}

const Bookmark = memo(({ movieId, className }: BookmarkProps) => {
  const [markList, setMarkList] = useState<string[]>([]);

  const isMarked = useMemo(() => markList.includes(String(movieId)), [movieId, markList]);

  const getList = useCallback(() => {
    try {
      const list = JSON.parse(localStorage.getItem('bookmark') || '[]');
      return list;
    } catch {
      return [];
    }
  }, []);

  const markHandler = useCallback(() => {
    const list = getList();
    let newList = [...list];
    if (isMarked) {
      newList = newList.filter((item) => item !== String(movieId));
    } else {
      newList = newList.concat(String(movieId));
    }
    setMarkList(newList);
    localStorage.setItem('bookmark', JSON.stringify(newList));
  }, [movieId, markList]);

  useEffect(() => {
    setMarkList(getList());
  }, [setMarkList, getList]);

  return (
    <div
      className={cn('cursor-pointer group rounded-full bg-foreground/20 flex items-center justify-center', className)}
      onClick={(e) => {
        e.preventDefault();
        markHandler();
      }}
    >
      <Image
        src={`/icons/${isMarked ? 'bookmark' : 'bookmark-stroke'}.svg`}
        alt="bookmark"
        width={24}
        height={24}
        className="duration-300 group-hover:opacity-50"
      />
    </div>
  );
});

Bookmark.displayName = 'Bookmark';
export default Bookmark;
