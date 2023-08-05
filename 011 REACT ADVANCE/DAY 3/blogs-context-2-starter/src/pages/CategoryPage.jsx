import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';
import Header from '../components/Header';

const CategoryPage = () => {
    
    const navigation = useNavigate();
    const loaction = useLocation();
    const category = loaction.pathname.split("/").at(-1);

  return (
    <div >
        <Header />
        <div className='mt-[100px]'>
            <div className='mt-[100px] mb-6 max-w-2xl mx-auto flex items-center space-x-2'>
                <button
                    className='border-2 border-gray-300 py-1 px-4 rounded-md'
                    onClick={() => navigation(-1)}
                >
                    Back
                </button>
                <h2 className='text-xl font-bold'>
                    Blogs On <span className='underline'>{category}</span>
                </h2>
            </div>
                <Blogs />
                <Pagination />
        </div>
    </div>
  )
}

export default CategoryPage