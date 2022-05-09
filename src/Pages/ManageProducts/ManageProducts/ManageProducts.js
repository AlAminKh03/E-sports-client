import React from 'react';
import UseProducts from '../../../Hooks/UseProducts';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = UseProducts()
    return (
        <div id="Products" className='container'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'> Our Products</h1>
                <div className="Products-container">
                    {products.map(product => <ManageProduct
                        key={product._id}
                        product={product}
                    >

                    </ManageProduct>)}
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;