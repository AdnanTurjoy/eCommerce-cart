import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./Pages/Cart/Cart";
import SingleProduct from "./Products/SingleProduct";
export const cartContext = createContext();
function App() {
  const [selectedCart,setSelelctedCart] = useState([]);
  const getSelectedCart=(cart)=>{
    setSelelctedCart(cart)
  }
  return (
    <cartContext.Provider value={{selectedCart, getSelectedCart}}>
      <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      
    </cartContext.Provider>
  );
}

export default App;
