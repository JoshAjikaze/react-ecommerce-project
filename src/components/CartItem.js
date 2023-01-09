import { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { CartContext } from '../contexts/CartContext';



const CartItem = ({ item }) => {
  // const { cart } = useContext(CartContext);
  const { id, title, image, price, amount } = item

  const removeItem = (cart, id) => {
    return (delete cart[id]);
  } 
  return (
    <div className='flex'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        <Link to={`/product/${id}`}>
          <img src={image} alt="" className='max-w-[40px]' />
        </Link>
        
        {/* title and remove button */}
        <div>
          <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>{ title }</Link>
          {/* <button onClick={() => {removeItem(id)}}>Remove item</button> */}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
