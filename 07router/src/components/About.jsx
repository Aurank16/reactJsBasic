import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  function handelClick() {
    navigate("/Dashboard");
  }
  return (
    <div>
      <button onClick={handelClick} className="bg-red-500 ">Move to about</button>
      NavHook
    </div>
  );
}

export default About;
