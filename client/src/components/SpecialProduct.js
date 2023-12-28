import React, { useEffect,useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getShop } from "../actions/shopActions";
import Loader from "./Loader";
import ShopCard from "./ShopCard";
import { useAuth0 } from '@auth0/auth0-react';
const SpecialProduct = () => {

  const { keyword } = useParams();
  const { location } = useParams();
  const dispatch = useDispatch();
  const { shops, loading, error } = useSelector((state) => state.shops);

  useEffect(() => {
    dispatch(getShop(keyword));
  }, [dispatch]);

  const { user, isAuthenticated, isLoading } = useAuth0();
  const [data,setData]=useState();
    // useEffect(() => {
      
    //   fetch(`http://localhost:4000/getWishAll?email=${user.email}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       // setLoading(false);
    //       // setDetails(data);
    //       // setContact(data.contact);
    //       // setAbout(data.about);
    //       setData(data);
          
    //     });
    // }, []);

  return (
    <>
      {loading && <Loader />}
      <div   style={{"display":"flex", "flexWrap":"wrap", "justifyContent":"space-between"}}>
        {shops && 
          shops.map((shop) => (
            
            <>
            <ShopCard imgurl={shop.image} title={shop.name} value={4} id={shop._id} category={shop.category} shopWish={data}/>
              {/* <div className="special-product-card">
                <div className="d-flex justify-content-between">
                  <div className="prod-image">
                    <img src={shop.image} className="img-fluid" alt="watch" />
                  </div>
                  <div className="special-product-content">
                    <h5 className="brand"></h5>
                    <h6 className="title">{shop.name}</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />

                    <div className="discount-till d-flex align-items-center gap-10"></div>
                    <div className="prod-count my-3">
                      <p>{shop.category}</p>
                    </div>
                    <Link to={`/items/${shop._id}`} className="button">
                      View Shop
                    </Link>
                  </div>
                </div>
              </div> */}
            </>
          ))}

      </div>
    </>
  );
};

export default SpecialProduct;