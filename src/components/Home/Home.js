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
      <div className="bg-sky-300">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="object-fill h-38 w-[100%]"
        />
       
      </div>
     <div>
        <h1 className="font-bold  text-4xl text-center uppercase p-3">Products</h1>
     </div>

      <Products getTotalCartAddedNumber={getTotalCartAddedNumber} />
    </div>
  );
}

export default Home;
