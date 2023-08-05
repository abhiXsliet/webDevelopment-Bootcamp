import React from 'react'
import {toast} from "react-hot-toast";
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../redux/Slice/CartSlice';

const Product = ({item}) => {

    const {cart} = useSelector( (state) => state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(item));
        toast.success("Item added to cart");
    }

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item removed from cart");
    }

  return (
    <div className="flex flex-col items-center justify-between  hover:scale-110 transition duration-300 ease-in gap-3 py-4 mt-10 ml-5 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024]">
        <div>
            <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
                {item.title}
            </p>
        </div>
        <div>
            <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
                {item.description.split(" ").slice(0, 10).join(" ") + "..."}
            </p>
        </div>
        <div className="h-[180px]">
            <img src = {item.image} className="h-full w-full" />
        </div>
        
        <div className='flex pl-4 pr-4 items-center justify-between w-full mt-5'>

        <div>
           <p className="text-green-600 font-semibold">${item.price}</p> 
        </div>
        
            {
                cart.some( (p) => p.id == item.id) ?
                (
                    <button 
                        className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
                        hover:bg-gray-700
                        hover:text-white
                        transition duration-300 ease-in"
                        onClick={removeFromCart}
                    >
                        Remove Item
                    </button>
                ) :
                (
                    <button
                        className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
                        hover:bg-gray-700
                        hover:text-white 
                        transition duration-300 ease-in'
                        onClick={addToCart}
                    >
                        Add to Cart
                    </button>
                )
            }

        </div>

    </div>
  )
}

export default Product