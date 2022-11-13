import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {
    const serviceInfo = [
        {
            _id: 1,
            img: fluoride,
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            _id: 2,
            img: cavity,
            name: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            _id: 3,
            img: whitening,
            name: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
    ]
    return (
        <div className='mt-32'>
            <div className='mb-8'>
                <h4 className='text-lg uppercase font-bold text-primary text-center'>Our Services</h4>
                <h2 className='text-4xl font-semibold text-center'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mt-12'>
                {
                    serviceInfo.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }

            </div>

        </div>
    );
};

export default Services;