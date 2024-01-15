import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./login";
import SignUp from "./routes/signup";
import "../StyleComponent/index.css";
import HRCreateProject from "./routes/HRCreateProject";
import ErrorPage from "./routes/errorPage";
import { Route } from "react-router-dom";
import RootLeyout from "./component/RootLeyout";
import UserMainPage from "./routes/UserMainPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLeyout />}>
        <Route index element={<SignUp />} />
      <Route path="user" element={<SignUp />}>
        <Route path="main" element={<UserMainPage />} />
      </Route>
      <Route path="hr">
        <Route path="createproject" element={<HRCreateProject />} />
      </Route>
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