import { Link } from "react-router-dom";

import Logo from "../../assets/logo/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col w-full h-20 mb-16 max-lg:mb-10">
      {/* Header Header */}
      <div className=" bg-Dark-clr py-1 flex justify-center items-center">
        <p className="font-bold text-Font-white-clr">
          FREE SHIPPING MIN ORDERS $50+
        </p>
      </div>
      {/* Header Top */}
      <div className="flex w-full justify-between items-center py-4 px-5">
        {/* Logo */}
        <div className="flex max-lg:hidden">
          <Link to="/">
            <img className=" w-24" src={Logo} alt="" />
          </Link>
        </div>
        {/* Search */}
        <div className="flex relative w-5/12 max-lg:w-full h-10">
          <input
            className="w-full border-slate-300 border rounded-md pl-8 pr-3"
            type="search"
            name=""
            placeholder="Search product"
            id=""
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2 fill-slate-300 stroke-Font-clr stroke-slate-600 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        {/* Action */}
        <div className="flex items-center w-40 max-lg:justify-end justify-between ">
          <div className="max-lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer hover:fill-Accent-clr stroke-Font-clr"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
          <div className="max-lg:hidden relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer hover:fill-Accent-clr stroke-Font-clr"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
            <div className="absolute -top-3 -right-2 bg-Accent-clr h-5 w-5  flex items-center justify-center rounded-full">
              <p className=" text-Font-white-clr">1</p>
            </div>
          </div>
          <div className="max-lg:mr-2">
            <Link to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer hover:fill-Accent-clr stroke-Font-clr"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </Link>
          </div>
          <div className="relative max-lg:mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer hover:fill-Accent-clr stroke-Font-clr"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
              />
            </svg>
            <div className="absolute -top-3 -right-2 bg-Accent-clr h-5 w-5  flex items-center justify-center rounded-full">
              <p className=" text-Font-white-clr">4</p>
            </div>
          </div>
        </div>
      </div>
      {/* Header Bottom */}
      <div className="flex justify-center max-lg:hidden">
        <Link to="/">
          <p className="mx-4 font-bold hover:text-Accent-clr cursor-pointer">
            Home
          </p>
        </Link>
        <Link to="/product-list">
          <p className="mx-4 font-bold hover:text-Accent-clr cursor-pointer">
            Collection
          </p>
        </Link>
        <p className="mx-4 font-bold hover:text-Accent-clr cursor-pointer">
          Offers
        </p>
        <p className="mx-4 font-bold hover:text-Accent-clr cursor-pointer">
          Blog
        </p>
      </div>
    </div>
  );
};

export default Header;
