import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Navbar from './Navbar';
import img1 from '../images/B1.webp';
import img2 from '../images/B2.png';
import img3 from '../images/B3.jpeg';
import img4 from '../images/B4.webp';
import img5 from '../images/B5.jpg';
import img6 from '../images/B6.jpg';
import img7 from '../images/B7.jpg';
import { motion } from "framer-motion";
import CardBanner from "./CardBanner"
const Layout = () => {
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
      <Navbar/>
      <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
      <CardBanner data={bannerData} />
      </motion.div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;