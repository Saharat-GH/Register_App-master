import React from "react";
import Logo from "../assets/Logo.svg";
import { useState } from "react";
import LoginPopup from "./LoginPopup";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [login, setLogin] = useState(false);

  const openLogin = () => {
    setLogin(true);
  };
  const closeLogin = () => {
    setLogin(false);
  };
  return (
    <div>
      <header
        className="d-flex align-items-center justify-content-between py-3 mb-4 border-bottom"
        id="Nav"
      >
        <div className="col-md-3">
          <NavLink
            to="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <img src={Logo} alt="Your Logo" width="120" height="75" />
          </NavLink>
        </div>

        <div className="d-flex align-items-center ms-auto">
          <ul className="nav justify-content-center mb-md-0 me-3">
            <li>
              <NavLink
                to="/"
                className="nav-link px-2 text-warning"
              >
                Home
              </NavLink>
            </li>
          </ul>

          <div className="text-end">
            <button
              type="button"
              onClick={openLogin}
              className="btn btn-outline-warning me-2"
            >
              Login
            </button>
            {login && <LoginPopup showPopup={login} onClick={openLogin} onClose={closeLogin} />}
            <button
              type="button"
              className="btn btn-warning text-light link-dark "
            >
              Sign-up
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
