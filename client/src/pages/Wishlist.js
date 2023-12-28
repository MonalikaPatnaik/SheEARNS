import React,{useState,useEffect} from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import Wishcard from "../components/Wishcard";
import { useAuth0 } from "@auth0/auth0-react";
import '../components/Wishcard.css'
const Wishlist = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [data,setData]=useState();
  const [show,setShow]=useState(true);
  useEffect(() => {
    
    fetch(`http://localhost:4000/getWishAll?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
       setData(data);
        
      });
  }, []);


  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
     <h1 className="list-header">Favourites</h1>
    
     <h1 style={{'margin':'10vh 0 5vh 10vh'}}>Shops</h1>
     <input type="search" style={{'margin':'0 7vh'}}/>
     <div className="wishcard-outer-box">
     {data && data.shops.map((shop)=>(
      <Wishcard name={shop.name} img={shop.image} description={shop.description} id={shop.shopid}/>
     
     ))}
     
   
    
     
     </div>
     
    
     <h1 style={{'margin':'10vh 0 5vh 10vh'}}>Items</h1>
     <div className="wishcard-outer-box">
     <h1 style={{'textAlign':'center','margin':'5vh auto', 'color':'red'}}>No Items present</h1>
     
     </div>

    </>
  );
     
};

export default Wishlist;