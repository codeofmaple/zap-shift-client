// src/components/CustomerReviews.jsx
import React, { useState, useRef, useEffect } from "react";
import topImg from "../../assets/customer-top.png";
import { FaQuoteLeft } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Keyboard } from "swiper/modules";

const testimonials = [
    {
        quote: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
        name: "Awlad Hossain",
        title: "Senior Product Designer",
        color: "bg-gradient-to-br from-teal-900 to-teal-800",
        accent: "#0b3b37"
    },
    {
        quote: "I saw an immediate improvement in my daily posture — the product is subtle, comfortable and works as a gentle reminder to sit up straight during long work hours.",
        name: "Rasel Ahamed",
        title: "CTO",
        color: "bg-gradient-to-br from-teal-400 to-teal-300",
        accent: "#7fa8a5"
    },
    {
        quote: "The smart vibration alerts are a game-changer. I love the small nudges that remind me to correct my posture without being distracting.",
        name: "Nasir Uddin",
        title: "CEO",
        color: "bg-gradient-to-br from-cyan-300 to-cyan-200",
        accent: "#9bbec0"
    },
    {
        quote: "Comfortable materials and an ergonomic design made it easy to use all day. I feel less tension in my neck and shoulders after a few weeks.",
        name: "Selina Ahmed",
        title: "Marketing Lead",
        color: "bg-gradient-to-br from-teal-300 to-teal-200",
        accent: "#88b6b3"
    },
    {
        quote: "Customer support was quick and helpful. The sizing guide is accurate and the adjustable straps made the fit perfect for me.",
        name: "Imran Khan",
        title: "Operations Manager",
        color: "bg-gradient-to-br from-teal-400 to-teal-300",
        accent: "#6aa5a2"
    },
];

export default function CustomerReviews() {
    const prefersReducedMotion = useReducedMotion();
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    // Handle visibility change for autoplay
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (!swiperRef.current || prefersReducedMotion) return;

            if (document.hidden) {
                swiperRef.current.autoplay?.stop();
            } else if (!isHovering) {
                swiperRef.current.autoplay?.start();
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, [prefersReducedMotion, isHovering]);

    const handleMouseEnter = () => {
        setIsHovering(true);
        swiperRef.current?.autoplay?.stop();
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        swiperRef.current?.autoplay?.start();
    };

    return (
        <section className="relative overflow-hidden">

            <div className="relative z-10">
                {/* Header */}
                <motion.div
                    initial={prefersReducedMotion ? {} : { opacity: 0, y: -20 }}
                    animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="flex justify-center mb-6">
                        <img
                            src={topImg}
                            alt=""
                            className="h-14 md:h-18 lg:h-22 transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                            aria-hidden="true"
                        />
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-teal-500">Customers Say</span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                        Real stories from people who transformed their posture and wellness journey
                    </p>

                    <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-lime-300 mx-auto rounded-full"></div>
                </motion.div>

                {/* Carousel */}
                <div
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        modules={[Autoplay, Keyboard]}
                        spaceBetween={30}
                        slidesPerView="auto"
                        centeredSlides={true}
                        loop={true}
                        speed={800}
                        autoplay={prefersReducedMotion ? false : {
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        keyboard={{ enabled: true }}
                        grabCursor={!prefersReducedMotion}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        className="!pb-12 !pt-4"
                        breakpoints={{
                            320: { slidesPerView: 1.1, spaceBetween: 20 },
                            640: { slidesPerView: 1.4, spaceBetween: 24 },
                            768: { slidesPerView: 1.8, spaceBetween: 28 },
                            1024: { slidesPerView: 2.5, spaceBetween: 32 },
                            1280: { slidesPerView: 3, spaceBetween: 36 },
                        }}
                    >
                        {testimonials.map((testimonial, index) => {
                            const isActive = index === activeIndex;

                            return (
                                <SwiperSlide key={index} className="">
                                    <motion.div
                                        initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
                                        animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="px-2 h-full"
                                    >
                                        <div
                                            className={`relative bg-white rounded-2xl p-6 md:p-7 transition-all duration-500 h-full
                                                    ${isActive
                                                    ? "shadow-2xl scale-105 border-t-4"
                                                    : "shadow-lg scale-95 opacity-90"}`}
                                            style={{
                                                borderTopColor: isActive ? testimonial.accent : 'transparent',
                                            }}
                                        >
                                            {/* Quote Icon */}
                                            <div className={`absolute -top-3 left-6 text-3xl
                                                 ${isActive ? "text-lime-400" : "text-gray-200"}`}>
                                                <FaQuoteLeft aria-hidden="true" />
                                            </div>

                                            {/* Content */}
                                            <div className="h-fit flex flex-col justify-between pt-2">
                                                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 md:mb-6 line-clamp-4">
                                                    {testimonial.quote}
                                                </p>

                                                <div className="border-t border-gray-100 pt-4 md:pt-5 flex items-center gap-3 md:gap-4">
                                                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${testimonial.color} flex-shrink-0`}></div>
                                                    <div>
                                                        <h3 className="text-gray-900 font-semibold text-sm md:text-base">
                                                            {testimonial.name}
                                                        </h3>
                                                        <p className="text-gray-500 text-xs md:text-sm">{testimonial.title}</p>
                                                        {isActive && (
                                                            <div className="flex gap-1 mt-1">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <span key={i} className="text-amber-400 text-xs">★</span>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    {/* Controls */}
                    <div className="flex justify-center items-center gap-8">
                        <button
                            aria-label="Previous testimonial"
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-lime-300 to-lime-400
                             shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus-visible:ring-3 focus-visible:ring-teal-300"
                        >
                            <FiChevronLeft className="text-gray-700 text-xl" />
                        </button>

                        <div className="flex gap-2 md:gap-3" role="tablist">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => swiperRef.current?.slideTo(index)}
                                    aria-label={`View testimonial ${index + 1}`}
                                    aria-selected={index === activeIndex}
                                    className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300
                    ${index === activeIndex
                                            ? "bg-gradient-to-r from-teal-500 to-lime-400 scale-125"
                                            : "bg-gray-300 hover:bg-gray-400"}`}
                                />
                            ))}
                        </div>

                        <button
                            aria-label="Next testimonial"
                            onClick={() => swiperRef.current?.slideNext()}
                            className="w-12  mb-4 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-lime-300 to-lime-400 shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus-visible:ring-3 focus-visible:ring-lime-300"
                        >
                            <FiChevronRight className="text-gray-900 text-xl" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}