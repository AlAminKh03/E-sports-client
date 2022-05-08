import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const url = `https://lit-chamber-03250.herokuapp.com/products`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (

        <div id="Products" className='container'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'> Our Products</h1>
                <div className="Products-container">
                    {products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)}
                </div>
            </div>
        </div>

    );
};

export default Products;