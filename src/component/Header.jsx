import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaCaretDown, FaMapMarkerAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import useGetLocation from "../cutomeHook/useGetLocation";

const Header = () => {
  // const [location, setLocation] = useState(" ");
  // const [openDropDown, setOpenDropDown] = useState(false);
  const cartData=useSelector((state)=>state.cart.value);
  

  // const getLocation = async () => {
  //   navigator.geolocation.getCurrentPosition(async (position) => {
  //     const { latitude, longitude } = position.coords;
  //     try {
  //       const res = await fetch(
  //         `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
  //       );
  //       const data = await res.json();
  //       setLocation(data.address);
  //       setOpenDropDown(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   });
  // };
  const {location,openDropDown,getLocation}=  useGetLocation()
  useEffect(() => {
    getLocation()
  }, []);

  return (
    <div className="bg-white py-3 shadow-2xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4 md:gap-0">
        {/* logo section */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-7 items-center w-full md:w-auto">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl">ShopEase</h1>
          </Link>
          <div className="flex gap-1 cursor-pointer text-gray-700 items-center relative">
            <FaMapMarkerAlt className="text-red-500" />
            <span className="font-semibold">
              {location ? (
                <div className="-space-y-2">
                  <p>{location.suburb}</p>
                  <p>{location.city}</p>
                </div>
              ) : (
                "Add Address"
              )}
            </span>
            <FaCaretDown
              onClick={() => setOpenDropDown(!openDropDown)}
              className="ml-1"
            />
            {openDropDown && (
              <div className="w-[250px] h-max shadow-2xl z-50 bg-white absolute top-10 left-0 md:left-0 border-2 p-5 border-gray-100 rounded-md">
                <h1 className="font-semibold mb-4 text-xl flex justify-between">
                  Change Location{" "}
                  <span>
                    <CgClose onClick={() => setOpenDropDown(false)} />
                  </span>
                </h1>
                <button
                  onClick={getLocation}
                  className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer"
                >
                  Detect my Location
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Menu section */}
        <nav className="flex flex-col md:flex-row gap-3 md:gap-7 items-center w-full md:w-auto">
          <ul className="flex flex-col md:flex-row gap-3 md:gap-7 items-center text-lg md:text-xl font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "border-b-2 transition-all border-red-500" : ""
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "border-b-2 transition-all border-red-500" : ""
              }
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "border-b-2 transition-all border-red-500" : ""
              }
            >
              <li>Products</li>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "border-b-2 transition-all border-red-500" : ""
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>
          <Link to="/cart" className="relative mt-2 md:mt-0">
            <IoCartOutline className="h-6 w-6" />
            <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-4 text-white text-xs md:text-sm">
              {cartData?.length}
            </span>
          </Link>
          <div className="mt-2 md:mt-0">
            <SignedOut>
              <SignInButton className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
