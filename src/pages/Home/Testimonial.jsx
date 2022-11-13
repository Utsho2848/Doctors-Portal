import React from 'react';
import quote from '../../assets/icons/quote.svg';
import person1 from '../../assets/images/people1.png';
import person2 from '../../assets/images/people2.png';
import person3 from '../../assets/images/people3.png';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    const testimonialData = [
        {
            _id: 1,
            img: person1,
            name: "Winson Herry",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            state: 'California'
        },
        {
            _id: 2,
            img: person2,
            name: "Winson Herry",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            state: 'California'
        },
        {
            _id: 3,
            img: person3,
            name: "Winson Herry",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            state: 'California'
        }
    ]
    return (
        <div className='mt-12'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-primary font-bold'>Testimonial</h4>
                    <h2 className='text-4xl fond-bold'>What Our Patients Says</h2>
                </div>
                <img className='w-44' src={quote} alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    testimonialData.map(test => <TestimonialCard key={test._id} test={test}></TestimonialCard>)
                }
            </div>

        </div>
    );
};

export default Testimonial;