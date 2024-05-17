/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import Collection from '../Collection/Collection';
import Newly from '../Newly/Newly';
import Facebook from '../Facebook/Facebook';
// import Testimonial from '../Testimonial/Testimonial';
// import Customer from '../Customer/Customer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Newly></Newly>
            <Collection></Collection>
            <Facebook></Facebook>
            {/* <Customer></Customer> */}
            {/* <Testimonial></Testimonial> */}
        </div>
    );
};

export default Home;