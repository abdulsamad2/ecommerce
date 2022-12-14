import Products from "./Products";

import React from "react";

const Productpage = () => {
  return (
    <div>
      <h2 className='py-8 text-5xl text-white font-bold bg-red-600 text-center'>
        Product Grid
      </h2>
      <Products />
    </div>
  );
};

export default Productpage;
