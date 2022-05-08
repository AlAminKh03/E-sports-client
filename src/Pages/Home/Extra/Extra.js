import React from 'react';
import img from '../../../Images/extra/extras.jpg'
import './Extra.css'

const Extra = () => {
    return (
        <div className="d-flex extra-container mt-5 mb-5">
            <div className="text-white extra-info">
                <h2>Live your best Life</h2>
                <p>A trophy carries dust. Memories last forever  <br /><span><small>-Mary Lou Retton</small></span></p>

            </div>
            <div className='extra-img'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Extra;