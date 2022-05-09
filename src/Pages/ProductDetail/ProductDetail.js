import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import UseProductDetail from '../../Hooks/UseProductDetail';


const ProductDetail = () => {
    const { productId } = useParams()
    const [product, setProduct] = UseProductDetail(productId)
    const [productQuantity, setProductQuantity] = useState(product.quantity)
    const navigate = useNavigate()
    const navigateToProducts = () => {
        navigate('manageproducts')
    }
    useEffect(() => {
        const url = `https://lit-chamber-03250.herokuapp.com/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [productQuantity])


    const deliveredProduct = () => {
        const newQuantityTotal = parseInt(product.quantity) - 1
        const newQuantity = { newQuantityTotal }
        console.log(newQuantity)
        const putUrl = `https://lit-chamber-03250.herokuapp.com/update/${productId}`
        fetch(putUrl, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newQuantity)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    setProductQuantity(newQuantityTotal);
                    // toast.success("Product Delivered !!")
                }
            })
    }

    //  data 
    const handleProductUpdate = e => {
        e.preventDefault();
        const supplierInput = e.target.quantity.value;
        const newQuantityTotal = parseInt(product.quantity) + parseInt(supplierInput)
        const newQuantity = { newQuantityTotal }
        const url = `https://lit-chamber-03250.herokuapp.com/update/${productId}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newQuantity)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    setProductQuantity(newQuantityTotal);
                    // toast.success("SuccessFully Added")
                    e.target.reset()
                }
            })
    }

    return (
        <div className='product container'>
            <img className='w-25' src={product.img} alt="" />
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <p>Quantity:{product.quantity}</p>
            <p className='text-primary'>Dealer :{product.dealer}</p>
            <p><small>{product.description}</small></p>
            {/* <button className='btn btn-dark'>update</button> */}
            <button onClick={deliveredProduct} className="bg-primary">Delivery</button>
            <form onSubmit={handleProductUpdate}>
                <input type="number" name="quantity" id="quantity" />
                <input type="submit" value="Add" />
            </form>

            <div >
                <button className="text-primary" onClick={navigateToProducts}>Manage Products</button>
            </div>
        </div>
    );
};

export default ProductDetail;