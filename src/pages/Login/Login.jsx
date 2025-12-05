import React from 'react';
import rightImg from '../../assets/authImage.png'
import { Link } from 'react-router';
// import { useForm } from 'react-hook-form';



export default function Login() {

    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    // } = useForm();



    return (
        <div className="min-h-screen my-10 rounded-4xl grid grid-cols-1 md:grid-cols-2 bg-[#FBFEF5]">
            {/* Left Side */}
            <div className="flex flex-col justify-center px-10 md:px-24">
                <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
                <p className="mb-8 text-gray-600">Login with ZapShift</p>

                <form className="space-y-5 max-w-md">
                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            className="input input-bordered w-full bg-white"
                            placeholder="Email"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Password</label>
                        <input
                            type="password"
                            className="input input-bordered w-full bg-white"
                            placeholder="Password"
                        />
                    </div>

                    <div>
                        <a className="text-sm text-gray-500 hover:underline cursor-pointer">Forget Password?</a>
                    </div>

                    <button className="btn w-full bg-[#C9E65B] text-black border-none hover:bg-[#b8d953]">Login</button>

                    <p className="text-sm text-gray-600">
                        Don’t have any account?{' '}
                        <Link to='/register' className="text-[#6CA72C] font-semibold cursor-pointer">Register</Link>
                    </p>

                    <div className="text-center text-gray-500">Or</div>

                    <button className="btn w-full bg-[#E9ECEF] text-black border-none flex items-center gap-2">
                        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5" />
                        Login with google
                    </button>
                </form>
            </div>

            {/* Right Side Illustration */}
            <div className="hidden md:flex items-center justify-center p-10">
                <img src={rightImg} className="w-4/5" />
            </div>
        </div>
    );
}
