import React, { createContext, useState, useEffect } from 'react';

// create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //products state initialized into an empty array
  const [product, setProduct] = useState([]);

  // fetching products with useEffect
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProduct(data);
      // console.log(response)
    };
    fetchProducts()
  }, [])

  return (
    <ProductContext.Provider value={{product}}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
