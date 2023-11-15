import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useParams } from "react-router-dom";
import { getItems } from "../actions/itemActions";
import prodcompare from "../images/prodcompare.svg";
// import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";


import Potteryy from "../images/Potteryy.jpg"
import handicraftt from "../images/handicraftt.jpg"
import lehengaa from "../images/lehengaa.jpg"
import bangless from "../images/bangless.jpg"
import flowerss from "../images/flowerss.jpg"
import bakeryy from "../images/bakeryy.jpg"
import woodenItem from "../images/woodenItem.jpg"
import grocery from "../images/grocery.jpg"
import painting from "../images/painting.jpg"




import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = (props) => {
  const { grid } = props;
  console.log(grid);
  let location = useLocation();
  const {id}=useParams();
  console.log(id);
  const dispatch=useDispatch();
  const{loading,error,items}=useSelector(state=>state.items);
  console.log(items);
  useEffect(()=>{
    dispatch(getItems(id))
  },[dispatch,id])
function Buy()
{
  window.location.href="/payment";
}
  return (
    <>
      

{items &&
items.map(item=>(
   
  <div
        className={` ${
          location.pathname == "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link
          to={`${
            location.pathname == "/"
              ? "/product/:id"
              : location.pathname == "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={item.image} alt="wishlist" className="imageShop" />
            </button>
          </div>
          <div className="product-image">
  
          </div>
          <div className="product-details">
            <h6 className="brand">{item.name}</h6>
            <h5 className="product-title">
          
           Stock={item.stock}
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={2.5}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt...
            
            </p>
            <p className="price">Rs{item.price}</p>
            <button className="buyButton button" onClick={Buy}>Buy</button>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>


))}

    </>
  );
};

export default ProductCard;