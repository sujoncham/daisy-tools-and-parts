import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummary from './HomeSection/BusinessSummary';
import HomeTools from './HomeSection/HomeTools';
import NewArival from './HomeSection/NewArival';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeTools></HomeTools>
            <BusinessSummary></BusinessSummary>
            <NewArival></NewArival>
        </div>
    );
};

export default Home;