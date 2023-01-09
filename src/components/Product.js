import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill, BsCartPlus } from 'react-icons/bs'

// import cart context
import { CartContext } from '../contexts/CartContext';

const Product = ({ product }) => {
  
  const  { addToCart } = useContext(CartContext)
  // destrocturing product
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className='border border-[#e4e4e4] pt-5 h-64 mb-4 relative overflow-hidden group transition duration-500'>
        {/* image */}
        <div className='w-48 mx-auto flex justify-center items-center'>
          <img src={image} alt="" className='max-h-40 group-hover:scale-110 transition duration-300' />
        </div>
        {/* buttons */}
        <div className='hidden group-hover:absolute group-hover:flex opacity-30 hover:opacity-100 transition-all duration-500 justify-between -bottom-14 group-hover:bottom-0 w-full bg-red-500 p-1'>
          <button>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
              <BsCartPlus onClick={() => addToCart(product, id) } className='text-3xl' />
            </div>
          </button>
          <div className='w-1/4 flex items-center justify-center bg-white p-1'>
            <Link
              to={'/product/${id}'}
            >
              <BsEyeFill className='text-xl' />
            </Link>
          </div>
        </div>
      </div>
      {/* Category title and price */}
      <div>
        <div className='text-sm capitalize text-gray-500'>{category}</div>
        <Link to={'/product/${id}'}>
          <h2 className='font-semibold mb-1'>{title}</h2>
        </Link>
        <h2>${price}</h2>
      </div>
    </div>
  );
};

export default Product;
