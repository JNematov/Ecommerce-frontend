import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CartContextProvider from './context/CartContext';
import ItemsContextProvider from './context/ItemsContext';
import ThemeContextProvider from './context/ThemeContext';
import UserContextProvider from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <UserContextProvider>
    <CartContextProvider>
      <ItemsContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </ItemsContextProvider>
    </CartContextProvider>
  </UserContextProvider>

  // </React.StrictMode>
);

