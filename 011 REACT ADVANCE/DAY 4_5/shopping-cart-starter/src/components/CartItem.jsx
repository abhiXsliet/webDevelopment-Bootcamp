import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import {MdDelete} from "react-icons/md"
import { remove } from '../redux/Slice/CartSlice';
import { useState } from 'react';

const CartItem = ({item, itemIndex}) => {
    
    const dispatch = useDispatch ();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.success("Item removed from cart");
    }
    
    return (
        <div className='flex items-center p-2 md:p-5 justify-between mt-2 mb-2 md:mx-5'>

            <div className='w-[30%]'>
                <img src={item.image} />
            </div>

            <div className='md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]'>
                <h1 className='text-xl text-slate-700 font-semibold'>{item.title}</h1>
                <h1 className='text-base text-slate-700 font-medium'>
                    {item.description}
                </h1>
                <div className='flex items-center justify-between'>
                    <p className='font-bold text-lg text-green-600'>{item.price}</p>
                    <div
                        onClick={removeFromCart}
                        className=' bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3'
                    >
                       <MdDelete 
                        className='text-2xl cursor-pointer hover:text-green-400 transition transform duration-200'
                       /> 
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartItem;