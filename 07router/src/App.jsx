import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import PramsComp from "./components/PramsComp";
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
  
      <Navbar/>
      <Home />
      </div> 
  },
  {
    path: "/About",
    element:
    <div>
     
    <Navbar/>
   < About />
    </div>  
  },
  {
    path: "/Dashboard",
    element:   <div>
    <Navbar/>
    <Dashboard />
    </div> 
  },
  {
    path: "/Student/:id",
    element:   <div>
    <Navbar/>
    <PramsComp/ >

    </div> 
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    
   < RouterProvider router = {router}/>
  );
}

export default App;
