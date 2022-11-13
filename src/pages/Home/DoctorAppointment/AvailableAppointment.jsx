import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AvailableAppointmentCard from './AvailableAppointmentCard';
import BookingModal from './BookingModal';


const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState('')
    useEffect(() => {
        fetch('appointmentServiceData.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])

    return (
        <div className='lg:mt-24 mx-12'>
            <p className='text-primary font-bold text-lg text-center'>Available Appointment on {format(selectedDate, 'PP')}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                {
                    appointmentOptions.map(option => <AvailableAppointmentCard key={option._id} option={option} setTreatment={setTreatment}></AvailableAppointmentCard>)
                }
            </div>
            <BookingModal treatment={treatment} selectedDate={selectedDate}></BookingModal>

        </div>
    );
};

export default AvailableAppointment;