import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Pricing() {
    const [parcelType, setParcelType] = useState('');
    const [destination, setDestination] = useState('');
    const [weight, setWeight] = useState('');
    const [cost, setCost] = useState(0);

    const calculateCost = () => {
        if (!parcelType || !destination || !weight) return;
        const base = 50;
        const w = Number(weight) * 5;
        setCost(base + w);
    };

    const reset = () => {
        setParcelType('');
        setDestination('');
        setWeight('');
        setCost(0);
    };

    return (
        <div className="px-6 md:px-16 lg:px-28 py-20 w-full bg-white my-10 rounded-4xl">
            <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-[#093939]"
            >
                Pricing Calculator
            </motion.h1>

            <p className="mt-3 text-gray-600 max-w-2xl text-sm md:text-base">
                Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                From personal packages to business shipments — we deliver on time, every time.
            </p>

            <div className="w-full h-px bg-gray-200 my-10" />

            <h2 className="text-center text-2xl md:text-3xl font-bold text-[#093939]">
                Calculate Your Cost
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 items-start">
                {/* Left Form */}
                <div className="space-y-6">
                    {/* Parcel Type */}
                    <div>
                        <label className="text-sm font-semibold text-[#093939]">Parcel type</label>
                        <select
                            value={parcelType}
                            onChange={(e) => setParcelType(e.target.value)}
                            className="select select-bordered w-full bg-[#F7FAFC] focus:outline-none"
                        >
                            <option value="">Select Parcel type</option>
                            <option value="small">Small Parcel</option>
                            <option value="medium">Medium Parcel</option>
                            <option value="large">Large Parcel</option>
                        </select>
                    </div>

                    {/* Delivery Destination */}
                    <div>
                        <label className="text-sm font-semibold text-[#093939]">Delivery Destination</label>
                        <select
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            className="select select-bordered w-full bg-[#F7FAFC] focus:outline-none"
                        >
                            <option value="">Select Delivery Destination</option>
                            <option value="inside-city">Inside City</option>
                            <option value="outside-city">Outside City</option>
                        </select>
                    </div>

                    {/* Weight */}
                    <div>
                        <label className="text-sm font-semibold text-[#093939]">Weight (KG)</label>
                        <input
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            placeholder="Weight"
                            className="input input-bordered w-full bg-[#F7FAFC] focus:outline-none"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <button
                            onClick={reset}
                            className="btn bg-[#E6F0C2] border-none text-[#093939] px-8 rounded-xl"
                        >
                            Reset
                        </button>

                        <button
                            onClick={calculateCost}
                            className="btn bg-[#D5F86F] border-none text-[#093939] px-10 rounded-xl font-semibold"
                        >
                            Calculate
                        </button>
                    </div>
                </div>

                {/* Right Side Display */}
                <div className="flex items-center justify-center text-[70px] md:text-[110px] font-bold text-black">
                    {cost} Tk
                </div>
            </div>
        </div>
    );
}