import React from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Modal from "../../../Common/Modal";
import { Link } from "react-router-dom";
import MintButton from "../../../Common/MintButton";
function Settings() {
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className={`settingsContainer ${showModal ? "modal-open" : ""}`}>
      <div></div>
      <div className="settingsContainer__item1">
        <h2 className="fw-bolder  mb-2">Contact Information</h2>
        <div className="bg-light contact-info">
          <label className="fw-bolder mb-2">Email</label>
          <div className="d-flex align-items-center">
            <input placeholder="Ahmed@gmail.com" className="emails me-4" />
            <button className="change-email" onClick={handleShowModal}>
              Change Email
            </button>
          </div>

          <label className="fw-bolder mb-4 mt-5">phone number</label>
          {/* <div> */}
          <div className="d-flex align-items-center">
            <div className="d-flex">
              <img
                src="/assets/images/Group 481318.png"
                alt="phone code"
                style={{ width: "33.23px", height: "24px" }}
              />
              <p style={{ width: "38px", height: "24px" }}>+966</p>
            </div>
            <input
              placeholder="Your Phone Number"
              className="enterPhoneNumber me-5"
            />
            <button>Change Phone Number</button>
          </div>
          {/* </div> */}
        </div>
        <h2 className="fw-bolder mt-5 mb-2">Security Settings</h2>
        <div className="bg-light security-settings">
          <div className="d-flex flex-column positionRelative">
            <label htmlFor="password" className="fw-bolder mb-3 mt-4">
              Password
            </label>
            <input
              id="password"
              placeholder="1234kk@2"
              type={passwordVisible ? "text" : "password"}
              required
              className="enter-password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <span
              className="password-ToggleIcon"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
        </div>
      </div>
      <Modal isOpen={showModal} onClose={handleCloseModal}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1>Change Email Address</h1>
          Please enter your new email address, and we'll send you a verification
          code.
          <form>
            <label>email</label>
            <input className="emails" placeholder="abdullah@gmail.com" />
            <MintButton text={"Send Code"} />
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default Settings;
