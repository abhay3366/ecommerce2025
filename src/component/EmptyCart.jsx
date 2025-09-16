import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
    const navigate=useNavigate();
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="bg-gray-100 p-8 rounded-2xl shadow-sm flex flex-col items-center">
              <FaShoppingCart className="w-16 h-16 text-gray-400 mb-4" />

        <h3 className="text-lg font-semibold text-gray-600">
          Your cart is empty
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Looks like you haven’t added anything yet.
        </p>
        <button onClick={()=>navigate('/')} className="mt-5 px-5 py-2 bg-blue-600 text-white text-sm rounded-xl shadow hover:bg-blue-700 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
