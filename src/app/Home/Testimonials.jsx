"use client"
import React from 'react';
import Container from '../Common/Container';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";


const Testimonials = () => {
    return (
        <div className='bg-slate-100 mt-12 p-8'>
            <Container>
                <div>
                    <div className='text-center'>
                        <h3 className='text-sky-600 font-semibold text-2xl uppercase'>Testimonial</h3>
                        <h2 className='text-sky-950 text-6xl font-extrabold mt-4'>What Our Clients Say </h2>

                    </div>
                <div className='mt-12'>
                <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                                <div className='bg-white p-4 w-70 h-[420px]'>
                                    {/* left side Testimonials  */}
                                    <div className='flex justify-between'>
                                        <img className='w-32 border rounded-full border-sky-500 p-2 h-32 ' src="https://img.freepik.com/free-photo/portrait-cheerful-successful-male-doctor-with-stethoscope-hospital-gown_186202-1192.jpg?w=360&t=st=1688196486~exp=1688197086~hmac=69a64b0d7f86e996e8ebef9bf8323d7c68b32edfee6f9d62b269526cbc74a719" alt="" />
                                        <svg width="58" height="50" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.4375 25L14.5 25L14.5 32.1429C14.5 36.0826 11.2488 39.2857 7.25 39.2857L6.34375 39.2857C4.83711 39.2857 3.625 40.4799 3.625 41.9643L3.625 47.3214C3.625 48.8058 4.83711 50 6.34375 50L7.25 50C17.2641 50 25.375 42.0089 25.375 32.1429L25.375 5.35714C25.375 2.39955 22.9395 -3.06509e-06 19.9375 -3.32753e-06L5.4375 -4.59516e-06C2.43555 -4.8576e-06 4.16136e-06 2.39955 3.9028e-06 5.35714L2.65391e-06 19.6429C2.39535e-06 22.6004 2.43555 25 5.4375 25ZM38.0625 25L47.125 25L47.125 32.1429C47.125 36.0826 43.8738 39.2857 39.875 39.2857L38.9688 39.2857C37.4621 39.2857 36.25 40.4799 36.25 41.9643L36.25 47.3214C36.25 48.8058 37.4621 50 38.9688 50L39.875 50C49.8891 50 58 42.0089 58 32.1429L58 5.35714C58 2.39956 55.5645 -2.12922e-07 52.5625 -4.75361e-07L38.0625 -1.74299e-06C35.0606 -2.00543e-06 32.625 2.39955 32.625 5.35714L32.625 19.6429C32.625 22.6004 35.0605 25 38.0625 25Z" fill="#ECE9E9"></path>
                                        </svg>
                                    </div>
                                    <img className=" w-20 h-20" src='https://i.ibb.co/c2NzFF9/download.png' alt="" />
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, esse expedita ipsa consequatur accusamus id ex voluptatem amet doloremque. Eveniet voluptatum nulla illo neque optio dolorem ipsam possimus libero eos?</p>
                                    <h2 className='text-3xl text-sky-950 font-extrabold my-2'>Jon Doe</h2>
                                    <p className='text-sky-600'>Doctor Dentist</p>
                                </div>
                                <div className='bg-white p-4 w-70 h-[420px]'>
                                    {/* right side Testimonials  */}
                                    <div className='flex justify-between'>
                                        <img className='w-32 rounded-full border border-sky-500 p-2 h-32 ' src="https://img.freepik.com/free-photo/portrait-cheerful-successful-male-doctor-with-stethoscope-hospital-gown_186202-1192.jpg?w=360&t=st=1688196486~exp=1688197086~hmac=69a64b0d7f86e996e8ebef9bf8323d7c68b32edfee6f9d62b269526cbc74a719" alt="" />
                                        <svg width="58" height="50" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.4375 25L14.5 25L14.5 32.1429C14.5 36.0826 11.2488 39.2857 7.25 39.2857L6.34375 39.2857C4.83711 39.2857 3.625 40.4799 3.625 41.9643L3.625 47.3214C3.625 48.8058 4.83711 50 6.34375 50L7.25 50C17.2641 50 25.375 42.0089 25.375 32.1429L25.375 5.35714C25.375 2.39955 22.9395 -3.06509e-06 19.9375 -3.32753e-06L5.4375 -4.59516e-06C2.43555 -4.8576e-06 4.16136e-06 2.39955 3.9028e-06 5.35714L2.65391e-06 19.6429C2.39535e-06 22.6004 2.43555 25 5.4375 25ZM38.0625 25L47.125 25L47.125 32.1429C47.125 36.0826 43.8738 39.2857 39.875 39.2857L38.9688 39.2857C37.4621 39.2857 36.25 40.4799 36.25 41.9643L36.25 47.3214C36.25 48.8058 37.4621 50 38.9688 50L39.875 50C49.8891 50 58 42.0089 58 32.1429L58 5.35714C58 2.39956 55.5645 -2.12922e-07 52.5625 -4.75361e-07L38.0625 -1.74299e-06C35.0606 -2.00543e-06 32.625 2.39955 32.625 5.35714L32.625 19.6429C32.625 22.6004 35.0605 25 38.0625 25Z" fill="#ECE9E9"></path>
                                        </svg>
                                    </div>
                                    <img className="w-20 h-20" src='https://i.ibb.co/c2NzFF9/download.png' alt="" />
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, esse expedita ipsa consequatur accusamus id ex voluptatem amet doloremque. Eveniet voluptatum nulla illo neque optio dolorem ipsam possimus libero eos?</p>
                                    <h2 className='text-3xl text-sky-950 font-extrabold my-2'>Jon Doe</h2>
                                    <p className='text-sky-600'>Doctor Dentist</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                                <div className='bg-white p-4 w-70 h-[420px]'>
                                    {/* left side Testimonials  */}
                                    <div className='flex justify-between'>
                                        <img className='w-32 border rounded-full border-sky-500 p-2 h-32 ' src="https://img.freepik.com/free-photo/portrait-cheerful-successful-male-doctor-with-stethoscope-hospital-gown_186202-1192.jpg?w=360&t=st=1688196486~exp=1688197086~hmac=69a64b0d7f86e996e8ebef9bf8323d7c68b32edfee6f9d62b269526cbc74a719" alt="" />
                                        <svg width="58" height="50" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.4375 25L14.5 25L14.5 32.1429C14.5 36.0826 11.2488 39.2857 7.25 39.2857L6.34375 39.2857C4.83711 39.2857 3.625 40.4799 3.625 41.9643L3.625 47.3214C3.625 48.8058 4.83711 50 6.34375 50L7.25 50C17.2641 50 25.375 42.0089 25.375 32.1429L25.375 5.35714C25.375 2.39955 22.9395 -3.06509e-06 19.9375 -3.32753e-06L5.4375 -4.59516e-06C2.43555 -4.8576e-06 4.16136e-06 2.39955 3.9028e-06 5.35714L2.65391e-06 19.6429C2.39535e-06 22.6004 2.43555 25 5.4375 25ZM38.0625 25L47.125 25L47.125 32.1429C47.125 36.0826 43.8738 39.2857 39.875 39.2857L38.9688 39.2857C37.4621 39.2857 36.25 40.4799 36.25 41.9643L36.25 47.3214C36.25 48.8058 37.4621 50 38.9688 50L39.875 50C49.8891 50 58 42.0089 58 32.1429L58 5.35714C58 2.39956 55.5645 -2.12922e-07 52.5625 -4.75361e-07L38.0625 -1.74299e-06C35.0606 -2.00543e-06 32.625 2.39955 32.625 5.35714L32.625 19.6429C32.625 22.6004 35.0605 25 38.0625 25Z" fill="#ECE9E9"></path>
                                        </svg>
                                    </div>
                                    <img className=" w-20 h-20" src='https://i.ibb.co/c2NzFF9/download.png' alt="" />
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, esse expedita ipsa consequatur accusamus id ex voluptatem amet doloremque. Eveniet voluptatum nulla illo neque optio dolorem ipsam possimus libero eos?</p>
                                    <h2 className='text-3xl text-sky-950 font-extrabold my-2'>Jon Doe</h2>
                                    <p className='text-sky-600'>Doctor Dentist</p>
                                </div>
                                <div className='bg-white p-4 w-70 h-[420px]'>
                                    {/* right side Testimonials  */}
                                    <div className='flex justify-between'>
                                        <img className='w-32 rounded-full border border-sky-500 p-2 h-32 ' src="https://img.freepik.com/free-photo/portrait-cheerful-successful-male-doctor-with-stethoscope-hospital-gown_186202-1192.jpg?w=360&t=st=1688196486~exp=1688197086~hmac=69a64b0d7f86e996e8ebef9bf8323d7c68b32edfee6f9d62b269526cbc74a719" alt="" />
                                        <svg width="58" height="50" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.4375 25L14.5 25L14.5 32.1429C14.5 36.0826 11.2488 39.2857 7.25 39.2857L6.34375 39.2857C4.83711 39.2857 3.625 40.4799 3.625 41.9643L3.625 47.3214C3.625 48.8058 4.83711 50 6.34375 50L7.25 50C17.2641 50 25.375 42.0089 25.375 32.1429L25.375 5.35714C25.375 2.39955 22.9395 -3.06509e-06 19.9375 -3.32753e-06L5.4375 -4.59516e-06C2.43555 -4.8576e-06 4.16136e-06 2.39955 3.9028e-06 5.35714L2.65391e-06 19.6429C2.39535e-06 22.6004 2.43555 25 5.4375 25ZM38.0625 25L47.125 25L47.125 32.1429C47.125 36.0826 43.8738 39.2857 39.875 39.2857L38.9688 39.2857C37.4621 39.2857 36.25 40.4799 36.25 41.9643L36.25 47.3214C36.25 48.8058 37.4621 50 38.9688 50L39.875 50C49.8891 50 58 42.0089 58 32.1429L58 5.35714C58 2.39956 55.5645 -2.12922e-07 52.5625 -4.75361e-07L38.0625 -1.74299e-06C35.0606 -2.00543e-06 32.625 2.39955 32.625 5.35714L32.625 19.6429C32.625 22.6004 35.0605 25 38.0625 25Z" fill="#ECE9E9"></path>
                                        </svg>
                                    </div>
                                    <img className="w-20 h-20" src='https://i.ibb.co/c2NzFF9/download.png' alt="" />
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, esse expedita ipsa consequatur accusamus id ex voluptatem amet doloremque. Eveniet voluptatum nulla illo neque optio dolorem ipsam possimus libero eos?</p>
                                    <h2 className='text-3xl text-sky-950 font-extrabold my-2'>Jon Doe</h2>
                                    <p className='text-sky-600'>Doctor Dentist</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                                <div className='bg-white p-4 w-70 h-[420px]'>
                                    {/* left side Testimonials  */}
                                    <div className='flex justify-between'>
                                        <img className='w-32 border rounded-full border-sky-500 p-2 h-32 ' src="https://img.freepik.com/free-photo/portrait-cheerful-successful-male-doctor-with-stethoscope-hospital-gown_186202-1192.jpg?w=360&t=st=1688196486~exp=1688197086~hmac=69a64b0d7f86e996e8ebef9bf8323d7c68b32edfee6f9d62b269526cbc74a719" alt="" />
                                        <svg width="58" height="50" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.4375 25L14.5 25L14.5 32.1429C14.5 36.0826 11.2488 39.2857 7.25 39.2857L6.34375 39.2857C4.83711 39.2857 3.625 40.4799 3.625 41.9643L3.625 47.3214C3.625 48.8058 4.83711 50 6.34375 50L7.25 50C17.2641 50 25.375 42.0089 25.375 32.1429L25.375 5.35714C25.375 2.39955 22.9395 -3.06509e-06 19.9375 -3.32753e-06L5.4375 -4.59516e-06C2.43555 -4.8576e-06 4.16136e-06 2.39955 3.9028e-06 5.35714L2.65391e-06 19.6429C2.39535e-06 22.6004 2.43555 25 5.4375 25ZM38.0625 25L47.125 25L47.125 32.1429C47.125 36.0826 43.8738 39.2857 39.875 39.2857L38.9688 39.2857C37.4621 39.2857 36.25 40.4799 36.25 41.9643L36.25 47.3214C36.25 48.8058 37.4621 50 38.9688 50L39.875 50C49.8891 50 58 42.0089 58 32.1429L58 5.35714C58 2.39956 55.5645 -2.12922e-07 52.5625 -4.75361e-07L38.0625 -1.74299e-06C35.0606 -2.00543e-06 32.625 2.39955 32.625 5.35714L32.625 19.6429C32.625 22.6004 35.0605 25 38.0625 25Z" fill="#ECE9E9"></path>
                                        </svg>
                                    </div>
                                    <img className=" w-20 h-20" src='https://i.ibb.co/c2NzFF9/download.png' alt="" />
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, esse expedita ipsa consequatur accusamus id ex voluptatem amet doloremque. Eveniet voluptatum nulla illo neque optio dolorem ipsam possimus libero eos?</p>
                                    <h2 className='text-3xl text-sky-950 font-extrabold my-2'>Jon Doe</h2>
                                    <p className='text-sky-600'>Doctor Dentist</p>
                                </div>
                                <div className='bg-white p-4 w-70 h-[420px]'>
                                    {/* right side Testimonials  */}
                                    <div className='flex justify-between'>
                                        <img className='w-32 rounded-full border border-sky-500 p-2 h-32 ' src="https://img.freepik.com/free-photo/portrait-cheerful-successful-male-doctor-with-stethoscope-hospital-gown_186202-1192.jpg?w=360&t=st=1688196486~exp=1688197086~hmac=69a64b0d7f86e996e8ebef9bf8323d7c68b32edfee6f9d62b269526cbc74a719" alt="" />
                                        <svg width="58" height="50" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.4375 25L14.5 25L14.5 32.1429C14.5 36.0826 11.2488 39.2857 7.25 39.2857L6.34375 39.2857C4.83711 39.2857 3.625 40.4799 3.625 41.9643L3.625 47.3214C3.625 48.8058 4.83711 50 6.34375 50L7.25 50C17.2641 50 25.375 42.0089 25.375 32.1429L25.375 5.35714C25.375 2.39955 22.9395 -3.06509e-06 19.9375 -3.32753e-06L5.4375 -4.59516e-06C2.43555 -4.8576e-06 4.16136e-06 2.39955 3.9028e-06 5.35714L2.65391e-06 19.6429C2.39535e-06 22.6004 2.43555 25 5.4375 25ZM38.0625 25L47.125 25L47.125 32.1429C47.125 36.0826 43.8738 39.2857 39.875 39.2857L38.9688 39.2857C37.4621 39.2857 36.25 40.4799 36.25 41.9643L36.25 47.3214C36.25 48.8058 37.4621 50 38.9688 50L39.875 50C49.8891 50 58 42.0089 58 32.1429L58 5.35714C58 2.39956 55.5645 -2.12922e-07 52.5625 -4.75361e-07L38.0625 -1.74299e-06C35.0606 -2.00543e-06 32.625 2.39955 32.625 5.35714L32.625 19.6429C32.625 22.6004 35.0605 25 38.0625 25Z" fill="#ECE9E9"></path>
                                        </svg>
                                    </div>
                                    <img className="w-20 h-20" src='https://i.ibb.co/c2NzFF9/download.png' alt="" />
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, esse expedita ipsa consequatur accusamus id ex voluptatem amet doloremque. Eveniet voluptatum nulla illo neque optio dolorem ipsam possimus libero eos?</p>
                                    <h2 className='text-3xl text-sky-950 font-extrabold my-2'>Jon Doe</h2>
                                    <p className='text-sky-600'>Doctor Dentist</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                                <div className='bg-white p-4 w-70 h-[420px]'>
                                    {/* left side Testimonials  */}
                                    <div className='flex justify-between'>
                                        <img className='w-32 border rounded-full border-sky-500 p-2 h-32 ' src="https://img.freepik.com/free-photo/portrait-cheerful-successful-male-doctor-with-stethoscope-hospital-gown_186202-1192.jpg?w=360&t=st=1688196486~exp=1688197086~hmac=69a64b0d7f86e996e8ebef9bf8323d7c68b32edfee6f9d62b269526cbc74a719" alt="" />
                                        <svg width="58" height="50" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.4375 25L14.5 25L14.5 32.1429C14.5 36.0826 11.2488 39.2857 7.25 39.2857L6.34375 39.2857C4.83711 39.2857 3.625 40.4799 3.625 41.9643L3.625 47.3214C3.625 48.8058 4.83711 50 6.34375 50L7.25 50C17.2641 50 25.375 42.0089 25.375 32.1429L25.375 5.35714C25.375 2.39955 22.9395 -3.06509e-06 19.9375 -3.32753e-06L5.4375 -4.59516e-06C2.43555 -4.8576e-06 4.16136e-06 2.39955 3.9028e-06 5.35714L2.65391e-06 19.6429C2.39535e-06 22.6004 2.43555 25 5.4375 25ZM38.0625 25L47.125 25L47.125 32.1429C47.125 36.0826 43.8738 39.2857 39.875 39.2857L38.9688 39.2857C37.4621 39.2857 36.25 40.4799 36.25 41.9643L36.25 47.3214C36.25 48.8058 37.4621 50 38.9688 50L39.875 50C49.8891 50 58 42.0089 58 32.1429L58 5.35714C58 2.39956 55.5645 -2.12922e-07 52.5625 -4.75361e-07L38.0625 -1.74299e-06C35.0606 -2.00543e-06 32.625 2.39955 32.625 5.35714L32.625 19.6429C32.625 22.6004 35.0605 25 38.0625 25Z" fill="#ECE9E9"></path>
                                        </svg>
                                    </div>
                                    <img className=" w-20 h-20" src='https://i.ibb.co/c2NzFF9/download.png' alt="" />
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, esse expedita ipsa consequatur accusamus id ex voluptatem amet doloremque. Eveniet voluptatum nulla illo neque optio dolorem ipsam possimus libero eos?</p>
                                    <h2 className='text-3xl text-sky-950 font-extrabold my-2'>Jon Doe</h2>
                                    <p className='text-sky-600'>Doctor Dentist</p>
                                </div>
                                <div className='bg-white p-4 w-70 h-[420px]'>
                                    {/* right side Testimonials  */}
                                    <div className='flex justify-between'>
                                        <img className='w-32 rounded-full border border-sky-500 p-2 h-32 ' src="https://img.freepik.com/free-photo/portrait-cheerful-successful-male-doctor-with-stethoscope-hospital-gown_186202-1192.jpg?w=360&t=st=1688196486~exp=1688197086~hmac=69a64b0d7f86e996e8ebef9bf8323d7c68b32edfee6f9d62b269526cbc74a719" alt="" />
                                        <svg width="58" height="50" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.4375 25L14.5 25L14.5 32.1429C14.5 36.0826 11.2488 39.2857 7.25 39.2857L6.34375 39.2857C4.83711 39.2857 3.625 40.4799 3.625 41.9643L3.625 47.3214C3.625 48.8058 4.83711 50 6.34375 50L7.25 50C17.2641 50 25.375 42.0089 25.375 32.1429L25.375 5.35714C25.375 2.39955 22.9395 -3.06509e-06 19.9375 -3.32753e-06L5.4375 -4.59516e-06C2.43555 -4.8576e-06 4.16136e-06 2.39955 3.9028e-06 5.35714L2.65391e-06 19.6429C2.39535e-06 22.6004 2.43555 25 5.4375 25ZM38.0625 25L47.125 25L47.125 32.1429C47.125 36.0826 43.8738 39.2857 39.875 39.2857L38.9688 39.2857C37.4621 39.2857 36.25 40.4799 36.25 41.9643L36.25 47.3214C36.25 48.8058 37.4621 50 38.9688 50L39.875 50C49.8891 50 58 42.0089 58 32.1429L58 5.35714C58 2.39956 55.5645 -2.12922e-07 52.5625 -4.75361e-07L38.0625 -1.74299e-06C35.0606 -2.00543e-06 32.625 2.39955 32.625 5.35714L32.625 19.6429C32.625 22.6004 35.0605 25 38.0625 25Z" fill="#ECE9E9"></path>
                                        </svg>
                                    </div>
                                    <img className="w-20 h-20" src='https://i.ibb.co/c2NzFF9/download.png' alt="" />
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, esse expedita ipsa consequatur accusamus id ex voluptatem amet doloremque. Eveniet voluptatum nulla illo neque optio dolorem ipsam possimus libero eos?</p>
                                    <h2 className='text-3xl text-sky-950 font-extrabold my-2'>Jon Doe</h2>
                                    <p className='text-sky-600'>Doctor Dentist</p>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
                </div>
            </Container>
        </div>
    );
};

export default Testimonials;