import React from "react";
import product1 from "../images/p1.png";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { actions } from "../store/CartSlice";

const OffMenuList = (props) => {
  const { productId, productImage, productPrice, productTitle } = props;
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      actions.addToCart({
        productId,
        productImage,
        productPrice,
        productTitle,
      })
    );
  };
  const removeFromCartHandler = () => {
    console.log("it seems working");
    dispatch(actions.removeFromCart(productId));
  };
  return (
    <div className='py-2 mt-8 px-4 border-2 border-gray-100'>
      <div className='flex items-center justify-around'>
        <div>
          <img
            className='w-10'
            src={props.productImage}></img>
        </div>
        <div className='flex flex-col'>
          <h3 className='text-lg font-bold'>{props.productTitle}</h3>
          <div className='flex items-center gap-2'>
            <p>$ {props.productPrice}</p>
            <p>
              <GrClose size={10} />
            </p>
          </div>
        </div>
        <div className='flex gap-4'>
          <button
            onClick={removeFromCartHandler}
            className=' w-4 text bg-gray-100'>
            -
          </button>
          <p>{props.productQuantity}</p>
          <button
            onClick={addToCartHandler}
            className=' w-4 bg-gray-100'>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default OffMenuList;
