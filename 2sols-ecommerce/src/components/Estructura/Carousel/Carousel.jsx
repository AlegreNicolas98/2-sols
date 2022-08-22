import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

function CarouselSlide() {
      return (<div className='clase'>
        <Carousel fade style={{"padding":"1rem","margin-left":"20%","width":"50%"}} >
          <Carousel.Item>
            <img
              className="d-block w-100 h-30 img-carousel"
              src="http://www.3sols.com.ar/web/images/ypf-elaion.jpg"
              alt="First slide"
            />
            <Carousel.Caption style={{"background":"rgba(0, 0, 0, 0.795)"}}>
              <h3>Línea de aceites YPF Elaion</h3>
              <p>La nueva línea ELAION cuenta con la exclusiva tecnología TAS® que permite proteger al máximo el motor y cumplir con las exigencias de la industria automotriz.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-50 img-carousel"
              src="http://www.3sols.com.ar/web/images/bannerml.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-30 img-carousel"
              src="http://www.3sols.com.ar/web/images/freezetonefw.png"
              alt="Third slide"
            />
    
            <Carousel.Caption  style={{"background":"rgba(0, 0, 0, 0.795)"}}>
              <h3>El mejor refrigerante del Mercado!</h3>
              <p>
              Freezetone Products USA está formulado con la última tecnología de protección de metales a través de OAT (tecnología de ácido orgánico) no tóxico, producto ecológico y certificado.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel></div>
      );
    }

export default CarouselSlide