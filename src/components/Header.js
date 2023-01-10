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
      
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex gap-2 items-center ">
        <BsBag /> <span className="rounded-[50%] bg-red-600 w-[20px] h-[20px] text-white flex items-center justify-center">{cart.length}</span>
      </div>

    </header>
  );
};

export default Header;
