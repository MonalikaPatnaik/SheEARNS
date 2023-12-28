import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../images/2.boyshopping.png'
import del from '../images/delete.png'
import { useAuth0 } from '@auth0/auth0-react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Wishcard = ({img,name,description,id}) => {
  const navigate=useNavigate();
  const {user}=useAuth0();
  const remove=async()=>{
    const res = await fetch(`https://sheearns.onrender.com/deleteWish?email=${user.email}&shopid=${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    
  });
  const data = await res.json();
  if(data=='deleted')
  {
    navigate('/');
    toast.success('Deleted Successfully')
    
  }
  }
  return (
    
      <div className='wish-box'>
        <img className='wish-img' src={img}/>
        <div className='wish-cont'>
        <img className='wish-trash-btn' src={del} onClick={remove}/>
            <p className='wish-cont-head'>{name}</p>
            <p className='wish-cont-desc'>{description}</p>
        </div>
        <button className='wish-btn'>Add to Cart</button>
      </div>
  
  )
}

export default Wishcard
