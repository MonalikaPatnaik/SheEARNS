import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getShop } from "../actions/shopActions";
import Loader from "./Loader";

const SpecialProduct = () => {
  const { keyword } = useParams();
  const { location } = useParams();
  const dispatch = useDispatch();
  const { shops, loading, error } = useSelector((state) => state.shops);

  useEffect(() => {
    dispatch(getShop(keyword));
  }, [dispatch]);

  return (
    <>
      {loading && <Loader />}
      <div className="row">
        {shops &&
          shops.map((shop) => (
            <div key={shop._id} className="col-6 mb-3">
              <div className="special-product-card">
                <div className="row">
                  <div className="sm-row col-md-5 prod-image">
                    <img src={shop.image} alt="watch" />
                  </div>
                  <div className="sm-row col-md-7">
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
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default SpecialProduct;
