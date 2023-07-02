import Link from 'next/link';
import React from 'react';
import Container from '../Common/Container';
import Banner from '../Home/Banner';
import { FaTooth } from 'react-icons/fa';
const Navbar = () => {
    const navItems = <>
        <li> <Link href="/">Home</Link></li>
        <li> <Link href="/aboutUs">About Us</Link></li>
        <li> <Link href="/service">Service</Link></li>
        <li> <Link href="/pages">Pages</Link></li>
        <li> <Link href="/blog">Blogs</Link></li>
        <li> <Link href="/contact">Contact</Link></li>



    </>
    return (
        <div className='bg-sky-50'>
            <Container>
                 <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navItems}
                            </ul>
                        </div>
                        <div className='flex gap-2 items-center '>
                        <FaTooth className='text-sky-500 h-12 w-12'/>
                        <Link href='/' className='text-sky-950 font-extrabold    text-3xl'>DeCare</Link>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn bg-sky-500 hover:text-sky-600 text-white uppercase">Book Appointment</a>
                    </div>
                </div>
                <Banner/>
            </Container>
        </div>
    );
};

export default Navbar;