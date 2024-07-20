import { CategoryFilter, NameFilter, PriceFilter, SalesFilter } from "./components";
import { Dispatch, SetStateAction } from "react";
import { BlurBackground, Burger } from "@/Components";
import { Button } from "@/Components/UI";
import { useHandleFilters } from "@/Hooks";
import { twMerge } from "tailwind-merge";

const Filters = ({
  isMobile,
  open,
  setOpen,
}: {
  isMobile: boolean;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const {
    nameInput,
    onlySales,
    priceRange,
    filterParams,
    totalProducts,
    setOnlySales,
    setPriceRange,
    handleFilters,
    setFilterParams,
    handleCategoryChange,
  } = useHandleFilters({ setOpen });
  return (
    <>
      {/* Mobile Header */}
      {isMobile && (
        <div className="absolute z-50 top-[20px] w-full flex justify-end items-center px-5">
          <Burger open={open} setOpen={setOpen} />
        </div>
      )}

      {/* Blurred dark Background */}
      <BlurBackground absOrFixed="absolute" isMobile={isMobile} open={open} zIndex={30} />

      {/* Filters */}
      <div className={getFilterStyles(isMobile, open)}>
        <h5 className="font-semibold">Filters | Total Products : {totalProducts}</h5>

        <CategoryFilter
          handleCategoryChange={handleCategoryChange}
          categoryName={filterParams.categoryName}
        />

        <NameFilter
          nameInput={nameInput}
          setFilterParams={setFilterParams}
          filterParams={filterParams}
          isMobile={isMobile}
        />

        <PriceFilter priceRange={priceRange} setPriceRange={setPriceRange} />

        <SalesFilter onlySales={onlySales} setOnlySales={setOnlySales} />

        <Button onClick={handleFilters}>Apply Filter</Button>
      </div>
    </>
  );
};

export default Filters;

const getFilterStyles = (isMobile: boolean, open: boolean) => {
  return twMerge(
    "p-5 flex flex-col gap-5 bg-white",
    "transform transition-transform ease-out duration-300",
    isMobile
      ? `absolute -translate-x-full flex-wrap top-0 left-0 w-full z-40 ${open && "translate-x-0"}`
      : "border-r border-secondary-200 w-64 h-full"
  );
};
