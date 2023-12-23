import React from "react";

import SpecialProduct from "../components/SpecialProduct";
import ImageSlider, { Slide } from "react-auto-image-slider";
import Container from "../components/Container";


const Home = () => {
  return (
    <>
      <Container class1="special-wrapper py-5 home-wrapper-2">
     <div style={{"display":"flex" , "alignItems":"center","margin":"3vh 0"}}>
      <h1>Explore Shops</h1>
      <div><input className="search-location" type='search' placeholder="Search by location"/>
      <button type="button" style={{"backgroundColor":"rgb(37, 220, 77)", "color":"white","padding":"0.8rem","margin-bottom":"5px"}} class="btn" data-mdb-ripple-init>
    <i class="fas fa-location"></i>
  </button></div>
      
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