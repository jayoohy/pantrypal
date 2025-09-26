import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { MoveLeft, MoveRight } from "lucide-react";
import { useState } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PagePagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [hoveredEllipsis, setHoveredEllipsis] = useState<
    "left" | "right" | null
  >(null);

  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];
    const maxDisplayedPages = 3;

    if (totalPages <= maxDisplayedPages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage = Math.max(currentPage - 2, 1);
      const endPage = Math.min(startPage + maxDisplayedPages - 1, totalPages);

      if (endPage - startPage < maxDisplayedPages - 1) {
        startPage = Math.max(endPage - maxDisplayedPages + 1, 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (startPage > 1) {
        pageNumbers.unshift("left-ellipsis");
        pageNumbers.unshift(1);
      }

      if (endPage < totalPages) {
        pageNumbers.push("right-ellipsis");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  const handlePageChange = (page: number | string) => {
    if (typeof page === "string") return;
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  const handleEllipsisClick = (type: "left" | "right") => {
    const pageNumbers = getPageNumbers();

    if (type === "left") {
      const leftEllipsisIndex = pageNumbers.indexOf("left-ellipsis");
      if (
        leftEllipsisIndex > 0 &&
        typeof pageNumbers[leftEllipsisIndex + 1] === "number"
      ) {
        const newPage = (pageNumbers[leftEllipsisIndex + 1] as number) - 1;
        onPageChange(newPage);
      }
    } else if (type === "right") {
      const rightEllipsisIndex = pageNumbers.indexOf("right-ellipsis");
      if (
        rightEllipsisIndex >= 0 &&
        rightEllipsisIndex < pageNumbers.length - 1 &&
        typeof pageNumbers[rightEllipsisIndex - 1] === "number"
      ) {
        const newPage = (pageNumbers[rightEllipsisIndex - 1] as number) + 1;
        onPageChange(newPage);
      }
    }
  };

  if (totalPages < 2) {
    return <></>;
  }
  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#!"
              onClick={() => handlePageChange(currentPage - 1)}
              // disabled={currentPage === 1}
              className={cn("", currentPage === 1 && "opacity-50 cursor-none")}
            />
          </PaginationItem>
          {getPageNumbers().map((page, index) => (
            <PaginationItem
              key={index}
              onClick={() =>
                typeof page === "number"
                  ? handlePageChange(page)
                  : handleEllipsisClick(
                      page.includes("left") ? "left" : "right"
                    )
              }
              onMouseEnter={() =>
                typeof page === "string" &&
                setHoveredEllipsis(page.includes("left") ? "left" : "right")
              }
              onMouseLeave={() => setHoveredEllipsis(null)}
            >
              {typeof page === "number" ? (
                <PaginationLink href="#!" isActive={page === currentPage}>
                  {page}
                </PaginationLink>
              ) : hoveredEllipsis ===
                (page.includes("left") ? "left" : "right") ? (
                page.includes("left") ? (
                  <PaginationLink href="#!">
                    <MoveLeft className="size-5" />
                  </PaginationLink>
                ) : (
                  <PaginationLink href="#!">
                    <MoveRight className="size-5" />
                  </PaginationLink>
                )
              ) : (
                <PaginationEllipsis />
              )}
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href="#!"
              onClick={() => handlePageChange(currentPage + 1)}
              // disabled={currentPage === totalPages}
              className={cn(
                "",
                currentPage === totalPages && "opacity-50 cursor-none"
              )}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default PagePagination;
