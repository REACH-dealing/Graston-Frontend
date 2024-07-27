import React from 'react';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
function CommenButton({text}) {
  return (
    <div>
      <Button className='CommonButton'>
        {text}
      </Button>
    </div>
  )
}

export default CommenButton;