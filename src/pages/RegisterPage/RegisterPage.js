import React, { useState } from "react";
import "./RegisterPageStyle.css";
import { Link, useNavigate } from "react-router-dom";
import LightBtn from "../../Common/LightBtn";
import MintButton from "../../Common/MintButton";

function RegisterPage() {
  const [identity, setIdentity] = useState("");
  const navigate = useNavigate();
  const handleIdentity = () => {
    if (identity === "Patient") {
      navigate("/RegisterAsPatient");
    } else if (identity === "Physiotherapist") {
      navigate("/RegisterAsDoctor");
    } else {
      alert("Choose Your Identity To Proceed");
    }
  };
  return (
    <div className="containers">
      <div className="registetrPageContainer">
        <div className="registetrPageContainer__item1 text-center p-2 p-md-3 p-lg-5">
          <h5 className="text-light fw-bolder mb-5 w-100">Welcome Back</h5>
          <p className="text-center fw-lighter w-100">
            To keep connected with us please login with your personal info{" "}
          </p>
          <Link to={"/LoginPage"} className="loginBtnContainer w-100 mt-5">
            <LightBtn text={"Login"} />
          </Link>
        </div>
        <div className="registerPageContainer__item2">
          <div>
            <h3 className="text-center">جــــــــــراســــــــــــــتون</h3>
            <p className="mt-3 fw-bolder registetrPageContainer__item2__p text-center mt-5">
              Your path to wellness starts here. <br />
              Sign up as a therapist or patient and enjoy personalized massage
              therapy sessions.
            </p>
          </div>
          <div className="d-flex mt-5">
            <div className=" position-relative me-3 mt-5">
              <img
                src="/assets/patient.png"
                alt="patient"
                className="patient-img"
              />
              <div className="patient">
                <p className="fw-bolder">Patient</p>
                <input
                  type="radio"
                  className="radioBtn"
                  name="identity"
                  onClick={() => setIdentity("Patient")}
                />
              </div>
            </div>
            <div className="position-relative mt-5">
              <img
                src="/assets/physiotherapist.png"
                alt="physiotherapist"
                className="physiotherapist-img"
              />
              <div className="physiotherapist">
                <p className="fw-bolder ms-2">Physiotherapist</p>
                <input
                  type="radio"
                  name="identity"
                  onClick={() => setIdentity("Physiotherapist")}
                />
              </div>
            </div>
          </div>
          <div className="contunueBtn mt-5">
            <MintButton text={"Continue"} onClick={handleIdentity} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegisterPage;
