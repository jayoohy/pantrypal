import { useState, useMemo, useEffect } from "react";

type UsePaginationHook<T> = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  rowsPerPage: number;
  totalPages: number;
  paginatedItems: T[] | null;
  paginationSummary: string; // Add this new property
};

export function usePagination<T>(
  items: T[] | null,
  rowsPerPage: number = 12
): UsePaginationHook<T> {
  const [page, setPage] = useState(1);

  const totalPages = useMemo(() => {
    if (items == null) return 0;
    return Math.ceil(items.length / rowsPerPage);
  }, [items, rowsPerPage]);

  const paginatedItems = useMemo(() => {
    if (items == null) return null;
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return items.slice(start, end);
  }, [page, items, rowsPerPage]);

  const paginationSummary = useMemo(() => {
    if (items == null || items.length === 0) return "Showing 0 items from 0";
    const start = (page - 1) * rowsPerPage + 1;
    const end = Math.min(page * rowsPerPage, items.length);
    return `Showing ${start}-${end} from ${items.length}`;
  }, [page, items, rowsPerPage]);

  useEffect(() => {
    if (items != null) {
      const totalPages = Math.ceil(items.length / rowsPerPage);
      if (page > totalPages) {
        setPage(1);
      }
    }
  }, [totalPages, rowsPerPage, items, page]);
  return {
    page,
    setPage,
    rowsPerPage,
    totalPages,
    paginatedItems,
    paginationSummary,
  };
}
