import React from 'react'
import './Header.css'


function Header() {
  return (
  <div className='contenedor-nav'id='Home' > 
  <nav className="navbar navbar-expand-lg navbar navbar-dark ">
    <div className="container-fluid">
      <a className="navbar-brand" href="/" ><img className='icono' src='/images/icono.png' alt="" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#Home">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#About">Acerca de</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/services">Servicios</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categoría-Producto
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a className="dropdown-item" href="/Electrodomestico" >Electrodomésticos</a></li>
              <li><a className="dropdown-item" href="/Celulares">Celulares</a></li>
              <li><a className="dropdown-item" href="/motos">Motos Electricas</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
</nav>
</div> 
  )
}

export default Header
