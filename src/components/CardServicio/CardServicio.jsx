import React from 'react'
import './CardServicio.css'

function CardServicio() {
  return (
    <>
    <div className='titulo' id='servicios'><h1>Elija su servicio según desee! 💸🏨🚖📲</h1></div>
    <div className='container-card'>
      <div className="card">
      <img src='/images/Servicios/servRemesa.png' className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Remesas CubanoShopAgencia</h5>
        <p className="card-text"> Envío a Cuba de nuestras #CubanoShopAgencia estarás presente en el día a día de tus seres queridos desde cualquier lugar del mundo. <br />🗺️❤️💸 .Entregas rápidas y seguras👇 <br />
        ✅En menos de 1HORA por TRANSFERENCIA.📲 <br />
        ✅En menos de #24HORAS entregas por #CASH. <br />
        📍Tenemos envíos a toda Cuba.
        ✔️Aplicamos grandes #DESCUENTOS si envías grandes cantidades.</p>
        <a href="https://wa.me/+5352990719?text=Buenas%20le%20contacto%20a%20traves%20de%20la%20pagina%20solicitando%20el%20servicio%20de%20Remesas %20CubanoShop" target='__blanck' className="btn btn-primary">Contactenos</a>
      </div>
    </div><div className="card">
        <img src='/images/Servicios/rentaAuto.png' className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Renta un auto🚗</h5>
          <p className="card-text">¡Haz que tu regreso a casa sea un viaje especial! 💖 #Renta un auto🚗 con nosotros y disfruta del trayecto a través de toda Cuba.<br />
           🛣️❤️🤗 Si rentas con CubanoShopAgencia👇 <br />
          ✅ Escoges entre variedad de marcas y modelos. <br />
          ✅ Contarás con seguro para el auto. <br />
          ✅ Podrás rentar desde 3 a 7 días o más..</p>
          <br /><br />
          <a href="https://wa.me/+5352990719?text=Buenas%20le%20contacto%20a%20traves%20de%20la%20pagina%20solicitando%20el%20servicio%20de%20Renta%20de%20autos%20CubanoShop"  target='__blanck' className="btn btn-primary">Contactenos</a>
        </div>
      </div><div className="card">
        <img src='/images/viajesTuristicos.png' className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Vacaciones únicas</h5>
          <p className="card-text">¿Listo para unas #vacaciones únicas? 🏖️  <br />     
            ✅ Reserva ahora nuestros Paquetes Turísticos de #HOTELES en‼️TODA CUBA‼️🛎️😎<br />
            ¡Tenemos Ofertas para todos!👇 <br />
            ✅ Podrás escoger entre HOTELES y HOSTALES según tus gustos y presupuesto.🏨🏠 <br />
            ✅ Servicio de auto disponible con PRECIO PREFERENCIAL por ser cliente. 🚖 </p> <br />
          <a href="https://wa.me/+5352990719?text=Buenas%20le%20contacto%20a%20traves%20de%20la%20pagina%20solicitando%20el%20servicio%20de%20Paquete%20Turistico%20CubanoShop" target='__blanck' className="btn btn-primary">Contactenos</a>
        </div>
      </div>
      <div className="card">
        <img src='/images/recargas.png' className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Recargas</h5>
          <p className="card-text">¡Mantén el vínculo con el familión en Cuba! Con la nueva Promo Internacional podrás recargarle desde el 24 hasta el 30 de Julio. #QUINTUPLICARÁS su #RECARGA y estarás sólo a una llamada de distancia.😱📲🥰
          ¡Hay más beneficios!🤩 <br />
          ✅+ 25GB todas las redes + INTERNET ILIMITADO de 12 a 7 a.m. (Válido por 30 días)
          .
          ‼️ Sólo por 24.99‼️</p><br />
          <a href="https://wa.me/+5352990719?text=Buenas%20le%20contacto%20a%20traves%20de%20la%20pagina%20solicitando%20el%20servicio%20de%20Recarga%20CubanoShop"  target='__blanck' className="btn btn-primary">Contactenos</a>
        </div>
      </div>
      </div></>
  )
}

export default CardServicio