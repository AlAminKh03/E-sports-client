import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Extra from '../Extra/Extra';
import Extras from '../Extras/Extras';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Extra></Extra>
            <Products></Products>
            <Extras></Extras>

        </div>
    );
};

export default Home;