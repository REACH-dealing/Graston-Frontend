import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function Navbar() {
  return (
    <div className="nav">
      <nav className="navbar navbar-expand-lg bg-white p-3 rounded-2">
        <div>
          <a className="navbar-brand" href="/">
            جــــــــــراســــــــــــــتون
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse w-100 ms-4" id="navbarNav">
          <ul className="navbar-nav d-flex justify-content-center w-100">
            <li className="nav-item active me-3 me-xxl-5">
              <a className="nav-link" href="/">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item me-3 me-xxl-5">
              <a className="nav-link" href="/">
                Shop
              </a>
            </li>
            <li className="nav-item me-3 me-xxl-5">
              <a className="nav-link" href="/">
                About Us
              </a>
              {/* <a className="nav-link" href="/ForgotPassword">About Us</a> */}
              {/* <a className="nav-link" href="/ForgotPasswordEmail">About Us</a> */}
              {/* <a className="nav-link" href="/VerifayPhone">About Us</a> */}
              {/* <a className="nav-link" href="/VerifayEmail">About Us</a> */}
              {/* <a className="nav-link" href="/CreateNewPassword">About Us</a> */}
              {/* <a className="nav-link" href="/RestPassword">About Us</a> */}
            </li>
            <li className="nav-item me-3 me-xxl-5">
              <a className="nav-link disabled" href="/">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div
          className="collapse navbar-collapse navbar-nav justify-content-center"
          id="navbarNav"
        >
          <p className="nav-item active me-3 text-center">
            <a className="nav-link" href="LoginPage">
              Login
            </a>
          </p>
          <p className="nav-item active">
            <a className="nav-link" href="RegisterPage">
              Register
            </a>
          </p>
        </div>

        <div className="collapse navbar-collapse ms-5 ps-5" id="navbarNav">
          <p className="m-0">Language</p>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
