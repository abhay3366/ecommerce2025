import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";

const FilterSection = (props) => {
  const {search,setSearch,category,setCategory,rating,setRating}=props;
  const { getUniqueCategory } = useContext(DataContext);
  // const getUniqueCategoryWithAll = [{ category: "All" }, ...getUniqueCategory];

  const rating1 = [
    {
      ratingString:"4 & above",
      rate: 4,
    },
    {
       ratingString:"3 & above",
      rate: 3,
    },
  ];

  const handleCategory=(e)=>{
    if(e.target.checked){
       setCategory([...category,e.target.value])
    }else{
      setCategory(category.filter((el)=>el!=e.target.value));
    }
   
  }
  const hadleRating=(e)=>{
    if(e.target.checked){
      setRating([...rating,e.target.value]);
    }else{
      setRating(rating.filter((el)=>el!=e.target.value))
    }
    
  }
  return (
    <div className="bg-gray-100 mt-10 p-4 rounded-md h-max">
      <input
        type="text"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder="Search..."
        className="bg-white p-2 rounded-md border-gray-400 border-2"
      ></input>

      {/* category only data */}
      <h1 className="mt-5 font-semibold text-xl">Category</h1>
      <div className="flex flex-col gap-2 m-2">
        {getUniqueCategory.map((item, index) => (
          <div key={index} className="flex gap-2">
            <input type="checkbox" value={item.category} id={item.category} onChange={handleCategory} />
            <label htmlFor={item.category} className="uppercase cursor-pointer">
              {item.category}
            </label>
          </div>
        ))}
      </div>
      {/* Customer Rating */}
      <h1 className="mt-5 font-semibold text-xl">Customer Rating</h1>
      <div className="flex flex-col gap-2 m-2">
        {rating1.map((item, index) => (
          <div key={index} className="flex gap-2">
            <input type="checkbox" value={item.rate} id={item.rate} onChange={hadleRating} />
            <label htmlFor={item.rate} className="uppercase cursor-pointer">{item.ratingString}</label>
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
