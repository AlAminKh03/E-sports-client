import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseProducts from '../../../Hooks/UseProducts';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = UseProducts()

    const handleDeletebutton = (id) => {
        const proceed = window.confirm("are you sure?")
        if (proceed) {
            const url = `https://lit-chamber-03250.herokuapp.com/product/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining)
                })

        }
    }

    return (
        <div id="Products" className='container'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'> Our Products</h1>
                <div className="Products-container">
                    {products.map(product => <ManageProduct
                        key={product._id}
                        product={product}
                        handleDeletebutton={handleDeletebutton}
                    >

                    </ManageProduct>)}
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;