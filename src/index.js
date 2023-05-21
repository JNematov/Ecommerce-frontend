import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import ThemeContextProvider from "./context/ThemeContext";
import ItemsContextProvider from "./context/ItemsContext";
import CartContextProvider from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ThemeContextProvider>
    <CartContextProvider>
      <ItemsContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ItemsContextProvider>
    </CartContextProvider>
  </ThemeContextProvider>

  // </React.StrictMode>
);
