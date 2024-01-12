import React from "react";
import NavBar from "../component/navBar";
import { Link } from "react-router-dom";
import '../../StyleComponent/index.css';
function ErrorPage() {
  return (
    <div className="Body">
      <div className="container mt-5">
        <div className="text-center p-4 d-flex">
          <h1 className="display-4">Oops!</h1>
          <h2 className="display-5">Something went wrong.</h2>
          <p className="lead">
            We're sorry, but there seems to be an error. Please try again later.
          </p>
          <Link to="/" className="btn btn-warning text-light link-dark">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ErrorPage;