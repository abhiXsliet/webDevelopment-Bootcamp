import React from "react";
import reviews from "./data"
import Testimonial from "./components/Testimonials";

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      
      <div className="text-center">
        
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        
        <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
       
        <Testimonial reviews={reviews}/>
     
      </div>
   
    </div>
  )
};

export default App;
