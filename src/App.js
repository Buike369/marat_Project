import React, { useState } from "react"
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet

} from "react-router-dom";
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Home from "./components/home"
import Register from "./components/register"
import Login from "./components/login"
import About from "./components/about"
import CoursesSingleP from "./components/coursePageSingle.jsx"

import Contact from "./components/contact"
import Terms from "./components/terms"
import Privacy from "./components/privacy"
import Courses from "./components/courses"
import LatestCourses from "./components/latestCourse"
import Projects from "./components/project"
import Blog from "./components/blog"
import Ebook from "./components/ebook"
import Pricing from "./components/pricing"
import ForgotPassword from "./components/forgetPassword"
import UpdatePassword from "./components/updatePassword"
import Teach from "./components/teach"
import Teach1 from "./components/teach1"


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
const pass = false;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />


      },
      {
        path: "/terms",
        element: <Terms />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/teach",
        element: <Teach/>
      },
      {
        path: "/teach1",
        element: <Teach1 />
      },
      {
        path: "/privacy-policy",
        element: <Privacy />
      },
      {
        path: "/courses",
        element: <Courses />,
      
      },
      {
        path: "/latest-courses",
        element: <LatestCourses />,



      },
      {
        path: "/project",
        element: <Projects />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/ebook",
        element: <Ebook />
      },
      {
        path: "/pricing",
        element: <Pricing />
      },
      {
        path: "/privacy",
        element: <Privacy />
      },
      {
        path: "/course-singleP",
        element: <CoursesSingleP />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forget-password",
    element: <ForgotPassword />,
  },
  {
    path: "/update-password",
    element: <UpdatePassword />,
  },
  {
    path: "/login/free",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
