import { useContext} from "react"
import { DataContext } from "../context/DataContextProvider"

const Category = () => {
    const {data}=useContext(DataContext)
const getUniqueCategory=  data.filter((item,index,self)=>index===self.findIndex(obj=>obj.category==item.category))

  return (
    <div className="bg-[#101829]">
      <div className="max-w-7xl max-auto flex gap-7 items-center justify-evenly py-4 px-2">
            {
                getUniqueCategory.map((item,index)=>(
                    <div key={index}>
                        <button className="uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer">{item.category}</button>
                    </div>
                ))
            }
      </div>
    </div>
  )
}

export default Category
