import { useEffect, useMemo } from "react";
import { GeneratePage } from "./GeneratePage";
import Page from "./Page";
import { twMerge } from "tailwind-merge";
import { useMediaQuery } from "@/Hooks";
import { filteredStore } from "@/Stores";
import Selector from "../Selector";

type PaginationProps = {
  totalItems: number;
  pageSize: number;
  page: number;
  setPage: (page: number) => void;
};

const Pagination = ({ totalItems, pageSize, page, setPage }: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / pageSize);
  const isNotMobile = useMediaQuery("(min-width: 768px)");
  const pages = useMemo(() => GeneratePage(page, totalPages), [page, totalPages]);
  const { setFilterParams } = filteredStore();
  useEffect(() => {
    setFilterParams({ page });
  }, [page, setFilterParams]);

  return (
    totalPages > 1 && (
      <div className="flex items-center justify-center gap-3 w-full px-3 py-1">
        <div className={twMerge("flex gap-1", totalPages > 5 && "min-w-[320px]")}>
          {pages.map((p, i) => (
            <Page
              key={i}
              page={p}
              currentPage={page}
              isFirstRange={i <= 3}
              isLastRange={i <= pages.length - 1}
              isInRange={+p === page + 1 || +p === page - 1}
              onClick={() => {
                if (typeof p === "number") {
                  setPage(p);
                }
              }}
            />
          ))}
        </div>
        <Selector
          selected={page}
          setSelected={(n) => setPage(n as number)}
          options={Array.from({ length: totalPages }, (_, i) => i).map((i) => ({
            value: i + 1,
            title: `${isNotMobile && "Page"} ${i + 1}`,
          }))}
        />
      </div>
    )
  );
};

export default Pagination;
