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
    return(
        <DataContext.Provider value={{data}}>
            {children}
        </DataContext.Provider>
    );

}
export default DataContextProvider
