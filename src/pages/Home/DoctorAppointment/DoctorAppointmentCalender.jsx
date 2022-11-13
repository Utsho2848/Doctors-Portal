import React from 'react';
import chair from '../../../assets/images/chair.png';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const DoctorAppointmentCalender = ({ selectedDate, setSelectedDate }) => {

    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse lg: ml-6">
                <img src={chair} alt="apppointment chair" className="max-w-sm rounded-lg shadow-2xl" />
                <div className='lg:mr-6'>
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    ></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default DoctorAppointmentCalender;