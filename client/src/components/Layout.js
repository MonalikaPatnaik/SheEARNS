import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Navbar from './Navbar';
// import img1 from '../images/B1.webp';
// import img2 from '../images/B2.png';
// import img3 from '../images/B3.jpeg';
// import img4 from '../images/B4.webp';
// import img5 from '../images/B5.jpg';
// import img6 from '../images/B6.jpg';
// import img7 from '../images/B7.jpg';
import { motion } from "framer-motion";
import CardBanner from "./CardBanner"
const Layout = () => {
  
  return (
    <>
      <Navbar/>
      <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
      {/* <CardBanner data={bannerData} /> */}
      </motion.div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;