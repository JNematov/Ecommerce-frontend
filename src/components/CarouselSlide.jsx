import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ItemDetails from "./ItemDetails";
import { StyledEngineProvider, CssVarsProvider } from "@mui/joy/styles";

const CarouselSlide = ({ items }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h2> Trending items </h2>
      <Slider {...settings}>
        {items.map((item) => (
          <ItemDetails item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSlide;
