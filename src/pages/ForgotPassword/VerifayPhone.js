import React from 'react';
import "./style.css"
import { Button } from 'react-bootstrap';
import MintButton from '../../Common/MintButton';
function VerifayPhone() {
  return (
    <div className='VerifayPhoneContainer'>
      <div className='VerifayPhoneContainer__items'>
        <div className='mt-5 mb-3'>
          <img src='/assets/Frame 49.png' alt='verifay phone number' width={"170px"}/>
        </div>
        <h4 className='VerifayPhoneContainer__h4'>Verify Your Phone Number</h4>
        <p className='VerifayPhoneContainer__p text-center mt-4' style={{fontSize:"15px"}} >We've sent a SMS to <br/> +99633332222114 to confirm your <br/> account.</p>
        <div className='VerifayPhoneContainer__inputs'>
          <input/>
          <input/>
          <input/>
          <input/>
        </div>
        <div className='mt-4 confirmCode' >
          <MintButton text={'Confirm Code'}/>
        </div>
        <p className='sendCode mt-4'>Send Code Again   <span className='ms-5 text-decoration-none' style={{color:"#000"}}>00:23</span></p>
      </div>
    </div>
  )
}

export default VerifayPhone;