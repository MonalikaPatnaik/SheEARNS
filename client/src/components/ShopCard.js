import React from 'react'
import ReactStars from "react-rating-stars-component";
import "./ShopCard.css"
import { NavLink } from 'react-router-dom';
const ShopCard = (props) => {
    const{imgurl,title,value,id,category}=props;
  return (
   
      <div className='shop-box col-md-3 m-4 rounded mb-20 shadow-lg shadow-blue-gray-400 h-fit'>
    
        <img src={imgurl} className='img-fluid rounded-top w-100 ' role="button" />

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
