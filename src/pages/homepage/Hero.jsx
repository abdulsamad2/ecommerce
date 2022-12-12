import React from "react";

const Hero = () => {
  return (
    <div className='bg-hero bg-no-repeat h-[30rem] md:h-[55rem] bg-cover bg-center w-full'>
      <div className='max-w-[1140px] px-4  flex flex-col justify-end mx-auto'>
        <div className='md:max-w-md w-full px-4 h-[30rem] flex justify-center md:h-[55rem] flex-col '>
          <div className='space-y-6 md:pt-0 pt-8'>
            <h1 className='md:text-6xl text-3xl font-bold text-red-500 capitalize'>
              Sale 20% Off <span className='text-black'>On Everything</span>
            </h1>
            <p className='font-light'>
              Explicabo esse amet tempora quibusdam laudantium, laborum eaque
              magnam fugiat hic? Esse dicta aliquid error repudiandae earum
              suscipit fugiat molestias, veniam, vel architecto veritatis
              delectus repellat modi impedit sequi.
            </p>
            <button className='bg-red-500 px-6 py-3 font-semibold text-white  max-w-[10rem]'>
              Shop Now
            </button>
          </div>
          {/* second item */}

          <div className='flex gap-2 py-4'>
            <span className='w-4 h-4 bg-white rounded-full'></span>
            <span className='w-4 h-4 bg-white rounded-full'></span>
            <span className='w-4 h-4 bg-white rounded-full'></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
