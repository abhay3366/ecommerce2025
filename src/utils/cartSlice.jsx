import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")):[],
  },
  reducers: {
    addToCart: (state, action) => {
        const product=action.payload;
        const existingProduct=state.value.find((item)=>item.id==product.id);
        if(existingProduct){
            existingProduct.quantity += 1;
             toast.success("Product quantity increased")
        }else{
            state.value.push({...product,"quantity":1})
            localStorage.setItem("cart",JSON.stringify(state.value));
              toast.success("Product is added to cart")
        }
      
     
    },
    decrement:(state,action)=>{
     const product = state.value.find((item) => item.id === action.payload);
      if (product) {
        product.quantity -= 1;
         toast.success("Product quantity decreased")
      }
    },
    increment:(state,action)=>{
       const product = state.value.find((item) => item.id === action.payload);
       localStorage.setItem("cart",JSON.stringify(state.value));
      if (product) {
        product.quantity += 1;
         toast.success("Product quantity increased")
      }
    },
    deleteCartItem:(state,action)=>{
      localStorage.setItem("cart",JSON.stringify(state.value));
        const id=action.payload
        console.log("di",id)
        // const product=state.value.find((item)=>item.id===action.payload);
        state.value=state.value.filter((item)=>item.id!=id)
        localStorage.removeItem("cart")
        toast.error("Item has been deleted")
    }
  },
});

export const { addToCart,decrement,increment,deleteCartItem } = cartSlice.actions;
export default cartSlice.reducer;


