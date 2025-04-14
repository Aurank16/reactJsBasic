import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment,incrementByAmount,reset  } from "./ features/counter/CounterSclice";

function App() {
  // here we need two hook (1) to select value (2)to dispatch action
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [Amount, setAmount]= useState(0)

  function handelClick() {
    dispatch(increment());
  }
  function handelClick1() {
    dispatch(decrement());
  }

  
  function handelClick2() {
    dispatch(reset());
  }
  function handelClick3() {
    dispatch(incrementByAmount( Amount));
  }

  return (
    <div>
      <button onClick={handelClick}>+</button>
      <p> count:{count}</p>
      <button onClick={handelClick1}>-</button>
      <br/>
      <br/>
      <button onClick={handelClick2}>reset</button>
      <br/>
      <input 
      type="number"
      value={Amount}
      onChange={(e)=>setAmount(e.target.value)}>
      </input>
      <br/>
      <button onClick={handelClick3}>inc by amt</button>
    </div>
  );
}

export default App;
