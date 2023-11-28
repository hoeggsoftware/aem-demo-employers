import Slider from "react-slick";
import sliderItems from "./mockups/slideritems";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="slider-container">
        <Slider {...settings}>
          {sliderItems.map((d) => (
            <div
              key={d.title}
              className=""
            >
              <div className="">
                <img src={d.image} alt="" className="slick-image" />
              </div>
            </div>
          ))}
          </Slider>
    </div>
  );
};

export default Carousel;
