import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function SingleProduct(props) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex w-full align-center content-center ">
        <img
          className="p-8 rounded-t-lg hover:-translate-y-1 hover:scale-110"
          src={location.state.image}
          alt="product image"
        />
        <div className="flex pt-6">
          <div className="px-5 pb-5">
            <span className="text-3xl pr-2 font-bold  text-gray-900 dark:text-white">
              {location.state.price}৳
            </span>
            <br></br>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {location.state.title}
            </h5>
            <p>{location.state.description}</p>

            <div className="flex  justify-between items-end">
              <Link
                to="/"
                className="text-white bg-rose-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Back
              </Link>
              <Link
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
