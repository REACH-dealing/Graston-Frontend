import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function Navbar() {
  return (
    <div className='nav'>
      <nav className="navbar navbar-expand-lg ">
        <div>
        <a className="navbar-brand" href="/">جــــــــــراســــــــــــــتون</a>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About Us</a>
              {/* <a className="nav-link" href="/ForgotPassword">About Us</a> */}
              {/* <a className="nav-link" href="/ForgotPasswordEmail">About Us</a> */}
              {/* <a className="nav-link" href="/VerifayPhone">About Us</a> */}
              {/* <a className="nav-link" href="/VerifayEmail">About Us</a> */}
              {/* <a className="nav-link" href="/CreateNewPassword">About Us</a> */}
              {/* <a className="nav-link" href="/RestPassword">About Us</a> */}
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse navbar-nav mt-2" id="navbarNav">
          <p className="nav-item active">
          <a className="nav-link" href="LoginPage">Login</a></p>
          <p className="nav-item active"><a className="nav-link" href="RegisterPage">Sign Up</a></p>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <p>Language</p>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
