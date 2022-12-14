import React from "react";

const TestiCrousel = (props) => {
  return (
    <div
      id='testi'
      className={`mx-auto flex flex-col items-center justify-center text-center ${props.className} space-y-2`}>
      <img
        className='w-48 h-48 object-cover mx-auto rounded-full'
        src='https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'></img>

      <div className='font-bold'>
        <p>Anna Trevor</p>
        <p>Customer</p>
      </div>
      <p className='max-w-[73%] mx-auto'>
        Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi
        sint unde quis reprehenderit, et, perspiciatis, debitis totam est
        deserunt eius officiis ipsum ducimus ad labore modi voluptatibus
        accusantium sapiente nam! Quaerat.
      </p>
    </div>
  );
};

export default TestiCrousel;
