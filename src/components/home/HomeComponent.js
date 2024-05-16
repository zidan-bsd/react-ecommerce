import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ProductBest, ProductNewArrival } from "../../datas/Product";

import "swiper/css";
import "swiper/swiper-bundle.css";

import Coats from "../../assets/icon categories/CoatsOrJackets.png";
import Jeans from "../../assets/icon categories/Jeans.png";
import Accessories from "../../assets/icon categories/Necklaces.png";
import Sneakers from "../../assets/icon categories/Sneakers.png";

import Banner1 from "../../assets/banners/Banner-1.png";
import Banner2 from "../../assets/banners/Banner-2.png";
import Banner3 from "../../assets/banners/Banner-3.png";

const IconCategories = [
  {
    name: "Coats",
    img: Coats,
  },
  {
    name: "Sneakers",
    img: Sneakers,
  },
  {
    name: "Accessories",
    img: Accessories,
  },
  {
    name: "Jeans",
    img: Jeans,
  },
];

const HomeComponent = () => {
  return (
    <div className="">
      {/* Banner */}
      <div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
          }}
          loop={true}
          className=" w-full "
        >
          <SwiperSlide className="relative rounded-xl overflow-hidden">
            <Link to="/product-list">
              <img src={Banner1} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className=" rounded-xl overflow-hidden">
            <Link to="/product-list">
              <img src={Banner2} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className=" rounded-xl overflow-hidden">
            <Link to="/product-list">
              <img src={Banner3} alt="" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Category Selection */}
      <div className=" my-10 w-full">
        <div className="grid grid-cols-4 max-moremini:grid-cols-1 max-sm:grid-cols-2 max-sm:px-4 gap-4 px-20">
          {IconCategories.map((item) => (
            <Link key={item.name} to="/product-list">
              <div className="bg-Secondary-2-clr rounded-lg cursor-pointer p-4 h-40 flex flex-col justify-between items-center">
                <img
                  src={item.img}
                  alt={item.img}
                  className=" w-20 h-20 inline-block"
                />
                <p className=" font-medium text-Font-gray-clr">{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Our Best Sellers */}
      <div className="w-full px-5 mb-10">
        <div className="flex justify-between items-center mb-6">
          <p className=" text-3xl font-medium">Our Bestsellers</p>
          <Link to="/product-list" className="flex">
            <p className="mr-2 hover:text-Font-accent-clr">Shop All Products</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-Font-clr"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>
        <div className="w-full">
          <Swiper
            // slidesPerView={1}
            spaceBetween={30}
            loop={true}
            className=""
            breakpoints={{
              1024: {
                slidesPerView: 5,
              },
              768: {
                slidesPerView: 4,
              },
              602: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
          >
            {ProductBest.map((item, index) => (
              <SwiperSlide
                key={index}
                className="bg-Secondary-clr relative rounded-2xl cursor-pointer"
                style={{
                  width: "300px",
                }}
              >
                <Link to="/product">
                  <div className=" p-3">
                    <img
                      src={item.img}
                      alt="Product 1"
                      className="h-full w-full object-contain rounded-lg transition-transform duration-500 hover:scale-x-[-1]"
                    />
                  </div>
                  <div className="h-full px-3 pb-3">
                    <h3 className="text-lg font-medium text-Font-accent-clr">
                      {item.category}
                    </h3>
                    <h3 className="text-lg font-bold text-Font-gray-clr">
                      {item.name}
                    </h3>
                    <div className="flex justify-between">
                      <h4 className="flex text-lg font-bold text-Font-clr">
                        <p className="text-Font-gray-clr line-through">
                          ${item.price}
                        </p>
                        <span className="ml-1 decoration-solid">
                          ${item.PriceDisc}
                        </span>
                      </h4>
                      <h3 className="text-lg font-bold text-Font-gray-clr flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 fill-Accent-clr"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                          />
                        </svg>
                        {item.rating}
                      </h3>
                    </div>
                    <div className=" bg-Accent-clr rounded-lg w-12 h-7 flex items-center justify-center absolute top-2 left-2">
                      <p className="font-medium">{item.percentage}</p>
                    </div>
                    <div className=" w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18px"
                        className="fill-gray-800 inline-block hover:fill-Accent-clr"
                        viewBox="0 0 64 64"
                      >
                        <path
                          d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* New Arrival */}
      <div className="w-full px-5 mb-10">
        <div className="flex justify-between items-center mb-6">
          <p className=" text-3xl font-medium">New Arrival</p>
          <Link to="/product-list" className="flex">
            <p className="mr-2 hover:text-Font-accent-clr">Shop All Products</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-Font-clr"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>
        <div className="w-full grid grid-cols-4 max-lg:grid-cols-2 max-smish:grid-cols-1 gap-y-10 gap-x-6 max-smish:gap-y-3">
          {ProductNewArrival.map((item) => (
            <Link key={item.name} to="/product-list">
              <div className=" bg-Secondary-clr shadow-md rounded-xl items-center flex overflow-hidden cursor-pointer">
                <div className="w-24 h-24 mr-2 shrink-0 bg-gray-100 p-2 overflow-hidden aspect-w-16 aspect-h-8 rounded">
                  <img
                    src={item.img}
                    alt="product1"
                    className="h-full w-full object-contain rounded-xl"
                  />
                </div>
                <div>
                  <h3 className=" text-lg font-bold text-Font-gray-clr">
                    {item.name}
                  </h3>
                  <h4 className="text-lg text-blue-600 font-bold mt-1">
                    {item.price}
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Banner Section */}
      <div className=" bg-Secondary-2-clr p-6">
        <div className="container mx-auto flex flex-col justify-center items-center">
          <h2 className="text-white text-3xl font-bold mb-4">
            Discover Our New Collection
          </h2>
          <p className="text-white text-base text-center mb-6">
            Elevate your style with our latest arrivals. Shop now and enjoy
            exclusive discounts!
          </p>
          <p className="bg-Dark-clr text-sm text-Font-white-clr cursor-pointer font-semibold py-2 px-6 rounded hover:bg-slate-100">
            Shop Now
          </p>
        </div>
      </div>
      <div className=" lg:max-w-[50%] mx-auto text-center mt-10">
        <h3 className="text-3xl font-bold text-gray-800">Newsletter</h3>
        <p className="text-sm mt-6 text-gray-500">
          Subscribe to our newsletter and stay up to date with the latest news,
          updates, and exclusive offers. Get valuable insights. Join our
          community today!
        </p>

        <div className=" bg-Secondary-clr flex px-2 py-1.5 rounded-full text-left mt-10">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full outline-none bg-Secondary-clr text-sm pl-4"
          />
          <button
            type="button"
            className=" bg-Dark-clr text-Font-white-clr text-sm rounded-full px-5 py-2.5 ml-4 transition-all"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
