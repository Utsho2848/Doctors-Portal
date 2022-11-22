import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const Signup = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signUpError, setSignUpError] = useState('')

    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)

    const navigate = useNavigate()

    if (token) {
        navigate('/')
    }


    const handleSignin = (data) => {
        setSignUpError('')
        const email = data.email;
        const password = data.password;
        // const name = data.name;
        createUser(email, password)
            .then(res => {
                const user = res.user;
                toast('User Created Successfully!')
                const userInfo = {
                    displayName: data.name,
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => {
                console.error(err)
                setSignUpError(err.message)
            })
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('save user', data)
                setCreatedUserEmail(email);

            })
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
                            minLength: { value: 6, message: 'Password must be 6 character or more' },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must have uppercase, number and special characters" }
                        })} type="password" className='input input-bordered w-full' />
                    <p className='text-red-600 mt-1 text-sm'>
                        {
                            errors.password && <p role="alert">{errors.password?.message}</p>
                        }
                    </p>
                    <div>
                        {
                            signUpError && <p className='text-red-600 mt-1 text-sm' role="alert">{signUpError.slice(17, -2)}</p>
                        }
                    </div>
                </div><br />
                <input className='btn btn-accent w-full text-white' value="Sign Up" type="submit"></input>
                <label className="label">
                    <span className="label-text">Already have an account?</span>
                    <Link to="/login" className="label-text-alt link link-hover text-primary">Login</Link>
                </label>
                <h2 className='text-2xl font-semibold divider'>OR</h2>
                <button className='btn btn-outline btn-primary'>Continue With Google</button>

            </form>
        </div>
    );
};

export default Signup;