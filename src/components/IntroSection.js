import React from 'react';
import "./ComponentsStyle.css";
import { Button } from 'react-bootstrap';
import CommonButton from '../CommonComponents/CommonButton';
function IntroSection() {
  return (
    <div className='introSection '>
      <div className='introSection__item1'>
        <p className=''>Welcome</p>
        <h1 className='mb-4'>Your Health, Our Priority.</h1>
        <p className='w-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id pellentesque ante. Curabitur imperdiet neque ligula, sit amet mollis lectus luctus id. Cras sit amet orci in erat facilisis finibus. Cras non nulla mauris</p>
        <div className='btnDiv'>
          <CommonButton text="Book Now"/>
        </div>
      </div>
      <div className='introSection__item2'>
        <div></div>
      </div>
    </div>
  )
}

export default IntroSection;