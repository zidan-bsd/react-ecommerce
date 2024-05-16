import { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../datas/Product";
import Filter from "./Filter";

const ProductListComponent = () => {
  const [filterView, setFilterView] = useState(false);

  const toggleFilterView = () => {
    setFilterView(!filterView);
  };

  return (
    <div className="">
      {/* Mobile View Close Filter */}
      {filterView && (
        <div className=" hidden max-lg:block fixed top-3 right-3 z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            onClick={toggleFilterView}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      )}
      {/* Mobile View Filter */}
      {filterView && <Filter />}
      {/* Header Product List */}
      <div className="flex w-full lg:hidden justify-between items-center py-4 px-5">
        {/* Search */}
        <div className="flex relative w-5/12 max-lg:w-full mr-5 h-10">
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
        <div className="flex items-center max-lg:justify-end justify-between ">
          <div className="" onClick={toggleFilterView}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          </div>
        </div>
      </div>
      <main className="flex flex-col lg:flex-row gap-4 lg:gap-6 p-4 md:p-6">
        <aside
          style={{ minHeight: "31rem", height: "100%" }}
          className="w-full max-lg:hidden sticky top-3 bg-Secondary-clr p-3 rounded-lg lg:w-64 shadow-md"
        >
          <Filter />
        </aside>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {Product.map((item) => (
            <Link key={item.name} to="/product">
              <div className="relative rounded-lg overflow-hidden p-2 shadow-md bg-Secondary-clr cursor-pointer">
                <img
                  alt=""
                  className="w-full h-42 object-cover rounded-xl transition-transform duration-500 hover:scale-x-[-1]"
                  src={item.img}
                  style={{
                    objectFit: "cover",
                  }}
                />
                <div className="p-2">
                  <h3 className="text-lg font-medium text-Font-accent-clr">
                    {item.category}
                  </h3>
                  <h3 className="text-lg text-Font-gray-clr font-semibold">
                    {item.name}
                  </h3>
                  <div className="mt-4 flex justify-between items-center">
                    <p className=" font-bold">${item.price}</p>
                    <h3 className="text-lg text-Font-gray-clr flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 fill-Accent-clr mr-1"
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
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductListComponent;
