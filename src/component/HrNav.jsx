import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../assets/Logo.svg";

export default function HrNav() {
  return (
    <div>
      <header
        className="d-flex align-items-center justify-content-between py-1 mb-5 border- bg-dark"
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
                to="/hr"
                className="nav-link px-2 text-warning link-secondary"
              >
                Home
              </NavLink>
            </li>
          </ul>
          </div>
          <div className="d-flex align-items-center">
          <ul className="nav justify-content-center mb-md-0 me-3">
            <li>
              <NavLink
                to="/createproject"
                className="nav-link px-2 text-warning link-secondary"
              >
                Account
              </NavLink>
            </li>
          </ul>
          </div>
        
        </header>
    </div>
  )
}
