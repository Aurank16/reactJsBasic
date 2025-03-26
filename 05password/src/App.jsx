import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
 

  return (
    <>
      <div className="h-full w-full" >
        password
        <div className="h-20 w-150 bg-amber-300 text-white mx-7 my-5  ">
          <input 
          type="text"
           
           />
        </div>
        <div>
          <button>copy</button>
        </div>
      </div>
    </>
  );
}

export default App;
