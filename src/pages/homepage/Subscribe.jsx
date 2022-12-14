import React from "react";

const Subscribe = () => {
  return (
    <div className='bg-stone-200 flex px-4 flex-col h-[25rem] justify-center items-center'>
      <div className='flex flex-col space-y-6 items-center'>
        <h2 className='md:text-4xl text-2xl  font-bold text-center'>
          Subscribe to Get Discount Offers
        </h2>
        <p className='text-gray-500 text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <input
          className='md:py-4 py-3 px-6 w-10/12 rounded-full'
          type='email'
          placeholder='Enter your Email'
        />
        <button className='bg-red-500 px-6 py-3 font-semibold text-white w-2/5 rounded-3xl uppercase'>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
