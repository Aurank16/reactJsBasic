import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState("mayank")
  console.log("hhhhh")

  // function Handel (){
  //   e.taget.value
  //   setCount(count)


  // }

  // function handel (){
  //   setCount(count)

return (
  <>


    {/* // html form eg :-Refreshes the page upon submission unless prevented with JavaScript.

    <form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />
  <button type="submit">Submit</button>
</form> */}


    {/* 
    React Forms (Controlled & Uncontrolled Components)
Forms are managed using React state (controlled components).

Uses onChange event handlers to update state dynamically.

Does not automatically submit data—requires a custom onSubmit handler.
 
 */}

    <label> Name <br
    ></br>
      <input type='text' Value={count} />
    </label>





  </>
)

}
export default App
