import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"
import ExploreProducts from "./pages/ExploreProducts";
import OpenStore from "./pages/OpenStore";
import CreateItem from "./pages/CreateItem";
import ErrorPage from "./components/ErrorPage";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FAQ from "./pages/FAQ";



// import SingleBlog from "./pages/SingleBlog
import Wishlist from "./pages/Wishlist";

import UserProfile from "./components/UserProfile"

import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermAndCondition from "./pages/TermAndCondition";
import SingleProduct from "./pages/SingleProduct";
import Checkout from "./pages/Checkout";
import Blog from "./pages/Blogs"
import SpecialProduct from "./components/SpecialProduct";

import CreateStore from "./pages/CreateStore";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
 
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="/shops/:keyword" element={<SpecialProduct/>}/>
            <Route path="/shops/:location" element={<SpecialProduct/>}/>

            <Route path="/contact" element={<Contact/>}/>
            <Route path="openStore" element={<OpenStore/>}/>


            <Route path="items/:id" element={<ExploreProducts />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
           
           <Route path="createItems"element={<CreateItem/>}></Route>
            
            <Route path="checkout" element={<Checkout />} />
            
            <Route path="wishlist" element={<Wishlist />} />
           
            <Route path="createStore" element={<CreateStore/>} />
            <Route path="account" element={<UserProfile/>} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="term-conditions" element={<TermAndCondition />} />

            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="faq" element={<FAQ />} />

            <Route path="blog/:id" element={<SingleBlog />} />


          </Route>
          <Route path="/*" element={<ErrorPage/>}>

          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </>
  );
}

export default App;
