import React from 'react';
import './Product.css'
const Product = ({ product }) => {
    const { _id, name, img, description, price, dealer, quantity } = product;


    return (
        <div className='product'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Quantity:{quantity}</p>
            <p className='text-primary'>Dealer :{dealer}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-dark'>update</button>
        </div>
    );
};

export default Product;