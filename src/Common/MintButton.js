import React from 'react';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function MintButton({text , onClick}) {
  return (
    <div>
       <button onClick={onClick} className='MintButton'>
         {text}
        </button>
    </div>
  )
}

export default MintButton;