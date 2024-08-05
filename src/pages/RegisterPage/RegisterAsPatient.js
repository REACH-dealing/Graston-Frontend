import React, { useReducer, useState } from "react";
import "./RegisterPageStyle.css";
import { Button } from "react-bootstrap";
import MintButton from "../../Common/MintButton";
import { reducer } from "../../utils/patientReducer";
import { registerPatientApi } from "../../api/userApi/userApi";
import { useNavigate } from "react-router-dom";

function RegisterAsPatient() {
  const navigate = useNavigate(); // Navigate to different pages

  // const [state, dispatch] = useReducer(reducer, {
  //   user: {
  //     username: "asdkfslakje7348287adfhu132dsfwhrnfu898u38uujkjjnrnhih66",
  //   },
  // });

  // // useStates to handle email, password, number, and national id validation
  // const [validateEmail, setValidateEmail] = useState(false);
  // const [validatePassword, setValidatePassword] = useState(false);
  // const [validateId, setValidateId] = useState(false);
  // const [validateNumber, setValidateNumber] = useState(false);

  // // Handles the state of gender being choosen
  // const handleGender = (e) => {
  //   if (e.target.value === "M") {
  //     dispatch({ type: "gender", gender: "M" });
  //   } else {
  //     dispatch({ type: "gender", gender: "F" });
  //   }
  // };

  // // handles submtion of registeration form: Validation and API integration
  // const handleSubmit = async () => {
  //   if (Object.keys(state.user).length === 11) {
  //     console.log(Object.keys(state.user).length);
  //     console.log(state);
  //     try {
  //       const response = await registerPatientApi(state);
  //       console.log(response);
  //       navigate("/LoginPage");
  //       return response;
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   } else {
  //     console.log(Object.keys(state.user).length);
  //     console.log(state);
  //     console.log("You must fill all required fields");
  //   }
  // };

  const [formDate, setFormData] = useState({});

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
              onChange={(e) =>
                dispatch({ type: "firstName", fName: e.target.value })
              }
            />
          </div>
          <div className="d-flex flex-column">
            <label className="fw-bolder mb-2 lastName">Last Name</label>
            <input
              type="text"
              placeholder="Ahmed"
              onChange={(e) => {
                dispatch({ type: "lastName", lName: e.target.value });
              }}
              required
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
            type="number"
            required
            placeholder="3333111100005555"
            className="nationality"
            onChange={(e) => {
              dispatch({
                type: "national_id",
                national_id: e.target.value.toString(),
              });
              setValidateId(!state.user.national_id ? false : true);
            }}
            style={
              !validateId ? { border: "1px solid red" } : { border: "none" }
            }
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
          <input
            type="date"
            className="nationality"
            onChange={(e) => {
              dispatch({ type: "date_of_birth", birth: e.target.value });
            }}
          />
        </div>

        <div className="d-flex flex-column ">
          <div className="d-flex flex-column w-100 mt-3 mb-3">
            <label className="fw-bolder mt-5 mb-2">Phone Number</label>
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center align-items-center rounded-2 phoneCode">
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
                  onChange={(e) => {
                    dispatch({
                      type: "phoneNumber",
                      phoneNumber: e.target.value.toString(),
                    });
                    setValidateNumber(!state.user.phone_number ? false : true);
                  }}
                  style={
                    !validateNumber
                      ? { border: "1px solid red" }
                      : { border: "none" }
                  }
                />
              </div>
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
        <div className="d-flex flex-column">
          <label className="mt-5 mb-2 fw-bolder">
            Chronic Diseases (optional)
          </label>
          <div className="d-flex justify-content-between w-100">
            <input className="Diseases" type="file" />
            <span className="addDiseases rounded-2 text-center">+</span>
          </div>
        </div>
        <div className="d-flex flex-column">
          <label className="mt-5 mb-2 fw-bolder">
            Medical Report (optional)
          </label>
          <div className="d-flex justify-content-between w-100">
            <input className="Diseases rounded-2" type="file" />
            <span className="addDiseases rounded-2 text-center">+</span>
          </div>
        </div>
        <p className="text-center p fw-bolder mt-5">
          By continuing, you agree graston's{" "}
          <span className="span">Terms of use</span> And{" "}
          <span className="span">privacy policy</span>
        </p>
        <div className="RegisterBtn">
          <MintButton text={"Register"} onClick={handleSubmit} />
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
        <Button className="facebookBtn fw-bolder d-block mt-5">
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
