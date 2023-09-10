import React from 'react'
import './About.css'


function About() {
  return (

    <div className='contenedor-about container-fluid' id='About'>
      <h1 className='titulo'>¿Quíenes somos?</h1>
      <div className='contenedor-acerca '>
        <h2>Agencias de servicios para toda Cuba CubanoShopAgency.</h2>
        <div className="redes">
          <a href="#" target='__blanck'><i className="bi bi-facebook"></i></a>
          <a href="#" target='__blanck'><i className="bi bi-instagram"></i></a>
          <a href="https://wa.me/+5352990719?text=Buenas%20le%20contacto%20a%20traves%20de%20la%20pagina%20solicitando%20sus%20servicios%20o%20productos" target='__blanck'><i className="bi bi-whatsapp"></i></a>

        </div>
        <p><strong>TE OFRECEMOS:</strong> <br /> Combos de Alimentos ,Remesas , Recargas , Electrodomésticos , Celulares , Renta de autos , Planes turisticos a la isla</p>
        <a href="https://wa.me/+5352990719?text=Buenas%20le%20contacto%20a%20traves%20de%20la%20pagina%20solicitando%20sus%20servicios%20o%20productos" target='_blanck'><button type="button" className="bton ">Contáctanos!</button></a>
      </div>
      <div className="contenedor-info">
        <div className="logo">
          <img src="/images/CompraCubana.png" alt="" />
        </div>
        <div className="info">
          <h2><i className="bi bi-send-check"></i>Domicilio </h2>
          <p>La Habana, Cuba · Cienfuegos, Cuba · Ciego de Ávila, Cuba · Matanzas, Cuba · Camagüey, Cuba</p>
          <h2><i className="bi bi-telephone-inbound"></i>Teléfono </h2>
          <p>+53 52990719 </p>
          <h2><i className="bi bi-envelope-at-fill"></i>Correo </h2>
          <p>
            juliocmr97@gmail.com</p>

          <h2><i className="bi bi-box-arrow-up-right"></i>Link </h2>
          <a href="#" target='__blanck'>CubanoShopAgency</a>

        </div >

      </div >
    </div >

  )
}

export default About