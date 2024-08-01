import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
function MintButton({ text, onClick }) {
  return (
    <Button className="MintButton w-100 rounded-3" onClick={onClick}>
      {text}
    </Button>
  );
}

export default MintButton;
