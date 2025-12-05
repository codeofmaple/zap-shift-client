import React from 'react';
import rightImg from '../../assets/authImage.png';
import Logo from '../../components/logo';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';

export default function Register() {

    const { createUser, updateUserProfile, signInWithGoogle, loading } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state || '/'

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const errorMessageEmail = "Please enter a valid email address (e.g., name@domain.com)";

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async data => {
        const { name, email, password } = data

        try {
            //1. User Registration
            const result = await createUser(email, password)

            // 2. Generate image url from selected file

            //3. Save username & profile photo
            await updateUserProfile(
                name,
                'https://lh3.googleusercontent.com/a/ACg8ocKUMU3XIX-JSUB80Gj_bYIWfYudpibgdwZE1xqmAGxHASgdvCZZ=s96-c'
            )

            navigate(from, { replace: true })
            toast.success('Signup Successful')
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }



    // Handle Google Signin
    const handleGoogleSignIn = async () => {
        try {
            //User Registration using google
            await signInWithGoogle()

            Navigate(from, { replace: true })
            toast.success('Signup Successful')
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }

    return (
        <div className="min-h-screen my-10 rounded-4xl grid grid-cols-1 lg:grid-cols-2 bg-[#FAFDF3]">
            {/* Left Section */}
            <div className="px-10 lg:px-24 flex flex-col justify-start">
                <h1 className="text-4xl font-bold mt-16">Create an Account</h1>
                <p className="mt-2 text-gray-600">Register with ZapShift</p>

                {/* <div className="flex items-center justify-center mt-6">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center shadow-sm">
                        <i className="ri-user-line text-3xl text-gray-500"></i>
                    </div>
                </div> */}

                {/* Form */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-8 space-y-5 max-w-md">
                    <div>
                        <label className="text-sm font-medium">Name</label>
                        <input
                            name='name'
                            type="text"
                            placeholder="Name"
                            className="input input-bordered w-full bg-white mt-1"
                            {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && <p
                            className=' text-red-500 mt-1 text-xs'>{errors.name.message}</p>}

                    </div>

                    <div>
                        <label className="text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name='email'
                            placeholder="Email"
                            className="input input-bordered w-full bg-white mt-1"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: emailRegex,
                                    message: errorMessageEmail

                                }
                            })}
                        />
                        {errors.email && <p className=' text-red-500 mt-1 text-xs'>{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="text-sm font-medium">Password</label>
                        <input
                            type="password"
                            name='password'
                            placeholder="Password"
                            className="input input-bordered w-full bg-white mt-1"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters'
                                }
                            })}
                        />
                        {errors.password && <p className=' text-red-500 mt-1 text-xs'>{errors.password.message}</p>}
                    </div>


                    <button className="btn bg-[#C7E65A] text-black font-semibold w-full border-none mt-2">
                        Register
                    </button>
                </form>

                <p className="mt-4 text-sm text-gray-700">
                    Already have an account?{' '}
                    <Link to="/login" className="text-[#7AA01C] font-medium">Login</Link>
                </p>

                <div className="text-center mt-3 text-gray-500 text-sm">Or</div>

                <button
                    onClick={handleGoogleSignIn}
                    className="btn w-full mt-4 bg-gray-100 border-none flex items-center justify-center gap-2">
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5" />
                    Register with Google
                </button>
            </div>

            {/* Right Image */}
            <div className="hidden lg:flex items-center justify-center bg-[#F8FCEE]">
                <img src={rightImg} className="w-4/5" />
            </div>
        </div>
    );
}
