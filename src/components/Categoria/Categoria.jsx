import React from 'react'
import './Categoria.css'
function Categoria() {
    return (
        <>
            <section>
                <h1>Elige ir a Servicios o Productos</h1>
                <div className='contenedor-categoria'>
                    <div className="card" >
                        <img src="images/Servicios/servicio.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <a href="/services" className="bton">Ir a Servicios</a>
                        </div>
                    </div>
                    <div className="card" >
                        <img src="images/Productos/MotoElectrica/motos.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <a href="/motos" className="bton">Ir a Motos Electricas</a>
                        </div>
                    </div>
                    <div className="card" >
                        <img src="images/Productos/Electrodomesticos/electrodomésticos.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <a href="/Electrodomestico" className="bton">Ir a Electrodomesticos</a>
                        </div>
                    </div>
                    <div className="card" >
                        <img src="images/Productos/Celulares/celulares.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <a href="/Celulares" className="bton">Ir a Celulares</a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Categoria