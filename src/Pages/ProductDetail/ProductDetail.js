import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UseProductDetail from '../../Hooks/UseProductDetail';


const ProductDetail = () => {
    const { productId } = useParams()
    const [product, setProduct] = UseProductDetail(productId)
    const navigate = useNavigate()
    const navigateToProducts = () => {
        navigate('manageproducts')
    }
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])

    return (
        <div className='product'>
            <img className='w-100' src={product.img} alt="" />
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <p>Quantity:{product.quantity}</p>
            <p className='text-primary'>Dealer :{product.dealer}</p>
            <p><small>{product.description}</small></p>
            {/* <button className='btn btn-dark'>update</button> */}
            <button className="bg-primary">Delivery</button>

            <div>
                <button className="text-primary" onClick={navigateToProducts}>Manage Products</button>
            </div>
        </div>
    );
};

export default ProductDetail;