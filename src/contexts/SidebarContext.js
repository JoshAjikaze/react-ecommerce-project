import { createContext, useState } from 'react';

// create sidebar context
// sidebar context to be added to index.js and later imported to sidebar component

export const SidebarContext = createContext()

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
    console.log(isOpen)
  }

  return (
    <SidebarContext.Provider value={ {isOpen, setIsOpen, handleClose} }>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
