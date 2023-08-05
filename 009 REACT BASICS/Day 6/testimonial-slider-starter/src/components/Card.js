import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

const Card = (props) => {
    let reviews = props.reviews;
  return (
    <div className='flex flex-col md:relative'>
        <div className='absolute top-[-7rem] z-[10] mx-auto'>
            <img 
            className='aspect-square rounded-full w-[140px] h-[140px] z-[25]'
            src={reviews.image}/>
            <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute
             top-[-6px] z-[-10] right-[-10px]'></div>
        </div>

        <div className='text-center mt-7'>
            <p className='font-bold text-2xl capitalize tracking-wider'>{reviews.name}</p>
            <p className='text-violet-300 uppercase text-sm'>{reviews.job}</p>
        </div>

        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteLeft/>
        </div>

        <div className='text-center mt-4 text-slate-500'>
            {reviews.text}
        </div>

        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteRight/>
        </div>

    </div>
  )
}

export default Card