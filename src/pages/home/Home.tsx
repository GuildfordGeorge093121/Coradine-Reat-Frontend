import React from 'react'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
    <div>
        <h1>Heading Home</h1>
        <div style={{display: 'flex'}}>
              <div>
              <img src="/Assets/profile-photo2.jpg" alt="" />
              </div>
              <div style={{ minHeight: '100%', width: '500px'}}>
                <Slider {...settings}>
                    <div>
                    <img src="/Assets/profile-photo2.jpg" alt="" />
                    </div>
                    <div>
                    <img src="/Assets/profile-photo2.jpg" alt="" />
                    </div>
                    <div>
                    <img src="/Assets/profile-photo2.jpg" alt="" />
                    </div>
                    <div>
                    <img src="/Assets/profile-photo2.jpg" alt="" />
                    </div>
                    <div>
                    <img src="/Assets/profile-photo2.jpg" alt="" />
                    </div>
                </Slider>

              </div>
        </div>
    </div>
  )
}

export default Home