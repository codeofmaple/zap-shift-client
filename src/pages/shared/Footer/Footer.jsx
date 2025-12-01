import React from "react";
import { FaLinkedinIn, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import Logo from "../../../components/logo";

const SocialIcon = ({ label, children, bg = "bg-white" }) => {
    return (
        <button
            aria-label={label}
            title={label}
            className={`rounded-full flex items-center justify-center shadow-md transform hover:scale-105 transition-transform
                       w-10 h-10 sm:w-12 sm:h-12 ${bg}`}
        >
            <span className="text-base sm:text-lg">{children}</span>
        </button>
    );
};

export default function Footer() {
    return (
        <footer className="bg-[#0f0f0f] text-gray-200 rounded-[28px] sm:rounded-[40px] px-4 sm:px-12 py-8 sm:py-12">
            <div className="max-w-6xl mx-auto text-center">
                {/* Logo & Tagline */}
                <div className="flex flex-col items-center gap-3 sm:gap-4">
                    <div className="w-28 sm:w-40">
                        <Logo />
                    </div>

                    <p className="max-w-xl sm:max-w-3xl text-center text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base px-2">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal
                        packages to business shipments — we deliver on time, every time.
                    </p>
                </div>

                {/* dashed divider */}
                <div className="my-6 sm:my-8"></div>

                {/* Nav links */}
                <nav className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-10 text-gray-200 mb-6 sm:mb-8 px-3">
                    <a href="#services" className="hover:text-white transition text-sm sm:text-base">Services</a>
                    <a href="#coverage" className="hover:text-white transition text-sm sm:text-base">Coverage</a>
                    <a href="#about" className="hover:text-white transition text-sm sm:text-base">About Us</a>
                    <a href="#pricing" className="hover:text-white transition text-sm sm:text-base">Pricing</a>
                    <a href="#blog" className="hover:text-white transition text-sm sm:text-base">Blog</a>
                    <a href="#contact" className="hover:text-white transition text-sm sm:text-base">Contact</a>
                </nav>

                <div className="mb-6 sm:mb-8"></div>

                {/* social icons */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                    <SocialIcon label="LinkedIn" bg="bg-white">
                        <FaLinkedinIn className="text-[#0b6aa3]" />
                    </SocialIcon>

                    {/* X / Twitter style circle: white circle with black X */}
                    <SocialIcon label="X / Twitter" bg="bg-white">
                        <FaTwitter className="text-black" />
                    </SocialIcon>

                    <SocialIcon label="Facebook" bg="bg-white">
                        <FaFacebookF className="text-[#2b66d9]" />
                    </SocialIcon>

                    <SocialIcon label="YouTube" bg="bg-white">
                        <FaYoutube className="text-[#e73d3d]" />
                    </SocialIcon>
                </div>
            </div>
        </footer>
    );
}
