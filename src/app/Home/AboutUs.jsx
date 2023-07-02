import React from 'react';
import Container from '../Common/Container';

const AboutUsPage = () => {
    return (
        <div>
            <Container>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-28 mt-12'>
                    <div>
                        {/* left side */}
                        <img className='h-full' src="https://img.freepik.com/free-photo/dentist-examining-patient-s-teeth_1098-568.jpg?w=740&t=st=1688182421~exp=1688183021~hmac=c9aae1eb6665a86566ac6471670ccbd57952583cbaa5c326d0a394ae77b55f85" alt="" />
                        <div className='absolute rounded-lg border bg-white p-2 gap-4  flex items-center justify-center lg:top-[1460px] lg:left-[500px] top-[2040px]'>
                            <h3 className='text-sky-600 text-6xl '>25</h3>
                            <p className='text-sky-950 font-semibold'>Year of <br /> Experience</p>
                        </div>
                    </div>
                    <div>
                        {/* right side */}
                        <h3 className='uppercase text-sky-600 font-semibold'>About Us</h3>
                        <h2 className='text-sky-950 font-extrabold text-6xl mt-4'>We Care For Your Dental Health</h2>
                        <p className='my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veritatis dignissimos sequi doloribus suscipit vero asperiores itaque optio placeat nam?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum quo commodi, nostrum voluptatum soluta non quibusdam iste vel tempora.</p>
                        <button className='btn bg-sky-500 mt-8 text-white'>Read More</button>

                    </div>
                </div>
                <div class="mt-12">
                    <div class="flex flex-wrap justify-center item-center gap-3 p-8 bg-sky-700 rounded-lg">
                        <div class="w-full sm:w-auto">
                            <input class="w-full h-full sm:w-72 p-4 rounded-full" type="text" placeholder="Enter your name" />
                        </div>
                        <div class="w-full sm:w-auto">
                            <input class="w-full h-full sm:w-72 p-4 rounded-full" type="text" placeholder="Enter your name" />
                        </div>
                        <div class="w-full sm:w-auto">
                            <select class="select select-bordered rounded-full p-4 h-full w-full lg:w-72 sm:max-w-xs">
                                <option disabled selected>Who shot first?</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                        </div>
                        <button class="btn bg-sky-500 text-white  mt-2 h-full">Book Now</button>
                    </div>
                </div>



            </Container>
        </div>
    );
};

export default AboutUsPage;