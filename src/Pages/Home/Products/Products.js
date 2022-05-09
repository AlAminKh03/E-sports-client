import useProducts from "../../../Hooks/UseProducts"
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useProducts()

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