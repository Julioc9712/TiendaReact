import React from 'react'
import './Carrusel.css'

function Carrusel() {
    return (
        <div className='carousel-bg' id='Home'>
            <div id="carouselExampleFade" className="carousel carousel-dark slide carousel-fade " data-bs-ride="carousel">

                <div className="carousel-inner">
                    <div className="carousel-item active" >
                        <img src='/images/portada.png' className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item ">
                        <img src='/images/viajesTuristicos.png' className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src='/images/recargas.png' className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src='/images/rentaAutos.png' className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src='/images/remesa.png' className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    )
}

export default Carrusel

