import product from "../../assets/products/jacket-3.jpg";
import product2 from "../../assets/products/shorts-2.jpg";
import product3 from "../../assets/products/clothes-3.jpg";

const Cart = [
  {
    name: "Casual Comfort",
    img: product,
    price: "23.00",
    color: "Brown",
    quantity: "3",
  },
  {
    name: "Spring Beww",
    img: product2,
    price: "16.00",
    color: "Pink",
    quantity: "1",
  },
  {
    name: "Designer Delight",
    img: product3,
    price: "51.00",
    color: "Black",
    quantity: "1",
  },
];

const CartComponent = () => {
  return (
    <div className="font-sans">
      <div className="grid lg:grid-cols-3 gap-12 p-6">
        <div className="lg:col-span-2  divide-y divide-gray-300">
          {Cart.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-4 items-center gap-8 py-6"
            >
              <div className="md:col-span-2 flex items-center gap-6">
                <div className="w-32 h-22 shrink-0 shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] p-3">
                  <img
                    alt=""
                    src={item.img}
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <h6 className="text-base text-gray-500 mt-2">
                    Color:{" "}
                    <span className="ml-2 font-semibold">{item.color}</span>
                  </h6>
                </div>
              </div>

              <div className="flex">
                <button
                  type="button"
                  className="py-2 font-semibold text-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 fill-current"
                    viewBox="0 0 124 124"
                  >
                    <path
                      d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="mx-4 px-4 py-2 font-semibold text-gray-800 text-base shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)]"
                >
                  {item.quantity}
                </button>
                <button
                  type="button"
                  className="py-2 font-semibold text-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 fill-current"
                    viewBox="0 0 42 42"
                  >
                    <path
                      d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="flex items-center">
                <h4 className="text-lg font-semibold text-gray-800">
                  ${item.price}
                </h4>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 cursor-pointer shrink-0 fill-[#333] hover:fill-red-500 ml-auto"
                  viewBox="0 0 320.591 320.591"
                >
                  <path
                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-Secondary-clr rounded-xl shadow-lg p-6 lg:sticky top-0">
          <h3 className="text-xl font-bold text-gray-800">Order Summary</h3>
          <ul className="text-gray-800 divide-y divide-gray-300 mt-6">
            <li className="flex flex-wrap gap-4 text-base py-4">
              Subtotal <span className="ml-auto font-bold">$90.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base py-4">
              Shipping <span className="ml-auto font-bold">$4.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base py-4">
              Tax <span className="ml-auto font-bold">$4.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base py-4 font-bold">
              Total <span className="ml-auto">$98.00</span>
            </li>
          </ul>
          <button
            type="button"
            className="mt-6 text-base px-6 py-2.5 w-full bg-Dark-clr hover:bg-Secondary-clr hover:border hover:text-Font-clr text-Font-white-clr rounded"
          >
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
