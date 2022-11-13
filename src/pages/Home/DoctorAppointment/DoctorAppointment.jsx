import React, { useState } from 'react';
import AvailableAppointment from './AvailableAppointment';
import DoctorAppointmentCalender from './DoctorAppointmentCalender';

const DoctorAppointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <DoctorAppointmentCalender selectedDate={selectedDate} setSelectedDate={setSelectedDate}></DoctorAppointmentCalender>
            <AvailableAppointment selectedDate={selectedDate}></AvailableAppointment>
        </div>
    );
};

export default DoctorAppointment;