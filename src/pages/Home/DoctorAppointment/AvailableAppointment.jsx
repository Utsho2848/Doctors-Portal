import React, { useState } from 'react';
import { format } from 'date-fns';
import AvailableAppointmentCard from './AvailableAppointmentCard';
import BookingModal from './BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/Loading';


const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null)
    const date = format(selectedDate, 'PP')
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`http://localhost:5000/appointment-options?date=${date}`)
            .then(res => res.json())

    })
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='lg:mt-24 mx-12'>
            <p className='text-primary font-bold text-lg text-center'>Available Appointment on {format(selectedDate, 'PP')}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                {
                    appointmentOptions.map(option => <AvailableAppointmentCard key={option._id} option={option} setTreatment={setTreatment}></AvailableAppointmentCard>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            }

        </div>
    );
};

export default AvailableAppointment;