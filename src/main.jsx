import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import SignUp from "./routes/signup";
import "../StyleComponent/index.css";
import HRCreateProject from "./routes/HRCreateProject";
import ErrorPage from "./routes/errorPage";
import { Route } from "react-router-dom";
import RootLeyout from "./component/RootLeyout";
import UserMainPage from "./routes/UserMainPage";
import ForgetPassword from "./component/ForgetPassword";
import RegisterForm from "./routes/RegisterForm";
import RegisterPage from "./component/RegisterPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLeyout />}>
      <Route index element={<SignUp />} />
      <Route path="user" element={<SignUp />}/>

      <Route path="hr">
        <Route path="createproject" element={<HRCreateProject />} />
      </Route>
    
      <Route path="forgot" element={<ForgetPassword />} />
      <Route path="register" element={<RegisterPage />} />
    </Route>
  )
);

// [
//   {
//     path: "/",
//     element: <SignUp/>,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/hr/createproject",
//     element: <HRCreateProject />,
//     errorElement: <ErrorPage />,
//   }
// ]

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
