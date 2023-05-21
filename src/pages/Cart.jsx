import CartItem from "../components/CartItem";

import { Box } from "@mui/material";
import useFetchCart from "../hooks/useFetchCart";

const Cart = () => {
  const { cart } = useFetchCart();

  return (
    <div className="Cart">
      {cart && (
        <Box>
          <h2>My Cart</h2>
          {cart.map((cartItem) => (
            <CartItem cartItem={cartItem} />
          ))}
        </Box>
      )}
      {!cart && <h3>Your cart's empty</h3>}
    </div>
  );
};

export default Cart;
