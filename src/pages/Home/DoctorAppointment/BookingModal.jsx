import { format } from 'date-fns';
import React from 'react';
import Button from '../../components/Button';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const date = form.date.value
        const time = form.time.value
        const patientName = form.name.value
        const phone = form.phone.value
        const email = form.email.value

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: patientName,
            phone,
            email,
            time
        }
        console.log(booking)
        setTreatment(null)
    }
    return (
        <>
            <input type="checkbox" id={`booking-modal-${_id}`} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor={`booking-modal-${_id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p></p>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                        <input name='date' type="text" placeholder='date' disabled className="input input-bordered input-ghost w-full" defaultValue={`${format(selectedDate, 'PP')}`} />
                        <select name='time' className='select select-bordered w-full'>

                            {
                                slots.map((slot, index) => <option key={index} selected value={slot}>{slot}</option>)
                            }

                        </select>

                        <input type="text" name='name' placeholder="Full Name" className="input w-full  input-bordered" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input w-full  input-bordered" />
                        <input type="email" name='email' placeholder="Email" className="input w-full  input-bordered" />
                        <Button>Submit</Button>
                    </form>
                </div>
            </div>

        </>
    );
};

export default BookingModal;