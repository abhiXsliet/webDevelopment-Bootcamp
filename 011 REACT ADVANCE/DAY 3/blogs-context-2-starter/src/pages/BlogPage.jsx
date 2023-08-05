import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {

    const newBaseUrl = "https://codehelp-apis.vercel.app/api/"
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading, loading} = useContext(AppContext);

    const blogId = location.pathname.split('/').at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(err) {
            console.log("Error has arrived");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect ( () => {
        if(blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname] )

  return (
    <div>
        <Header />
        <div className='mt-[100px] mb-6 max-w-2xl mx-auto'>
            <button
                className='border-2 border-gray-300 py-1 px-4 rounded-md'
                onClick={() => navigation(-1)}
            >
                Back
            </button>
        </div>
        {
            loading ? 
            (
                <div>
                    <p className='text-center max-w-2xl mx-auto mt-12 font-bold text-3xl mb-8'>Loading</p>
                </div>
            ) : 
            blog ? 
            (
                <div>
                    <BlogDetails post={blog}/>
                    <h2 className='max-w-2xl mx-auto mt-12 font-bold text-3xl mb-8'> Related Blogs </h2>
                    {
                        relatedBlogs.map( (post) => (
                            <div key={blog.id}>
                                <BlogDetails post={post} />
                            </div>
                        ))
                    }
                </div>
            ) : 
            (
                <div>
                    <p className='text-center max-w-2xl mx-auto mt-12 font-bold text-3xl mb-8'>No Blog Found</p>
                </div>
            )
        }
    </div>
  )
}

export default BlogPage