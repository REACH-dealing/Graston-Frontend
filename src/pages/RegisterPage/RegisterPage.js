import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./RegisterPageStyle.css";
import LightBtn from '../../Common/LightBtn';
import MintButton from '../../Common/MintButton';
import { Link } from 'react-router-dom';
function RegisterPage() {
  const [selectedRole, setSelectedRole] = useState('');

  const navigate = useNavigate();

  const handleRadioChange = (role) => {
    setSelectedRole(role);
  };
  const handleContinue = () => {
    if (selectedRole === 'patient') {
      navigate('/RegisterAsPatient');
    } else if (selectedRole === 'physiotherapist') {
      navigate('/RegisterAsDoctor');
    } else {
      alert('Please select a role before continuing.');
    }
  };
  return (
    <div className='containers'>
      <div className='registetrPageContainer'>
        <div className='registetrPageContainer__item1'>
          <h5 className='text-light fw-bolder mb-5'>Welcome Back</h5>
          <p className='text-center fw-lighter w-75'>To keep connected with us please login with your personal info</p>
          <Link to={'/LoginPage'}>
            <div className='loginBtn'>
              <LightBtn text={"Login"} />
            </div>
          </Link>
        </div>
        <div className="registerPageContainer__item2">
          <div>
            <h3 className='text-center'>جــــــــــراســــــــــــــتون</h3>
            <p className='mt-3 fw-bolder registetrPageContainer__item2__p text-center mt-5'>
              Your path to wellness starts here. <br />
              Sign up as a therapist or patient and enjoy personalized massage therapy sessions.
            </p>
          </div>
          <div className='d-flex mt-5'>
            <div className='position-relative me-3 mt-5'>
              <img src='/assets/images/patient.png' alt='patient' className='patient-img' />
              <div className='patient'>
                <p className='fw-bolder'>Patient</p>
                <input
                  type='radio'
                  id='patient'
                  name='role'
                  value='patient'
                  checked={selectedRole === 'patient'}
                  onChange={() => handleRadioChange('patient')}
                  className='radioBtn'
                />
              </div>
            </div>
            <div className='position-relative mt-5'>
              <img src='/assets/images/physiotherapist.png' alt='physiotherapist' className='physiotherapist-img' />
              <div className='physiotherapist'>
                <p className='fw-bolder ms-2'>Physiotherapist</p>
                <input
                  type='radio'
                  id='physiotherapist'
                  name='role'
                  value='physiotherapist'
                  checked={selectedRole === 'physiotherapist'}
                  onChange={() => handleRadioChange('physiotherapist')}
                />
              </div>
            </div>
          </div>
          <div className='contunueBtn mt-1'>
            <MintButton text={"Continue"} onClick={handleContinue} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;

