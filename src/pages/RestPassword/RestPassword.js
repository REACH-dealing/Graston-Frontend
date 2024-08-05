import React, { useState } from 'react';
import "./style.css";
import MintButton from '../../Common/MintButton';
import Modal from '../../Common/Modal';
import { Link } from 'react-router-dom';
function RestPassword() {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    
    return (
        <div className='restPasswordContainer'>
            <div className='restPasswordContainer__items'>
                <div className='mt-5 mb-3'>
                    <img src='/assets/forgot password-01.png' alt='reset password' width={"170px"} />
                </div>
                <h5 className='restPasswordContainer__items__h5 fw-bolder'>Reset Password</h5>
                <p className='restPasswordContainer__items__p text-center w-75 mt-3'>
                    Please enter a new password, at least 8 characters long and different from the old one.
                </p>
                <div className='mt-4'>
                    <form>
                        <div className='d-flex flex-column'>
                            <label className='fw-bolder mb-3'>Password</label>
                            <input placeholder='1234kk@2' className='restPassword' type='password' />
                        </div>
                        <div className='d-flex flex-column'>
                            <label className='fw-bolder mb-3 mt-5'>Confirm Password</label>
                            <input placeholder='1234kk@2' className='restPassword' type='password' />
                        </div>
                    </form>
                </div>
                <div className='saveInfo'>
                    <MintButton text={"Save"} onClick={handleShowModal} />
                </div>
            </div>

            <Modal isOpen={showModal} onClose={handleCloseModal}>
                <img src='/assets/Group 481323.png' alt='modal' width={"110px"}/>
                <p className='text-center mt-5'>Your password has been changed successfully. Use the new password for future logins.</p>
                <Link to={'/LoginPage'}>
                  <div className='modalLoginBtn'>
                    <MintButton text={'Login'}/>
                  </div>
                </Link>
            </Modal>
        </div>
    );
}

export default RestPassword;
