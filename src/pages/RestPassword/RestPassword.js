import React, { useState } from "react";
import "./style.css";
import MintButton from "../../Common/MintButton";
import Modal from "../../Common/Modal";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
function RestPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="restPasswordContainer">
      <div className="restPasswordContainer__items">
        <div className="mt-5 mb-3">
          <img
            src="/assets/images/forgot password-01.png"
            alt="reset password"
            width={"150px"}
          />
        </div>
        <h5 className="restPasswordContainer__items__h5 fw-bolder">
          Reset Password
        </h5>
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
              <label htmlFor="password" className="fw-bolder mb-3 mt-4">
                Password
              </label>
              <input
                id="password"
                placeholder="1234kk@2"
                type={passwordVisible ? "text" : "password"}
                required
                className="passwordFiled"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
              <span
                className="passwordToggleIcon"
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              >
                {confirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </form>
        </div>
        <div className="saveInfo">
          <MintButton text={"Save"} onClick={handleShowModal} />
        </div>
      </div>

      <Modal isOpen={showModal} onClose={handleCloseModal}>
        <img src="/assets/images/Group 481323.png" alt="modal" width={"110px"} />
        <p className="text-center mt-5">
          Your password has been changed successfully. Use the new password for
          future logins.
        </p>
        <Link to={"/LoginPage"}>
          <div className="modalLoginBtn">
            <MintButton text={"Login"} />
          </div>
        </Link>
      </Modal>
    </div>
  );
}

export default RestPassword;
