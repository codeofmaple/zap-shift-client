import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const TrackingUpdatesCard = ({ trackingUpdates }) => (
    <div className="p-8 rounded-3xl shadow-lg h-full bg-[#f0f3f6]">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Tracking Updates</h3>

        <div className="relative">
            {/* Vertical line connecting the steps, using the same light color as the checks */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200" />

            {trackingUpdates.map((update, index) => (
                <div key={index} className="relative flex items-start py-3">
                    {/* Checkmark icon, positioned over the vertical line */}
                    <div className="z-10 flex items-center justify-center mr-4">
                        <FaCheckCircle className="text-xl text-primary" />
                    </div>

                    {/* Update details */}
                    <div>
                        <p className="text-sm font-medium text-gray-500">{update.date}</p>
                        <p className="text-xs text-gray-500 mb-1">{update.time}</p>
                        <p className="text-gray-700">{update.message}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default TrackingUpdatesCard;