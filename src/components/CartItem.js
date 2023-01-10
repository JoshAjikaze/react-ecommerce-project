import { useContext } from "react";

// import link from react-router-dom
import { Link } from "react-router-dom";
// import icons
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
const CartItem = ({ item }) => {
  // import { CartContext } from '../contexts/CartContext';
  // const { cart } = useContext(CartContext);
  const { id, title, image, price, amount } = item;

  

  const removeItem = (cart, id) => {
    return delete cart[id];
  };
  return (
    <div className="flex">
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
            <div className="text-xl  cursor-pointer ">
              <IoMdClose className="to-gray-500 hover:text-red-500 transition hover:scale-150" />
            </div>
            {/* <button onClick={() => {removeItem(id)}}>Remove item</button> */}
          </div>

          <div className="bg-pink-200 flex items-center justify-between text-[10px] p-1">
            {/* qty */}
            <div className="flex items-center justify-center gap-3 p-1">
              {/* minus icon */}
              <div>
                <IoMdRemove className="text-[12px] cursor-pointer" />
              </div>
              {/* amount */}
              <div>{amount}</div>
              {/* add */}
              <div>
                <IoMdAdd className="text-[12px] cursor-pointer" />
              </div>
            </div>
            {/* item price  */}
            <div>${ price }</div>
            {/* Total price  */}
            <div className="flex items-center gap-x-1 text-sm mr-1">
              <span className="mt-[2px] font-bold text-[10px]">Total:</span>
              ${ amount * price }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
