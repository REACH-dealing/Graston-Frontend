import React, { useState } from "react";
import "./style.css";
import MintButton from "../../Common/MintButton";
import { Link } from "react-router-dom";
import { sendOTP } from "../../api/userApi/userApi";
function ForgotPasswordEmail() {
  const [email, setEmail] = useState("");

  const handleEmailValidation = async () => {
    try {
      const response = await sendOTP(email);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="forgotPasswordContainer">
      <div className="forgotPasswordContainer__items">
        <div className="mt-5 mb-3">
          <img
            src="/assets/images/forgot password-03.png"
            alt="forgot password"
            width={"182.8px"}
          />
        </div>
        <h4 className="forgotPasswordContainer__h4 fw-bolder mt-2">
          Forget password ?{" "}
        </h4>
        <p
          className="mt-4 forgotPasswordContainer__P text-center w-75"
          style={{ fontSize: "15px" }}
        >
          No worries! Please enter your Email, and we'll send you a code to
          reset your password.
        </p>
        <div className="d-flex flex-column emailForgot  mt-3">
          <label className="fw-bolder">Email</label>
          <input
            type="email"
            placeholder="abdullah@gmail.com"
            className="forgotEmail mt-3"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <Link to={"/VerifayEmail"} className="">
          <div className="sendCodeBtn mt-3 mb-3">
            <MintButton text={"Send Code"} />
          </div>
        </Link>
        <p className="mt-3 " style={{ color: "#2F9C95" }}>
          <span
            style={{ color: "#646464" }}
            className="me-2 text-decoration-none"
          >
            Or
          </span>{" "}
          <Link className="verifay" to={"/ForgotPassword"}>
            Verify using your Phone Number
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPasswordEmail;
