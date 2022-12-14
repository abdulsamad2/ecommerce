import React from "react";
import product1 from "../../images/p1.png";
import SingleProduct from "../../components/SingleProduct";
import data from "../../ProductData";
const element = data.map((item) => {
  return (
    <SingleProduct
      key={item.productId}
      productId={item.productId}
      productImage={item.productImage}
      productPrice={item.productPrice}
      productTitle={item.productTitle}
    />
  );
});

const Products = () => {
  return (
    <div className='max-w-[1140px] px-4 py-12 mx-auto'>
      <div className='space-y-4 my-8'>
        <h2 className='md:text-5xl text-3xl font-bold text-center'>
          Our Products
        </h2>
        <div className='h-1 w-20 bg-red-500 mx-auto'></div>
      </div>
      {/* Grid Items for Products */}
      <div className='grid justify-center gap-12 px-4 sm:grid-cols-2  md:grid-cols-3 '>
        {element}
      </div>
      <div className='flex justify-center mx-auto py-12  max-w-[20rem]'>
        <button className='bg-red-500 px-6 py-3  font-semibold text-white '>
          Browse All Products
        </button>
      </div>
    </div>
  );
};

export default Products;
