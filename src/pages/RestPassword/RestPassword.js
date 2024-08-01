import React from 'react';
import "./style.css";
import MintButton from '../../Common/MintButton';
function RestPassword() {
  return (
    <div className='restPasswordContainer'>
        <div className='restPasswordContainer__items'>
            <div className='mt-5 mb-3'>
                <img src='/assets/forgot password-01.png' alt='rest papssword' width={"170px"}/>
            </div>
            <h5 className='restPasswordContainer__items__h5 fw-bolder'>Reset Password</h5>
            <p className='restPasswordContainer__items__p text-center mt-3'>Please enter a new password, at  least 8 characters long and different from the old one.</p>
            <div>
                <form>
                    <div className='d-flex flex-column'>
                        <label className='fw-bolder mb-3'>Password</label>
                        <input placeholder='1234kk@2' className='restPassword'/>
                    </div>
                    <div className='d-flex flex-column'>
                        <label className='fw-bolder mb-3 mt-5'>Confirm Password</label>
                        <input placeholder='1234kk@2' className='restPassword'/>
                    </div>
                </form>
            </div>
            <div className='saveInfo'>
                <MintButton text={"Save"}/>
            </div>
        </div>
    </div>
  )
}

export default RestPassword;