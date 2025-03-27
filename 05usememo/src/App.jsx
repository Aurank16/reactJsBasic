import { useState } from "react";
import "./App.css";
import { useMemo } from "react";

function App() {
  const [add, setadd] = useState(0);
  const [sub, setsub] = useState(100);
  const multiply = useMemo(() => {
    console.log("************");

    return add * 10;
  }, [add]);// only upadate on add coz it is in dependency

  // function multiply(){
  //   console.log("************")  // print as well as in sub also dipite
  //                                // we can't retune it and it slow down the process
  //   return add*10                // here usememo came into play
  // }

  return (
    <>
      <div className="App">
        <h1> use memo </h1>

        {multiply}
        <br></br>

        <button onClick={() => setadd(add + 1)}>increament</button>
        <span>{add} </span>
        <br></br>
        <button onClick={() => setsub(sub - 1)}>decreament</button>
        <span>{sub}</span>
      </div>
    </>
  );
}

export default App;
