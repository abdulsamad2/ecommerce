import React, { useState, useMemo } from "react";
import { NavLink } from "react-router-dom";

import Select from "react-select";
import countryList from "react-select-country-list";
const Checkout = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (value) => {
    setValue(value);
  };
  return (
    <div>
      <h2 className='py-8 text-5xl text-white font-bold bg-red-600 text-center'>
        Checkout
      </h2>
      <div className='max-w-[1140px] px-4 py-12 mx-auto'>
        <div className='flex   space-x-7 '>
          <div className='flex items-center font-medium  gap-4'>
            <p className='text-xl'>Returning Customer</p>
            <NavLink>
              <button className='underline'>Login Here</button>
            </NavLink>
          </div>
          <div className='flex items-center gap-4'>
            <p className='text-xl'>Don't Have account</p>
            <NavLink>
              <button className='underline'>Signup Here</button>
            </NavLink>
          </div>
        </div>
        <div className='flex justify-center mt-10 items-center '>
          <div className='w-[60%]  shadow-xl px-4 my-4  py-4'>
            <h2 className='text-xl font-bold mb-4 border-b-2 pb-2'>
              Billing Details
            </h2>
            <form className='space-y-4 mt'>
              <label className='mt-1 font-bold block'>First Name</label>
              <input
                className='px-4 py-3 border-2 border-gray-100 w-full'
                type={"text"}
              />

              <label className='mt-1 font-bold block'>Last Name</label>
              <input
                className='px-4 py-3 border-2 border-gray-100 w-full'
                type={"text"}
              />
              <label className='mt-1 font-bold block'>
                Select Your Region/Country
              </label>
              <Select
                className='px-4 py-2 border-2 border-gray-100 w-full'
                options={options}
                value={value}
                onChange={changeHandler}
              />
              <label className='mt-1 font-bold block'>Street address </label>
              <input
                className='px-4 py-3 border-2 border-gray-100 w-full'
                type={"text"}
                placeholder='House number and street name'
              />
              <label className='mt-1 font-bold block'>Town / City </label>
              <input
                className='px-4 py-3 border-2 border-gray-100 w-full'
                type={"text"}
              />
              <label className='mt-1 font-bold block'>Postcode / ZIP </label>
              <input
                className='px-4 py-3 border-2 border-gray-100 w-full'
                type={"text"}
              />
              <label className='mt-1 font-bold block'>Phone #</label>
              <input
                className='px-4 py-3 border-2 border-gray-100 w-full'
                type='number'
              />
            </form>
          </div>
          <div className='w-[30%]'></div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
