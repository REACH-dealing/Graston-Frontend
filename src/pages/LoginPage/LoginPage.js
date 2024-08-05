import React from 'react';
import "./LoginPageStyle.css";
import { Button} from 'react-bootstrap';
import MintButton from '../../Common/MintButton';
import LightBtn from '../../Common/LightBtn';
import { Link } from 'react-router-dom';
function LoginPage() {
  return (
    <div className=''>
      <div className='loginPageContainer'>
        <div className='loginPageContainer__item1'>
        <h3 className='text-center mb-4'>جــــــــــراســــــــــــــتون</h3>
        <h5 className='text-center mt-3 fw-bolder mb-5'>Welcome back!</h5>
          <div className='loginFormContainer'>
            <form action='' className='loginForm' >
              <div className='d-flex flex-column'>
                <label for="email" className='fw-bolder mb-3'>Email</label>
                <input id='email' placeholder='Enter Your Email' type='email' required className='emailFiled'/>
              </div>
              <div className='d-flex flex-column'>
                <label for="password" className='fw-bolder mb-3 mt-4'>Password</label>
                <input id='password' placeholder='1234kk@2' type='password' required className='passwordFiled'/>
              </div>
  
              <div className='d-flex justify-content-between align-self-start mt-4'>
                <div className=''>
                  <p className='fw-bolder mt-2 '><Link to={'/ForgotPassword'}>Forgot Password?</Link></p>
                </div>
              </div>
              <div className='DivBtn'>
                <MintButton text="Login"/>
              </div>
              <h6 className='mt-5'>OR</h6>
              <Button variant='light' className='fw-bolder d-block  googleBtn mt-4'><img src='/assets/google.png' className='me-3' width={'22px'} alt='google'/>Login With Google</Button>
              <Button className='facebookBtn fw-bolder d-block  mt-4'><img src='/assets/facebook icon.png' className='me-3' width={'22px'} alt='facebook'/>Login With Facebook</Button>
            </form>
          </div>
        </div>
        <div className='loginPageContainer__item2'>
          <h5 className='fw-bolder text-light'>New Here?</h5>
          <p className='text-center fw-lighter mt-5'>Enter your personal details and start  journey with us </p>
          <Link to={'/RegisterPage'}> 
            <div className='loginBtn mt-4'>
              <LightBtn text={"Register"}/>
            </div>
          </Link>
        </div>

        <div className='sign-option mt-5 mb-3'>
          <p className='fw-bolder fs-5'>Don’t have an account? <Link className='text-decoration-none ms-2 fs-5' style={{color:"#2F9C95"}}>Sign Up</Link> </p>
        </div>
      </div>
    </div>
    
  )
}

export default LoginPage;