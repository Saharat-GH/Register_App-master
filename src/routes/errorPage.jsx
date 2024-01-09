import NavBar from "../component/navBar";
import Footer from "../component/footer";
import { NavLink, Link, useRouteError } from "react-router-dom";
function ErrorPage() {
  return (
    <div className="Body">
      <NavBar />
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Oops!</h1>
        <h2>Something went wrong.</h2>
        <p>
          We're sorry, but there seems to be an error. Please try again later.
        </p>
        <Link to={"/"}>Back to Home</Link>
        <p>
          {/* <i>{error.statusText || error.message}</i> */}
        </p>
      </div>
      <Footer />
    </div>
  );
}
export default ErrorPage;
