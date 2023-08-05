import "./App.css";
import { useEffect } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
// React Router
import {Route, Routes, useNavigate } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import ViewCourse from './pages/ViewCourse';
import { getUserDetails } from "./services/operations/profileAPI";
import { ACCOUNT_TYPE } from "./utils/constants";

// Components
import Navbar from "./components/common/Navbar";
import OpenRoute from "./components/core/Auth/OpenRoute";
import ForgotPassword from "./pages/ForgotPassword";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Error from "./pages/Error";
import Settings from './components/core/Dashboard/Settings';
import Cart from './components/core/Dashboard/Cart';
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import AddCourse from './components/core/Dashboard/AddCourses';
import MyCourses from "./components/core/Dashboard/MyCourses";
import EditCourse from './components/core/Dashboard/EditCourse';
import CourseDetails from './pages/CourseDetails'
import Catalog from './pages/Catalog';
import Instructor from "./components/core/Dashboard/InstructorDashboard/Instructor";
import VideoDetails from './components/core/ViewCourse/VideoDetails';

function App() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.profile)
  console.log('user............', user);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = JSON.parse(localStorage.getItem('token'))
      dispatch(getUserDetails(token, navigate))
    }
  }, [])
  
  return (
  <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/about' element={<About />} />
      <Route path='catalog/:catalogName' element={<Catalog/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path='courses/:courseId' element={<CourseDetails />} />
      <Route
        path="signup"
        element={
          <OpenRoute>
            <Signup />
          </OpenRoute>
        }
      />

      <Route
        path="login"
        element={
          <OpenRoute>
            <Login />
          </OpenRoute>
        }
      />

      <Route
        path="forgot-password"
        element={
          <OpenRoute>
            <ForgotPassword />
          </OpenRoute>
        }
      />  

      <Route
        path="verify-email"
        element={
          <OpenRoute>
            <VerifyEmail />
          </OpenRoute>
        }
      />  

      <Route
        path="update-password/:id"
        element={
          <OpenRoute>
            <UpdatePassword />
          </OpenRoute>
        }
      />  

        {/* Private Route - for Only Logged in User */}
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >

        {/* Route for all users */}
        <Route path="dashboard/my-profile" element={<MyProfile />} />
        <Route path="dashboard/Settings" element={<Settings />} />
        
        {/* Route only for Instructors */}
        {
          user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="dashboard/instructor" element={<Instructor />} />
              {/* <Route path="dashboard/my-courses" element={<MyCourses />} /> */}
              <Route path="dashboard/add-course" element={<AddCourse />} />
              <Route
                path="dashboard/edit-course/:courseId"
                element={<EditCourse />}
              />
            </>
          )
        }
        
        {/* Route only for Students */}
        {
          user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
              <Route path="/dashboard/cart" element={<Cart />} />
            </>
          )
        }

          <Route path="dashboard/settings" element={<Settings />} />
        </Route>
        
      <Route path="*" element={<Error />} />

    </Routes>

    </div>
  );
}

export default App;