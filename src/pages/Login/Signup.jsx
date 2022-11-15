import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleSignin = (data) => {
        console.log(data)
    }
    return (
        <div className=' card shadow-2xl lg:my-40 w-[385px] min-h-[480px] mx-auto p-8 pb-8'>
            <h2 className='text-2xl font-semibold text-center'>Sign Up</h2>
            <form className='grid grid-cols-1' onSubmit={handleSubmit(handleSignin)}>
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
                <div className='form-control'>
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password",
                        {
                            required: "*Password is required",
                            minLength: { value: 6, message: 'Password must be 6 character or more' }
                        })} type="password" className='input input-bordered w-full' />
                    <p className='text-red-600 mt-1 text-sm'>
                        {
                            errors.password && <p role="alert">{errors.password?.message}</p>
                        }
                    </p>
                </div><br />
                <input className='btn btn-accent w-full text-white' value="Sign Up" type="submit"></input>
                <label className="label">
                    <span className="label-text">Already have an account?</span>
                    <Link to="/login" className="label-text-alt link link-hover text-primary">Sign Up</Link>
                </label>
                <h2 className='text-2xl font-semibold divider'>OR</h2>
                <button className='btn btn-outline btn-primary'>Continue With Google</button>

            </form>
        </div>
    );
};

export default Signup;