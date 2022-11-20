import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Button from '../../components/Button';
import toast from 'react-hot-toast';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const { user } = useContext(AuthContext)

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

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success('Booking Confirm!');
                    refetch()
                }
                else {
                    toast.error('Already Booked this treatment on this date')
                }

            })
        console.log(booking)

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

                        <input type="text" name='name' placeholder="Full Name" className="input w-full  input-bordered" defaultValue={user?.displayName
                        } />
                        <input type="text" name='phone' placeholder="Phone Number" className="input w-full  input-bordered" />
                        <input type="email" name='email' placeholder="Email" className="input w-full  input-bordered" defaultValue={user?.email} disabled />
                        <Button>Submit</Button>
                    </form>
                </div>
            </div>

        </>
    );
};

export default BookingModal;