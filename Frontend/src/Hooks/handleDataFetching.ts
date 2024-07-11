import { useEffect } from "react";
import categoryServices from "../Services/CategoryServices";
import productServices from "../Services/ProductServices";
import { toast } from "react-toastify";
import categoryStore from "../Stores/Category.store";
import productStore from "../Stores/Product.store";
import filteredStore from "../Stores/Filtered.store";
import wishlistProductStore from "../Stores/Wishlist.store";
import WishListServices from "../Services/WishlistServices";
import cartProductStore from "../Stores/Cart.store";
import cartServices from "../Services/CartServices";

const handleDataFetching = () => {
  const { filterParams } = filteredStore();

  const { loadingProducts, setProducts, setLoadingProducts, setTotalProducts } = productStore();

  const { setCategories, loadingCategories, setLoadingCategories } = categoryStore();
  const { setWishlistProducts, loadingWishlistProducts, setLoadingWishlistProducts } =
    wishlistProductStore();
  const { setCartProducts, loadingCartProducts, setLoadingCartProducts } = cartProductStore();
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

  // INFO: Fetch Categories and Wishlist Products
  useEffect(() => {
    if (!loadingCategories && !loadingWishlistProducts && !loadingCartProducts) {
      setLoadingCategories(true);
      setLoadingWishlistProducts(true);
      setLoadingCartProducts(true);
      Promise.all([
        categoryServices.allCategories(),
        WishListServices.allProducts(),
        cartServices.allCartProducts(),
      ])
        .then(([categories, wishlistProducts, cartProducts]) => {
          setCategories(categories.data);
          setWishlistProducts(wishlistProducts.data);
          setCartProducts(cartProducts.data);
        })
        .catch((error) => {
          console.error("❌ fetchCategories ~ error:", error.message);
          toast.error("Error while getting categories Data!");
        })
        .finally(() => {
          setLoadingCategories(false);
          setLoadingWishlistProducts(false);
          setLoadingCartProducts(false);
        });
    }
  }, []);
};

export default handleDataFetching;
