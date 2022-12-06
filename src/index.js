import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ItemsContextProvider from './context/ItemsContext';
import UserContextProvider from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <UserContextProvider>
      <ItemsContextProvider>
        <App />
      </ItemsContextProvider>
    </UserContextProvider>
  // </React.StrictMode>
);

