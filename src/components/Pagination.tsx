'use client';

import { memo, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { Pagination as ShaPagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

interface PaginationProps {
  totalPages?: number;
  maxVisiblePages?: number;
  setPageIndex?: React.Dispatch<React.SetStateAction<number>>;
  pageIndex?: number;
}

const Pagination = memo(({ maxVisiblePages = 3, totalPages = 1, pageIndex = 1, setPageIndex }: PaginationProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const currentPage = parseInt(searchParams.get('page') || String(pageIndex), 10);

  const goToPage = (page: number) => {
    if (setPageIndex) {
      setPageIndex(page);
    } else {
      const params = new URLSearchParams(searchParams.toString());
      params.set('page', String(page));
      router.push(`${pathname}?${params.toString()}`);
    }
  };

  const generatePageNumbers = () => {
    const pages: (number | '...')[] = [];
    const half = Math.floor(maxVisiblePages / 2);

    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, currentPage + half);

    if (end - start + 1 < maxVisiblePages) {
      if (start === 1) {
        end = Math.min(totalPages, start + maxVisiblePages - 1);
      } else if (end === totalPages) {
        start = Math.max(1, end - maxVisiblePages + 1);
      }
    }

    if (start > 1) pages.push(1);
    if (start > 2) pages.push('...');

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) pages.push('...');
    if (end < totalPages) pages.push(totalPages);

    return pages;
  };

  const pages = generatePageNumbers();

  return (
    <Suspense>
      {totalPages > 1 ? (
        <section>
          <div className="container">
            <ShaPagination className="scale-80 sm:scale-100">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    disabled={currentPage === 1}
                    onClick={() => goToPage(currentPage - 1)}
                  />
                </PaginationItem>
                {pages.map((page, index) =>
                  page === '...' ? (
                    <PaginationItem key={index}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  ) : (
                    <PaginationItem key={page}>
                      <PaginationLink
                        isActive={page === currentPage}
                        onClick={() => goToPage(page)}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  />
                </PaginationItem>
              </PaginationContent>
            </ShaPagination>
          </div>
        </section>
      ) : (
        ''
      )}
    </Suspense>
  );
});

Pagination.displayName = 'Pagination';
export default Pagination;
