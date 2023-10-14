import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link className="btn btn-dark mx-1" to="/home" role="button">Home</Link>
          </li>  
          <li className="nav-item">
          <Link className="btn btn-dark mx-1" to="/about" role="button">About</Link>
          </li>  
        </ul>
        <form className="d-flex" role="search">
        <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
         <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
        </form>
      </div>
    </div>
  </nav>
</>
  )
}

export default Navbar