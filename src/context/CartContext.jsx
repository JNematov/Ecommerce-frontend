import { useReducer } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "GET_CART":
          return { cart: action.payload };
        case "ADD_CART":
          return { cart: [state.cart, action.payload] };
        case "DELETE_CART":
          return {
            cart: state.cart.filter(
              (cartItem) => cartItem.id !== action.payload._id
            ),
          };
        default:
          return state;
      }
    },
    { cart: null }
  );

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
