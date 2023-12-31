import { useState, useEffect } from "react";
import Slider from "react-slick";
import sliderItems from "./mockups/slideritems";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const [images, setImages] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const fetchCarouselImages = () => {
    fetch(
      "https://publish-p127513-e1240269.adobeaemcloud.com/graphql/execute.json/aem-demo-employers/carousel-images",
    )
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        setImages(d.data.carouselElementList.items);
      });
  };

  useEffect(() => {
    fetchCarouselImages();
  }, []);

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.image.path}>
            <div>
              <img src={image.image._publishUrl} width="100%" height="430em" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

{
  /* {sliderItems.map((d) => (
          <div key={d.title} className="">
            <div className="">
              <img src={d.image} alt="" className="slick-image" />
            </div>
          </div>
        ))} */
}
