import React, { useEffect,useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getShop } from "../actions/shopActions";
import Loader from "./Loader";

const SpecialProduct = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 10,
      behavior: 'smooth'
    });
  }
  const { keyword } = useParams();
  const { location } = useParams();
  const dispatch = useDispatch();
  const { shops, loading, error } = useSelector((state) => state.shops);

  useEffect(() => {
    dispatch(getShop(keyword));
  }, [dispatch]);
  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowButton(true);
      }else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
  },[])

  return (
    <>
      {loading && <Loader />}
      <div className="row">
        {shops &&
          shops.map((shop) => (
            <div key={shop._id} className="col-6 mb-3">
              <div className="special-product-card">
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
              </div>
            </div>
          ))}
          <div className="Scroll2top">
          {showButton && (
            <button className="Scroll2topBtn" onClick={scrollTop}>
              Back to Top
            </button>
          )}
          </div>
      </div>
    </>
  );
};

export default SpecialProduct;
