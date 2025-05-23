'use client';
import { memo, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { usePost } from '@/hooks/useApi';
import { toast } from 'sonner';

interface BookmarkProps {
  movieId?: number;
  className?: string;
  status?: boolean;
}

const Bookmark = memo(({ movieId, className, status = true }: BookmarkProps) => {
  const { data, error, isLoading, post } = usePost<{ success: boolean; status_code: number; status_message: string }>(`/account/${process.env.NEXT_PUBLIC_ACCOUNT_ID}/watchlist`);

  const markHandler = useCallback(async () => {
    await post({ media_type: 'movie', media_id: movieId, watchlist: status });
  }, [movieId]);

  useEffect(() => {
    if (data?.success) {
      toast.success(`Movie successfully ${status ? 'added' : 'removed'} to watchlist`);

      if (!status) {
        window.location.reload();
      }
    } else if (error) {
      toast.warning(`Failed to ${status ? 'add' : 'remove'} movie to watchlist.`);
    }
  }, [data, error]);

  return (
    <div
      className={cn('cursor-pointer group rounded-full bg-foreground/20 flex items-center justify-center', isLoading && 'pointer-events-none', className)}
      onClick={(e) => {
        if (isLoading) return;
        e.preventDefault();
        markHandler();
      }}
    >
      <Image
        src={`/icons/bookmark.svg`}
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
