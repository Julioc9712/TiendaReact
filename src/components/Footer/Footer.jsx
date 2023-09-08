import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <><div className='logo-whatapp'><a href="https://wa.me/+5352990719?text=Buenas%20le%20contacto%20a%20traves%20de%20la%20pagina%20solicitando%20sus%20servicios%20o%20productos" target='__blanck'><img src='/images/whatapp.png' alt="" /></a>
    </div><footer >
        <div className="redes">
          <a href="#" target='__blanck'><i class="bi bi-facebook"></i></a>
          <a href="#" target='__blanck'><i class="bi bi-instagram"></i></a>
          <a href="https://wa.me/+5352990719?text=Buenas%20le%20contacto%20a%20traves%20de%20la%20pagina%20solicitando%20sus%20servicios%20o%20productos" target='__blanck'><i class="bi bi-whatsapp"></i></a>
        </div>
        <div className='link'><a href="#" target='__blanck'>CubanoShopAgency</a></div>
      </footer></>

  )
}

export default Footer
