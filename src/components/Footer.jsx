import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className='bg-stone-100 py-14'>
      <footer className='max-w-[1140px] space-y-14 md:space-y-0 px-4 items-center flex-col md:flex-row flex justify-between md:mx-auto'>
        {/* Fist Col */}
        <div className='space-y-4'>
          <img
            className='w-52'
            src={logo}
            alt=''
          />

          <p className='md:max-w-xs'>
            <span className='font-bold uppercase mr-2 '>Address:</span>
            7532 High Point Dr. Lawrenceville, GA 30043
          </p>
          <p>
            <span className='font-bold uppercase mr-2'>TELEPHONE:</span>
            +92 987 654 3210
          </p>
          <p>
            <span className='font-bold uppercase mr-2'>EMAIL:</span>
            yourmain@gmail.com
          </p>
        </div>
        {/* Col-2 */}
        <div className='flex w-full md:w-auto space-x-20'>
          <div className='space-y-3  '>
            <h2 className='font-bold'>MENU</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className='space-y-3 '>
            <h2 className='font-bold'>ACCOUNT</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>

        <div className='space-y-3 ml-4 w-full md:w-auto md:pl-24 '>
          <h2 className='font-bold'>
            <div className='space-y-3 '>
              <h2 className='font-bold'>NEWSLETTER</h2>
            </div>
          </h2>
          <p className='max-w-xs'>
            Subscribe by our newsletter and get update protidin.
          </p>
          <div className='border-2 border-gray-200'>
            <input
              className='py-3 w-full md:w-auto px-2  '
              type='email'
              placeholder='Enter You Mail'
            />
            <button className='bg-red-600 mt-4 md:mt-0 py-3 px-4 text-white'>
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
