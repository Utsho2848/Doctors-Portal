import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link,useLocation,useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';


const Login = () => {
    const { logIn } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('')
    const location= useLocation()
    const navigate=useNavigate()

    const from=location.state?.from?.pathname || '/'

    const handleLogin = (data) => {
        setLoginError('')
        console.log(data)
        const email = data.email;
        const password = data.password;
        logIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                navigate(from,{replace:true})
            })
            .catch(err => {
                setLoginError(err.message)
                console.error(err)
            })
    }
    return (
        <div className=' card shadow-2xl lg:my-40 w-[385px] min-h-[480px] mx-auto p-8 pb-8'>
            <h2 className='text-2xl font-semibold text-center'>Login</h2>
            <form className='grid grid-cols-1' onSubmit={handleSubmit(handleLogin)}>
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
                    <div>
                        {
                            loginError && <p className='text-red-600 mt-1 text-sm'>{loginError}</p>
                        }
                    </div>
                </div><br />
                <input className='btn btn-accent w-full text-white' value="Login" type="submit"></input>
                <label className="label">
                    <span className="label-text">New to Doctors Portal</span>
                    <Link to="/signup" className="label-text-alt link link-hover text-primary">Create new Account</Link>
                </label>
                <h2 className='text-2xl font-semibold divider'>OR</h2>
                <button className='btn btn-outline btn-primary'>Continue With Google</button>

            </form>
        </div>
    );
};

export default Login;