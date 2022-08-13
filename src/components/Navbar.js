import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutUs}</Link>
        </li>
        
      </ul>


      {/* **************DARK MODE************ */}

            <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label mx-1" hmtlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>

    {/* **************GREEN MODE************** */}

            <div className={`form-check form-switch text-${props.mode1==="light"?"dark":"#d3e7df"}`}>
        <input className="form-check-input" onClick={props.toggleMode1} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label mx-1" hmtlFor="flexSwitchCheckDefault">Enable Green Mode</label>
      </div>

    {/* ******************BLUE MODE*************** */}

            <div className={`form-check form-switch text-${props.mode2==="light"?"dark":"#6cd3f0"}`}>
        <input className="form-check-input" onClick={props.toggleMode2} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" hmtlFor="flexSwitchCheckDefault">Enable Blue Mode</label>
      </div>
    </div>
  </div>
</nav>
  )
}




// this is check for future if number error occured

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutUs: PropTypes.string.isRequired,
}

// this will be if we don't give props by own then use this default props

Navbar.defaultProps = {
    title: 'Set title here',
    aboutUs: 'About us text here',
}
