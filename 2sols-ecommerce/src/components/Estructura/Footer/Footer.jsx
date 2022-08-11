import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer' >
    
        <div>
          <h3 className='subtitulo'>Nuestros Horarios</h3>
          <ul >
            <li className='lista'>Lunes a sábados de 8 a 21hs</li>
            <li className='lista'>Domingos de 8 a 20hs</li>
            <li className='lista'>Feriados de 8 a 20hs</li>
          </ul>
        </div>
        <div>
          <h3 className='subtitulo'>Nuestra Sucursal</h3>
          <ul><li className='lista'>	Av. Crovara 4101 - tel: 2063.2555 wsp: 11.6886.4108- La Tablada</li></ul>
          <h3 className='subtitulo'>Mail</h3>
          <ul><li className='lista'>info@3sols.com.ar</li></ul>
        </div>
      <div className='imagen'>
        <a href="https://www.google.com.ar/maps/place/M.+Altolaguirre+387,+B1770ABG+Tapiales,+Provincia+de+Buenos+Aires/@-34.7008355,-58.5125366,17z/data=!3m1!4b1!4m5!3m4!1s0x95bccf29c697fd51:0xad22e69183d02d07!8m2!3d-34.7008399!4d-58.5103479">
        <img src="https://osm.cylex-international.com/osm/staticmaplite/staticmap.php?center=-34.70093653,-58.51018068&zoom=15&size=xy&maptype=tm&markers=-34.70093653,-58.51018068,marker-34" alt=""  width='100%' height='80%' />
        </a>
      </div>
    </div>

  )
}

export default Footer 