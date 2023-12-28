import React from "react";

import SpecialProduct from "../components/SpecialProduct";
import ImageSlider, { Slide } from "react-auto-image-slider";
import Container from "../components/Container";
import CardBanner from "../components/CardBanner";

import img1 from '../images/B1.webp';
import img2 from '../images/B2.png';
import img3 from '../images/B3.jpeg';
import img4 from '../images/B4.webp';
import img5 from '../images/B5.jpg';
import img6 from '../images/B6.jpg';
import img7 from '../images/B7.jpg';

const Home = () => {

  const bannerData = [
    {
      title: "Empowering Homepreneurs",
      description: 'Explore and support the inspiring stories and creations of women entrepreneurs working from home.',
      image: img1,
    },
    {
      title: 'Artistry Unveiled',
      description: 'Discover and support local women crafting unique handmade and artisanal products.',
      image: img2,
    },
    {
      title: 'Women Supporting Women',
      description: "Dive into the vibrant SheEarns community where women uplift and celebrate each other's businesses.",
      image: img3,
    },
    {
      title: 'Culinary Queens Haven',
      description: 'From homemade delights to gourmet wonders, savor the flavors of local female chefs.',
      image: img4,
    },
    {
      title: 'Green Goddess Creations',
      description: ' Support women entrepreneurs creating eco-friendly products. ',
      image: img5,
    },
    {
      title: 'Tech Brilliance Hub',
      description: 'Explore innovative solutions, apps, and gadgets designed by tech-savvy female entrepreneurs!!!',
      image: img6,
    },
    {
      title: 'Mindful Motherhood Treasures',
      description: ' Discover products and Support women-owned businesses catering to the unique needs of moms and families.',
      image: img7,
    },
  ];

  return (
    <>
      <Container class1="special-wrapper py-5 home-wrapper-2">
      <CardBanner data={bannerData} />
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