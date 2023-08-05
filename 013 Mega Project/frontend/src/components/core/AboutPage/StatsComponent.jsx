import React from "react"

const StatsComponent = () => {
  return (
    <div className="bg-richblack-700">
        <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto ">
            <div className="grid grid-cols-2 md:grid-cols-4 text-center">
                <div className="flex flex-col py-10">
                    <h1 className="text-[30px] font-bold text-richblack-5">5K</h1>
                    <h2 className="font-semibold text-[16px] text-richblack-500">Active Students</h2>
                </div>
                <div className="flex flex-col py-10">
                    <h1 className="text-[30px] font-bold text-richblack-5">10+</h1>
                    <h2 className="font-semibold text-[16px] text-richblack-500">Mentors</h2>
                </div>
                <div className="flex flex-col py-10">
                    <h1 className="text-[30px] font-bold text-richblack-5">200+</h1>
                    <h2 className="font-semibold text-[16px] text-richblack-500">Courses</h2>
                </div>
                <div className="flex flex-col py-10">
                    <h1 className="text-[30px] font-bold text-richblack-5">50+</h1>
                    <h2 className="font-semibold text-[16px] text-richblack-500">Awards</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StatsComponent