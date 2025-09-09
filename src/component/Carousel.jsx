import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

// ✅ Next Arrow (Right Side)
function SampleNextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
    >
      <AiOutlineArrowRight className="bg-red-500 hover:bg-red-600 text-white w-10 h-10 p-2 rounded-full shadow-lg transition" />
    </div>
  );
}

// ✅ Prev Arrow (Left Side)
function SamplePrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
    >
      <AiOutlineArrowLeft className="bg-red-500 hover:bg-red-600 text-white w-10 h-10 p-2 rounded-full shadow-lg transition" />
    </div>
  );
}

const Carousel = () => {
  const { data } = useContext(DataContext);

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] px-6 py-12"
          >
            <div className="flex flex-col md:flex-row gap-10 justify-center items-center h-[600px]">
              {/* Left Content */}
              <div className="space-y-6 text-center md:text-left">
                <h3 className="text-red-500 font-semibold text-sm uppercase">
                  Powering Your World with the Best in Electronics
                </h3>
                <h1 className="text-4xl md:text-5xl font-bold uppercase md:w-[500px] text-white">
                  {item.title}
                </h1>
                <p className="md:w-[500px] text-gray-300 line-clamp-3">
                  {item.description}
                </p>
                <button className="bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600 text-white px-5 py-3 rounded-lg shadow-lg transition">
                  Shop Now
                </button>
              </div>

              {/* Right Image */}
              <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px] mx-auto group perspective-1000">
                <div className="w-full h-full rounded-full overflow-hidden transform transition-transform duration-500 group-hover:rotate-y-12 group-hover:scale-105 shadow-2xl shadow-red-400">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlay Text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-60 bg-black bg-opacity-40 transition-opacity duration-500 rounded-full">
                  <p className="text-white text-xl font-semibold">{item.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
