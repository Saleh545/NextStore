import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Container } from "reactstrap";
import "./carousel.css";

const Carousel = () => {
  const options = {
    loop: true,
    autoplay: 1000,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 1,
      },
    },
  };

  return (
    <div>
      <Container>
        <OwlCarousel className="owl-theme" {...options} nav dots>
          <div class="item">
            <img src="/images/sliderr.png" alt="" />
          </div>{" "}
          <div class="item">
            <img src="/images/slider.jpg" alt="" />
          </div>{" "}
          <div class="item">
            <img src="/images/sliderr.png" alt="" />
          </div>{" "}
          <div class="item">
            <img src="/images/slider.jpg" alt="" />
          </div>{" "}
          <div class="item">
            <img src="/images/sliderr.png" alt="" />
          </div>   <div class="item">
            <img src="/images/slider.jpg" alt="" />
          </div>
        </OwlCarousel>
      </Container>
    </div>
  );
};

export default Carousel;
