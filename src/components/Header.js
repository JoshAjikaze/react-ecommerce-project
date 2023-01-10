import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

import { BsBag } from 'react-icons/bs'
import { CartContext } from "../contexts/CartContext";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  const { cart } = useContext(CartContext)
  return (
    <header className="bg-white shadow-xl fixed z-50 w-full p-2">

      <div>Header</div>
      
      <div onClick={() => setIsOpen(!isOpen)} className="relative cursor-pointer flex items-center w-[30px] h-[30px]">
        <BsBag className="text-xl" /> <p className=" absolute top-0 right-1 rounded-[50%] bg-pink-400 w-[15px] h-[15px] text-white text-[10px] flex items-center justify-center">{cart.length}</p>
      </div>

    </header>
  );
};

export default Header;
