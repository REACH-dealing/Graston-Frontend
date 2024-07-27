import React from 'react';
import "./LoginPageStyle.css";
import { Button, ButtonGroup } from 'react-bootstrap';
import CommenButton from '../../CommonComponents/CommonButton';

function LoginPage() {
  return (
    <div className='container'>
      <h3 className='text-center'>جــــــــــراســــــــــــــتون</h3>
      <h1 className='text-center mt-3 fw-bolder'>Welcome back!</h1>
      <div className='loginPageContainer mt-5'>
        
        <div className='loginPageContainer__item1'>
          <div className='loginFormContainer'>
            <form action='' className='loginForm' >
              <div className='d-flex flex-column'>
                <label for="email" className='fw-bolder mb-3'>Email</label>
                <input id='email' placeholder='Enter Your Email' type='email' required className='emailFiled'/>
              </div>
              <div className='d-flex flex-column'>
                <label for="password" className='fw-bolder mb-3 mt-4'>Password</label>
                <input id='password' placeholder='Enter Your Password' type='password' required className='passwordFiled'/>
              </div>
  
              <div className='d-flex justify-content-between mt-4'>
                <div>
                  <input type='checkbox'/>
                  <label className='fw-bolder ms-2'>Remeber me</label>
                </div>
                <div>
                  <p><a href='#'>Forgot Password?</a></p>
                </div>
              </div>
              <div className='DivBtn'>
                <CommenButton text="Login"/>
              </div>
              <h5 className='mt-3'>or</h5>
              <Button variant='light' className='fw-bolder d-block w-100 googleBtn'><img src='/assets/Vector (1).png' c alt='google'/>Login With Google</Button>
              <Button className=' facebookBtn fw-bolder d-block w-100 mt-4'><img src='/assets/facebook icon.png' alt='facebook'/>Login With Facebook</Button>
            </form>
          </div>
        </div>
        <div className='loginPageContainer__item2'>
          <h1>New Here?</h1>
          <p>Enter your personal details and start  journey with us </p>
          <Button>Register</Button>
        </div>
      </div>
    </div>
    
  )
}

export default LoginPage;