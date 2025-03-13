import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="h-screen w-screen " style={{ backgroundColor: color }}>
      <div className=" flex justify-center items-center  ">
        <div className=" flex justify-center items-center bg-amber-50  px-4  text-white" >
          <button  onClick={ ()=> {
            setColor(" red")
          }}
          style={{background:'red'}}>Red</button>
           <button 
           onClick={ ()=> {
            setColor("green")
          }}
          style={{background:'green'}}>Green</button>
           <button
           onClick={ ()=> {
            setColor("blue")
          }}
          style={{background:'blue'}}>Blue</button>
        </div>
      </div>
    </div>
  );
}
export default App;
