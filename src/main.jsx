import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import '../StyleComponent/index.css';
import RegisterForm from './routes/RegisterForm';
import { AuthProvider } from './context/AuthProvider';
import Login from './component/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RegisterForm />,
  },
  {
    path: "/login",
    element: <Login/>,
  }
]);

/* ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
) */

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router}>
        <div>
        <AuthProvider>
          <Login />
        </AuthProvider>
        <RegisterForm />
        </div>
        
      </RouterProvider>
    </React.StrictMode>
  );
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
