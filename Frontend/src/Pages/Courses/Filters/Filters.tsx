import { CategoryFilter, NameFilter, PriceFilter, SalesFilter } from "./components";
import { Dispatch, SetStateAction } from "react";
import { getFilterStyles } from "./utils/helpers";
import Burger from "../../../Components/Burger";
import Button from "../../../Components/UI/Button";
import useHandleFilters from "./hooks/useHandleFilters";
import BlurBackground from "../../../Components/BlurBackground";

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
