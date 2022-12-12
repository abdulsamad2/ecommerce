import React from "react";
import sideImg from "../../images/arrival-bg-removebg-preview.png";
const NewArrival = () => {
  return (
    <div className=' bg-rose-100'>
      <div className='max-w-[1140px] md:flex-row flex-col items-center justify-center flex px-4 mx-auto'>
        <img
          className=' w-full md:w-8/12'
          src={sideImg}
          alt=''
        />
        <div className='flex md:max-w-fit max-w-xs md:items-start items-center py-6  flex-col justify-center gap-6'>
          <h2 className='text-3xl font-bold md:text-6xl text-[#002c3e]'>
            # New Arrivals
          </h2>
          <p className='text-gray-600 max-sm:'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa autem
            tempora iste repellendus nulla dolorem distinctio quam obcaecati
            officia.
          </p>
          <button className='bg-red-500 px-6 py-3 font-semibold text-white  max-w-[10rem]'>
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
