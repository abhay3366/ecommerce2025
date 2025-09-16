import React from "react";
import { useNavigate } from "react-router-dom";

const Breadcum = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto my-8 px-4">
      <nav className="flex items-center text-gray-600 text-sm md:text-base font-medium">
        {/* Home */}
        <span
          className="cursor-pointer hover:text-indigo-600 transition"
          onClick={() => navigate("/")}
        >
          Home
        </span>

        {/* Divider */}
        <span className="mx-2 text-gray-400">›</span>

        {/* Products */}
        <span
          className="cursor-pointer hover:text-indigo-600 transition"
          onClick={() => navigate("/products")}
        >
          Products
        </span>

        {/* Divider */}
        <span className="mx-2 text-gray-400">›</span>

        {/* Current Page */}
        <span className="text-gray-800 font-semibold">{title}</span>
      </nav>
    </div>
  );
};

export default Breadcum;
