import React from 'react';
import Banner from '../Banner/Banner';
import Collection from '../Collection/Collection';
import Newly from '../Newly/Newly';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Newly></Newly>
            <Collection></Collection>
        </div>
    );
};

export default Home;