import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
    const { _id, name } = treatment;
    return (
        <>
            <input type="checkbox" id={`booking-modal-${_id}`} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor={`booking-modal-${_id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p>{format(selectedDate, 'PP')}</p>
                </div>
            </div>

        </>
    );
};

export default BookingModal;