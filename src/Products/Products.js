import React, { useContext, useEffect, useState } from "react";
import { auth, fs } from "../Auth/firebaseConfig";
import Product from "./Product";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../App";


function Products({ getTotalCartAddedNumber }) {
  const navigate = useNavigate();
  const { getSelectedCart } = useContext(cartContext);

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // const [Product,setProduct] = useState({})
  // getting current user uid
  // function GetUserUid() {
  //   const [uid, setUid] = useState(null);
  //   useEffect(() => {
  //     auth.onAuthStateChanged((user) => {
  //       if (user) {
  //         setUid(user.uid);
  //       }
  //     });
  //   }, []);
  //   return uid;
  // }

  // const uid = GetUserUid();

  // getting products function
  const getProducts = async () => {
    const products = await fs.collection("products").get();
    const productsArray = [];
    if (products.docs.length >= 1) {
      for (var snap of products.docs) {
        var data = snap.data();
        data.ID = snap.id;
        productsArray.push({
          ...data,
        });
        if (productsArray.length === products.docs.length) {
          setLoading(false);
          setProducts(productsArray);
        }
      }
    } else {
      setProducts([]);
    }
  };

  useEffect(() => {
    
    setLoading(true);
    getProducts();
   
  }, []);

  useEffect(() => {
    getTotalCartAddedNumber(cart.length);
    getSelectedCart(cart);
  }, [cart]);
  // let Product;
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  //console.log(cart);
  return (
    <div className="m-auto content-center">
      {loading && (
        <ReactLoading
          className="m-auto content-center"
          type="bubbles"
          color="#122c40"
          height={75}
          width={100}
        />
      )}
      
      <Product products={products} addToCart={addToCart} />
    </div>
  );
}

export default Products;
