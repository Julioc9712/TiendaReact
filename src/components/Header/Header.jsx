import React from 'react'
import './Header.css'


function Header() {
  return (
  <div className='contenedor-nav'id='Home' > 
  <nav class="navbar navbar-expand-lg navbar navbar-dark ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" target='__blanck'><img class='icono' src='/images/icono.png' alt="" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#Home">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#About">Acerca de</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/services">Servicios</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categoría-Producto
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="/Electrodomestico" >Electrodomésticos</a></li>
              <li><a class="dropdown-item" href="/Celulares">Celulares</a></li>
              <li><a class="dropdown-item" href="/motos">Motos Electricas</a></li>
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