import React from 'react';
import Faq from './Faq';
import CustomerReviews from './CustomerReviews';
import Merchant from './Merchant';

const Home = () => {
    return (
        <div className=' space-y-20'>
            this is home

            <section>
                <Merchant></Merchant>
            </section>

            <section>
                <CustomerReviews></CustomerReviews>
            </section>

            <section>
                <Faq></Faq>
            </section>
        </div>
    );
};

export default Home;