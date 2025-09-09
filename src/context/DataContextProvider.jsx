import { createContext, useEffect, useState } from "react";



export const DataContext=createContext([]);
const DataContextProvider = ({children}) => {
    const [data,setData]=useState([])
  
    const getData=async()=>{
        const res=await fetch('https://fakestoreapi.com/products');
        const resData=await res.json();
        setData(resData);
    }
    useEffect(()=>{
        getData();
    },[])

      const getUniqueCategory = data.filter(
    (item, index, self) => index === self.findIndex(obj => obj.category === item.category)
  );


    return(
        <DataContext.Provider value={{data,getUniqueCategory}}>
            {children}
        </DataContext.Provider>
    );

}
export default DataContextProvider
