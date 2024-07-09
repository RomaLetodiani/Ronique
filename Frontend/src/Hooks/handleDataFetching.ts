import { useEffect } from "react";
import categoryServices from "../Services/CategoryServices";
import productServices from "../Services/ProductServices";
import { toast } from "react-toastify";
import categoryStore from "../Stores/Category.store";
import productStore from "../Stores/Product.store";
import filteredStore from "../Stores/Filtered.store";

const handleDataFetching = () => {
  const { filterParams } = filteredStore();

  const { loadingProducts, setProducts, setLoadingProducts, setTotalProducts } = productStore();

  const { setCategories, loadingCategories, setLoadingCategories } = categoryStore();

  // INFO: This is a custom hook to fetch data from the server and store it in the global store.

  // INFO: Fetch Products
  useEffect(() => {
    if (!loadingProducts) {
      setLoadingProducts(true);
      productServices
        .allProducts(filterParams)
        .then(({ data }) => {
          setProducts(data.products);
          setTotalProducts(data.total);
        })
        .catch((error) => {
          console.error("❌ filterProducts ~ error:", error.message);
          toast.error("Error while getting products Data!");
        })
        .finally(() => setLoadingProducts(false));
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
          console.error("❌ ~ categoryServices.allCategories ~ error:", error.message);
          toast.error("Error while getting categories Data!");
        })
        .finally(() => setLoadingCategories(false));
    }
  }, []);
};

export default handleDataFetching;
