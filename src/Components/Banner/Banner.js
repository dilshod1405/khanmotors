import React from 'react'
import './banner.scss'

function Banner() {
    return (
      <div className='Banner'>
        <div id="carouselExampleCaptions" className="carousel slide animate__animated animate__fadeIn" data-bs-ride="carousel">
            <div className="carousel-inner">
                {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img id='cars' src="banner1.jpg" alt="..." className=''/>
                </div>

                <div className="carousel-item">
                <img id='cars' src="banner2.jpg" className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                <img id='cars' src="office.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden"></span> */}
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                {/* <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden"></span> */}
            </button>
            </div>

            
      </div>
    )
  }

  export default Banner;
