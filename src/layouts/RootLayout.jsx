import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';

const RootLayout = () => {
    return (
        <div className=' container mx-auto p-4 flex flex-col'>

            <header>
                <Navbar></Navbar>
            </header>

            <main className='flex-1'>
                <Outlet></Outlet>
            </main>

            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default RootLayout;