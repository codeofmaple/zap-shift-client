import React from "react";
import delivaryVan from "../../assets/bookingIcon.png";

const Process = () => {
    const steps = [
        {
            title: "Booking Pick & Drop",
            desc: "From personal packages to business shipments — we deliver on time, every time.",
        },
        {
            title: "Cash On Delivery",
            desc: "From personal packages to business shipments — we deliver on time, every time.",
        },
        {
            title: "Delivery Hub",
            desc: "From personal packages to business shipments — we deliver on time, every time.",
        },
        {
            title: "Booking SME & Corporate",
            desc: "From personal packages to business shipments — we deliver on time, every time.",
        },
    ];

    return (
        <div className="">
            {/* Section Title */}
            <h2 className="text-[42px] font-bold  text-black mb-10">How it Works</h2>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((item, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                        <img src={delivaryVan} alt="icon" className="w-16 h-16 mb-6" />

                        <h3 className="text-[24px] font-semibold  text-black mb-3">{item.title}</h3>

                        <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Process;