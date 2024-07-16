import { toast } from "react-toastify";
import { useEffect } from "react";
import cartProductStore from "../Stores/Cart.store";
import cartServices from "../Services/CartServices";
import authStore from "../Stores/Auth.store";

const handleCartProductsFetcher = () => {
  const { user } = authStore();
  const { loadingCartProducts, setLoadingCartProducts, setCartProducts } = cartProductStore();

  useEffect(() => {
    const handleFetchCartProducts = () => {
      if (loadingCartProducts || !user) {
        return;
      }

      setLoadingCartProducts(true);
      cartServices
        .allCartProducts()
        .then(({ data }) => {
          setCartProducts(data);
        })
        .catch((error) => {
          console.error("❌ fetchCartProducts ~ error:", error.message);
          toast.error("Error while getting cart products Data!");
        })
        .finally(() => setLoadingCartProducts(false));
    };

    handleFetchCartProducts();
  }, [user]);
};

export default handleCartProductsFetcher;
