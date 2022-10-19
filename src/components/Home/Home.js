import React, { useEffect, useState } from "react";
import { auth, fs } from "../../Auth/firebaseConfig";
import { GetCurrentUser } from "../../Auth/GetCurrentUser";
import Product from "../../Products/Product";
import Products from "../../Products/Products";
import Navbar from "../Navbar/Navbar";

function Home(props) {
  const [cartNumber, setCartNumber] = useState();
  const getTotalCartAddedNumber = (number) => {
    setCartNumber(number);
  };
  // getting current user function

  const user = GetCurrentUser();
  return (
    <div>
      <Navbar user={user} cartNumber={cartNumber} />
    <div>
        <h1 className="font-bold  text-4xl text-center uppercase p-3">Products</h1>
     </div>

      <Products getTotalCartAddedNumber={getTotalCartAddedNumber} />
    </div>
  );
}

export default Home;
