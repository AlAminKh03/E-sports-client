import React from 'react';
import './ManageProduct.css'

const ManageProduct = ({ product }) => {
    const { _id, name, img, description, price, dealer, quantity } = product;
    return (
        <div className='product'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Quantity:{quantity}</p>
            <p className='text-primary'>Dealer :{dealer}</p>
            <p><small>{description}</small></p>
            <div className='btn'>

                <button className='btn btn-dark'>update</button>
                <button className='btn btn-danger'>delete</button>

            </div>

        </div>
    );
};

export default ManageProduct;