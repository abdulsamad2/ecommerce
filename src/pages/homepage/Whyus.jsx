import React from "react";
import { TbFreeRights, TbTruckDelivery } from "react-icons/tb";
import { IoMdMedal } from "react-icons/io";
const Whyus = () => {
  return (
    <div className='max-w-[1140px] px-4 py-12 mx-auto'>
      <div className='space-y-4'>
        <h2 className='md:text-5xl text-3xl font-bold text-center'>
          Why Shop With Us
        </h2>
        <div className='h-1 w-20 bg-red-500 mx-auto'></div>
      </div>
      {/* 3 boxes */}
      <div className='flex px-4 md:flex-row flex-col gap-6 py-8'>
        <div className='bg-[#002c3e] rounded-lg justify-center text-center px-4 space-y-3 flex flex-col items-center h-64 text-white'>
          <TbTruckDelivery
            className='text-center'
            size={50}
          />
          <h3 className='text-2xl font-bold'>Fast Delivery</h3>
          <p>variations of passages of Lorem Ipsum available</p>
        </div>
        {/* second Box */}
        <div className='bg-[#002c3e] rounded-lg justify-center text-center px-4 space-y-3 flex flex-col items-center h-64 text-white'>
          <TbFreeRights
            className='text-center'
            size={50}
          />
          <h3 className='text-2xl font-bold'>Free Shipping</h3>
          <p>variations of passages of Lorem Ipsum available</p>
        </div>
        {/* 3rd Box */}
        <div className='bg-[#002c3e] rounded-lg justify-center text-center px-4 space-y-3 flex flex-col items-center h-64 text-white'>
          <IoMdMedal
            className='text-center'
            size={50}
          />
          <h3 className='text-2xl font-bold'>Best Quality</h3>
          <p>variations of passages of Lorem Ipsum available</p>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
