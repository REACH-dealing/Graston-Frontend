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
            src="/assets/forgot password-03.png"
            alt="forgot password"
            width={"170px"}
          />
        </div>
        <h4 className="forgotPasswordContainer__h4 fw-bolder mt-2">
          Forget password ?{" "}
        </h4>
        <p
          className="mt-4 forgotPasswordContainer__P w-100 text-center"
          style={{ fontSize: "15px" }}
        >
          No worries! Please enter your Email, and we'll send you a code to
          reset your password.
        </p>
        <div className="d-flex flex-column emailForgot w-100 mt-3">
          <label className="fw-bolder">Email</label>
          <input
            type="email"
            placeholder="abdullah@gmail.com"
            className="forgotEmail w-100 mt-3"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <Link to={"/VerifayEmail"} className="w-100">
          <MintButton text={"Send Code"} onClick={handleEmailValidation} />
        </Link>
        <p className="mt-3 " style={{ color: "#2F9C95" }}>
          <span style={{ color: "#646464" }} className="me-2">
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
