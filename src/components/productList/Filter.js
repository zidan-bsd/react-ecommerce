import { useState } from "react";

const Filter = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const cate = [
    {
      categories: "Clothes",
      a: "Shirt",
      b: "Short",
      c: "Jacket",
      d: "Dress",
    },
    {
      categories: "Footwear",
      a: "Sport",
      b: "Formal",
      c: "Casual",
      d: "Shoes",
    },
    {
      categories: "Jewelry",
      a: "Earrings",
      b: "Couple Rings",
      c: "Necklace",
    },
    {
      categories: "Bags",
      a: "Gym Bags",
      b: "Purse",
      c: "Wallet",
    },
  ];

  return (
    <div className=" max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:z-10 max-lg:bg-Secondary-clr max-lg:py-3 max-lg:px-5 max-lg:h-screen ">
      {/* Categories */}
      <div className="mt-3 mb-3 max-lg:mt-4">
        <p className=" font-bold my-2 text-2xl text-Font-gray-clr">
          Categories
        </p>
        <div className=" px-2">
          {cate.map((faq, index) => (
            <div key={index}>
              <div
                className="flex justify-between items-center bg-gray-100 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-lg text-Font-gray-light-clr">
                  {faq.categories}
                </h3>
                <span className="font-semibold text-lg text-Font-gray-light-clr">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <div className="p-2 pl-4">
                  <p className=" text-Font-gray-light-clr font-medium cursor-pointer hover:text-Font-clr">
                    {faq.a}
                  </p>
                  <p className=" text-Font-gray-light-clr font-medium cursor-pointer hover:text-Font-clr">
                    {faq.b}
                  </p>
                  <p className=" text-Font-gray-light-clr font-medium cursor-pointer hover:text-Font-clr">
                    {faq.c}
                  </p>
                  <p className=" text-Font-gray-light-clr font-medium cursor-pointer hover:text-Font-clr">
                    {faq.d}
                  </p>
                  <p className=" text-Font-gray-light-clr font-medium cursor-pointer hover:text-Font-clr">
                    {faq.e}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Price */}
      <div className="mt-6 mb-3">
        <h3 className="font-bold my-2 text-2xl text-Font-gray-clr">Price</h3>
        <div>
          <div className="flex w-full items-center">
            <input className=" w-full" type="range" name="" id="" />
          </div>
          <div className="flex justify-between items-center mt-2">
            <input
              className=" w-20 py-2 px-4 rounded-md"
              type="text"
              placeholder="$"
            />
            <input
              className=" w-20 py-2 px-4 rounded-md"
              type="text"
              placeholder="$"
            />
          </div>
        </div>
      </div>
      {/* Color */}
      <div>
        <h3 className="font-bold mt-6 mb-3 text-2xl text-Font-gray-clr">
          Color
        </h3>
        <div className="grid grid-cols-5 gap-2">
          <div className="cursor-pointer w-8 h-8 bg-Black-clr rounded-full"></div>
          <div className="cursor-pointer w-8 h-8 bg-Gray-clr rounded-full"></div>
          <div className="cursor-pointer w-8 h-8 bg-Orange-clr rounded-full"></div>
          <div className="cursor-pointer w-8 h-8 bg-Pink-clr rounded-full"></div>
          <div className="cursor-pointer w-8 h-8 bg-Green-clr rounded-full"></div>
          <div className="cursor-pointer w-8 h-8 bg-Brown-clr rounded-full"></div>
          <div className="cursor-pointer w-8 h-8 bg-Blue-clr rounded-full"></div>
          <div className="cursor-pointer w-8 h-8 bg-Red-clr rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
