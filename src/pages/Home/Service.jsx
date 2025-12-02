import React from "react";
import img1 from "../../assets/live-tracking.png";
import img2 from "../../assets/safe-delivery.png";
import img3 from "../../assets/safe-delivery.png";

export default function Service() {
    const services = [
        {
            img: img1,
            title: "Live Parcel Tracking",
            desc:
                "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
        },
        {
            img: img2,
            title: "100% Safe Delivery",
            desc:
                "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
        },
        {
            img: img3,
            title: "24/7 Call Center Support",
            desc:
                "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
        },
    ];

    return (
        <div className="w-full  space-y-6">
            {services.map((s, i) => (
                <div
                    key={i}
                    className=" bg-white rounded-xl shadow-sm p-6 flex items-center gap-6 border border-gray-200"
                >
                    <img src={s.img} alt={s.title} className="w-40 object-contain" />

                    <div className="flex flex-col">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            {s.title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed max-w-3xl">{s.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}