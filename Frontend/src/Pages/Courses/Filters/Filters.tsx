import { twMerge } from "tailwind-merge";
import BlurBackground from "../../../Components/BlurBackground";
import Burger from "../../../Components/Burger";
import { Dispatch, SetStateAction, useState } from "react";
import Input from "../../../Components/UI/Input";
import categoryStore from "../../../Stores/Category.store";
import filteredStore from "../../../Stores/Filtered.store";
import productStore from "../../../Stores/Product.store";
import { useInput } from "../../../Hooks/useInput";
import useDebounce from "../../../Hooks/useDebounce";
import CheckBox from "../../../Components/UI/CheckBox";
import Selector from "../../../Components/UI/Selector";
import Button from "../../../Components/UI/Button";
import { toast } from "react-toastify";

const Filters = ({
  isMobile,
  open,
  setOpen,
}: {
  isMobile: boolean;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { categories } = categoryStore();
  const { filterParams, setFilterParams } = filteredStore();
  const { totalProducts } = productStore();
  const nameInput = useInput(() => true, filterParams.productName);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({
    min: filterParams.minPrice,
    max: filterParams.maxPrice,
  });
  const [onlySales, setOnlySales] = useState(!!filterParams.onlySales);

  const handleCategoryChange = (category: string) => {
    if (category) {
      setFilterParams({ ...filterParams, categoryName: category === "All" ? undefined : category });
    }
  };

  const handleNameChange = (name: string) => {
    if (isMobile) {
      return;
    }

    if (!name) {
      setFilterParams({ ...filterParams, productName: "" });
    }

    if (name) {
      setFilterParams({ ...filterParams, productName: name });
    }
  };

  useDebounce(() => handleNameChange(nameInput.value as string), 500, [nameInput.value]);

  const renderCategories = [{ id: "all", name: "All" }, ...categories];

  const priceOptions = [0, 50, 100, 150, 200].map((price) => ({
    value: price,
    title: `${price} $`,
  }));

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
      <div
        className={twMerge(
          "p-5 justify-between items-center gap-5 bg-white",
          "transform transition-transform ease-out duration-300",
          isMobile
            ? `absolute -translate-x-full top-0 left-0 w-full flex flex-col z-40 ${
                open && "translate-x-0 pr-16"
              }`
            : "border-r border-secondary-200 w-64 h-full"
        )}
      >
        <h5>Filters | Total Products : {totalProducts}</h5>

        <div>
          <p>Category</p>
          <ul className="flex flex-col">
            {renderCategories.map((category) => (
              <li
                className={twMerge(
                  "cursor-pointer",
                  (category.name === filterParams.categoryName ||
                    (category.name === "All" && !filterParams.categoryName)) &&
                    "text-secondary-500"
                )}
                onClick={() => handleCategoryChange(category.name)}
                key={category.id}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>

        <Input {...nameInput} label={nameInput.value ? "Name" : "Search Name"} />

        <div>
          <p>Price</p>
          <div>
            <span>
              <p>Min</p>
              <Selector
                options={priceOptions}
                selected={priceRange.min}
                setSelected={(value) => setPriceRange({ ...priceRange, min: +value })}
                onChange={(value) => setPriceRange({ ...priceRange, min: +value })}
              />
            </span>
            <span>
              <p>Max</p>
              <Selector
                options={priceOptions}
                selected={priceRange.max}
                setSelected={(value) => setPriceRange({ ...priceRange, max: +value })}
                onChange={(value) => setPriceRange({ ...priceRange, max: +value })}
              />
            </span>
          </div>
        </div>
        <div>
          <CheckBox
            id="onlySales"
            withText
            checkedText="Only Sales"
            uncheckedText="All Products"
            clickable
            checked={onlySales}
            onChange={() => setOnlySales(!onlySales)}
          />
        </div>

        <Button onClick={handleFilters}>Apply Filter</Button>
      </div>
    </>
  );
};

export default Filters;
