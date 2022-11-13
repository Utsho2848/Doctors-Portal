import React from 'react';
import BookingModal from './BookingModal';

const AvailableAppointmentCard = ({ option, setTreatment }) => {

    const { _id, name, slots } = option
    return (
        <div className="card shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-primary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <div className="card-actions">

                    <label onClick={() => setTreatment(option)} htmlFor={`booking-modal-${_id}`} className="btn bg-gradient-to-r from-primary to-secondary text-white border-none font-bold uppercase">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointmentCard;