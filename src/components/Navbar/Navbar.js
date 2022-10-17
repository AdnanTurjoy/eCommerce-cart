import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { auth } from "../../Auth/firebaseConfig";

function Navbar({ user }) {
  const navigate = useNavigate();
  useEffect(() => {}, [user]);

  const handleLogOut = () => {
    auth
      .signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Tech Mart</span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="justify-end w-full block flex-grow lg:flex lg:items-center  lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            About
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Contact
          </a>
        </div>
        {!user && (
          <>
            <div>
              <Link
                to="/login"
                className="inline-block text-sm px-4 py-2 mr-3 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              >
                Login
              </Link>
            </div>
            <div>
              <Link
                to="/login"
                className="inline-block text-sm px-4 py-2 mr-3 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              >
                Sign Up
              </Link>
            </div>
          </>
        )}

        {user && (
          <>
            <div>
              <Link className="navlink mr-3" to="/">
                {user}
              </Link>
            </div>
            <div className="cart-menu-btn">
              <Link className="navlink" to="cart">
                <HiShoppingCart className="mr-3" size={20} />
              </Link>
              {/* <span className="cart-indicator">{totalProducts}</span> */}
            </div>
            <Link
              className="inline-block text-sm px-4 py-2 mr-3 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              onClick={handleLogOut}
            >
              LOGOUT
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
