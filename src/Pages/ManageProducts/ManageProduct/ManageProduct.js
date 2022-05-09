import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseProducts from '../../../Hooks/UseProducts';
import './ManageProduct.css'

const ManageProduct = ({ product, handleDeletebutton }) => {
    const { _id, name, img, description, price, dealer, quantity } = product;




    const navigate = useNavigate();

    const navigateToProductDetail = _id => {
        navigate(`product/${_id}`)
    }


    return (
        <div className='product'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Quantity:{quantity}</p>
            <p className='text-primary'>Dealer :{dealer}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-dark' onClick={() => navigateToProductDetail(_id)}>update</button>
            <button className='btn btn-danger' onClick={() => handleDeletebutton(_id)}>delete</button>
        </div >
    );
};

export default ManageProduct;