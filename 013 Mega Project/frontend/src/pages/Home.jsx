import React from "react"
import {FaArrowRight} from "react-icons/fa"
import { Link } from "react-router-dom"
import HighlightText from "../components/core/HomePage/HighlightText"

import CTAButton from "../components/common/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import "../index.css"
import TimelineSection from "../components/core/HomePage/TimelineSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import Footer from "../components/common/Footer"
import ExploreMore from "../components/core/HomePage/ExploreMore"

const Home = () => {
  return (
    <div>
        {/* Section-1 */}
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
            <Link to={"/signup"}>
                <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] hover:shadow-none">
                    <div className="flex felx-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
                        <p>Become an Instructor</p>
                        <FaArrowRight />
                    </div>
                </div>
            </Link>

            <div className="text-center text-4xl font-semibold mt-6">
                Empower Your Future With
                <HighlightText text={"Coding Skills"} />
            </div>

            <div className="mt-4 w-[80%] text-center text-lg font-bold text-richblack-300">
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
            </div>

            <div className="flex flex-row gap-7 mt-8">
                <CTAButton active={true} linkto={"/signup"}>
                    Learn More
                </CTAButton>
                <CTAButton active={false} linkto={"/login"}>
                    Book a Demo 
                </CTAButton>
            </div>

            <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
                <video muted loop autoPlay className="shadow-[20px_20px_rgba(255,255,255)]">
                    <source src={Banner} type="video/mp4" />
                </video>
            </div>

            {/* Code Section-1 */}
            <div>
                <CodeBlocks 
                    position={"lg:flex-row"}
                    heading={
                        <div className="text-4xl font-semibold">
                            Unlock Your
                            <HighlightText text={" coding potential "} />
                            with our online courses
                        </div>  
                    }
                    subheading={
                        "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                    }
                    ctabtn1={
                        {
                            btnText: "Try it Yourself",
                            linkto: "/signup",
                            active: true,
                        }
                    }
                    ctabtn2={
                        {
                            btnText: "Learn More",
                            linkto: "/login",
                            active: false,
                        }
                    }
                    codeblock={
                        `<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a>This is myPage</h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a>\n<a href="/three">Three</a>\n</nav>\n</body>`
                    }
                    codeColor={"text-yellow-25"}
                    backgroundGradient={"codeblock1"}
                />
            </div>

            {/* Code Section-2*/}
            <div>
                <CodeBlocks 
                    position={"flex lg:flex-row my-20 justify-between flex-col lg:gap-10 gap-10"}
                    heading={
                        <div className="text-4xl font-semibold">
                            Start
                            <HighlightText text={" coding in seconds "} />
                        </div>  
                    }
                    subheading={
                        "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                    }
                    ctabtn1={
                        {
                            btnText: "Continue Lesson",
                            linkto: "/signup",
                            active: true,
                        }
                    }
                    ctabtn2={
                        {
                            btnText: "Learn More",
                            linkto: "/login",
                            active: false,
                        }
                    }
                    codeblock={
                        `<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a>This is myPage</h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`
                    }
                    codeColor={"text-white"}
                    backgroundGradient={"codeblock2"}
                />
            </div>
            
            <ExploreMore />

        </div>

        {/* Section-2 */}
        <div className="bg-pure-greys-5 text-richblack-700">
            <div className="homepage_bg h-[320px]">
                <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
                    <div className="lg:h-[150px]"></div>
                    <div className="flex flex-row gap-7 text-white lg:mt-8">
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className="flex items-center gap-2">
                                Explore Full Catalog
                                <FaArrowRight />
                            </div>
                        </CTAButton>

                        <CTAButton active={false} linkto={"/signup"}>
                            <div>
                                Learn More
                            </div>
                        </CTAButton>
                    </div>
                </div>
            </div>

            <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">

                <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
                    <div className="text-4xl font-semibold lg:w-[45%] ">
                        Get the skills you need for a
                        <HighlightText text={"job that is in demand."} />
                    </div>

                    <div className="flex flex-col items-start gap-10 lg:w-[40%]">
                        <div className="text-[16px]">
                            The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                        </div>
                        <CTAButton active={true} linkto={"/signup"}>Learn More</CTAButton>
                    </div>
                </div>

                <TimelineSection />

                <LearningLanguageSection />

            </div>
        </div>
        {/* Section-3 */}
        <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">

            <InstructorSection />

            <h1 className="text-center text-4xl font-semibold mt-8">Reviews from other learners</h1>
            
            <div>
                {/* Review Slider */}
            </div>
        </div>
        {/* Footer */}
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Home