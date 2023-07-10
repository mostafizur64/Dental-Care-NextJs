import React from 'react';
import Container from '../Common/Container';
import { FaCheck, FaUserMd } from 'react-icons/fa';

const FAQ = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-12'>
            <div className='bg-sky-800'>
                {/* left side  */}
                <Container>
                    <div className='ml-10 mt-12'>
                        <h3 className='uppercase text-sky-950 font-bold'>Faq</h3>
                        <h2 className='uppercase text-white font-bold text-4xl'>We Have all<br />  Answer here </h2>
                    </div>
                    <div className="join join-vertical w-[90%] ml-10">
                        <div className="collapse collapse-arrow join-item border border-base-300 bg-white ">
                            <input type="radio" name="my-accordion-4" checked="checked" />
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300 bg-white">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300 bg-white">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                    </div>
                </Container>


            </div>
            <div>
                {/* right side  */}
                <img src="https://img.freepik.com/free-photo/workers-medical-clinic_1098-2288.jpg?w=740&t=st=1688960864~exp=1688961464~hmac=ebe4688c131f542fd7460abdb52fff48c71c6f9a96308322a6700eac50073afd" alt="" />
            </div>
        </div>
    );
};

export default FAQ;