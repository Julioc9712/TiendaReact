import React from 'react'
import './About.css'



function About() {
  return (
    <>
      <div className='contenedor-about container-fluid' id='About'>
        <h1 className='titulo'>CUBANOSHOP</h1>
        <div className='contenedor-acerca '>
          <h2>"Agencias de servicios y productos para toda Cuba"</h2>
          <div className="redes">
            <a href="#" ><i className="bi bi-facebook"></i></a>
            <a href="#" ><i className="bi bi-instagram"></i></a>
            <a href="https://wa.me/+5352990719?text=Buenas%20le%20contacto%20a%20traves%20de%20la%20pagina%20solicitando%20sus%20servicios%20o%20productos" target='__blanck'><i className="bi bi-whatsapp"></i></a>

          </div>
          <p><strong>TE OFRECEMOS:</strong> <br /> Remesas-Recargas-Renta de autos-Planes turisticos a la isla- Electrodomésticos-Celulares-Motos Electricas</p>
          <a href="https://wa.me/+5352990719?text=Buenas%20le%20contacto%20a%20traves%20de%20la%20pagina%20solicitando%20sus%20servicios%20o%20productos" target='_blanck'><button type="button" className="bton ">Contáctanos!</button></a>
        </div>

        <div className="contenedor-info">
          <div className="contenedor-ventas">
            <h2>Porductos mas vendidos</h2>
            <div className='masVendidos'>

              <div className="ventas" >
                <img src="/images/Productos/Celulares/samsung.jpg"  alt="..." />
                <div >
                  <h5 className="-title">Samsung Galaxy S21</h5>
                  <a href="https://wa.me/+5352990719?text=Buenas%20le%20contacto%20a%20traves%20de%20la%20pagina%20solicitando%20el%20celular%20Samsung%20Galaxy %20S21%20precio%20$360" target='__blanck' className="btn btn-primary">¡Precio $360!💵</a>
                </div>
              </div>
              <div className="ventas">
                <img src="/images/Productos/MotoElectrica/mizhozuki.jpg"  alt="..." />
                <div >
                  <h5 className="-title">Mishozuki Grillo Pro Max Plus </h5>
                  <a href="https://wa.me/+5352990719?text=Buenas%20le%20contacto%20a%20traves%20de%20la%20pagina%20solicitando%20el%20Bicimoto%20Mishozuki%20Grillo%20Precio%20$1500" target='__blanck' className="btn btn-primary">¡Precio $1500!💵</a>
                </div>
              </div>
              <div className="ventas" >
                <img src="/images/Productos/Electrodomesticos/BatidoraHamiltonBeach.jfif"  alt="..." />
                <div >
                  <h5 className="-title">Batidora Hamilton Beach</h5>
                  <a href="https://wa.me/+5352990719?text=Buenas%20le%20contacto%20a%20traves%20de%20la%20pagina%20solicitando%20el%20producto%20de%20Batidora %20Hamilton%20Beach%20precio%20$89" target='__blanck' className="btn btn-primary">¡Solo por $89!💵</a>
                </div>
              </div>
              <div className="ventas">
                <img src='/images/Servicios/servRemesa.png'  alt="..." />
                <div >
                  <h5 className="-title">Remesas CubanoShop</h5>
                  <a href="https://wa.me/+5352990719?text=Buenas%20le%20contacto%20a%20traves%20de%20la%20pagina%20solicitando%20el%20servicio%20de%20Remesas %20CubanoShop" target='__blanck' className="btn btn-primary">Contactenos</a>
                </div>
              </div>
            </div>
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
            <a href="#" >CubanoShopAgency</a>

          </div >

        </div >

      </div >
    </>

  )
}

export default About
