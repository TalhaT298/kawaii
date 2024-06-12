/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import Collection from '../Collection/Collection';
import Newly from '../Newly/Newly';
import Facebook from '../Facebook/Facebook';
import Customer from '../Customer/Customer';
import Off from '../Off/Off';

const Home = () => {
    return (
        <div>
            <Off></Off>
            <Banner></Banner>
            <Newly></Newly>
            <Collection></Collection>
            <Facebook></Facebook>
            <Customer></Customer>
        </div>
    );
};

export default Home;