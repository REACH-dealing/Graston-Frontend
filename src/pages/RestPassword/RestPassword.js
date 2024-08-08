import React, { useState } from "react";
import "./style.css";
import MintButton from "../../Common/MintButton";
import Modal from "../../Common/Modal";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { confirmPasswordReset } from "../../api/userApi/authApi";
import { useSelector } from "react-redux";

function RestPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  // There is no use of this now
  // const handleShowModal = () => {
  //   setShowModal(true);
  // };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const userID = useSelector((state) => state.userID["user_id"]); // Get user ID from redux store

  // Handle new password (NO VALIDATION YET)
  const handleConfirmPassword = async () => {
    if (password === confirmPassword) {
      try {
        const response = await confirmPasswordReset(userID, password);
        console.log(response.data);
        setShowModal(true);
        navigate("/loginPage");
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("Password and confirm password are not the same");
    }
  };

  return (
    <div className={`restPasswordContainer ${showModal ? "modal-open" : ""}`}>
      <div className="restPasswordContainer__items">
        <div className="mb-3">
          <img
            src="/assets/images/forgot password-01.png"
            alt="reset password"
            width={"182.8px"}
          />
        </div>
        <h4 className="restPasswordContainer__items__h5 fw-bolder">
          Reset Password
        </h4>
        <p className="restPasswordContainer__items__p text-center w-75 mt-3">
          Please enter a new password, at least 8 characters long and different
          from the old one.
        </p>
        <div className="mt-4">
          <form>
            <div className="d-flex flex-column position-relative">
              <label htmlFor="password" className="fw-bolder mb-3 mt-4">
                Password
              </label>
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
            <div className="d-flex flex-column position-relative">
              <label htmlFor="confirmPassword" className="fw-bolder mb-3 mt-4">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                placeholder="1234kk@2"
                type={confirmPasswordVisible ? "text" : "password"}
                required
                className="passwordFiled"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
              <span
                className="passwordToggleIcon"
                onClick={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
              >
                {confirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </form>
        </div>
        <div className="saveInfo">
          <MintButton text={"Save"} onClick={handleConfirmPassword} />
        </div>
      </div>

      <Modal isOpen={showModal} onClose={handleCloseModal}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img
            src="/assets/images/Group 481323.png"
            alt="modal"
            className="mt-5"
            width={"106.57px"}
          />
          <p className="mt-5 text-center">
            Your password has been changed successfully. Use the new password
            for future logins.
          </p>
          <Link to={"/LoginPage"}>
            <div className="modalLoginBtn">
              <MintButton text={"Login"} />
            </div>
          </Link>
        </div>
      </Modal>
    </div>
  );
}

export default RestPassword;
