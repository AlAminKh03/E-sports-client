import React from 'react';
import img1 from "../../../Images/sponsor/statefarm.png"
import img2 from "../../../Images/sponsor/adidas.jpg"
import img3 from "../../../Images/sponsor/infront.png"
import img4 from "../../../Images/sponsor/bmw.png"
import './Extras.css'

const Extras = () => {
    return (
        <div className='container m-5'>
            <h1 className='text-primary text-center mb-3'>Get Our Sponsors</h1>
            <div className='img-container'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>
        </div>
    );
};

export default Extras;