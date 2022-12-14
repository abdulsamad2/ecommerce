import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/OffSlice";
import OffMenuList from "./OffMenuList";
import { GrClose } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const OffCanvas = (props) => {
  let subTotal;
  const cartMenu = useSelector((state) => state.OffSlice.cartMenu);
  const cartItem = useSelector((state) => state.cart.items);

  const element = cartItem.map((item) => {
    return (
      <OffMenuList
        key={item.productId}
        productTitle={item.productTitle}
        productPrice={item.productPrice}
        productImage={item.productImage}
        productQuantity={item.quantity}
        productId={item.productId}
      />
    );
  });
  if (cartItem.length > 0) {
    subTotal = cartItem
      .map((item) => item.totalPrice)
      .reduce((acc, curValue) => acc + curValue, 0);
  }
  const dispatch = useDispatch();
  const sideCardHandler = () => {
    dispatch(actions.ToggleMenu());
  };

  const show = cartMenu ? "traslate-x-[0px]" : "translate-x-[999px]";
  return (
    <div
      className={`${show} fixed duration-300 flex flex-col  w-10/12 md:w-1/4 ease-in-out border-l-2 border-t-2 border-black/10 right-0  top-0 h-screen bg-white z-40`}>
      {/* icon */}
      <div
        onClick={sideCardHandler}
        className='p-4 mt-4 shadow-xl w-12 h-12 rounded-full -ml-16 bg-gray-200 '>
        <GrClose size={20} />
      </div>
      {/* main Content */}
      <div className='px-4 '>
        <div className='flex -mt-10 gap-4 justify-center'>
          <AiOutlineShoppingCart size={30} />
          <p className='font-bold text-lg'>Shopping Cart</p>
        </div>
        {/* cart items list */}
        {element.length === 0 ? (
          <p className='text-center text-xl font-bold py-4'>
            No Item in the cart
          </p>
        ) : (
          element
        )}
      </div>
      {cartItem.length > 0 ? (
        <div className='mt-auto w-[100%] px-4 mb-10 md:mb-6'>
          <div className='flex justify-between py-4 font-bold text-lg'>
            <p>Subtotal:</p>
            <p>${subTotal}</p>
          </div>
          <NavLink
            onClick={sideCardHandler}
            to={"/checkout"}>
            <button className='bg-red-500 px-6 py-3 font-semibold text-white w-full '>
              Checkout
            </button>
          </NavLink>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default OffCanvas;
