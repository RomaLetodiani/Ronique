import { useEffect } from "react";
import categoryServices from "../Services/CategoryServices";
import productServices from "../Services/ProductServices";
import { toast } from "react-toastify";
import filteredProductsStore from "../Stores/Filtered.store";
import categoryStore from "../Stores/Category.store";

const handleDataFetching = () => {
  const {
    filterParams,
    filteredProducts,
    setFilteredProducts,
    setTotalFilteredProducts,
    setLoadingFilteredProducts,
  } = filteredProductsStore();

  const { setCategories, loadingCategories, setLoadingCategories } = categoryStore();

  // INFO: This is a custom hook to fetch data from the server and store it in the global store.

  // INFO: Fetch Products
  useEffect(() => {
    if (!filteredProducts) {
      setLoadingFilteredProducts(true);
      productServices
        .allProducts(filterParams)
        .then(({ data }) => {
          setFilteredProducts(data.products);
          setTotalFilteredProducts(data.total);
        })
        .catch((error) => {
          console.error("❌ filterProducts ~ error:", error.message);
          toast.error("Error while getting products Data!");
        })
        .finally(() => setLoadingFilteredProducts(false));
    }
  }, [filterParams]);

  // INFO: Fetch Categories
  useEffect(() => {
    if (!loadingCategories) {
      setLoadingCategories(true);
      categoryServices
        .allCategories()
        .then(({ data }) => {
          setCategories(data);
        })
        .catch((error) => {
          console.log("❌ ~ categoryServices.allCategories ~ error:", error.message);
          toast.error("Error while getting categories Data!");
        })
        .finally(() => setLoadingCategories(false));
    }
  }, []);
};

export default handleDataFetching;
