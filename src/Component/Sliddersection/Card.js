import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import '../cssComponents/slider.css'
import './Card.css';

const images = [
 require('../pictures/0028 (1).png'),
 require('../MeetaMoose/0160.png'),
 require('../MeetaMoose/0174.png'),
 require('../MeetaMoose/3555.png'),
 require('../MeetaMoose/3567.png'),
 require('../MeetaMoose/5402.png'),

 require('../pictures/0006 (2).png'),
 require('../pictures/0028 (1).png'),
 require('../pictures/0029 (1).png'),
 require('../pictures/0031.png'),
 require('../pictures/8880.png'),
 require('../pictures/8881 (1).png'),
 require('../MeetaMoose/0160.png'),
 require('../MeetaMoose/0174.png'),
 require('../MeetaMoose/3555.png'),
 require('../MeetaMoose/3567.png'),
 require('../MeetaMoose/5402.png'),

 

];

const Card = () => {
    const settings = {
        spaceBetween:0,
        slidesToShow: 7,
        slidesToScroll: 2,
        autoplay: true,
        speed : 7000, // 2 seconds per slide
        pauseOnHover: true,
        arrows: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    
                }
            }
        ]}
    return(
    <div className="slider-container">
    <div className="row">
        <Slider {...settings}>
            {images.slice(0, images.length / 2).map((image, index) => (
                <div key={index} className="slide">
                    <img className='img'  src={image} alt={`Image ${index + 1}`} />
                </div>
            ))}
        </Slider>
    </div>
    <div className="row">
        <Slider {...settings}>
            {images.slice(images.length / 2).map((image, index) => (
                <div key={index} className="slide">
                    <img src={image} alt={`Image ${index + 1}`} />
                </div>
            ))}
        </Slider>
    </div>
</div>

    )
    
    }
    export default Card;