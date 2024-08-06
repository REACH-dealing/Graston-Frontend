import React, { useState } from "react";
import "./LoginPageStyle.css";
import { Button } from "react-bootstrap";
import MintButton from "../../Common/MintButton";
import LightBtn from "../../Common/LightBtn";
import { Link } from "react-router-dom";
import { loginApi } from "../../api/userApi/userApi";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function LoginPage() {
  const emailRe = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const passwordRe =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); 

  const handleLogin = async () => {
    if (!emailRe.test(email) || !passwordRe.test(password)) {
      alert("Please enter a valid email address or password.");
    } else {
      setLoading(true);
      try {
        const response = await loginApi({ email, password });
        console.log(response);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        alert("Email or Password are incorrect");
        setLoading(false);
      }
    }
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
            <form action="" className="loginForm">
              <div className="d-flex flex-column">
                <label htmlFor="email" className="fw-bolder mb-3">Email</label>
                <input
                  id="email"
                  placeholder="Enter Your Email"
                  type="email"
                  required
                  className="emailFiled"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="d-flex flex-column position-relative">
                <label htmlFor="password" className="fw-bolder mb-3 mt-4">Password</label>
                <input
                  id="password"
                  placeholder="1234kk@2"
                  type={passwordVisible ? "text" : "password"}
                  required
                  className="passwordFiled"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <span
                  className="passwordToggleIcon"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>

              <div className="d-flex justify-content-between align-self-start mt-4">
                <div className="">
                  <p className="fw-bolder mt-2">
                    <Link to={"/ForgotPassword"}>Forgot Password?</Link>
                  </p>
                </div>
              </div>
              <div className="loginBtn">
                <MintButton text="Login" onClick={handleLogin} />
              </div>
              <h6 className="fw-bolder mt-5">OR</h6>
              <Button variant="light" className="fw-bolder d-block googleBtn mt-4">
                <img
                  src="/assets/images/google.png"
                  className="me-3"
                  width={"22px"}
                  alt="google"
                />
                Login With Google
              </Button>
              <Button className="facebookBtn fw-bolder d-block mt-4">
                <img
                  src="/assets/images/facebook icon.png"
                  className="me-3"
                  width={"22px"}
                  alt="facebook"
                />
                Login With Facebook
              </Button>
            </form>
          </div>
        </div>
        <div className="loginPageContainer__item2 p-5">
          <h5 className="fw-bolder text-light">New Here?</h5>
          <p className="text-center fw-lighter mt-5">
            Enter your personal details and start journey with us{" "}
          </p>
          <Link to={"/RegisterPage"} className="mt-4">
            <div className="loginBtn">
              <LightBtn text={"Register"} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
