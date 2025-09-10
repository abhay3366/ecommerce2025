import { useContext, useState } from "react"
import { DataContext } from "../context/DataContextProvider"
import FilterSection from "../component/FilterSection"
import ProductCart from "../component/ProductCart"
import ShimmerPage from "../Shimmer/ShimmerCard"

const Product = () => {
  const {data,getUniqueCategory}=useContext(DataContext)
  console.log("getUniqueCategorydd",getUniqueCategory)

  const[search,setSearch]=useState("");
  const[category,setCategory]=useState("All");
  const[rating,setRating]=useState("");

   const serachFilterData=data.filter((el)=>el.title.toLowerCase().includes(search.toLowerCase()));
   console.log("serachdata",serachFilterData)

    if(data.length==0){
      return <ShimmerPage/>
    }

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        {
          data?.length>0?(
            <div className="flex gap-8">
            <FilterSection search={search} setSearch={setSearch} category={category} setCategory={setCategory} rating={rating} setRating={setRating} />
            <div className="grid grid-cols-4 gap-7 mt-7">
              {
                serachFilterData.map((product,index)=>(
                  <ProductCart key={index} product={product} />
                ))
              }
            </div>
          </div>):(<div><h1>No data</h1></div>)
        }
      </div>
    </div>
  )
}

export default Product
