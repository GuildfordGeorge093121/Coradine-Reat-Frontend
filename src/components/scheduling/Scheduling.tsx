import React from 'react'
import  { Carousel, } from 'react-responsive-carousel';
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Scheduling = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1440,
                settings:{
                    dot:true,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1170,
                settings:{
                    dot:true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 780,
                settings:{
                    dot:true,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 680,
                settings:{
                    dot:true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
      };
  return (
    <div className="scheduling">
        <p className="scheduling-header">Scheduling of Candidates</p>
        <div className="scheduling-grid">
            <div>
                <p className="schedule-header">Confirmed Candidates</p>
                <div className="confirmed-candidates">
                    <div className="confirmed-user">
                        <div className='confirmed-user-img'>
                            <img src="/Assets/profile-photo2.jpg" alt="" />
                        </div>
                        <div className="confirmed-user-info">
                            <p className="confirmed-user-name">George Guildford Jnior hvgjhbjhjhhkj jhkhkjkj</p>
                            <p className="confirmed-user-position">NodeJS Developer</p>
                        </div>
                    </div>
                    <div className="confirmed-user">
                        <div className='confirmed-user-img'>
                            <img src="/Assets/profile-photo2.jpg" alt="" />
                        </div>
                        <div className="confirmed-user-info">
                            <p className="confirmed-user-name">George Guildford Jnior</p>
                            <p className="confirmed-user-position">NodeJS Developer</p>
                        </div>
                    </div>
                    <div className="confirmed-user">
                        <div className='confirmed-user-img'>
                            <img src="/Assets/profile-photo2.jpg" alt="" />
                        </div>
                        <div className="confirmed-user-info">
                            <p className="confirmed-user-name">George Guildford Jnior</p>
                            <p className="confirmed-user-position">NodeJS Developer</p>
                        </div>
                    </div>
                    <div className="confirmed-user">
                        <div className='confirmed-user-img'>
                            <img src="/Assets/profile-photo2.jpg" alt="" />
                        </div>
                        <div className="confirmed-user-info">
                            <p className="confirmed-user-name">George Guildford Jnior</p>
                            <p className="confirmed-user-position">NodeJS Developer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="interviewers">
                    <Slider {...settings}>

                        <div className="interviewer">
                            <p className="interviewer-name">Dr. Elvis Yarkson</p>
                            <div className="interviewer-candidates">
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="interviewer">
                            <p className="interviewer-name">Dr. Elvis Yarkson</p>
                            <div className="interviewer-candidates">
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="interviewer">
                            <p className="interviewer-name">Dr. Elvis Yarkson</p>
                            <div className="interviewer-candidates">
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="interviewer">
                            <p className="interviewer-name">Dr. Elvis Yarkson</p>
                            <div className="interviewer-candidates">
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="interviewer">
                            <p className="interviewer-name">Dr. Elvis Yarkson</p>
                            <div className="interviewer-candidates">
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="interviewer">
                            <p className="interviewer-name">Dr. Elvis Yarkson</p>
                            <div className="interviewer-candidates">
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                                <div className="confirmed-user">
                                    <div className='confirmed-user-img'>
                                        <img src="/Assets/profile-photo2.jpg" alt="" />
                                    </div>
                                    <div className="confirmed-user-info">
                                        <p className="confirmed-user-name">George Guildford Jnior</p>
                                        <p className="confirmed-user-position">NodeJS Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Scheduling