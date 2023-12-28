import React, { useState,useEffect } from 'react'
import ReactStars from "react-rating-stars-component";
import "./ShopCard.css"
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink, useNavigate } from 'react-router-dom';
import heart from '../images/heart.png';
import heartfill from '../images/heartfill.png';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ShopCard = (props) => {
  const navigate=useNavigate();
    const{imgurl,title,value,id,category,desc,shopwish}=props;
     const { user, isAuthenticated, isLoading,loginWithRedirect } = useAuth0();
  //console.log(shopwish);
    const [wish,setWish]=useState(false);
    const [descr,setdescr]=useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas in urna suscipit rutrum. Morbi porttitor diam vel elit hendrerit feugiat id ut est. Nullam porttitor condimentum tempor. Cras mollis.");
    const [shop,setShop]=useState();
    // console.log(shopwish);
// useEffect(()=>{
//   shopwish.map((shop)=>{
//     if(shop.shopid==id)
//     {
//       setWish(true);
//     }
//   })
// })
    const handleWish=async(e)=>{
      if(!isAuthenticated) {
        loginWithRedirect();
        return;
      }
 
      if(desc)
    {
      setdescr(desc);
    }
    setWish(true);
    setTimeout(async()=>{
      const res=await fetch(`http://localhost:4000/addWish?email=${user.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify({shops:[{name:title,shopid:id,category:category,image:imgurl,description:descr}]})
      })
      const data=await res.json();

      if(data.message=="New Wish created"|| data.message=="Wish Updated")
      { 
          toast.success('Added to Wishlist');
          navigate('/wishlist')
      }
    },1000)
      
    }
    const removeWish=()=>{
      setWish(false);
    }
  return (
   
      <div className='shop-box col-md-3 m-4 rounded mb-20 shadow-lg shadow-blue-gray-400 h-fit'>
       {!wish?<img className='wish-icon-shopcard' src={heart} onClick={handleWish}/>:<img className='wish-icon-shopcard' src={heartfill} onClick={removeWish}/>}
        <img src={imgurl} className='img-fluid rounded-top w-100 shop-img' role="button" />
     
    <div className='rounded-b-md '>
       <div className='shop-card-top-flexbox'>  <p className='shop-card-title'>{title}</p>
       <div className='px-2'>
       <ReactStars
                      count={5}
                      size={24}
                      value={value}
                      edit={false}
                      activeColor="#ffd700"
                      
                    />
       </div>
       
        </div>
      
        <p className='text-17px mx-2 font-medium'><i>{category}</i></p>
        <NavLink to={`/items/${id}`} className="w-100"> 
        <button onClick={4} className='btn btn-dark text-xl text-white w-100 mx-auto block mt-2 p-2'>
            <span className='inline-block text-center '>View Shop</span>
        </button></NavLink>
        
    </div>


    </div>
  )
}

export default ShopCard
