import React from "react";
import Hero from "./Hero";
import NewArrival from "./NewArrival";
import Whyus from "./Whyus";
import Subscribe from "./Subscribe";
import Testimonial from "./Testimonial";
import Products from "../productpage/Products";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Whyus />
      <NewArrival />
      <Products />
      <Subscribe />
      <Testimonial />
    </>
  );
};

export default Homepage;
