import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";

function Product({ products, addToCart }) {
  return (
    <div className="grid grid-cols-4  gap-4 p-6">
      {products &&
        products.map((product, key) => {
          const { ID, title, description, category, image, price } = product;
          return (
            <div
              key={ID}
              className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <Link
                to={"/product/" + ID}
                state={{ title, price, description, image, category }}
              >
                <img
                  className="p-8 rounded-t-lg hover:-translate-y-1 hover:scale-110"
                  src={image}
                  alt="product image"
                />
              </Link>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {title}
                  </h5>
                </a>

                <div className="flex  justify-between items-end">
                  <span className="text-3xl pr-2 font-bold  text-gray-900 dark:text-white">
                    {price}৳
                  </span>

                  <Link
                    onClick={() => addToCart(product)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Product;
