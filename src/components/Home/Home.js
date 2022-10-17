import React, { useEffect, useState } from "react";
import { auth, fs } from "../../Auth/firebaseConfig";
import Product from "../../Products/Product";
import Products from "../../Products/Products";
import Navbar from "../Navbar/Navbar";

function Home(props) {



  // getting current user function
  function GetCurrentUser(){
    const [user, setUser]=useState(null);
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                fs.collection('users').doc(user.uid).get().then(snapshot=>{
                    setUser(snapshot.data().name);
                })
            }
            else{
                setUser(null);
            }
        })
    },[])
    return user;
}

const user = GetCurrentUser();
  return (
    <div>

      <Navbar user={user} />
      <Products />
 
    </div>
  );
}

export default Home;
