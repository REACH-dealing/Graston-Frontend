import React, { useState } from "react";
import "./RegisterPageStyle.css";
import { Button } from "react-bootstrap";

function RegisterAsPatient() {
  const [selectGender, setGender] = useState("");
  const handleGenderType = (gender) => {
    setGender(gender);
  };

  return (
    <div className="registerAsPatient">
      <h2 className="text-center">جــــــــــراســــــــــــــتون</h2>
      <p className="fw-bolder text-center mb-5 mt-3">Register as Patient </p>
      <form>
        <div className="EnterNameItems">
          <div className="d-flex flex-column">
            <label className="fw-bolder mb-2 label">First Name</label>
            <input
              type="text"
              placeholder="Abdullah"
              required
              className="nameInput me-3"
            />
          </div>
          <div className="d-flex flex-column">
            <label className="fw-bolder mb-2 lastName label">Last Name</label>
            <input
              type="text"
              placeholder="Ahmed"
              required
              className="nameInput"
            />
          </div>
        </div>
        <div className="d-flex flex-column x">
          <label className="fw-bolder mt-5 mb-2">Email</label>
          <input
            type="email"
            required
            placeholder="Abdullah@gmail.com"
            className="email"
            onChange={(e) => {
              dispatch({ type: "email", email: e.target.value });
              setValidateEmail(!state.user.email ? false : true);
            }}
            style={
              !validateEmail ? { border: "1px solid red" } : { border: "none" }
            }
          />
        </div>
        <div className="d-flex flex-column x">
          <label className="fw-bolder mt-5 mb-2">Password</label>
          <input
            type="password"
            required
            placeholder="1234kk@2"
            className="password"
            onChange={(e) => {
              dispatch({ type: "password", password: e.target.value });
              setValidatePassword(!state.user.password ? false : true);
            }}
            style={
              !validatePassword
                ? { border: "1px solid red" }
                : { border: "none" }
            }
          />
        </div>
        <div className="d-flex flex-column">
          <label className="fw-bolder mt-5 mb-2">Nationality ID</label>
          <input
            type=""
            required
            placeholder="3333111100005555"
            className="nationality"
            id="Id"
          />
        </div>
        <div className="d-flex flex-column">
          <label className="fw-bolder mt-5 mb-2">Nationality</label>
          <select
            className="nationality"
            onChange={(e) => {
              dispatch({ type: "nationality", nationality: e.target.value });
            }}
          >
            <option disabled selected>
              Choose Your Nationality
            </option>
            <option>Saudi Arabian</option>
            <option>Egyption</option>
            <option>Algerian</option>
          </select>
        </div>
        <div className="d-flex flex-column">
          <label className="fw-bolder mt-5 mb-2">Date Of Birth</label>
          <input type="date" className="dates" />
        </div>

        <div className="d-flex flex-column ">
          <label className="fw-bolder mt-5 mb-2">Phone Number</label>
          <div className="d-flex  mt-3 mb-3">
            <div className="d-flex align-items-center justify-contenr-center phoneCode">
              <img
                src="/assets/Group 481318.png"
                className="pb-2 "
                width={"25px"}
                alt="phone number"
              />
              <p className="pt-1 ms-1 me-3 fw-bolder">+966</p>
            </div>
            <div>
              <input
                type=""
                placeholder="Your Phone Number"
                className="phone ms-3"
              />
            </div>
          </div>
        </div>
        <div className="enterCity">
          <div className="d-flex flex-column">
            <label className="fw-bolder mt-3 mb-2">Country</label>
            <input className="country me-3" />
          </div>
          <div className="d-flex flex-column cityItem">
            <label className="fw-bolder mt-3 mb-2">city</label>
            <input className="city" />
          </div>
        </div>
        <div>
          <label className="fw-bolder mt-3 mb-2">Gender</label>
          <div className="d-flex ">
            <div className="mt-3 ms-4">
              <input
                type="radio"
                checked={selectGender === "female"}
                onClick={() => handleGenderType("female")}
                className=""
              />
              <label className="ms-3" style={{ color: "#4A525A" }}>
                Female
              </label>
            </div>
            <div className="ms-5">
              <input
                type="radio"
                className=""
                checked={selectGender === "male"}
                onClick={() => handleGenderType("male")}
              />
              <label className="ms-3 mt-3" style={{ color: "#4A525A" }}>
                Male
              </label>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between mt-5">
          <div className="d-flex flex-column">
            <label className="fw-bolder mb-2">Country</label>
            <input
              className="country"
              onChange={(e) => {
                dispatch({
                  type: "country",
                  country: e.target.value,
                });
              }}
            />
          </div>
          <div className="d-flex flex-column cityItem">
            <label className="fw-bolder mb-2">city</label>
            <input
              className="city"
              onChange={(e) => {
                dispatch({
                  type: "city",
                  city: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="mt-3">
          <label className="fw-bolder mt-5 mb-2">Gender</label>
          <div className="d-flex w-100 pt-3 pb-3 ps-2">
            <div className="d-flex align-items-center me-5">
              <input
                type="radio"
                name="gender"
                className=""
                value="M"
                onClick={handleGender}
                d
              />
              <label
                className="ms-3"
                name="gender"
                style={{ color: "#4A525A" }}
              >
                Female
              </label>
            </div>
            <div className="d-flex align-items-center">
              <input
                type="radio"
                className="me-3"
                name="gender"
                value="M"
                onClick={handleGender}
              />
              <label style={{ color: "#4A525A" }}>Male</label>
            </div>
          </div>
        </div>
        <h6 className="mt-3">OR</h6>
        <Button variant="light" className="fw-bolder d-block googleBtn mt-4">
          <img
            src="/assets/google.png"
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
