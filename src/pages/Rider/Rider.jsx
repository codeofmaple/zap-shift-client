import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import riderImg from "../../assets/agent-pending.png";

const Rider = () => {
    return (
        <div className="w-full py-10 ">
            <div className="max-w-7xl mx-auto bg-white py-14 px-4  lg:px-22 rounded-4xl">
                {/* Top Title Section */}
                <div className="lg:text-left text-center">
                    <h1 className="text-5xl font-bold text-[#0a3d3a]">Be a Rider</h1>
                    <p className="text-gray-600 max-w-3xl mt-4 leading-relaxed">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero
                        hassle. From personal packages to business shipments — we deliver on
                        time, every time.
                    </p>
                </div>

                <hr className="my-10 border-gray-200" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    {/* Right Rider Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex justify-center self-end lg:hidden"
                    >
                        <img
                            src={riderImg}
                            alt="Rider"
                            className="w-11/12 h-auto select-none"
                        />
                    </motion.div>

                    {/* Left Form */}
                    <form className="space-y-8">
                        <h2 className="text-2xl font-semibold text-[#0a3d3a] lg:text-left text-center">
                            Tell us about yourself
                        </h2>

                        {/* Name + Age */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="font-medium">Your Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full rounded-xl"
                                />
                            </div>

                            <div>
                                <label className="font-medium">Your age</label>
                                <input
                                    type="text"
                                    placeholder="Your age"
                                    className="input input-bordered w-full rounded-xl"
                                />
                            </div>
                        </div>

                        {/* Email + District */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="font-medium">Your Email</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full rounded-xl"
                                />
                            </div>

                            <div>
                                <label className="font-medium">Your District</label>
                                <div className="relative">
                                    <select className="select select-bordered w-full rounded-xl appearance-none">
                                        <option>Select your District</option>
                                        <option>Dhaka</option>
                                        <option>Chittagong</option>
                                        <option>Rajshahi</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* NID + Contact */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="font-medium">NID No</label>
                                <input
                                    type="text"
                                    placeholder="NID"
                                    className="input input-bordered w-full rounded-xl"
                                />
                            </div>

                            <div>
                                <label className="font-medium">Contact</label>
                                <input
                                    type="text"
                                    placeholder="Contact"
                                    className="input input-bordered w-full rounded-xl"
                                />
                            </div>
                        </div>

                        {/* Wire House */}
                        <div>
                            <label className="font-medium">Which wire-house you want to work?</label>
                            <div className="relative">
                                <select className="select select-bordered w-full rounded-xl appearance-none">
                                    <option>Select wire-house</option>
                                    <option>Dhaka Warehouse</option>
                                    <option>Uttara Warehouse</option>
                                </select>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button className="btn btn-primary  w-full rounded-xl text-lg h-12 text-black">
                            Submit
                        </button>
                    </form>

                    {/* Right Rider Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="lg:flex justify-center self-end hidden"
                    >
                        <img
                            src={riderImg}
                            alt="Rider"
                            className="w-11/12 h-auto select-none"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Rider;
