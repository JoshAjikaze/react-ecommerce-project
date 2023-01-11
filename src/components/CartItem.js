import { useContext } from "react";
import { CartContext } from '../contexts/CartContext';

// import link from react-router-dom
import { Link } from "react-router-dom";
// import icons
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
const CartItem = ({ item }) => {

  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex gap-x-4 py-2 lg:px-3 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img src={image} alt="" className="max-w-[60px]" />
        </Link>

        <div className="w-full flex flex-col text-[12px]">
          {/* title and remove button */}
          <div className="flex justify-between items-center mb-2">
            {/* title */}
            <Link
              to={`/product/${id}`}
              className="uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            {/* remove icon */}
            <div onClick={() => removeFromCart(id)} className="text-xl  cursor-pointer ">
              <IoMdClose className="to-gray-500 hover:text-red-500 transition hover:scale-150" />
            </div>
            {/* <button onClick={() => {removeItem(id)}}>Remove item</button> */}
          </div>

          <div className="flex items-center justify-between text-[10px] p-[2px]">
            {/* qty */}
            <div className="flex items-center justify-center gap-3 p-1">
              {/* minus icon */}
              <div onClick={() => decreaseAmount(id)}>
                <IoMdRemove className="text-[12px] cursor-pointer bg-pink-50 hover:bg-pink-200 hover:scale-150 transition-all duration-300 h-[15px] w-[15px]" />
              </div>
              {/* amount */}
              <div>{amount}</div>
              {/* add */}
              <div onClick={() => increaseAmount(id)}>
                <IoMdAdd className="text-[12px] cursor-pointer bg-pink-50 hover:bg-pink-200 hover:scale-150 transition-all duration-300 h-[15px] w-[15px]" />
              </div>
            </div>
            {/* item price  */}
            <div className="hover:scale-150">${ price }</div>
            {/* Total price  */}
            <div className="flex items-center gap-x-1 text-sm mr-1">
              <span className="mt-[2px] font-bold text-[10px]">Total:</span>
              {`$ ${parseFloat(amount * price).toFixed(2)} `}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
