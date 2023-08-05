import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

//step1
export const AppContext = createContext();

export default function AppContextProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();

    //data filling pending

    const fetchBlogPosts = async (page = 1, tag=null, category) => {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag) {
            url += `&tag=${tag}`;
        }

        if(category) {
            url += `&category=${category}`;
        }

        try{
            const result = await fetch(url);
            const data = await result.json();
            if(!data.posts || data.posts.length === 0)
                throw new Error("Something went wrong");
            
            console.log("API Response: ", data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages)
        }
        catch(error) {
            console.log("Error in fetching BlogPosts", error);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }
    
    //Handle when next and previous button are clicked
    function handlePageChange(page) {
        navigate( {search: `?page=${page}`} );
        setPage(page);
    };

    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };

    //step2
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
}