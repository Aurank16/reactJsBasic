
import { createContext } from 'react'
import './App.css'
import ClassA from './ClassA'

//what is context hook?
// three process: create,provider,usecontext
//how to use it?



const data = createContext();
const data1 = createContext();
function App() {
  const userName = 'mayank'
  const gender = 'male'
   

  return (
    <>
    <data.Provider value = {userName}>
      <data1.Provider value={gender}>
      <ClassA/>

      </data1.Provider>
    

    </data.Provider>
      
    </>
  )
}

export default App
export {data,data1}
