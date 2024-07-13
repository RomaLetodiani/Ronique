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
import authStore from "../Stores/Auth.store";

const handleDataFetching = () => {
  const { filterParams } = filteredStore();

  const { loadingProducts, setProducts, setLoadingProducts, setTotalProducts } = productStore();

  const { setCategories, loadingCategories, setLoadingCategories } = categoryStore();
  const {
    setWishlistProducts,
    loadingWishlistProducts,
    setLoadingWishlistProducts,
    clearWishlist,
  } = wishlistProductStore();
  const { setCartProducts, loadingCartProducts, setLoadingCartProducts, clearCart } =
    cartProductStore();

  const { user } = authStore();

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

  useEffect(() => {
    if (!loadingCategories) {
      setLoadingCategories(true);
      categoryServices
        .allCategories()
        .then(({ data }) => {
          setCategories(data);
        })
        .catch((error) => {
          console.error("❌ fetchCategories ~ error:", error.message);
          toast.error("Error while getting categories Data!");
        })
        .finally(() => {
          setLoadingCategories(false);
        });
    }
  }, []);

  useEffect(() => {
    if (!user) {
      clearWishlist();
      clearCart();
      return;
    }

    if (!loadingWishlistProducts) {
      setLoadingWishlistProducts(true);
      WishListServices.allProducts()
        .then(({ data }) => {
          setWishlistProducts(data);
        })
        .catch((error) => {
          console.error("❌ fetchWishlist ~ error:", error.message);
          toast.error("Error while getting wishlist Data!");
        })
        .finally(() => {
          setLoadingWishlistProducts(false);
        });
    }

    if (!loadingCartProducts) {
      setLoadingCartProducts(true);
      cartServices
        .allCartProducts()
        .then(({ data }) => {
          setCartProducts(data);
        })
        .catch((error) => {
          console.error("❌ fetchCart ~ error:", error.message);
          toast.error("Error while getting cart Data!");
        })
        .finally(() => {
          setLoadingCartProducts(false);
        });
    }
  }, [user]);
};

export default handleDataFetching;
