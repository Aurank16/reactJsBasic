import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const[counter,setcounter]=useState(15)
  const Add = ()=>{
    if(counter <= 19)
    setcounter(counter+1)
  }
  let Remove=()=>{
    if(counter >= 1)  

     
    setcounter(counter - 1)

  }
  return (
    <>
       <h1> chai or code {counter}  </h1>
       <h2>counter value {counter}</h2>
       <button
       onClick={Add}
       > Add value {counter}
      </button>
      <br></br>
      <button
      onClick={Remove}
      >Remove value {counter}
      </button>
      </>
  )
  }
 

export default App
