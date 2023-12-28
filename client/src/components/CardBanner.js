import React, { Component } from "react";
import Slider from "react-slick";
import './CardBanner.css';


class CardBanner extends Component {
  render() {
    const { data } = this.props;

    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
      responsive: [
        {
          breakpoint: 1190,
          settings: {
            slidesToShow: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
  };
    return (
      <div style={{marginTop:25}}>
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} style={{marginTop:20}}>
              <div className="card-item" style={{marginLeft:10}}>

              <img
                src={item.image}
                
                alt={`Item ${index + 1}`}
                className="card-image"
                />            
                <div className="title">{item.title}</div>
                <div className="description">{item.description}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default CardBanner;
