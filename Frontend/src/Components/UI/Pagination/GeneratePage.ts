export const GeneratePage = (page: number, totalPages: number) => {
  const pages: (number | string)[] = [];
  const maxPagesToShow = 6;
  const firstPages = [1, 2, 3];
  const lastPage = totalPages;

  if (totalPages <= maxPagesToShow) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  pages.push(...firstPages);

  if (page > 3) {
    pages.push("...");
  }

  if (page > 3 && page < totalPages - 1) {
    pages.push(page - 1, page, page + 1);
  }

  if (page === 3 || page === 4) {
    pages.push(4);
  }

  if (page === lastPage || page === totalPages - 1) {
    pages.push(totalPages - 2, totalPages - 1);
  }

  if (page < totalPages - 4) {
    pages.push("...");
  }

  pages.push(lastPage);

  return pages.filter((page, index) => {
    if (page === "...") {
      return pages[index - 1] !== "...";
    }
    return pages.indexOf(page) === index;
  });
};
