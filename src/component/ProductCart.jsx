import { IoCartOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink} from 'react-router-dom'
import { addToCart } from '../utils/cartSlice';

const ProductCart = ({product}) => {
  // use redux for add to cart
  const cartCount=useSelector((state)=>state.cart.value);
  const dispatch=useDispatch();
  return (
    <div className='border border-gray-100 rounded-2xl cursor-pointer hover:scale-106 hover:shadow-2xl transition-all p-2 h-max m mb-6'>
       <NavLink to={`/products/${product.id}`}> <img src={product.image} alt={product.title}  className='bg-grayy-100 aspect-square' /></NavLink>
        <h1 className='line-clamp-2 p-1 font-semibold'>{product.title}</h1>
        <p className='my-1 text-lg text-gray-800 font-bold'>${product.price}</p>
        <p className='my-1 text-lg text-gray-800 font-bold'>Rating: {product.rating.rate}</p>
        <button onClick={()=>dispatch(addToCart({"id":product.id,"image":product.image,"title":product.title,"price":product.price,"rating":product.rating}))} className='bg-red-500 px-3 py-2 text-white rounded-md w-full cursor-pointer flex gap-2 items-center justify-center font-semibold'><IoCartOutline className='w-6 h-6'/> Add to Cart</button>
    </div>
  )
}

export default ProductCart
