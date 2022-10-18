import { data } from "autoprefixer";
import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../App";

function Cart(props) {
  const { selectedCart } = useContext(cartContext);
  const [updateCart, setUpdateCart] = useState([]);
  useEffect(() => {
    setUpdateCart(selectedCart);
  }, [selectedCart]);
  const deleteCart = (id) => {
    console.log(id);
    setUpdateCart(updateCart.filter((data) => data.ID !== id));
  };
  const totalPrice = updateCart.reduce(
    (total, product) => total + parseInt(product.price),
    0
  );
  return (
    <div>
      {" "}
      {updateCart.length < 1 && <h1>Cart is Empty, Please Add From Shop</h1>}
      <div className="grid grid-cols-4  gap-4 p-6">
        {updateCart &&
          updateCart.map((product, key) => {
            const { ID, title, description, category, image, price } = product;
            return (
              <div
                key={ID}
                className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <img
                  className="p-8 rounded-t-lg hover:-translate-y-1 hover:scale-110"
                  src={image}
                  alt="product image"
                />

                <div className="px-5 pb-5">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {title}
                  </h5>

                  <div className="flex  justify-between items-end">
                    <span className="text-3xl pr-2 font-bold  text-gray-900 dark:text-white">
                      {price}৳
                    </span>

                    <div
                      onClick={() => deleteCart(ID)}
                      className=" cursor-pointer text-white bg-rose-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Delete
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <h1>{totalPrice}</h1>
    </div>
  );
}

export default Cart;
