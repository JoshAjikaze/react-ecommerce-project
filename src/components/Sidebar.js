import { useContext } from 'react';

// link import 
import { Link } from 'react-router-dom';

// icon imports
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash } from 'react-icons/fi';

// component imports
import CartItem from '../components/CartItem'

// sidebarContext import
import { SidebarContext } from '../contexts/SidebarContext'

// CartContext Import
import { CartContext } from '../contexts/CartContext'


const Sidebar = () => {
  // destructuring values from imported contexts
  const { isOpen, handleClose } = useContext(SidebarContext)
  const { cart } = useContext(CartContext)

  return (
    <div className={` ${isOpen ? 'bottom-0' : '-bottom-full'} w-full h-screen  md:h-3/5 bg-white bottom-0 fixed shadow-2xl transition-all duration-300 z-50 px-4 lg:px-[35px]`}>
      
      <div className='flex items-center justify-between py-6 border-b'>

        <div className='uppercase text-sm font-semibold'>Cart ({cart.length}) </div>

        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex'>
          <IoMdArrowForward className='text-3xl' />
        </div>

      </div>
      <div>{cart.map(item => {
        return(
          <CartItem item={item} key={item.id} />
        )
      })}</div>
    </div>
  );
};

export default Sidebar;
