import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../../../components/logo';
import Button from '../../../components/Button';

const Navbar = () => {

    const navClass = ({ isActive }) =>
        `rounded-sm transition-all duration-300 font-medium hover:bg-primary md:hover:rotate-2
     ${isActive ? "bg-primary text-black" : "bg-ghost"}`;

    const navLinks = (
        <>
            <li><NavLink to="/services" className={navClass}>Services</NavLink></li>
            <li><NavLink to="/coverage" className={navClass}>Coverage</NavLink></li>
            <li><NavLink to="/track-order" className={navClass}>Track Order</NavLink></li>
            <li><NavLink to="/about" className={navClass}>About Us</NavLink></li>
            <li><NavLink to="/pricing" className={navClass}>Pricing</NavLink></li>
            <li><NavLink to="/rider" className={navClass}>Be a Rider</NavLink></li>

            <Link className="btn md:hidden btn-ghost border border-base-300 px-6 rounded-lg font-medium
                    hover:bg-primary transition-all duration-300 ease-in-out active:scale-95">
                Sign In
            </Link>
        </>
    );

    return (
        <div>
            <div className="navbar bg-white shadow-sm rounded-2xl md:px-8 mt-1   ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' className=" my-auto btn-ghost text-xl">
                        <Logo></Logo>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <span className='hidden md:inline-block'>
                        <Link to='/login' className="btn   btn-ghost border border-base-300 px-6 rounded-lg font-medium
                    hover:bg-primary transition-all duration-300 ease-in-out active:scale-95">
                            Sign In
                        </Link>
                    </span>

                    <Link className='w-38'>
                        <Button text="Be a rider"></Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


