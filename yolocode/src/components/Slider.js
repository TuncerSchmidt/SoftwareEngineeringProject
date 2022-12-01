import React from 'react';
import Slider1 from '../components/images/View1.jpeg';
import Slider2 from '../components/images/View2.jpeg';
import Slider3 from '../components/images/View3.jpeg';
import Slider from 'react-slick';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from 'bootstrap';

export const SimpleSlider=()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <h2>Single Item</h2>
            <Carousel>

            </Carousel>
        </div>
    )
}
