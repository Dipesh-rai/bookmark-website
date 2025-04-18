import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "./../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "./scss/base/variable.scss"
import "./scss/base/common.scss"
import "./scss/component/header.scss"
import App from './App.jsx'
import Real_State from "./pages/Real_State.jsx";
import Jobs from "./pages/Jobs.jsx";
import Blog from "./pages/Blog.jsx";
import News from "./pages/News.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./component/Login.jsx";
import Register from "./component/Register.jsx";
import Inner from "./pages/products/Inner.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/real-estate",
    element: <Real_State />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/blogs",
    element: <Blog />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element:<Login />
  },
  {
    path: "/register",
    element:<Register />
  },
  {
    path: "/*",
    element:<Inner />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />

  </StrictMode>,
)
