import React from "react";
import Nav from "../HomeComponent/Nav/Nav";
import Hero from "../HomeComponent/Hero/Hero";
import Product from "../HomeComponent/Product/Product";
import Service from "../HomeComponent/Service/Service";
import Testimonial from "../HomeComponent/Testimonial/Testimonial";
import Newsletter from "../HomeComponent/Newsletter/Newsletter";
import Footer from "../HomeComponent/Footer/Footer";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Product />
      <Service />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
