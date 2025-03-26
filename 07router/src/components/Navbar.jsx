import React from 'react'
import About from './About'
import Home from './Home'
import Dashboard from './Dashboard'
import { Link ,NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <ul>
            <li>
              <NavLink to='/' style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/About'style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}>About</NavLink>
            </li>
            <li>
              <NavLink to='/Dashboard'style={({ isActive }) => ({ color: isActive ? "red" : "blue" })} >Dashboard</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar