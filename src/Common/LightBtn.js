import React from "react";
import "./style.css";
import { Button } from "react-bootstrap";
function LightBtn({ text }) {
  return (
    <>
      <Button className="lightBtn w-100 rounded-2">{text}</Button>
    </>
  );
}

export default LightBtn;
