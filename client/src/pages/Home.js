import React from "react";

import SpecialProduct from "../components/SpecialProduct";
import ImageSlider, { Slide } from "react-auto-image-slider";
import Container from "../components/Container";


const Home = () => {
  return (
    <>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h1>Explore Shops</h1>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          {/* <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct /> */}
        </div>
      </Container>
     
    </>
  );
};

export default Home;