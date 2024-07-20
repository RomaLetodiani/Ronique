import { Input } from "@/Components/UI";
import { useDebounce } from "@/Hooks";
import { InputState } from "@/Hooks/useInput";
import { ProductFilterI } from "@/Types/Product.interface";

type NameFilterProps = {
  nameInput: InputState;
  filterParams: ProductFilterI;
  setFilterParams: (params: ProductFilterI) => void;
  isMobile: boolean;
};

const NameFilter = ({ nameInput, filterParams, setFilterParams, isMobile }: NameFilterProps) => {
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

  return (
    <Input
      inputClassName="max-w-56"
      {...nameInput}
      label={nameInput.value ? "Name" : "Search Name"}
    />
  );
};

export default NameFilter;
