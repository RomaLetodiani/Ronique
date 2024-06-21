import { useEffect } from "react";
import globalStore from "../Stores/Global.store";
import categoryServices from "../Services/CategoryServices";
import productServices from "../Services/ProductServices";
import { toast } from "react-toastify";

const handleDataFetching = () => {
  const {
    setCategories,
    setProducts,
    setLoadingProducts,
    setTotalProducts,
    setLoadingCategories,
    filterParams,
    loadingCategories,
    loadingProducts,
  } = globalStore();

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
          console.log("🚀 ~ .then ~ error:", error.message);
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
          console.log("🚀 ~ categoryServices.allCategories ~ error:", error.message);
          toast.error("Error while getting categories Data!");
        })
        .finally(() => setLoadingCategories(false));
    }
  }, []);
};

export default handleDataFetching;
