import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerPage from "../Shimmer/ShimmerCard";
import Breadcum from "../component/Breadcum";
import { IoCarOutline, IoCartOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const dispatch=useDispatch();
  const { id } = useParams();

  const getSingleProduct = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!res.ok) throw new Error("Failed to fetch product");
      const resData = await res.json();
      setSingleProduct(resData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]); // ✅ re-fetch when product ID changes

  return (
    <>
      {!singleProduct ? (
        <div>
          <ShimmerPage />
        </div>
      ) : (
        <div className="px-4 pb-10 md:px-0">
          {/* Breadcrumb */}
          <Breadcum title={singleProduct.title} />

          {/* Content */}
          <div className="max-w-6xl mx-auto md:p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* product image */}
            <div className="w-full flex items-center justify-center">
              <img
                src={singleProduct.image}
                alt={singleProduct.title}
                className="rounded-2xl max-h-[400px] object-contain"
              />
            </div>

            {/* product details */}
            <div className="flex flex-col gap-6">
              <h1 className="md:text-3xl text-2xl font-bold text-gray-800">
                {singleProduct.title}
              </h1>

              <p className="text-red-500 text-2xl font-bold">
                ${singleProduct.price}
              </p>

              <p className="text-justify text-gray-600 leading-relaxed">
                {singleProduct.description || "No description available."}
              </p>

              {/* Quantity */}
              <div className="flex items-center gap-4">
                {/* Label */}
                <label
                  htmlFor="quantity"
                  className="text-base font-semibold text-gray-800 tracking-wide"
                >
                  Quantity
                </label>

                {/* Input Box */}
                <input
                  id="quantity"
                  type="number"
                  min={1}
                  defaultValue={1}
                  className="w-24 px-4 py-2 rounded-lg border-2 border-red-500 bg-gradient-to-r from-red-50 to-white text-gray-900 font-medium shadow-md text-center focus:outline-none focus:ring-4 focus:ring-red-300 focus:border-red-600 transition-all duration-300 hover:shadow-lg"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                <button onClick={()=>dispatch(addToCart({"image":singleProduct.image,"title":singleProduct.title,"price":singleProduct.price,"rating":singleProduct.rating}))} className="flex items-center gap-2 px-6 py-2 text-white text-lg bg-red-500 rounded-lg shadow-md hover:bg-red-600 transition">
                  <IoCartOutline className="w-6 h-6" />
                  Add to Cart
                </button>
               
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
