import React from 'react';
import "./Footer.css"

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear();
    return (
        <div className='text-center footer'>
            <p><small> &copy;Sisir Bindu Travel {year} </small></p>
        </div>
    );
};

export default Footer;