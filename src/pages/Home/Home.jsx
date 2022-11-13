import React from 'react';
import Appointment from './Appointments/Appointment';
import AppointmentCards from './Appointments/AppointmentCards';
import Banner from './Banner';
import Exceptional from './Exceptional';
import Services from './services/Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <AppointmentCards></AppointmentCards>
            <Services></Services>
            <Exceptional></Exceptional>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;