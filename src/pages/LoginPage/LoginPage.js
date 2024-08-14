import React, { useState } from "react";
import "./LoginPageStyle.css";
import { Button } from "react-bootstrap";
import MintButton from "../../Common/MintButton";
import LightBtn from "../../Common/LightBtn";
import { Link } from "react-router-dom";
import { loginApi, logout } from "../../api/userApi/authApi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getPatientData } from "../../api/userApi/profileApi";
import { Cookie } from "@mui/icons-material";
import Cookies from "js-cookie";

function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
  });

  const onSubmit = async (values) => {
    console.log("Form data", values);
    // Handle form submission
    setLoading(true);
    try {
      const response = await loginApi({
        email: values["email"],
        password: values["password"],
      });
      console.log(response);
      setLoading(false);
      localStorage.setItem("access", response.data.access);
      console.log(response.data.access);
      // console.log(document.cookie);
      // sessionStorage.setItem("access", response.data.access);
    } catch (error) {
      console.log(error.message);
      alert("Email or Password are incorrect");
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    const response = await logout();
    console.log(response);
    // const csrf = Cookies.get("access");
    // console.log(csrf);
  };

  return (
    <div className="position-relative">
      {loading ? (
        <div className="loaderContainer">
          <div className="loader"></div>
        </div>
      ) : null}
      <div className="loginPageContainer">
        <div className="loginPageContainer__item1">
          <h3 className="text-center mb-4">جــــــــــراســــــــــــــتون</h3>
          <h5 className="text-center mt-3 fw-bolder mb-5">Welcome back!</h5>
          <div className="loginFormContainer">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ setFieldValue }) => (
                <Form>
                  <div>
                    <label htmlFor="email">Email</label>
                    <Field type="email" id="email" name="email" />
                    <ErrorMessage
                      className="text-danger w-100"
                      name="email"
                      component="div"
                    />
                  </div>
                  <div className="position-relative m-0">
                    <label htmlFor="password">Password</label>
                    <Field
                      type={passwordVisible ? "text" : "password"}
                      id="password"
                      name="password"
                      className="passwordFiled"
                    />
                    <span
                      className="passwordToggleIcon"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                  <ErrorMessage
                    className="text-danger w-100"
                    name="password"
                    component="div"
                  />
                  <div className="d-flex justify-content-between align-self-start m-0">
                    <div className="m-0">
                      <p className="fw-bolder mt-2">
                        <Link
                          to={"/ForgotPassword"}
                          className="text-decoration-none"
                        >
                          Forgot Password?
                        </Link>
                      </p>
                    </div>
                  </div>
                  <MintButton btnType="submit" text="Login" />
                </Form>
              )}
            </Formik>
            <div className="separator fw-bold fs-4">OR</div>
            <div className="loginWith">
              <div className="loginWithGoogle mb-5">Login with Google</div>
              <div className="loginWithFacebook">Login with Facebook</div>
            </div>
          </div>
        </div>
        <div className="loginPageContainer__item2 p-5">
          <h5 className="fw-bolder text-light">New Here?</h5>
          <p className="text-center fw-lighter mt-5">
            Enter your personal details and start journey with us{" "}
          </p>
          {/* <Link to={"/RegisterPage"} className="mt-4"> */}
          <div className="loginBtn">
            <MintButton text={"Register"} onClick={handleLogout} />
          </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
