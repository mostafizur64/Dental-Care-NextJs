import React from 'react';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-8 justify-between'>
            <div>
                {/* banner left side  */}
                <p className='text-sky-600 text-2xl font-semibold'>Welcome to Decare</p>
                <h2 className='text-sky-950 text-6xl font-extrabold mt-4'>We Are Best Dental Service</h2>
                <p className='mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos doloribus eveniet non officia fugiat autem!</p>
                <div className='mt-6 bg-white w-[90%] flex p-4 gap-4 rounded-lg'>
                    <input className='bg-gray-200 w-[70%] p-2 rounded-lg' type="text" placeholder='Your Email Address' />
                    <button className='btn bg-sky-500 text-white hover:text-sky-600'>Get Call Back</button>
                </div>
            </div>
            {/* banner right side */}
            <div>
                <div className='bg-red-700 absolute top-0 right-0'/>
                <img className='h-[500px] bg-red-500' src="https://img.freepik.com/free-photo/portrait-young-female-dentist-white-background_23-2147905950.jpg?size=626&ext=jpg" alt="image" />
                <div className='absolute rounded-lg border bg-white p-2 gap-4  flex lg:top-[280px] lg:right-40 top-[600px]'>
                    <img className='w-10 h-10 rounded-full' src="https://img.freepik.com/premium-photo/medical-concept-indian-beautiful-female-doctor-white-coat-with-stethoscope-waist-up-medical-student-woman-hospital-worker-looking-camera-smiling-studio-blue-background_185696-621.jpg?w=740" alt="" />
                    <div>
                        <h3>Dr Mahbuba Doe</h3>
                        Best Dental
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Banner;