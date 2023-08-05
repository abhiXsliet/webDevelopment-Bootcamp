import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css"

import { Route, Routes, useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "./pages/Home";
import TagPage from "./pages/TagPage";
import BlogPage from "./pages/BlogPage";
import CategoryPage from "./pages/CategoryPage";

export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);

  const [serachParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = serachParams.get("page") ?? 1;
    if(location.pathname.includes("tags")) {
      //it means tag's page should be showed
      const tag = location.pathname.split("/").at(-1).replace("-", " ");
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replace("-", " ");
      fetchBlogPosts(Number(page), null, category );
    }
    else {
      fetchBlogPosts(Number(page));
    }

  },[location.pathname, location.search]);

  return (
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/blog/:blogId" element = {<BlogPage/>} />
      <Route path="/tags/:tag" element = {<TagPage/>} />
      <Route path="/categories/:category" element = {<CategoryPage/>} />
    </Routes>
  );
}
