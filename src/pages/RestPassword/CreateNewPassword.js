import React from 'react';
import "./style.css";
import MintButton from '../../Common/MintButton';
function CreateNewPassword() {
  return (
    <div className='RestPasswordContainer'>
      <div className='RestPasswordContainer__items'>
        <div className='mt-5 mb-3'>
          <img src='/assets/forgot password-01.png' alt='Rest password' width={"170px"}/>
        </div>
        <h5  className='RestPasswordContainer__h5 fw-bolder mt-2'>Create New Password </h5>
        <div className='formContainer mt-4'>
            <form className='RestPasswordForm'>
                <div className='d-flex flex-column'>
                    <label for='oldPassowrd' className='fw-bolder mb-2'>Old Password</label>
                    <input id='oldPassword' placeholder='1234kk@2' className='RestPasswordForm__input'/>
                </div>
                <div className='align-self-end mt-2'>
                    <p style={{color:"#2F9C95"}} className=' mt-1'>Forgot Password?</p>
                </div>
                <div className='d-flex flex-column'>
                    <label for='NewPassowrd' className='fw-bolder mb-2 mt-4'>New Password</label>
                    <input id='NewPassword' placeholder='1234kk@2' className='RestPasswordForm__input'/>
                </div>
                <div className='d-flex flex-column'>
                    <label for='ConfirmPassowrd' className='fw-bolder mb-2 mt-4'>Confirm Password</label>
                    <input id='ConfirmPassword' placeholder='1234kk@2' className='RestPasswordForm__input'/>
                </div>
                <div className='saveInfo mb-4'>
                    <MintButton text={'Save'}/>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default CreateNewPassword;