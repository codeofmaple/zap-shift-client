import React from 'react';
import logo from './../assets/logo.png'

const Logo = () => {
    return (
        <div className='flex items-end'>
            <img src={logo} alt="logo" />
            <h3 className='font-bold -ms-3'>ZapShift</h3>
        </div>
    );
};

export default Logo;