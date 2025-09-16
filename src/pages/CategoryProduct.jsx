import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ShimmerPage from "../Shimmer/ShimmerCard";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";
import { GrFormPreviousLink } from "react-icons/gr";

const CategoryProduct = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { category } = useParams();
  const navigate = useNavigate();

  const fetchCategoryData = async () => {
    const res = await fetch("https://fakestoreapi.com/products/");
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchCategoryData();
    window.scrollTo(0,0)
  }, []);

//   console.log(data);
  const categoryWiseData = data.filter(
    (item) => item.category?.toLowerCase() == category?.toLowerCase()
  );

  if (categoryWiseData.length == 0) {
    return <ShimmerPage />;
  }

  return (
    <div className="p-6">
      {/* <h1 className="text-3xl font-bold mb-6 text-center">Electronics Products</h1> */}
      <button onClick={()=>navigate("/")} className="bg-amber-700 text-white font-medium px-1 py-1 mb-2"><GrFormPreviousLink size={31} /></button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {categoryWiseData.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg shadow hover:shadow-lg transition duration-300 p-4 flex flex-col items-center"
          >
            <img
              onClick={() => navigate(`/products/${item.id}`)}
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-contain mb-4 cursor-pointer"
            />
            <h2 className="text-lg font-semibold text-center mb-2">
              {item.title}
            </h2>
            <p className="text-blue-600 font-bold mb-2">${item.price}</p>
            <p className="text-yellow-500 mb-2">
              ⭐ {item.rating.rate} ({item.rating.count})
            </p>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id:item.id,
                    image: item.image,
                    title: item.title,
                    price: item.price,
                    rating: item.rating,
                  })
                )
              }
              className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProduct;
