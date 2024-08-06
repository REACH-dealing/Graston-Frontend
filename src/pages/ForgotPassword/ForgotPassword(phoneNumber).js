import React from "react";
import "./style.css";
import MintButton from "../../Common/MintButton";
import { Link } from "react-router-dom";
function ForgotPassword() {
  return (
    <div className="forgotPasswordContainer">
      <div className="forgotPasswordContainer__items">
        <div className="mt-5 mb-3">
          <img
            src="/assets/images/forgot password-03.png"
            alt="forgot password"
            width={"150px"}
          />
        </div>
        <h4 className="forgotPasswordContainer__h4 mt-2 fw-bolder">
          Forgot password ?{" "}
        </h4>
        <p
          className="forgotPasswordContainer__p text-center mt-4"
          style={{ fontSize: "15px" }}
        >
          No worries! Please enter your phone number, and we'll send you a code
          to reset your password.
        </p>
        <div className="d-flex flex-column">
          <label className=" mt-3 mb-2 fw-bolder">Phone Number</label>
          <div className="d-flex mt-3 mb-3">
            <div className="d-flex align-items-center justify-content-center forgotPasswordContainer__phoneCode">
              <img
                src="/assets/images/Group 481318.png"
                width={"30px"}
                className="ms-3 mb-1"
                alt="forgot password"
              />
              <p className=" mt-2 ms-1 me-3" style={{ color: "#000" }}>
                +966
              </p>
            </div>
            <div className="">
              <input
                // type="number"
                placeholder="Your Phone Number"
                className="forgotPasswordContainer__phone "
              />
            </div>
          </div>
        </div>
        <Link to={"/VerifayPhone"}>
          <div className="sendCodeBtn mt-3 mb-3">
            <MintButton text={"Send Code"} />
          </div>
        </Link>

        <p className="mt-3 mb-4" style={{ color: "#2F9C95" }}>
          <span
            className="text-decoration-none me-2"
            style={{ color: "#646464" }}
          >
            Or
          </span>{" "}
          <Link to={"/ForgotPasswordEmail"} className="verifay">
            Verify using your email address
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
