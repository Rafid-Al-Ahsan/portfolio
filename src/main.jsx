import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './components/Main.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import About from './components/About.jsx';
import ProjectDetails from './components/ProjectDetails.jsx';
import MainPage from './components/MainPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <MainPage></MainPage>,
      },
      {
        path: "projectdetails/:id",
        element: <ProjectDetails></ProjectDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/projects/${params.id}`)
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
