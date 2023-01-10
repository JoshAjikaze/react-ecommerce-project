import React, { useContext } from 'react';

import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product'

const Home = () => {
  // getting products from product context
  const { product } = useContext(ProductContext);
  console.log(product);
  // filtering through products
  const filteredProducts = product.filter(
    (item) => item.category === 'men\'s clothing'
     || 
     item.category === 'women\'s clothing'
  )
  // console.log(filteredProducts);
  return (
    <div className='pt-5'>
      <section className='py-16'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 md2:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-7  max-w-sm mx-auto md:max-w-none md:mx-0'>
          {
            filteredProducts.map(product => {
              // console.log(product)
              return(
                <Product product={product} key={product.id} />
              )
            })
          }
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
