import React from 'react';
import Container from '../Common/Container';
import { FaRegClock, FaSearchLocation, FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelopeOpenText, FaTooth } from "react-icons/fa";
import Link from 'next/link';
const Footer = () => {
    return (
        <div className='bg-sky-800 '>
            <Container>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 py-28'>
                    <div>
                        <div className='flex gap-4 items-center '>
                            <FaTooth className='text-sky-500 h-12 w-12' />
                            <h2 className='text-white font-extrabold text-2xl'>DeCare</h2>
                        </div>
                        <p className='my-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quae.</p>
                        <div className='flex gap-4'>
                            <FaRegClock className='text-white w-10 h-10 p-2 rounded-full bg-sky-950' />
                            <p>Monday-Saturday <br /> 9:00am - 10:00pm</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-white font-extrabold text-2xl mt-2'>Our Links</h2>
                        <ul className='mt-4'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Service</li>
                            <li>Blog</li>
                            <li>FAQ</li>
                            <li>Contact Us</li>

                        </ul>
                    </div>
                    <div>
                        <h2 className='text-white font-extrabold text-2xl mt-2'>Our Services</h2>
                        <ul className='mt-4'>
                            <li>Root Canal</li>
                            <li>Alignment Teeth</li>
                            <li>Cosmetic Teeth</li>
                            <li>Oral Hygiene</li>
                            <li>Live Advisory</li>
                            <li>Cavity Inspection</li>

                        </ul>
                    </div>
                    <div>
                        <h2 className='text-white font-extrabold text-2xl mt-2'>Contact Us</h2>

                        <div className='mt-4'>
                            <div className='flex gap-4'>
                                <FaSearchLocation className='text-white w-10 h-10 p-2 rounded-full bg-sky-950' />
                                <p>1200/A Plot No . 120  <br /> Dhaka Bangladesh</p>
                            </div>
                            <div className='flex gap-4'>
                                <FaPhone className='text-white w-10 h-10 p-2 rounded-full bg-sky-950' />
                                <p>+98745121  <br />+88 01796569871</p>
                            </div>
                            <div className='flex gap-4'>
                                <FaEnvelopeOpenText className='text-white w-10 h-10 p-2 rounded-full bg-sky-950' />
                                <p>info@gmail.com <br /> service@gmail.com</p>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
            <div className='bg-sky-950'>
                <Container>
                    <footer className="flex justify-between text-white footer footer-center p-4  ">
                        <div>
                            <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                        </div>
                        <div className='flex gap-4'>
                            <Link href='/'><FaFacebook  className='w-10 h-10 text-white '/></Link>
                            <Link href='/'><FaInstagram className='w-10 h-10 ' /></Link>
                            <Link href='/'><FaTwitter  className='w-10 h-10 '/></Link>
                        </div>
                    </footer>
                </Container>
            </div>
        </div>
    );
};

export default Footer;