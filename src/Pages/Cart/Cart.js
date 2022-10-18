import React, { useContext } from "react";
import { cartContext } from "../../App";

function Cart(props) {
    const {selectedCart}= useContext(cartContext);
  console.log(selectedCart);
  return <div>cart</div>;
}

export default Cart;
