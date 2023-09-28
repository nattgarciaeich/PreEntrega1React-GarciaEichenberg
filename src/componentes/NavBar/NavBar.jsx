import React from 'react'
import "./NavBar.css"
import CartWidget from './CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Proyecto React JS - Coder House</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/jewelery">Joyeria</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/men's clothing">Ropa de hombre</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/women's clothing">Ropa de mujer</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/electronics">Informatica</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>

        <CartWidget/>

      </div>    
    </nav>
  )
}

export default NavBar