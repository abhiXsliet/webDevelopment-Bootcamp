import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useEffect, useContext } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css";
export default function App() {

  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  },[]);

  return (
    <div className="my-[100px]">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  )
}
