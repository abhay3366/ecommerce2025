const Pagination = (
  {
    PRODUCT_PER_PAGE,
    totalPage,
    startIndex,
    endIndex,
    currentPage,
    setCurrentPage
  }) => {
  
  const handlePagination=(el)=>{
    setCurrentPage(el)
  }
  
  console.log("startindex",startIndex,currentPage)
  return (
    <div className='flex justify-end'>
      <div className=''>
      <button disabled={currentPage==1} className={`cursor-pointer px-4 py-1.5 rounded-md ml-1.5 text-white 
      ${currentPage === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-red-500"}`} onClick={()=>setCurrentPage(prev=>prev-1)} >Prev</button>
      {
        [...Array(totalPage).keys()].map((el)=>{
          let page=el+1;
          if(page==1 || page == totalPage || (page >= currentPage - 1 && page <= currentPage + 1)){
            return(
            <button onClick={()=>handlePagination(el+1)}  className={`cursor-pointer px-4 py-1.5 ${el+1==currentPage && "bg-gray-600"} bg-amber-500  rounded-md ml-1.5 text-white`}>{el+1}</button>
          )
          }

          if (page === totalPage - 1 && currentPage < totalPage - 2) {
            return <span key="dots2">...</span>;
          }
          
        })
      }
       <button disabled={currentPage==totalPage} className={`cursor-pointer px-4 py-1.5 rounded-md ml-1.5 text-white 
    ${currentPage === totalPage ? "bg-gray-400 cursor-not-allowed" : "bg-red-500"}`} onClick={()=>setCurrentPage(prev=>prev+1)}>Next</button>
      </div>
      
    </div>
  )
}

export default Pagination
