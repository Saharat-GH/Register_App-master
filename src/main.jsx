import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './login';
import SignUp from './routes/signup';
import '../StyleComponent/index.css';
import ErrorPage from './routes/errorPage';
import HRCreateProject from './routes/HRCreateProject';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/hr/createproject",
    element: <HRCreateProject />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
