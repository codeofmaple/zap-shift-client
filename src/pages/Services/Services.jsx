import React from 'react';
import { motion } from 'framer-motion';
import { FaTruckFast, FaHeadset, FaChartLine, FaBoxOpen } from 'react-icons/fa6';
import { Slide } from 'react-awesome-reveal';
import { FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa';


const ACCENT_COLOR = '#CAEB66';

// Service data structure
const services = [
    {
        icon: FaTruckFast,
        title: "Express Priority Delivery",
        description: "Guaranteed next-day and two-day delivery options across all major routes. We prioritize speed without compromising safety or reliability.",
        delay: 0,
    },
    {
        icon: FaMapMarkerAlt,
        title: "Real-Time GPS Tracking",
        description: "Access minute-by-minute tracking updates on a live map interface. Know exactly where your package is, from pickup to doorstep.",
        delay: 0.1,
    },
    {
        icon: FaShieldAlt,
        title: "Insured & Secured Shipping",
        description: "Every shipment is protected by comprehensive insurance and handled with the highest security protocols. Peace of mind is standard.",
        delay: 0.2,
    },
    {
        icon: FaBoxOpen,
        title: "Custom Packaging Solutions",
        description: "Specialized crating and packaging for fragile, oversized, or high-value items. We ensure your goods are protected against all transit risks.",
        delay: 0.3,
    },
    {
        icon: FaChartLine,
        title: "E-Commerce Logistics API",
        description: "Seamlessly integrate our delivery and tracking services into your online store or platform using our robust and flexible API.",
        delay: 0.4,
    },
    {
        icon: FaHeadset,
        title: "24/7 Dedicated Support",
        description: "Access our expert support team anytime, day or night. Get immediate assistance with tracking, scheduling, or any delivery query.",
        delay: 0.5,
    },
];

// Framer Motion
const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
    return (
        // Motion.div applies the animation variants
        <motion.div
            className="p-8 bg-[#f0f3f6] rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            variants={cardVariants}
            initial="hidden"
            // Use whileInView to trigger animation on scroll
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: delay }}
        >
            <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: ACCENT_COLOR }}
            >
                <Icon className="text-white text-2xl" />
            </div>
            <h4 className="text-xl font-semibold mb-3 text-black">
                {title}
            </h4>
            <p className="text-gray-600">
                {description}
            </p>
        </motion.div>
    );
};


const Services = () => {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 my-10 rounded-4xl">
            <div className="max-w-7xl mx-auto">
                <div>
                </div>

                {/* --- Section Header --- */}
                <Slide triggerOnce duration={1000} direction="up">
                    <header className="text-center mb-16">
                        <p className="text-sm font-semibold uppercase tracking-wider text-lime-400">
                            Our Capabilities
                        </p>
                        <h2 className="text-5xl font-extrabold mt-2 text-black">
                            Solutions Built for Scale
                        </h2>
                        <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
                            We offer a full suite of tailored logistics services designed to meet the demands of modern commerce and personal delivery needs, all backed by cutting-edge technology.
                        </p>
                    </header>
                </Slide>

                {/* --- Services Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.title}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            delay={service.delay}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Services;