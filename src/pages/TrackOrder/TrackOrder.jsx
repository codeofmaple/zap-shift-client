import React, { useState } from 'react';
import { FaCheckCircle, FaSearch } from 'react-icons/fa';
import ProductDetailsCard from './ProductDetailsCard';
import TrackingUpdatesCard from './TrackingUpdatesCard';

// Sample data to display the product details and tracking updates
const sampleTrackingData = {
    id: 'M897761075',
    invoice: '24227',
    trackingCode: 'OUWJVEWX29823Q7HSHSSYY7',
    name: 'Zahid Hossain',
    address: 'Madrasha Road, Chandpur sadar, Chandpur, Chandpur, 3600, BD',
    phone: '01780448866',
    approved: 'N/A',
    weight: 'KG',
    cod: 'B D',
    status: 'Pending',
};

// Sample data for the vertical timeline/stepper
const trackingUpdates = [
    { date: 'Jun 02, 2025', time: '12:21 am', message: 'Assigned to rider' },
    { date: 'Jun 02, 2025', time: '12:21 am', message: 'Assigned to rider' },
    { date: 'Jun 02, 2025', time: '12:21 am', message: 'Assigned to rider' },
    { date: 'Jun 02, 2025', time: '12:21 am', message: 'Assigned to rider' },
    { date: 'Jun 02, 2025', time: '12:21 am', message: 'Assigned to rider' },
    { date: 'Jun 02, 2025', time: '12:21 am', message: 'Assigned to rider' },
    { date: 'Jun 02, 2025', time: '12:21 am', message: 'Assigned to rider' },
];

const PRIMARY_GREEN = '#8BC34A';

const TrackOrder = () => {
    const [trackingCode, setTrackingCode] = useState('');

    return (
        <div className="min-h-screen bg-white p-4 sm:p-8 my-10 rounded-4xl">
            <div className="max-w-7xl mx-auto">
                {/* --- Header Section --- */}
                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                        Track Your Consignment
                    </h1>
                    <p className="text-gray-500 text-lg">
                        Now you can easily track your consignment
                    </p>
                </div>

                {/* --- Search Bar --- */}
                <div className="flex items-center mb-12 max-w-xl">
                    <div className="relative flex-grow">
                        <input
                            type="text"
                            value={trackingCode}
                            onChange={(e) => setTrackingCode(e.target.value)}
                            placeholder="Search tracking code here"
                            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:border-lime-500 transition duration-150 shadow-sm"
                        />
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                    </div>
                    <button
                        className="ml-3 px-6 py-3 text-white font-semibold rounded-full shadow-md bg-primary hover:scale-102 active:scale-100 transition duration-150"
                        onClick={() => console.log('Tracking code submitted:', trackingCode)}
                    >
                        Search
                    </button>
                </div>

                {/* --- Content Cards--- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ProductDetailsCard data={sampleTrackingData} />
                    <TrackingUpdatesCard trackingUpdates={trackingUpdates} />
                </div>
            </div>
        </div>
    );
};

export default TrackOrder;