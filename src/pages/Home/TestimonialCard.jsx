import React from 'react';

const TestimonialCard = ({ test }) => {
    const { name, img, description, state } = test;
    return (
        <div className='card shadow-xl p-12'>
            <p>{description}</p>
            <div className='flex items-center mt-4'>
                <img className='w-12' src={img} alt="" />
                <div className='ml-4'>
                    <h4 className='font-bold'>{name}</h4>
                    <p>{state}</p>
                </div>
            </div>

        </div>
    );
};

export default TestimonialCard;