import { useRef, useState } from "react";
import useDebounce from "../../Hooks/useDebounce";
import { InputState } from "../../Hooks/useInput";
import Input from "../UI/Input";
import productServices from "../../Services/ProductServices";
import useClickInside from "../../Hooks/useClickInside";
import useClickOutside from "../../Hooks/useClickOutside";
import { ProductI } from "../../Types/Product.interface";
import Options from "./Options";

const SearchBar = ({ searchInput }: { searchInput: InputState }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(false);
  const [searchResults, setSearchResults] = useState<ProductI[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleSearch = (searchTerm: string | number) => {
    if (!searchTerm) {
      setSearchResults([]);
      setVisible(false);
      setError(false);
      return;
    }
    setLoading(true);
    productServices
      .allProducts({ productName: searchTerm as string, page: 1, pageSize: 50 })
      .then(({ data }) => {
        if (!data.total || !data.products) {
          setSearchResults([]);
          setError(true);
          return;
        }
        setSearchResults(data.products);
        setVisible(true);
      })
      .catch((error) => {
        console.log("❌ ~ .then ~ error:", error);
        setSearchResults([]);
        setError(true);
      })
      .finally(() => setLoading(false));
  };

  const handleClickOutside = () => {
    setVisible(false);
  };

  const handleClickInside = () => {
    setVisible(true);
  };

  useDebounce(() => handleSearch(searchInput.value), 500, [searchInput.value]);
  useClickInside(containerRef, handleClickInside);
  useClickOutside(containerRef, handleClickOutside);

  return (
    <div ref={containerRef} className="flex-1 mx-5 relative">
      <Input
        label=""
        {...searchInput}
        inputClassName={`${visible && "rounded-t-xl rounded-b-none"}`}
        placeholder="Search"
      />
      {visible && <Options loading={loading} searchResults={searchResults} error={error} />}
    </div>
  );
};

export default SearchBar;
