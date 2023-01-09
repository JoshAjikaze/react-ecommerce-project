import { createContext, useState, useEffect } from 'react';

// create context
export const CartContext = createContext()

const CartProvider = ({ children }) => {

  // cart state
  const [cart, setCart] = useState([])

  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 }
    console.log(newItem)
    // check if item is already in cart
    const cartItem = cart.find(item => item.id === id)

    if(cartItem){
      const newCart = [...cart].map(
        item => {
          if(item.id === id){
            return({...item, amount: cartItem.amount + 1});
          } else{
            return(item);
          }
        });
        setCart(newCart);
    } else{
      setCart([...cart, newItem])
    }
  };

  console.log(cart);

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
