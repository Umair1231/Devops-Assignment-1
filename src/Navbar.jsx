// Navbar
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar-container">
      <button><NavLink to='/'>Home</NavLink></button>
      <button><NavLink to='/projects'>Projects</NavLink></button>
      <button><NavLink to='/education'>Education</NavLink></button>
      <button><NavLink to='/certification'>Certification</NavLink></button>
    </div>
  )
}
