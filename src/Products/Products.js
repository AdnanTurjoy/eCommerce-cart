import React, { useEffect, useState } from "react";
import { fs } from "../Auth/firebaseConfig";
import Product from "./Product";
import ReactLoading from "react-loading";

function Products(props) {
  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState([]);

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
  const addToCart =(cartProduct)=>{
    console.log(cartProduct);
  }
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
