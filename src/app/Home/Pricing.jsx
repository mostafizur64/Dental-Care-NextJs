import Container from '../Common/Container';
import React from 'react';
import { FaCheck, FaUserMd } from 'react-icons/fa';

const Pricing = () => {
    return (
        <div>
              <Container>
                <div className='text-center mt-12'>
                    <h3 className='text-sky-600 text-2xl font-semibold uppercase'>Our Pricing</h3>
                    <h2 className='text-5xl font-bold text-sky-900 mt-4'>Great Pricing Offers</h2>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12'>
                    <div className='bg-white p-8 shadow-lg rounded-lg border text-center'>
                        <FaUserMd className='text-sky-600 w-10 h-10 mx-auto' />
                        <h3 className='text-2xl font-semibold my-4 text-sky-950'>Basic Plan</h3>
                        <h3><span className='text-4xl  text-sky-600 font-bold'>$29.00</span>/Month</h3>
                        <hr className='mt-8' />


                        <span className='flex gap-2 justify-center mt-4'>
                            <FaCheck className='bg-sky-100 text-sky-600' />
                            <p>Proin gravida nibh vel</p>
                        </span>
                        <span className='flex gap-2 justify-center mt-4'>
                            <FaCheck className='bg-sky-100 text-sky-600' />
                            <p>Proin gravida nibh vel</p>
                        </span>
                        <span className='flex gap-2 justify-center mt-4'>
                            <FaCheck className='bg-sky-100 text-sky-600' />
                            <p>Proin gravida nibh vel</p>
                        </span>
                        <span className='flex gap-2 justify-center mt-4'>
                            <FaCheck className='bg-sky-100 text-sky-600' />
                            <p>Proin gravida nibh vel</p>
                        </span>
                        <span className='flex gap-2 justify-center mt-4'>
                            <FaCheck className='bg-sky-100 text-sky-600' />
                            <p>Proin gravida nibh vel</p>
                        </span>
                        <a className="btn bg-sky-500 hover:text-sky-600 text-white uppercase mt-4">Join Now </a>

                    </div>
                    <div className='bg-white p-8 shadow-lg border rounded-lg text-center'>
                        <div className='flex items-center justify-center mx-auto'>
                            <FaUserMd className='text-sky-600 w-10 h-10 ' />
                            <FaUserMd className='text-sky-600 w-10 h-10 ' />
                        </div>
                        <h3 className='text-2xl font-semibold my-4 text-sky-950'>Standard Plan</h3>
                        <h3><span className='text-4xl  text-sky-600 font-bold'>$39.00</span>/Month</h3>
                        <hr className='mt-8' />

                        <span className='flex gap-2 justify-center mt-4'>
                            <FaCheck className='bg-sky-100 text-sky-600' />
                            <p>Proin gravida nibh vel</p>
                        </span>
                        <span className='flex gap-2 justify-center mt-4'>
                            <FaCheck className='bg-sky-100 text-sky-600' />
                            <p>Proin gravida nibh vel</p>
                        </span>
                        <span className='flex gap-2 justify-center mt-4'>
                            <FaCheck className='bg-sky-100 text-sky-600' />
                            <p>Proin gravida nibh vel</p>
                        </span>
                        <span className='flex gap-2 justify-center mt-4'>
                            <FaCheck className='bg-sky-100 text-sky-600' />
                            <p>Proin gravida nibh vel</p>
                        </span>
                        <span className='flex gap-2 justify-center mt-4'>
                            <FaCheck className='bg-sky-100 text-sky-600' />
                            <p>Proin gravida nibh vel</p>
                        </span>
                        <a className="btn bg-sky-500 hover:text-sky-600 text-white uppercase mt-4">Join Now </a>
                    </div>
                    <div className='bg-white p-8 shadow-lg rounded-lg border text-center'>
                        <div className='flex items-center justify-center mx-auto'>
                            <FaUserMd className='text-sky-600 w-10 h-10 ' />
                            <FaUserMd className='text-sky-600 w-10 h-10 ' />
                            <FaUserMd className='text-sky-600 w-10 h-10 ' />
                        </div>
                        <h3 className='text-2xl font-semibold my-4 text-sky-950'>Premium Plan</h3>
                        <h3><span className='text-4xl  text-sky-600 font-bold'>$49.00</span>/Month</h3>
                        <hr className='mt-8' />

                        <span className='flex gap-2 justify-center mt-4'>
                            <FaCheck className='bg-sky-100 text-sky-600' />
                            <p>Proin gravida nibh vel</p>
                        </span>
                        <span className='flex gap-2 justify-center mt-4'>
                            <FaCheck className='bg-sky-100 text-sky-600' />
                            <p>Proin gravida nibh vel</p>
                        </span>
                        <span className='flex gap-2 justify-center mt-4'>
                            <FaCheck className='bg-sky-100 text-sky-600' />
                            <p>Proin gravida nibh vel</p>
                        </span>
                        <span className='flex gap-2 justify-center mt-4'>
                            <FaCheck className='bg-sky-100 text-sky-600' />
                            <p>Proin gravida nibh vel</p>
                        </span>
                        <span className='flex gap-2 justify-center mt-4'>
                            <FaCheck className='bg-sky-100 text-sky-600' />
                            <p>Proin gravida nibh vel</p>
                        </span>
                        <a className="btn bg-sky-500 hover:text-sky-600 text-white uppercase mt-4">Join Now </a>
                    </div>
                    <div></div>
                    <div></div>
                </div>

            </Container>
        </div>
    );
};

export default Pricing;