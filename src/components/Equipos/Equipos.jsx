import React from 'react'
import './Equipos.css'

function Equipos() {
  return (
    <>
    <div className='titulo'>
        <h1>Equipos Electrodomésticos 🛒❤️</h1>
    </div>
    <div className='container-card'>
    <div className="card" id='card-equipos'>
          <img src="/images/Productos/Electrodomesticos/BatidoraHamiltonBeach.jfif" className="card-img-top" alt="..." />
          <div className="card-body">
              <h5 className="card-title">Batidora Hamilton Beach</h5>
              <p className="card-text">✅Jarra grande con capacidad de 1.65L <br />✅Resultados  suaves con sistema Wave-Action <br />✅Licuado potente con motor de 575 watt de potencia.</p>
              <br />
              <a href="https://wa.me/+5352990719?text=Buenas%20le%20contacto%20a%20traves%20de%20la%20pagina%20solicitando%20el%20producto%20de%20Batidora %20Hamilton%20Beach%20precio%20$89" target='__blanck' className="btn btn-primary">¡Solo por $89!💵</a>
          </div>
    </div>
    
    <div className="card" id='card-equipos'>
              <img src="/images/Productos/Electrodomesticos/Freidora de Aire.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                  <h5 className="card-title">Freidora de Aire</h5>
                  <p className="card-text">✅Capacidad de hasta 1.7 lbs (770g) de comida. <br />
                    ✅Termostato precalibrado de 204°C.
                    ✅Temporizador de apagado automático 60min <br />
                    </p>
                    <br />
                    <br />
                  <a href="https://wa.me/+18135859754?text=Buenas%20le%20contacto%20a%20traves%20de%20la%20pagina%20solicitando%20el%20producto%20de%20Freidora %20de%20Aire%20precio%20$89" target='__blanck'className="btn btn-primary">¡Solo por $89!💵</a>
              </div>
          </div>
    <div className="card" id='card-equipos'>
        <img src="/images/Productos/Electrodomesticos/OLLA ARROCERA.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Olla Arrocera</h5>
            <p className="card-text">✅ Tiene capacidad de 16 tazas. <br />
            ✅ Accesorios incluidos: cesta de aclarado de vapor/arroz, espátula y taza de medición <br />
            ✅ Dimensiones (pulgadas):9.65H x 12.6W <br />
            </p>
            <br />
            <a href="https://wa.me/+18135859754?text=Buenas%20le%20contacto%20a%20traves%20de%20la%20pagina%20solicitando%20el%20producto%20de%20Olla%20Arrocera%20precio%20$75" target='__blanck' className="btn btn-primary">¡Solo por $75!💵</a>
        </div>
    </div>

    <div className="card" id='card-equipos'>
        <img src="/images/Productos/Electrodomesticos/OLLA DE PRESIÓN DIGITAL .jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Olla de Presión Digital</h5>
            <p className="card-text"> ✅Capacidad 8QT <br />✅Olla antiadherente extraible , funciones multiples <br />✅Botones preestablecidos , temporizador programado</p>
            <a href="https://wa.me/+18135859754?text=Buenas%20le%20contacto%20a%20traves%20de%20la%20pagina%20solicitando%20el%20producto%20de%20Olla%20de%20Presion%20Digital%20precio%20$149" target='__blanck' className="btn btn-primary">¡Solo por $149!💵</a>
        </div>
    </div>
    </div>
    </>

  )
}

export default Equipos