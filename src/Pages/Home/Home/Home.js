import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Extra from '../Extra/Extra';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Extra></Extra>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;