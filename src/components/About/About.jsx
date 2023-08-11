import React from 'react'
import './About.css'


function About() {
  return (
    
    <div className='contenedor-about container-fluid' id='About'> 
        <h1>¿Quíenes somos?</h1>
        <div className='contenedor-acerca '>
          <h2>Agencias de servicios para toda Cuba 89MillasAgency.</h2>
          <div className="redes">
            <a href="https://www.facebook.com/89millasagency" target='__blanck'><i class="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/89millasagency/?hl=es" target='__blanck'><i class="bi bi-instagram"></i></a>
            <a href="https://wa.me/+5352990719?text=Buenas%20le%20contacto%20a%20traves%20de%20la%20pagina%20solicitando%20sus%20servicios%20o%20productos" target='__blanck'><i class="bi bi-whatsapp"></i></a>

          </div> 
          <p><strong>TE OFRECEMOS:</strong> <br /> Combos de Alimentos ,Remesas , Recargas , Electrodomésticos , Celulares , Renta de autos , Planes turisticos a la isla</p> 
        </div>
        <div className="contenedor-info">
          <div className="logo">
          <img src="/images/CompraCubana.png" alt="" />
          </div>
          <div className="info">
          <h2>Domicilio <i class="bi bi-send-check"></i></h2>
            <p>La Habana, Cuba · Cienfuegos, Cuba · Ciego de Ávila, Cuba · Matanzas, Cuba · Camagüey, Cuba</p>
          <h2>Teléfono <i class="bi bi-telephone-inbound"></i></h2>
          <p>+53 52990719 </p>
          <h2>Correo <i class="bi bi-envelope-at-fill"></i></h2>
          <p>
          juliocmr97@gmail.com</p>
          <h2>Link <i class="bi bi-box-arrow-up-right"></i></h2>
          <a href="https://linktr.ee/89MillasAgency" target='__blanck'>CubanoShopAgency</a>
          </div>
          
        </div>
    </div>

  )
}

export default About