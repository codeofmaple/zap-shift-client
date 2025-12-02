import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

// paragraphs for each section
const aboutContent = {
    Story: [
        `We started with a simple, yet powerful, promise: to make parcel delivery fast, reliable, and entirely stress-free. In a world where logistics often felt overly complicated and unpredictable, our founders envisioned a service built on transparency and customer-first values. From day one, this core principle guided every decision, every partnership, and every technological investment we made.`,

        `Over the years, our commitment to innovation has allowed us to revolutionize the tracking experience, providing customers with real-time, minute-by-minute updates that instill genuine confidence. We streamlined our processes for maximum efficiency, ensuring that whether it’s a single personal gift or a large, time-sensitive business shipment, the handling and transit process is always world-class.`,

        `Today, that simple promise has made us a trusted partner for thousands globally. Our operational success is a direct result of our dedication to consistency: we don't just aim to deliver on time; we are committed to delivering on time, every time. This unwavering reliability is the cornerstone of our brand and the foundation of our ongoing relationship with our valued customers.`,
    ],

    Mission: [
        `Our mission is to redefine the standards of modern logistics by blending cutting-edge technology with deeply human-centric customer service. We aim to move beyond simple transport by providing a service ecosystem that offers complete predictability and peace of mind from pickup to final delivery.`,

        `We strive to be the most customer-centric delivery service in the market. This means actively minimizing delivery friction, proactively resolving potential issues before they become delays, and ensuring our support team is always accessible and knowledgeable. Our goal is to make parcel delivery the easiest part of our customers' day.`,

        `Furthermore, we are dedicated to sustainability. We continuously invest in green logistics solutions, optimize our routes using advanced AI, and explore eco-friendly packaging options. Our commitment extends beyond efficient delivery; it includes a responsibility to the planet and the communities we serve.`,
    ],

    Success: [
        `Our journey from a local startup to a nationally recognized logistics provider is a compelling testament to the power of commitment and consistency. We have managed to scale our operations exponentially while rigorously maintaining an industry-leading standard: a consistent 99.8% on-time delivery rate across all service types.`,

        `Our growth milestones are directly tied to the expanding trust of our diverse clientele. We have successfully executed complex logistics operations for e-commerce giants, small family businesses, and individual senders alike. This broad acceptance validates our operational model and motivates us to pursue new challenges and expand our reach responsibly.`,

        `Looking ahead, success is not just about volume, but about setting new benchmarks for quality and innovation. We regularly win industry awards for service excellence and technological integration, markers that solidify our position as a leader pioneering the next generation of reliable, secure, and transparent parcel delivery solutions.`,
    ],

    'Team & Others': [
        `The true backbone of our operational excellence is our diverse and deeply dedicated team. We are a collection of expert logisticians, innovative software developers, data scientists, and highly trained customer support specialists, all united by a shared passion for delivering exceptional service.`,

        `We foster a vibrant culture of continuous learning, mutual respect, and proactive ownership. Every team member, from the warehouse floor to the executive suite, is empowered to identify inefficiencies and propose solutions. This decentralized approach to problem-solving ensures we are agile, responsive, and always improving the user experience.`,

        `Beyond our internal staff, we maintain robust partnerships with local delivery heroes and technology firms. This extended network allows us to provide localized expertise with global standards, ensuring that our commitment to speed and reliability is consistently met, regardless of the destination or complexity of the shipment.`,
    ],
};

const About = () => {
    const [activeTab, setActiveTab] = useState('Story');
    const tabs = ['Story', 'Mission', 'Success', 'Team & Others'];

    return (
        <div className=" px-4 sm:px-6 lg:px-8 py-16 bg-white my-10 rounded-4xl">
            {/* --- Heading Section --- */}
            <div className="mb-10">
                <h2 className="text-5xl font-semibold text-black mb-4">
                    About Us
                </h2>
                <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — **we deliver on time, every time.**
                </p>
            </div>

            {/* --- Tabs Navigation --- */}
            <div className="flex border-b border-gray-200 mb-8">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`
              mr-8 pb-3 text-xl font-medium transition-colors duration-200
              ${activeTab === tab
                                ? 'text-gray-900 border-b-2 border-gray-900'
                                : 'text-gray-500 hover:text-gray-700'
                            }
            `}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* --- Content Area --- */}
            <div className="mt-8">
                <Fade key={activeTab} triggerOnce>
                    {aboutContent[activeTab].map((paragraph, index) => (
                        <p
                            key={index}
                            className={`text-gray-700 text-lg leading-relaxed ${index > 0 ? 'mt-5' : ''}`}
                        >
                            {paragraph}
                        </p>
                    ))}
                </Fade>
            </div>
        </div>
    );
};

export default About;