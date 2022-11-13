import React from 'react';
import { format } from 'date-fns';

const AvailableAppointment = ({ selectedDate }) => {

    return (
        <div className='lg:mt-24'>
            <p className='text-primary font-bold text-lg text-center'>Available Appointment on {format(selectedDate, 'PP')}</p>

        </div>
    );
};

export default AvailableAppointment;