import { createContext, useState } from 'react';

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

  // remove from cart
  const removeFromCart = (id) => {
    const newCart  = cart.filter(item => {
      return(item.id !== id);
    });

    setCart(newCart);
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  // increment amount
  const increaseAmount = (id) => {
    const item  = cart.find(item => item.id === id);
    addToCart( item, id);
  }
  // decrement cart
  const decreaseAmount = (id) => {
    console.log("Clicked!!")
  }

  console.log(cart);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
