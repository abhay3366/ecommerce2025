import { useContext } from "react"
import { DataContext } from "../context/DataContextProvider"
import FilterSection from "../component/FilterSection"
import ProductCart from "../component/ProductCart"
import ShimmerPage from "../Shimmer/ShimmerCard"

const Product = () => {
  const {data,getUniqueCategory}=useContext(DataContext)
  console.log("getUniqueCategorydd",getUniqueCategory)

    if(data.length==0){
      return <ShimmerPage/>
    }

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        {
          data?.length>0?(
            <div className="flex gap-8">
            <FilterSection/>
            <div className="grid grid-cols-4 gap-7 mt-7">
              {
                data.map((product,index)=>(
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
