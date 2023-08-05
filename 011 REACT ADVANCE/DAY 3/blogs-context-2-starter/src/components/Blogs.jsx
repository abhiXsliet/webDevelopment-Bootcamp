import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

const Blogs = () => {
    //consume
    const {posts,loading} = useContext(AppContext);
    console.log("Printing inside blogs component");
    console.log(posts);


  return (
    <div className='flex flex-col gap-y-10 my-4'>
        {
            loading ? 
            (<Spinner />) : 
            (   
                posts.length === 0 ? 
                (
                    <div>
                        <p className='text-center max-w-2xl mx-auto mt-12 font-bold text-3xl mb-8'>No Post Found !</p>
                    </div>
                ) : 
                (   
                    posts.map( (post) => (
                        <BlogDetails key={post.id} post={post} />
                    ))
                )
            ) 
        } 
    </div>
  );
}

export default Blogs
