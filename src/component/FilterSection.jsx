import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";

const FilterSection = () => {
  const { getUniqueCategory } = useContext(DataContext);
  const getUniqueCategoryWithAll = [{ category: "All" }, ...getUniqueCategory];

  const rating = [
    {
      rate: "4⭐& above",
    },
    {
      rate: "3⭐ & above",
    },
  ];

  return (
    <div className="bg-gray-100 mt-10 p-4 rounded-md h-max">
      <input
        type="text"
        placeholder="Search..."
        className="bg-white p-2 rounded-md border-gray-400 border-2"
      ></input>

      {/* category only data */}
      <h1 className="mt-5 font-semibold text-xl">Category</h1>
      <div className="flex flex-col gap-2 m-2">
        {getUniqueCategoryWithAll.map((item, index) => (
          <div key={index} className="flex gap-2">
            <input type="checkbox" />
            <button className="uppercase cursor-pointer">
              {item.category}
            </button>
          </div>
        ))}
      </div>
      {/* Customer Rating */}
      <h1 className="mt-5 font-semibold text-xl">Customer Rating</h1>
      <div className="flex flex-col gap-2 m-2">
        {rating.map((item, index) => (
          <div key={index} className="flex gap-2">
            <input type="checkbox" />
            <button className="uppercase cursor-pointer">{item.rate}</button>
          </div>
        ))}
      </div>
      {/* price range */}
       <h1 className="mt-5 font-semibold text-xl">Price Range</h1>
       <div className="flex flex-col gap-2">
            <label htmlFor="">Price Range $0-$5000</label>
            <input type="range" name="" id="" />
       </div>
       <button className="bg-red-500 text-white px-3 py-2 cursor-pointer rounded-md w-full mt-3">Rest Filter</button>
    </div>
  );
};

export default FilterSection;
