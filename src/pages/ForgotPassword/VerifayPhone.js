import React from "react";
import "./style.css";
import MintButton from "../../Common/MintButton";
import { Link } from "react-router-dom";
function VerifayPhone() {
  return (
    <div className="VerifayPhoneContainer">
      <div className="VerifayPhoneContainer__items">
        <div className="mt-5 mb-4">
          <img
            src="/assets/images/Frame 49.png"
            alt="verifay phone number"
            width={"150px"}
          />
        </div>
        <h4 className="VerifayPhoneContainer__h4">Verify Your Phone Number</h4>
        <p
          className="VerifayPhoneContainer__p text-center mt-4"
          style={{ fontSize: "15px" }}
        >
          We've sent a SMS to +99633332222114 to confirm your account.
        </p>
        <div className="VerifayPhoneContainer__inputs">
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
        <p className="sendCode mt-4">
          Send Code Again{" "}
          <span className="ms-5 text-decoration-none" style={{ color: "#000" }}>
            00:23
          </span>
        </p>
      </div>
    </div>
  );
}

export default VerifayPhone;
