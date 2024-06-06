import { useRef, useState } from "react";
import useDebounce from "../../Hooks/useDebounce";
import { useInput } from "../../Hooks/useInput";
import Input from "../UI/Input";
import productServices from "../../Services/ProductServices";
import useClickInside from "../../Hooks/useClickInside";
import useClickOutside from "../../Hooks/useClickOutside";
import { ProductI } from "../../Types/Product.interface";

const SearchBar = () => {
  const SearchInput = useInput(() => true);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [searchResults, setSearchResults] = useState<ProductI[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleSearch = (searchTerm: string) => {
    if (!searchTerm) {
      setSearchResults([]);
      return;
    }
    setLoading(true);
    productServices
      .allProducts({ productName: searchTerm, page: 1, pageSize: 50 })
      .then(({ data }) => {
        if (!data.products) {
          setSearchResults([]);
          return;
        }
        setSearchResults(data.products);
        setVisible(true);
      })
      .catch((error) => {
        console.log("🚀 ~ .then ~ error:", error);
        setSearchResults([]);
      })
      .finally(() => setLoading(false));
  };

  const handleClickOutside = () => {
    setVisible(false);
  };

  const handleClickInside = () => {
    setVisible(true);
  };

  useDebounce(() => handleSearch(SearchInput.value), 500, [SearchInput.value]);
  useClickInside(containerRef, handleClickInside);
  useClickOutside(containerRef, handleClickOutside);

  return (
    <div ref={containerRef} className="flex-1 mx-5 relative">
      <Input label="" inputClassName="py-2" {...SearchInput} placeholder="Search" />

      {/* TODO: Extract in another component */}
      {visible && (
        <div className="absolute overflow-y-auto max-h-96 bg-white shadow-md w-full">
          {loading ? (
            <div className="p-2">Loading...</div>
          ) : (
            searchResults.map((product) => (
              <div key={product.id} className="p-2 hover:bg-gray-100">
                {product.title}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
