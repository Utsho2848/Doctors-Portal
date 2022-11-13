import React from 'react';
import exception from '../../assets/images/treatment.png'
import Button from '../components/Button';

const Exceptional = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-24'>
            <div className='w-1/2 mx-auto'>
                <img className='rounded' src={exception} alt="" />
            </div>
            <div>
                <h2 className='text-4xl font-bold'>Exceptional Dental <br /> Care, on Your Terms</h2>
                <p className='my-8'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Button>Get Started</Button>
            </div>
        </div>
    );
};

export default Exceptional;