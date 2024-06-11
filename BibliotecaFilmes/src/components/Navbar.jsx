import { Link } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"

import React from 'react'

const Navbar = () => {
  return (
    <nav id="navBar">
    <h2>
      <Link to="/"><BiCameraMovie />MoviesLib</Link>
    </h2>
    <form>
        <input type="text" placeholder="Busque um filme"></input>
        <button type="submit">
            <BiSearchAlt2 />
        </button>
    </form>
  </nav>
  )
}

export default Navbar