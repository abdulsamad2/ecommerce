import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../store/CartSlice";

const SingleProduct = (props) => {
  const { productId, productImage, productPrice, productTitle } = props;
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      actions.addToCart({ productId, productImage, productPrice, productTitle })
    );
  };

  return (
    <div className='bg-gray-100 relative py-12 px-12 w-[100%] space-y-8 mx-auto overflow-hidden group'>
      <div className='absolute inset-0 bg-black/0 w-full h-full mx-auto group-hover:bg-gray-200/50 duration-300'></div>
      <img
        className='max-h-40 w-full object-contain mx-auto'
        src={props.productImage}></img>
      <div className='flex w-full items-center justify-between'>
        <div>
          <h2 className='text-xl font-bold'>{props.productTitle}</h2>
        </div>
        <div>
          <p className='font-bold text-md'>${props.productPrice}</p>
        </div>
      </div>
      <div className='flex flex-col absolute top-full  left-1/2 space-y-4 -translate-x-1/2 group-hover:inset-y-1/4 group-hover:opacity-100 duration-300 '>
        <button
          onClick={addToCartHandler}
          className='py-2 px-6 text-white rounded-full border-2 border-red-600 bg-red-600 hover:text-red-600 hover:bg-transparent '>
          Add to Cart
        </button>
        <button className='py-2 px-6 text-white rounded-full border-black border-2 bg-gray-900 hover:text-black hover:bg-transparent'>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
