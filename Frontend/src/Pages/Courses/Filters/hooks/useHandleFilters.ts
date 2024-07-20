import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { initialFilterParams } from "@/Stores/Filtered.store";
import { productStore, filteredStore } from "@/Stores";
import { useInput } from "@/Hooks";

const useHandleFilters = ({ setOpen }: { setOpen: (value: boolean) => void }) => {
  const { filterParams, setFilterParams } = filteredStore();

  const { totalProducts } = productStore();

  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({
    min: filterParams.minPrice ?? 0,
    max: filterParams.maxPrice ?? 200,
  });

  const [onlySales, setOnlySales] = useState(!!filterParams.onlySales);

  const nameInput = useInput(() => true, filterParams.productName);

  const handleCategoryChange = (category: string) => {
    setOpen(false);
    setFilterParams({ ...filterParams, categoryName: category === "All" ? undefined : category });
  };

  const handleFilters = () => {
    const { min, max } = priceRange;
    if (min > max || min < 0 || min > 200 || max > 200 || max < 0) {
      toast.error("Please select a valid price range");
      return;
    }

    setFilterParams({
      ...filterParams,
      productName: nameInput.value as string,
      minPrice: min,
      maxPrice: max,
      onlySales,
    });

    setOpen(false);
  };

  useEffect(() => {
    return () => {
      console.log("unmounting");
      setFilterParams(initialFilterParams);
    };
  }, [setFilterParams]);

  return {
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
  };
};

export default useHandleFilters;
