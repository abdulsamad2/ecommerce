import React from "react";
import logo from "../images/logo.png";
import OffCanvas from "./OffCanvas";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { actions } from "../store/OffSlice";
const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();
  const sideCardHandler = () => {
    dispatch(actions.ToggleMenu());
  };

  return (
    <div className='bg-white shadow-xl py-6 '>
      <OffCanvas></OffCanvas>
      <nav className='max-w-[1140px] px-4 items-center flex justify-between mx-auto'>
        <div>
          <img
            className='w-48'
            src={logo}
            alt=''
          />
        </div>
        <div className='md:flex relative gap-10 hidden items-center'>
          <ul className='flex gap-10 font-bold text-xl uppercase'>
            <li className='hover:text-orange-600 cursor-pointer'>Home</li>
            <li className='hover:text-orange-600 cursor-pointer'>Products</li>
            <li className='hover:text-orange-600 cursor-pointer'>Blog</li>
            <li className='hover:text-orange-600 cursor-pointer'>Contact</li>
          </ul>
          <div
            onClick={sideCardHandler}
            className='flex gap-10 px-2'>
            <AiOutlineShoppingCart size={20} />
            <span className='absolute  text-center text-white bg-red-600 rounded-full h-4 w-4 -mt-2 ml-3 text-xs'>
              {cartCount}
            </span>

            <AiOutlineSearch size={20} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
