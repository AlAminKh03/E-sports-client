import React from 'react';
import './Product.css'
const Product = ({ product }) => {
    const { _id, name, img, description, price } = product;


    return (
        <div className='product'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-info'>Book: {name}</button>
        </div>
    );
};

export default Product;