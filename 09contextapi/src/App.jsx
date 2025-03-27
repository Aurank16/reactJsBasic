import { useState } from "react";
import "./App.css";
import { createContext } from "react";
import ClassA from "./ClassA";

// what is context api -
// How to use-
// create ,provider,consumer
//is context api also problematic? - context hook(coz to complexity)
const data = createContext();
const data1 = createContext();
function App() {
  const userName = "mayank";
  const gender = "male";

  return (
    <>
      <data.Provider value={userName}>
        <data1.Provider value={gender}>
          <ClassA />
        </data1.Provider>
      </data.Provider>
    </>
  );
}

export default App;
export { data, data1 };
