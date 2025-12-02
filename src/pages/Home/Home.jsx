import React from 'react';
import Faq from './Faq';
import CustomerReviews from './CustomerReviews';
import Merchant from './Merchant';
import Service from './Service';
import Brands from './Brands';
import OurServices from './OurServices';
import Process from './Process';
import HomeSliders from './HomeSliders';

const Home = () => {
    return (
        <div className=' space-y-20'>
            <section>
                <HomeSliders></HomeSliders>
            </section>

            <section>
                <Process></Process>
            </section>

            <section>
                <OurServices></OurServices>
            </section>

            <section>
                <Brands></Brands>
            </section>

            <section>
                <Service></Service>
            </section>

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