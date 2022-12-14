import React from "react";

const Contact = () => {
  return (
    <div>
      <h2 className='py-8 text-5xl text-white font-bold bg-red-600 text-center'>
        Contact us
      </h2>
      <div className='max-w-[1140px] px-4 py-12 mx-auto'>
        <form className='flex flex-col max-w-lg mx-auto gap-4 justify-center items-center'>
          <input
            className='py-3 px-4  w-full border-2 border-gray-200'
            type={"text"}
            placeholder='Enter your Name'
          />
          <input
            className='py-3 px-4  w-full border-2 border-gray-200'
            type={"email"}
            placeholder='Enter Your Email Address'
          />
          <input
            className='py-3 px-4  w-full border-2 border-gray-200'
            type={"text"}
            placeholder='Enter Subject'
          />
          <textarea
            rows={6}
            className='w-full border-2 py-3 px-4  border-gray-200'
            placeholder='Enter Your Message Here ...'></textarea>
          <button className='bg-red-500 px-6 py-3 rounded-md w-[15rem]  font-semibold text-white '>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
