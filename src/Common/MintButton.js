import React from 'react';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
function MintButton({text}) {
  return (
    <div>
      <Button className='MintButton'>
        {text}
      </Button>
    </div>
  )
}

export default MintButton;