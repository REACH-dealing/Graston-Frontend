import React from 'react';
import "./style.css";
import { Button } from 'react-bootstrap';
function LightBtn({text}) {
  return (
    <div>
      <Button className='lightBtn'>{text}</Button>
    </div>
  )
}

export default LightBtn;