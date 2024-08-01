import React from "react";
import "./RegisterPageStyle.css";
import { Button } from "react-bootstrap";
import MintButton from "../../Common/MintButton";
function RegisterAsPatient() {
  return (
    <div className="registerAsPatient">
      <h2 className="text-center">جــــــــــراســــــــــــــتون</h2>
      <p className="fw-bolder text-center mb-5 mt-3">Register as Patient </p>
      <form className="d-flex justify-content-center align-items-center flex-column">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column">
            <label className="fw-bolder mb-2">First Name</label>
            <input
              type="text"
              placeholder="Abdullah"
              required
              className="me-3"
            />
          </div>
          <div className="d-flex flex-column">
            <label className="fw-bolder mb-2 lastName">Last Name</label>
            <input type="text" placeholder="Ahmed" required />
          </div>
        </div>
        <div className="d-flex flex-column x">
          <label className="fw-bolder mt-5 mb-2">Email</label>
          <input
            type="email"
            required
            placeholder="Abdullah@gmail.com"
            className="email"
          />
        </div>
        <div className="d-flex flex-column x">
          <label className="fw-bolder mt-5 mb-2">Password</label>
          <input
            type="password"
            required
            placeholder="1234kk@2"
            className="password"
          />
        </div>
        <div className="d-flex flex-column">
          <label className="fw-bolder mt-5 mb-2">Nationality ID</label>
          <input
            type=""
            required
            placeholder="3333111100005555"
            className="nationality"
          />
        </div>
        <div className="d-flex flex-column">
          <label className="fw-bolder mt-5 mb-2">Nationality</label>
          <select className="nationality">
            <option></option>
            <option></option>
            <option></option>
          </select>
        </div>
        <div className="d-flex flex-column">
          <label className="fw-bolder mt-5 mb-2">Date Of Birth</label>
          <input type="date" className="nationality" />
        </div>

        <div className="d-flex flex-column ">
          <div className="d-flex flex-column w-100 mt-3 mb-3">
            <label className="fw-bolder mt-5 mb-2">Phone Number</label>
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center align-items-center phoneCode">
                <img
                  src="/assets/Group 481318.png"
                  className="pb-2"
                  width={"25px"}
                  alt="phone number"
                />
                <p className="pt-1 ms-1 me-3">+966</p>
              </div>
              <div className="phoneNumber">
                <input
                  type="number"
                  placeholder="Your Phone Number"
                  className="phone"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between mt-5">
          <div className="d-flex flex-column">
            <label className="fw-bolder mb-2">Country</label>
            <input className="country" />
          </div>
          <div className="d-flex flex-column cityItem">
            <label className="fw-bolder mb-2">city</label>
            <input className="city" />
          </div>
        </div>
        <div className="mt-3">
          <label className="fw-bolder mt-5 mb-2">Gender</label>
          <div className="d-flex w-100 pt-3 pb-3 ps-2">
            <div className="d-flex align-items-center me-5">
              <input type="radio" className="" />
              <label className="ms-3" style={{ color: "#4A525A" }}>
                Female
              </label>
            </div>
            <div className="d-flex align-items-center">
              <input type="radio" className="me-3" />
              <label style={{ color: "#4A525A" }}>Male</label>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column">
          <label className="mt-5 mb-2 fw-bolder">
            Chronic Diseases (optional)
          </label>
          <div className="d-flex justify-content-between w-100">
            <input className="Diseases" type="file" />
            <span className="addDiseases rounded-3 text-center">+</span>
          </div>
        </div>
        <div className="d-flex flex-column">
          <label className="mt-5 mb-2 fw-bolder">
            Medical Report (optional)
          </label>
          <div className="d-flex justify-content-between w-100">
            <input className="Diseases rounded-3" type="file" />
            <span className="addDiseases rounded-3 text-center">+</span>
          </div>
        </div>
        <p className="text-center p fw-bolder mt-5">
          By continuing, you agree graston's{" "}
          <span className="span">Terms of use</span> And{" "}
          <span className="span">privacy policy</span>
        </p>
        <div className="RegisterBtn">
          <MintButton text={"Register"} />
        </div>
        <h6 className="mt-3">OR</h6>
        <Button variant="light" className="fw-bolder d-block googleBtn mt-4">
          <img
            src="/assets/Vector (1).png"
            className="me-3"
            width={"22px"}
            alt="google"
          />
          Login With Google
        </Button>
        <Button className=" facebookBtn fw-bolder d-block mt-5">
          <img
            src="/assets/facebook icon.png"
            className="me-3"
            width={"22px"}
            alt="facebook"
          />
          Login With Facebook
        </Button>
      </form>
    </div>
  );
}
export default RegisterAsPatient;
