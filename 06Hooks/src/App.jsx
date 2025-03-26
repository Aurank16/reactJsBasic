import { useState } from "react";
import "./App.css";
import "./Timer"
import Timer from "./Timer";

function App() {
   
   

  // function clickInc() {
  //   if (count < 10) {
  //     setCount(count + 1);
  //   }
  // }

  // function clickDec() {
  //   if (count > 1) {  
  //     setCount(count - 1);
  //   }
  // }
   

  return (
    <Timer />
    
    // <div>
    //   <h1>Counter: {count}</h1> 
    //   <button onClick={clickInc}>Inc</button>
    //   <button onClick={clickDec}>Dec</button>
    //   <br></br>
       
    // </div>
  );
}

export default App;
