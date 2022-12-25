import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const useFetchCart = () => {
  const { user } = useContext(UserContext);
  const { cart, dispatch: dispatchCart } = useContext(CartContext);

  useEffect(() => {
    const fetchUserCart = async () => {
      const response = await fetch("http://localhost:8000/items/cart", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      if (response.ok) {
        dispatchCart({ type: "GET_CART", payload: json });
      }
    };
    if (user) {
      fetchUserCart();
    }
  }, [user]);

  return { cart };
};

export default useFetchCart;
