import React, { useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import TestiCrousel from "../../components/TestiCrousel";

const Testimonial = () => {
  const crouselHandler = () => {};
  return (
    <div className='bg-gray-50 py-10'>
      <div className='max-w-[1140px] px-4 relative flex flex-col justify-end mx-auto'>
        <div className=' absolute flex w-1/5  md:w-1/3 top-full md:top-1/2 left-1/3 justify-between'>
          <div className='bg-red-600 w-8 h-8 flex justify-center items-center  text-white rounded-full'>
            <BsArrowLeft onClick={crouselHandler} />
          </div>
          <div className='bg-red-600 w-8 h-8 flex justify-center items-center   text-white rounded-full'>
            <BsArrowRight />
          </div>
        </div>
        <div className='space-y-4 my-8'>
          <h2 className='md:text-5xl text-3xl font-bold text-center'>
            Customer's Testimonial
          </h2>
          <div className='h-1 w-20 bg-red-500 mx-auto'></div>
        </div>
        <div className='flex overflow-hidden'>
          <TestiCrousel className='' />
          <TestiCrousel className='translate-x-full hidden' />
          <TestiCrousel className='translate-x-full hidden' />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
