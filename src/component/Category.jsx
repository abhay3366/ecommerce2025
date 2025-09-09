import { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";

const Category = () => {
  const { data } = useContext(DataContext);

  // Get unique categories
  const getUniqueCategory = data.filter(
    (item, index, self) => index === self.findIndex(obj => obj.category === item.category)
  );

  return (
    <div className="bg-[#101829]">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-3 sm:gap-4 md:gap-6 items-center justify-center py-4 px-4">
        {getUniqueCategory.map((item, index) => (
          <button
            key={index}
            className="uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2 rounded-md cursor-pointer text-sm sm:text-base md:text-lg hover:scale-105 transition-transform"
          >
            {item.category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
