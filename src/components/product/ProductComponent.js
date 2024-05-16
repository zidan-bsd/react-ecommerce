import { Link } from "react-router-dom";

import product from "../../assets/products/sports-1.jpg";
import product2 from "../../assets/products/sports-2.jpg";
import product3 from "../../assets/products/sports-3.jpg";
import product4 from "../../assets/products/sports-4.jpg";
import product5 from "../../assets/products/sports-5.jpg";

const ProductComponent = () => {
  return (
    <div>
      <div>
        <div className="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="w-full lg:sticky top-0 text-center">
              <div className="lg:h-[460px] rounded-xl flex items-center justify-center">
                <img
                  src={product}
                  alt="Product"
                  className="lg:w-11/12 w-full h-full rounded-xl object-cover object-top"
                />
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-6 justify-center mx-auto mt-4">
                <img
                  src={product2}
                  alt="Product1"
                  className="w-20 cursor-pointer rounded-xl outline"
                />
                <img
                  src={product3}
                  alt="Product2"
                  className="w-20 cursor-pointer rounded-xl border border-Gray-clr hover:outline"
                />
                <img
                  src={product4}
                  alt="Product3"
                  className="w-20 cursor-pointer rounded-xl border border-Gray-clr hover:outline"
                />
                <img
                  src={product5}
                  alt="Product4"
                  className="w-20 cursor-pointer rounded-xl border border-Gray-clr hover:outline"
                />
              </div>
            </div>

            <div className=" bg-Secondary-clr p-6 rounded-xl">
              <div className="flex flex-wrap items-start gap-4">
                <div>
                  <h2 className="text-2xl font-extrabold ">
                    Air Bakers X3 | Sneakers
                  </h2>
                  <p className="text-sm text-Font-gray-clr mt-2">
                    Well-Versed Commerce
                  </p>
                </div>
              </div>

              <div className=" my-6 flex flex-wrap gap-4 items-start">
                <div>
                  <p className=" text-4xl font-bold">$30</p>
                  <p className="text-xl mt-1">
                    <strike>$42</strike>{" "}
                    <span className="text-sm text-Font-gray-clr ml-1">
                      Tax included
                    </span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold">Choose a Size</h3>
                <div className="flex flex-wrap gap-4 mt-4">
                  <button
                    type="button"
                    className="w-12 h-12 border-2 hover:border-Dark-clr border-Gray-clr font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                  >
                    SM
                  </button>
                  <button
                    type="button"
                    className="w-12 h-12 border-2 hover:border-Dark-clr font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                  >
                    MD
                  </button>
                  <button
                    type="button"
                    className="w-12 h-12 border-2 hover:border-Dark-clr border-Gray-clr font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                  >
                    LG
                  </button>
                  <button
                    type="button"
                    className="w-12 h-12 border-2 hover:border-Dark-clr border-Gray-clr font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                  >
                    XL
                  </button>
                </div>
              </div>

              <div className="mt-6 mb-12">
                <h3 className="text-lg font-bold text-gray-800">
                  Choose a Color
                </h3>
                <div className="flex flex-wrap gap-4 mt-4">
                  <button
                    type="button"
                    className="w-12 h-12 bg-Black-clr border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                  ></button>
                  <button
                    type="button"
                    className="w-12 h-12 bg-Gray-clr border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                  ></button>
                  <button
                    type="button"
                    className="w-12 h-12 bg-Orange-clr border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                  ></button>
                  <button
                    type="button"
                    className="w-12 h-12 bg-Pink-clr border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                  ></button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/cart">
                  <button
                    type="button"
                    className="min-w-[200px] px-4 py-2.5 border bg-Dark-clr text-Font-white-clr hover:bg-Secondary-clr hover:text-Font-clr text-sm font-semibold rounded"
                  >
                    Add to cart
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-24 max-w-4xl">
            <ul className="flex border-b">
              <li className="text-gray-800 font-bold text-sm bg-gray-100 py-3 px-8 border-b-2 border-gray-800 cursor-pointer transition-all">
                Description
              </li>
              <li className="text-gray-400 font-bold text-sm hover:bg-gray-100 py-3 px-8 cursor-pointer transition-all">
                Reviews
              </li>
            </ul>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-800">
                Product Description
              </h3>
              <p className="text-sm text-orange-400 mt-4">
                Introducing our latest footwear innovation - The Elevate Men's
                Sneaker. Experience a new level of style and comfort with these
                premium sneakers designed to elevate your casual fashion game.
                Specially crafted using high-quality materials, these sneakers
                provide unparalleled comfort throughout the day. The modern fit
                and sleek design make them a perfect addition to any wardrobe.
                The breathable fabric ensures optimal ventilation, keeping your
                feet fresh and cool. With its classic lace-up style and durable
                construction, these sneakers offer both a timeless look and
                long-lasting performance. Step up your style and step into
                ultimate comfort with our Elevate Men's Sneaker.
              </p>
            </div>

            <ul className="space-y-3 list-disc mt-6 pl-4 text-sm text-gray-400">
              <li>
                Elevate your style with our versatile gray sneakers that are a
                must-have in any wardrobe.
              </li>
              <li>
                Available in a wide range of sizes, from extra small to extra
                large, as well as tall and petite sizes, ensuring the perfect
                fit for everyone.
              </li>
              <li>
                These sneakers are easy to care for, as they can be conveniently
                machine-washed and dried on low heat.
              </li>
              <li>
                Personalize your sneakers by adding your own designs, patterns,
                or embroidery to make them uniquely yours.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
