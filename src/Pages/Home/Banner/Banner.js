import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'


import banner1 from '../../../Images/banner/banner-1.jpg';
import banner2 from '../../../Images/banner/banner-3.jpg';
import banner3 from '../../../Images/banner/banner-4.jpg';


const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className='caro-img'>
                    <img
                        className="d-block w-100 "
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Discover Your Inner Energy</h3>
                        <p>With power of feet combined with brain's tactics,the world is waiting to see you.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='caro-img'>
                    <img
                        className="d-block w-100 caro-img"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Boot for Hood</h3>
                        <p>With good pair of boot once a life time feel like Messi.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='caro-img'>
                    <img
                        className="d-block w-100 caro-img"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Peace after joy</h3>
                        <p>
                            Feel the refreshment after joy of life.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;