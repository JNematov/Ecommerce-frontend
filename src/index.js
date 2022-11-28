import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ItemsContextProvider from './context/ItemsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ItemsContextProvider>
      <App />
    </ItemsContextProvider>
  </React.StrictMode>
);

