import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import product provider context
import ProductProvider from './contexts/ProductContext';

// import sidebar provider context
import SidebarProvider from './contexts/SidebarContext';

// import Cart provider context
import CartProvider from './contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
