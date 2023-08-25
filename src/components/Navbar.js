import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar(prop) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}>
  <div className="container-fluid">
    <Link reloadDocument className="navbar-brand" to="/">textutils</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to={"about"}>{prop.e}</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    

    </div>
  </div>
  <div className={`form-check form-switch text-${prop.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={prop.toggle}/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">enable dark mode</label>
  </div>
</nav>
    
  )
}
// Navbar.propTypes= {
//     e: PropTypes.string
// }