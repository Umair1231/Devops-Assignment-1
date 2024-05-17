import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'

export default function Navbar() {
  return (
    <div className="navbar-container">
      <button><NavLink to='/'>Home</NavLink></button>
      <button><NavLink to='/projects'>Projects</NavLink></button>
      <button><NavLink to='/education'>Education</NavLink></button>
    </div>
  )
}
