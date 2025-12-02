import React from "react";
import serviceImg from "../../assets/service.png";

export default function OurServices() {
    const data = [
        {
            title: "Express & Standard Delivery",
            desc: `We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.`,
        },
        {
            title: "Nationwide Delivery",
            desc: `We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.`,
            highlight: true,
        },
        {
            title: "Fulfillment Solution",
            desc: `We also offer customized service with inventory management support, online order processing, packaging, and after sales support.`,
        },
        {
            title: "Cash on Home Delivery",
            desc: `100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.`,
        },
        {
            title: "Corporate Service / Contract In Logistics",
            desc: `Customized corporate services which includes warehouse and inventory management support.`,
        },
        {
            title: "Parcel Return",
            desc: `Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.`,
        },
    ];

    return (
        <div className="w-full bg-[#053b3f] py-16 px-4 md:px-10 lg:px-24 text-white rounded-4xl">
            <h2 className="text-center text-4xl font-bold mb-3">Our Services</h2>
            <p className="text-center max-w-3xl mx-auto text-gray-300 mb-12">
                Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal
                packages to business shipments — we deliver on time, every time.
            </p>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`rounded-2xl p-8 bg-white text-center shadow-sm transition-all duration-300 hover:bg-primary cursor-pointer ${item.highlight ? "bg-primary" : ""
                            }`}
                    >
                        <div className="flex justify-center mb-4">
                            <img src={serviceImg} alt="service icon" className="w-14 h-14" />
                        </div>

                        <h3
                            className={`text-xl font-semibold mb-3 text-[#053b3f] ${item.highlight ? "text-[#053b3f]" : ""
                                }`}
                        >
                            {item.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}