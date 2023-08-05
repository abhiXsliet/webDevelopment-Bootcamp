import React from 'react'
import Pagination from '../components/Pagination'
import Header from '../components/Header'
import Blogs from '../components/Blogs'

const Home = () => {
  return (
    <div>
      <Header />
        <div className='my-[100px]'>
          <Blogs />
          <Pagination />
        </div>
    </div>
  )
}

export default Home