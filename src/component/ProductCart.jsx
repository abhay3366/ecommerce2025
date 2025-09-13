import React from 'react'
import { IoCartOutline } from 'react-icons/io5'

const ProductCart = ({product}) => {
  
  return (
    <div className='border border-gray-100 rounded-2xl cursor-pointer hover:scale-106 hover:shadow-2xl transition-all p-2 h-max m mb-6'>
        <img src={product.image} alt={product.title} className='bg-grayy-100 aspect-square' />
        <h1 className='line-clamp-2 p-1 font-semibold'>{product.title}</h1>
        <p className='my-1 text-lg text-gray-800 font-bold'>${product.price}</p>
        <p className='my-1 text-lg text-gray-800 font-bold'>Rating: {product.rating.rate}</p>
        <button className='bg-red-500 px-3 py-2 text-white rounded-md w-full cursor-pointer flex gap-2 items-center justify-center font-semibold'><IoCartOutline className='w-6 h-6'/> Add to Cart</button>
    </div>
  )
}

export default ProductCart
