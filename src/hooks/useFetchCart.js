import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { useSelector } from "react-redux";

const useFetchCart = () => {
  const user = useSelector((state) => state.user).user;
  const { cart, dispatch: dispatchCart } = useContext(CartContext);

  useEffect(() => {
    const fetchUserCart = async () => {
      //error with fetching cart response
      if (user) {
        const response = await fetch("http://localhost:8000/cart", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const json = await response.json();
        if (response.ok) {
          dispatchCart({ type: "GET_CART", payload: json });
        } else {
          console.log("error fetching cart");
        }
      }

      fetchUserCart();
    };
  }, [user, dispatchCart]);

  return { cart };
};

export default useFetchCart;
