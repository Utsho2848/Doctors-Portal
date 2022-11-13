import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import marker from '../../../assets/icons/marker.svg'
import Appoinment from './AppoinmentCard';


const AppointmentCards = () => {
    const appointmentsData = [
        {
            _id: 1,
            name: "Opening Hours",
            description: "Lorem Ipsum is simply dummy text of the pri",
            img: clock,
            bgFrom: 'primary',
            bgTo: 'secondary'

        },
        {
            _id: 2,
            name: "Visit our location",
            description: "Brooklyn, NY 10036, United States",
            img: marker,
            bgFrom: 'primary',
            bgTo: 'secondary'
        },
        {
            _id: 3,
            name: "Contact us now",
            description: "+000 123 456789",
            img: phone,
            bgFrom: 'primary',
            bgTo: 'secondary'
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-4 md:mt-8 lg:mt-24 lg:grid-cols-3 gap-6'>
            {
                appointmentsData.map(appointment => <Appoinment key={appointment._id} appointment={appointment}></Appoinment>)
            }
        </div>
    );
};

export default AppointmentCards;