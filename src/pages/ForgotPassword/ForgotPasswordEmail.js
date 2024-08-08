import React, { useState } from "react";
import "./style.css";
import MintButton from "../../Common/MintButton";
import { Link, useNavigate } from "react-router-dom";
import { forgetPassword } from "../../api/userApi/authApi";
import { useDispatch } from "react-redux";
import { setUserID, setUserEmail } from "../../features/userID/userIDSlice";

function ForgotPasswordEmail() {
  const [email, setEmail] = useState(""); // Store Email That The User Inputs
  const dispatch = useDispatch(); // Dispatch Actions From Redux toolkit
  const navigate = useNavigate(); // Navigate To Other Pages

  // Handle Sending To The Email The OTP Code To Confirm Ownership
  const handleEmail = async () => {
    try {
      const response = await forgetPassword({ email: email });
      console.log(response.data.user_id);
      dispatch(setUserID(response.data.user_id));
      dispatch(setUserEmail(email));
      navigate("/VerifayEmail");
    } catch (error) {
      console.log("Error Sending OTP Code To Your Email ,", error.message);
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
        {/* <Link to={"/VerifayEmail"} className=""> */}
        <div className="sendCodeBtn mt-3 mb-3">
          <MintButton text={"Send Code"} onClick={handleEmail} />
        </div>
        {/* </Link> */}
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
