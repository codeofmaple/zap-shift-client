import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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


            {/* toast */}
            <ToastContainer
                position="top-right" // You can change this position
                autoClose={3000}     // Auto close after 3 seconds
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" // 'light', 'dark', or 'colored'
            />
        </div>
    );
};

export default RootLayout;