import React from 'react';

const ProductDetailsCard = ({ data }) => {
    const DetailItem = ({ label, value, isSpecial = false }) => (
        <div className="mb-2">
            <span className={`text-gray-900 ${isSpecial ? 'font-bold' : ''}`}>{label}:</span>
            <span className="ml-2 text-gray-700">{value}</span>
        </div>
    );

    return (
        <div className="p-8 rounded-3xl shadow-lg bg-[#f0f3f6]  h-full">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Product details</h3>

            {/* Product Information */}
            <div className="text-sm border-b pb-4 mb-4">
                <p className="text-xs text-gray-500 mb-1">May 31, 2025 03:41 pm</p>
                <DetailItem label="Id" value={data.id} />
                <DetailItem label="Invoice" value={data.invoice} />
                <DetailItem label="Tracking Code" value={data.trackingCode} isSpecial />
            </div>

            {/* Receiver Information */}
            <div className="text-sm border-b pb-4 mb-4">
                <DetailItem label="Name" value={data.name} isSpecial />
                <div className="text-gray-900 font-bold mb-1">Address:</div>
                <p className="text-gray-700 ml-4">{data.address}</p>
                <DetailItem label="Phone Number" value={data.phone} isSpecial />
            </div>

            {/* Shipment Details */}
            <div className="text-sm">
                <DetailItem label="Approved" value={data.approved} />
                <DetailItem label="Weight" value={data.weight} />
                <DetailItem label="COD" value={data.cod} />
                <div className="mt-2">
                    <span className="text-gray-900 font-bold">Status:</span>
                    <span className="ml-2 text-yellow-600 font-medium">{data.status}</span>
                </div>
            </div>
        </div>
    );
};
export default ProductDetailsCard;