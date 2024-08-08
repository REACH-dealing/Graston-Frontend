import React from "react";
import "./style.css";
import MintButton from "../../Common/MintButton";
import { Link } from "react-router-dom";
function VerifayEmail() {
  return (
    <div className="verifayEmailContainer">
      <div className="verifayEmailContainer__items">
        <div className="mt-5 mb-3">
          <img
            src="/assets/images/forgot password-02.png"
            alt="verifay email"
            width={"182.8px"}
          />
        </div>
        <h4 className="verifayEmailContainer__h4 fw-bolder">
          Verify Your Email
        </h4>
        <p
          className="verifayEmailContainer__P text-center mt-4 "
          style={{ fontSize: "15px" }}
        >
          We’ve sent an email with an activation code to <br />{" "}
          abdullah@gmail.com.
        </p>
        <div className="verifayEmailContainer__inputs mt-3">
          <input />
          <input />
          <input />
          <input />
        </div>
        <Link to={"/RestPassword"}>
          <div className="mt-4 confirmCode">
            <MintButton text={"Confirm Code"} />
          </div>
        </Link>
        <p className="sendCode mt-4 mb-5">
          Send Code Again{" "}
          <span className="ms-5 text-decoration-none" style={{ color: "#000" }}>
            00:23
          </span>
        </p>
      </div>
    </div>
  );
}

export default VerifayEmail;
