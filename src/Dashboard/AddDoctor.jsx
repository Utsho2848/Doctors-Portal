import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import Loading from '../pages/components/Loading';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

/* image hosting server: imgbb a image rakhbo */

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    // console.log(imageHostKey)
    const navigate = useNavigate()

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })
    const handleAddDoctor = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: imgData.data.url
                    }
                    fetch('http://localhost:5000/doctors', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.name} is added as ${data.specialty} successfully!`)
                            navigate('/dashboard/manageDoctors')
                        })
                }
            })
            .catch(err => console.error(err))
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">Add Doctors</h2>

            <form className='grid grid-cols-1' onSubmit={handleSubmit(handleAddDoctor)}>
                <div className='form-control'>
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input {...register("name", { required: "*Name is required" })} type="text" className='input input-bordered w-full' />
                    <p className='text-red-600 mt-1 text-sm'>
                        {
                            errors.name && <p role="alert">{errors.name?.message}</p>
                        }
                    </p>
                </div>
                <div className='form-control'>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", { required: "*Email is required" })} type="email" className='input input-bordered w-full' />
                    <p className='text-red-600 mt-1 text-sm'>
                        {
                            errors.email && <p role="alert">{errors.email?.message}</p>
                        }
                    </p>
                </div>
                <div
                    {...register("specialty")}
                    className='form-control'>
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select className="select select-bordered w-full">
                        {
                            specialties.map(specialty => <option key={specialty._id} value={specialty.name} className='selected'>{specialty.name}</option>)
                        }

                    </select>

                </div>

                <div className='form-control'>
                    <label className="label">
                        <span className="label-text">Image Upload</span>
                    </label>
                    <input {...register("image", { required: "*Image is required" })} type="file" className='input input-bordered w-full' />
                    <p className='text-red-600 mt-1 text-sm'>
                        {
                            errors.img && <p role="alert">{errors.img?.message}</p>
                        }
                    </p>
                </div>
                <br />
                <input className='btn btn-accent w-full text-white' value="Add doctor" type="submit"></input>
            </form>
        </div>
    );
};

export default AddDoctor;