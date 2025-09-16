import { useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useGetLocation from "../cutomeHook/useGetLocation";
import { decrement, deleteCartItem, increment } from "../utils/cartSlice";
import EmptyCart from "../component/EmptyCart";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.value);
  console.log("cart",cartItems);
  const dispatch = useDispatch();
  // custome hook of location
  const { location, openDropDown, getLocation } = useGetLocation();
  useEffect(() => {
    getLocation();
  }, []);
  // it get detail of user
  const user = useUser();

  // Total cost
  const totalPrice = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <EmptyCart/>
  }

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">My Cart ({cartItems.length})</h1>
      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
          >
            <div className="flex items-center space-x-4 w-1/2">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h2 className="font-semibold">{item?.title?.slice(0, 30)}</h2>
                <p className="text-gray-500">${item.price}</p>
              </div>
            </div>

            <div className="bg-red-600 text-white">
              <button
                disabled={item.quantity == 1}
                onClick={() => dispatch(decrement(item.id))}
                className="px-2 py-1 cursor-pointer font-bold"
              >
                -
              </button>
              <span className="p-2">{item.quantity}</span>
              <button
                onClick={() => dispatch(increment(item.id))}
                className="px-1 py-2 cursor-pointer font-bold"
              >
                +
              </button>
            </div>
            <div>
              <p className="text-gray font-medium">{`Total : $${
                (item.price * item.quantity).toFixed(2)
              }`}</p>
            </div>
            <button onClick={()=>dispatch(deleteCartItem(item.id))} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className=" mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Delivery Info */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                value={user?.user?.firstName}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Address</label>
              <input
                type="text"
                placeholder="123 Main St, City"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                value={location.country}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Postal Code</label>
              <input
                type="text"
                placeholder="City"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                value={location.postcode}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">City</label>
              <input
                type="text"
                placeholder="City"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                value={location.city}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Country</label>
              <input
                type="text"
                placeholder="Country"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                value={location.country}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="text"
                placeholder="+91 1234567890"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
        </div>

        {/* Bill Details */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Bill Details</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (10%)</span>
              <span>${Math.floor((totalPrice * 10) / 100)}</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-2">
              <span>Total</span>
              <span>
                  {(totalPrice - ((totalPrice * 10) / 100)).toFixed(2)}
                </span>
            </div>
          </div>

          <button className="mt-6 w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
